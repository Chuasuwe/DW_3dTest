(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Xh(i){const e=Object.create(null);for(const t of i.split(","))e[t]=1;return t=>t in e}const kt={},zo=[],er=()=>{},Ex=()=>!1,hu=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&(i.charCodeAt(2)>122||i.charCodeAt(2)<97),Yh=i=>i.startsWith("onUpdate:"),$n=Object.assign,qh=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},bx=Object.prototype.hasOwnProperty,Rt=(i,e)=>bx.call(i,e),ot=Array.isArray,Ho=i=>du(i)==="[object Map]",i_=i=>du(i)==="[object Set]",lt=i=>typeof i=="function",un=i=>typeof i=="string",_s=i=>typeof i=="symbol",Jt=i=>i!==null&&typeof i=="object",r_=i=>(Jt(i)||lt(i))&&lt(i.then)&&lt(i.catch),s_=Object.prototype.toString,du=i=>s_.call(i),Ax=i=>du(i).slice(8,-1),o_=i=>du(i)==="[object Object]",Kh=i=>un(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,Ya=Xh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),pu=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},wx=/-(\w)/g,hs=pu(i=>i.replace(wx,(e,t)=>t?t.toUpperCase():"")),Rx=/\B([A-Z])/g,oo=pu(i=>i.replace(Rx,"-$1").toLowerCase()),a_=pu(i=>i.charAt(0).toUpperCase()+i.slice(1)),Du=pu(i=>i?`on${a_(i)}`:""),ss=(i,e)=>!Object.is(i,e),Uu=(i,...e)=>{for(let t=0;t<i.length;t++)i[t](...e)},Wf=(i,e,t,n=!1)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,writable:n,value:t})},Cx=i=>{const e=parseFloat(i);return isNaN(e)?i:e};let np;const mu=()=>np||(np=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function jh(i){if(ot(i)){const e={};for(let t=0;t<i.length;t++){const n=i[t],r=un(n)?Dx(n):jh(n);if(r)for(const s in r)e[s]=r[s]}return e}else if(un(i)||Jt(i))return i}const Px=/;(?![^(]*\))/g,Lx=/:([^]+)/,Ix=/\/\*[^]*?\*\//g;function Dx(i){const e={};return i.replace(Ix,"").split(Px).forEach(t=>{if(t){const n=t.split(Lx);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function gu(i){let e="";if(un(i))e=i;else if(ot(i))for(let t=0;t<i.length;t++){const n=gu(i[t]);n&&(e+=n+" ")}else if(Jt(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}const Ux="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Nx=Xh(Ux);function l_(i){return!!i||i===""}const c_=i=>!!(i&&i.__v_isRef===!0),Ac=i=>un(i)?i:i==null?"":ot(i)||Jt(i)&&(i.toString===s_||!lt(i.toString))?c_(i)?Ac(i.value):JSON.stringify(i,u_,2):String(i),u_=(i,e)=>c_(e)?u_(i,e.value):Ho(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[n,r],s)=>(t[Nu(n,s)+" =>"]=r,t),{})}:i_(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Nu(t))}:_s(e)?Nu(e):Jt(e)&&!ot(e)&&!o_(e)?String(e):e,Nu=(i,e="")=>{var t;return _s(i)?`Symbol(${(t=i.description)!=null?t:e})`:i};/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Zn;class Ox{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Zn,!e&&Zn&&(this.index=(Zn.scopes||(Zn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Zn;try{return Zn=this,e()}finally{Zn=t}}}on(){++this._on===1&&(this.prevScope=Zn,Zn=this)}off(){this._on>0&&--this._on===0&&(Zn=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Fx(){return Zn}let Bt;const Ou=new WeakSet;class f_{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Zn&&Zn.active&&Zn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ou.has(this)&&(Ou.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||d_(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ip(this),p_(this);const e=Bt,t=ki;Bt=this,ki=!0;try{return this.fn()}finally{m_(this),Bt=e,ki=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Jh(e);this.deps=this.depsTail=void 0,ip(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ou.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Xf(this)&&this.run()}get dirty(){return Xf(this)}}let h_=0,qa,Ka;function d_(i,e=!1){if(i.flags|=8,e){i.next=Ka,Ka=i;return}i.next=qa,qa=i}function $h(){h_++}function Zh(){if(--h_>0)return;if(Ka){let e=Ka;for(Ka=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let i;for(;qa;){let e=qa;for(qa=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(n){i||(i=n)}e=t}}if(i)throw i}function p_(i){for(let e=i.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function m_(i){let e,t=i.depsTail,n=t;for(;n;){const r=n.prevDep;n.version===-1?(n===t&&(t=r),Jh(n),Bx(n)):e=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=r}i.deps=e,i.depsTail=t}function Xf(i){for(let e=i.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(g_(e.dep.computed)||e.dep.version!==e.version))return!0;return!!i._dirty}function g_(i){if(i.flags&4&&!(i.flags&16)||(i.flags&=-17,i.globalVersion===gl)||(i.globalVersion=gl,!i.isSSR&&i.flags&128&&(!i.deps&&!i._dirty||!Xf(i))))return;i.flags|=2;const e=i.dep,t=Bt,n=ki;Bt=i,ki=!0;try{p_(i);const r=i.fn(i._value);(e.version===0||ss(r,i._value))&&(i.flags|=128,i._value=r,e.version++)}catch(r){throw e.version++,r}finally{Bt=t,ki=n,m_(i),i.flags&=-3}}function Jh(i,e=!1){const{dep:t,prevSub:n,nextSub:r}=i;if(n&&(n.nextSub=r,i.prevSub=void 0),r&&(r.prevSub=n,i.nextSub=void 0),t.subs===i&&(t.subs=n,!n&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Jh(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Bx(i){const{prevDep:e,nextDep:t}=i;e&&(e.nextDep=t,i.prevDep=void 0),t&&(t.prevDep=e,i.nextDep=void 0)}let ki=!0;const __=[];function Lr(){__.push(ki),ki=!1}function Ir(){const i=__.pop();ki=i===void 0?!0:i}function ip(i){const{cleanup:e}=i;if(i.cleanup=void 0,e){const t=Bt;Bt=void 0;try{e()}finally{Bt=t}}}let gl=0;class kx{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Qh{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Bt||!ki||Bt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Bt)t=this.activeLink=new kx(Bt,this),Bt.deps?(t.prevDep=Bt.depsTail,Bt.depsTail.nextDep=t,Bt.depsTail=t):Bt.deps=Bt.depsTail=t,v_(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const n=t.nextDep;n.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=n),t.prevDep=Bt.depsTail,t.nextDep=void 0,Bt.depsTail.nextDep=t,Bt.depsTail=t,Bt.deps===t&&(Bt.deps=n)}return t}trigger(e){this.version++,gl++,this.notify(e)}notify(e){$h();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Zh()}}}function v_(i){if(i.dep.sc++,i.sub.flags&4){const e=i.dep.computed;if(e&&!i.dep.subs){e.flags|=20;for(let n=e.deps;n;n=n.nextDep)v_(n)}const t=i.dep.subs;t!==i&&(i.prevSub=t,t&&(t.nextSub=i)),i.dep.subs=i}}const Yf=new WeakMap,Gs=Symbol(""),qf=Symbol(""),_l=Symbol("");function Rn(i,e,t){if(ki&&Bt){let n=Yf.get(i);n||Yf.set(i,n=new Map);let r=n.get(t);r||(n.set(t,r=new Qh),r.map=n,r.key=t),r.track()}}function Mr(i,e,t,n,r,s){const o=Yf.get(i);if(!o){gl++;return}const a=l=>{l&&l.trigger()};if($h(),e==="clear")o.forEach(a);else{const l=ot(i),c=l&&Kh(t);if(l&&t==="length"){const u=Number(n);o.forEach((f,h)=>{(h==="length"||h===_l||!_s(h)&&h>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(_l)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Gs)),Ho(i)&&a(o.get(qf)));break;case"delete":l||(a(o.get(Gs)),Ho(i)&&a(o.get(qf)));break;case"set":Ho(i)&&a(o.get(Gs));break}}Zh()}function co(i){const e=wt(i);return e===i?e:(Rn(e,"iterate",_l),zi(i)?e:e.map(Vn))}function ed(i){return Rn(i=wt(i),"iterate",_l),i}const zx={__proto__:null,[Symbol.iterator](){return Fu(this,Symbol.iterator,Vn)},concat(...i){return co(this).concat(...i.map(e=>ot(e)?co(e):e))},entries(){return Fu(this,"entries",i=>(i[1]=Vn(i[1]),i))},every(i,e){return cr(this,"every",i,e,void 0,arguments)},filter(i,e){return cr(this,"filter",i,e,t=>t.map(Vn),arguments)},find(i,e){return cr(this,"find",i,e,Vn,arguments)},findIndex(i,e){return cr(this,"findIndex",i,e,void 0,arguments)},findLast(i,e){return cr(this,"findLast",i,e,Vn,arguments)},findLastIndex(i,e){return cr(this,"findLastIndex",i,e,void 0,arguments)},forEach(i,e){return cr(this,"forEach",i,e,void 0,arguments)},includes(...i){return Bu(this,"includes",i)},indexOf(...i){return Bu(this,"indexOf",i)},join(i){return co(this).join(i)},lastIndexOf(...i){return Bu(this,"lastIndexOf",i)},map(i,e){return cr(this,"map",i,e,void 0,arguments)},pop(){return Ea(this,"pop")},push(...i){return Ea(this,"push",i)},reduce(i,...e){return rp(this,"reduce",i,e)},reduceRight(i,...e){return rp(this,"reduceRight",i,e)},shift(){return Ea(this,"shift")},some(i,e){return cr(this,"some",i,e,void 0,arguments)},splice(...i){return Ea(this,"splice",i)},toReversed(){return co(this).toReversed()},toSorted(i){return co(this).toSorted(i)},toSpliced(...i){return co(this).toSpliced(...i)},unshift(...i){return Ea(this,"unshift",i)},values(){return Fu(this,"values",Vn)}};function Fu(i,e,t){const n=ed(i),r=n[e]();return n!==i&&!zi(i)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=t(s.value)),s}),r}const Hx=Array.prototype;function cr(i,e,t,n,r,s){const o=ed(i),a=o!==i&&!zi(i),l=o[e];if(l!==Hx[e]){const f=l.apply(i,s);return a?Vn(f):f}let c=t;o!==i&&(a?c=function(f,h){return t.call(this,Vn(f),h,i)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,i)}));const u=l.call(o,c,n);return a&&r?r(u):u}function rp(i,e,t,n){const r=ed(i);let s=t;return r!==i&&(zi(i)?t.length>3&&(s=function(o,a,l){return t.call(this,o,a,l,i)}):s=function(o,a,l){return t.call(this,o,Vn(a),l,i)}),r[e](s,...n)}function Bu(i,e,t){const n=wt(i);Rn(n,"iterate",_l);const r=n[e](...t);return(r===-1||r===!1)&&rd(t[0])?(t[0]=wt(t[0]),n[e](...t)):r}function Ea(i,e,t=[]){Lr(),$h();const n=wt(i)[e].apply(i,t);return Zh(),Ir(),n}const Gx=Xh("__proto__,__v_isRef,__isVue"),x_=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(_s));function Vx(i){_s(i)||(i=String(i));const e=wt(this);return Rn(e,"has",i),e.hasOwnProperty(i)}class y_{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return n===(r?s?Qx:E_:s?T_:M_).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const o=ot(e);if(!r){let l;if(o&&(l=zx[t]))return l;if(t==="hasOwnProperty")return Vx}const a=Reflect.get(e,t,In(e)?e:n);return(_s(t)?x_.has(t):Gx(t))||(r||Rn(e,"get",t),s)?a:In(a)?o&&Kh(t)?a:a.value:Jt(a)?r?b_(a):nd(a):a}}class S_ extends y_{constructor(e=!1){super(!1,e)}set(e,t,n,r){let s=e[t];if(!this._isShallow){const l=Qs(s);if(!zi(n)&&!Qs(n)&&(s=wt(s),n=wt(n)),!ot(e)&&In(s)&&!In(n))return l?!1:(s.value=n,!0)}const o=ot(e)&&Kh(t)?Number(t)<e.length:Rt(e,t),a=Reflect.set(e,t,n,In(e)?e:r);return e===wt(r)&&(o?ss(n,s)&&Mr(e,"set",t,n):Mr(e,"add",t,n)),a}deleteProperty(e,t){const n=Rt(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Mr(e,"delete",t,void 0),r}has(e,t){const n=Reflect.has(e,t);return(!_s(t)||!x_.has(t))&&Rn(e,"has",t),n}ownKeys(e){return Rn(e,"iterate",ot(e)?"length":Gs),Reflect.ownKeys(e)}}class Wx extends y_{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Xx=new S_,Yx=new Wx,qx=new S_(!0);const Kf=i=>i,Fl=i=>Reflect.getPrototypeOf(i);function Kx(i,e,t){return function(...n){const r=this.__v_raw,s=wt(r),o=Ho(s),a=i==="entries"||i===Symbol.iterator&&o,l=i==="keys"&&o,c=r[i](...n),u=t?Kf:e?jf:Vn;return!e&&Rn(s,"iterate",l?qf:Gs),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Bl(i){return function(...e){return i==="delete"?!1:i==="clear"?void 0:this}}function jx(i,e){const t={get(r){const s=this.__v_raw,o=wt(s),a=wt(r);i||(ss(r,a)&&Rn(o,"get",r),Rn(o,"get",a));const{has:l}=Fl(o),c=e?Kf:i?jf:Vn;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!i&&Rn(wt(r),"iterate",Gs),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,o=wt(s),a=wt(r);return i||(ss(r,a)&&Rn(o,"has",r),Rn(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=wt(a),c=e?Kf:i?jf:Vn;return!i&&Rn(l,"iterate",Gs),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return $n(t,i?{add:Bl("add"),set:Bl("set"),delete:Bl("delete"),clear:Bl("clear")}:{add(r){!e&&!zi(r)&&!Qs(r)&&(r=wt(r));const s=wt(this);return Fl(s).has.call(s,r)||(s.add(r),Mr(s,"add",r,r)),this},set(r,s){!e&&!zi(s)&&!Qs(s)&&(s=wt(s));const o=wt(this),{has:a,get:l}=Fl(o);let c=a.call(o,r);c||(r=wt(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?ss(s,u)&&Mr(o,"set",r,s):Mr(o,"add",r,s),this},delete(r){const s=wt(this),{has:o,get:a}=Fl(s);let l=o.call(s,r);l||(r=wt(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&Mr(s,"delete",r,void 0),c},clear(){const r=wt(this),s=r.size!==0,o=r.clear();return s&&Mr(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Kx(r,i,e)}),t}function td(i,e){const t=jx(i,e);return(n,r,s)=>r==="__v_isReactive"?!i:r==="__v_isReadonly"?i:r==="__v_raw"?n:Reflect.get(Rt(t,r)&&r in n?t:n,r,s)}const $x={get:td(!1,!1)},Zx={get:td(!1,!0)},Jx={get:td(!0,!1)};const M_=new WeakMap,T_=new WeakMap,E_=new WeakMap,Qx=new WeakMap;function ey(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ty(i){return i.__v_skip||!Object.isExtensible(i)?0:ey(Ax(i))}function nd(i){return Qs(i)?i:id(i,!1,Xx,$x,M_)}function ny(i){return id(i,!1,qx,Zx,T_)}function b_(i){return id(i,!0,Yx,Jx,E_)}function id(i,e,t,n,r){if(!Jt(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const s=ty(i);if(s===0)return i;const o=r.get(i);if(o)return o;const a=new Proxy(i,s===2?n:t);return r.set(i,a),a}function ja(i){return Qs(i)?ja(i.__v_raw):!!(i&&i.__v_isReactive)}function Qs(i){return!!(i&&i.__v_isReadonly)}function zi(i){return!!(i&&i.__v_isShallow)}function rd(i){return i?!!i.__v_raw:!1}function wt(i){const e=i&&i.__v_raw;return e?wt(e):i}function iy(i){return!Rt(i,"__v_skip")&&Object.isExtensible(i)&&Wf(i,"__v_skip",!0),i}const Vn=i=>Jt(i)?nd(i):i,jf=i=>Jt(i)?b_(i):i;function In(i){return i?i.__v_isRef===!0:!1}function Gn(i){return ry(i,!1)}function ry(i,e){return In(i)?i:new sy(i,e)}class sy{constructor(e,t){this.dep=new Qh,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:wt(e),this._value=t?e:Vn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,n=this.__v_isShallow||zi(e)||Qs(e);e=n?e:wt(e),ss(e,t)&&(this._rawValue=e,this._value=n?e:Vn(e),this.dep.trigger())}}function oy(i){return In(i)?i.value:i}const ay={get:(i,e,t)=>e==="__v_raw"?i:oy(Reflect.get(i,e,t)),set:(i,e,t,n)=>{const r=i[e];return In(r)&&!In(t)?(r.value=t,!0):Reflect.set(i,e,t,n)}};function A_(i){return ja(i)?i:new Proxy(i,ay)}class ly{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Qh(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=gl-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&Bt!==this)return d_(this,!0),!0}get value(){const e=this.dep.track();return g_(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function cy(i,e,t=!1){let n,r;return lt(i)?n=i:(n=i.get,r=i.set),new ly(n,r,t)}const kl={},Vc=new WeakMap;let Ls;function uy(i,e=!1,t=Ls){if(t){let n=Vc.get(t);n||Vc.set(t,n=[]),n.push(i)}}function fy(i,e,t=kt){const{immediate:n,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=x=>r?x:zi(x)||r===!1||r===0?Zr(x,1):Zr(x);let u,f,h,d,v=!1,g=!1;if(In(i)?(f=()=>i.value,v=zi(i)):ja(i)?(f=()=>c(i),v=!0):ot(i)?(g=!0,v=i.some(x=>ja(x)||zi(x)),f=()=>i.map(x=>{if(In(x))return x.value;if(ja(x))return c(x);if(lt(x))return l?l(x,2):x()})):lt(i)?e?f=l?()=>l(i,2):i:f=()=>{if(h){Lr();try{h()}finally{Ir()}}const x=Ls;Ls=u;try{return l?l(i,3,[d]):i(d)}finally{Ls=x}}:f=er,e&&r){const x=f,w=r===!0?1/0:r;f=()=>Zr(x(),w)}const p=Fx(),m=()=>{u.stop(),p&&p.active&&qh(p.effects,u)};if(s&&e){const x=e;e=(...w)=>{x(...w),m()}}let T=g?new Array(i.length).fill(kl):kl;const S=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(e){const w=u.run();if(r||v||(g?w.some((I,R)=>ss(I,T[R])):ss(w,T))){h&&h();const I=Ls;Ls=u;try{const R=[w,T===kl?void 0:g&&T[0]===kl?[]:T,d];T=w,l?l(e,3,R):e(...R)}finally{Ls=I}}}else u.run()};return a&&a(S),u=new f_(f),u.scheduler=o?()=>o(S,!1):S,d=x=>uy(x,!1,u),h=u.onStop=()=>{const x=Vc.get(u);if(x){if(l)l(x,4);else for(const w of x)w();Vc.delete(u)}},e?n?S(!0):T=u.run():o?o(S.bind(null,!0),!0):u.run(),m.pause=u.pause.bind(u),m.resume=u.resume.bind(u),m.stop=m,m}function Zr(i,e=1/0,t){if(e<=0||!Jt(i)||i.__v_skip||(t=t||new Set,t.has(i)))return i;if(t.add(i),e--,In(i))Zr(i.value,e,t);else if(ot(i))for(let n=0;n<i.length;n++)Zr(i[n],e,t);else if(i_(i)||Ho(i))i.forEach(n=>{Zr(n,e,t)});else if(o_(i)){for(const n in i)Zr(i[n],e,t);for(const n of Object.getOwnPropertySymbols(i))Object.prototype.propertyIsEnumerable.call(i,n)&&Zr(i[n],e,t)}return i}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Il(i,e,t,n){try{return n?i(...n):i()}catch(r){_u(r,e,t)}}function ir(i,e,t,n){if(lt(i)){const r=Il(i,e,t,n);return r&&r_(r)&&r.catch(s=>{_u(s,e,t)}),r}if(ot(i)){const r=[];for(let s=0;s<i.length;s++)r.push(ir(i[s],e,t,n));return r}}function _u(i,e,t,n=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||kt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](i,l,c)===!1)return}a=a.parent}if(s){Lr(),Il(s,null,10,[i,l,c]),Ir();return}}hy(i,t,r,n,o)}function hy(i,e,t,n=!0,r=!1){if(r)throw i;console.error(i)}const Wn=[];let Vi=-1;const Go=[];let Kr=null,Io=0;const w_=Promise.resolve();let Wc=null;function wc(i){const e=Wc||w_;return i?e.then(this?i.bind(this):i):e}function dy(i){let e=Vi+1,t=Wn.length;for(;e<t;){const n=e+t>>>1,r=Wn[n],s=vl(r);s<i||s===i&&r.flags&2?e=n+1:t=n}return e}function sd(i){if(!(i.flags&1)){const e=vl(i),t=Wn[Wn.length-1];!t||!(i.flags&2)&&e>=vl(t)?Wn.push(i):Wn.splice(dy(e),0,i),i.flags|=1,R_()}}function R_(){Wc||(Wc=w_.then(P_))}function py(i){ot(i)?Go.push(...i):Kr&&i.id===-1?Kr.splice(Io+1,0,i):i.flags&1||(Go.push(i),i.flags|=1),R_()}function sp(i,e,t=Vi+1){for(;t<Wn.length;t++){const n=Wn[t];if(n&&n.flags&2){if(i&&n.id!==i.uid)continue;Wn.splice(t,1),t--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function C_(i){if(Go.length){const e=[...new Set(Go)].sort((t,n)=>vl(t)-vl(n));if(Go.length=0,Kr){Kr.push(...e);return}for(Kr=e,Io=0;Io<Kr.length;Io++){const t=Kr[Io];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Kr=null,Io=0}}const vl=i=>i.id==null?i.flags&2?-1:1/0:i.id;function P_(i){try{for(Vi=0;Vi<Wn.length;Vi++){const e=Wn[Vi];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Il(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Vi<Wn.length;Vi++){const e=Wn[Vi];e&&(e.flags&=-2)}Vi=-1,Wn.length=0,C_(),Wc=null,(Wn.length||Go.length)&&P_()}}let Zi=null,L_=null;function Xc(i){const e=Zi;return Zi=i,L_=i&&i.type.__scopeId||null,e}function my(i,e=Zi,t){if(!e||i._n)return i;const n=(...r)=>{n._d&&pp(-1);const s=Xc(e);let o;try{o=i(...r)}finally{Xc(s),n._d&&pp(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function Ms(i,e,t,n){const r=i.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[n];l&&(Lr(),ir(l,t,8,[i.el,a,i,e]),Ir())}}const gy=Symbol("_vte"),_y=i=>i.__isTeleport;function od(i,e){i.shapeFlag&6&&i.component?(i.transition=e,od(i.component.subTree,e)):i.shapeFlag&128?(i.ssContent.transition=e.clone(i.ssContent),i.ssFallback.transition=e.clone(i.ssFallback)):i.transition=e}function I_(i){i.ids=[i.ids[0]+i.ids[2]+++"-",0,0]}function $a(i,e,t,n,r=!1){if(ot(i)){i.forEach((v,g)=>$a(v,e&&(ot(e)?e[g]:e),t,n,r));return}if(Za(n)&&!r){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&$a(i,e,t,n.component.subTree);return}const s=n.shapeFlag&4?hd(n.component):n.el,o=r?null:s,{i:a,r:l}=i,c=e&&e.r,u=a.refs===kt?a.refs={}:a.refs,f=a.setupState,h=wt(f),d=f===kt?()=>!1:v=>Rt(h,v);if(c!=null&&c!==l&&(un(c)?(u[c]=null,d(c)&&(f[c]=null)):In(c)&&(c.value=null)),lt(l))Il(l,a,12,[o,u]);else{const v=un(l),g=In(l);if(v||g){const p=()=>{if(i.f){const m=v?d(l)?f[l]:u[l]:l.value;r?ot(m)&&qh(m,s):ot(m)?m.includes(s)||m.push(s):v?(u[l]=[s],d(l)&&(f[l]=u[l])):(l.value=[s],i.k&&(u[i.k]=l.value))}else v?(u[l]=o,d(l)&&(f[l]=o)):g&&(l.value=o,i.k&&(u[i.k]=o))};o?(p.id=-1,ai(p,t)):p()}}}mu().requestIdleCallback;mu().cancelIdleCallback;const Za=i=>!!i.type.__asyncLoader,D_=i=>i.type.__isKeepAlive;function vy(i,e){U_(i,"a",e)}function xy(i,e){U_(i,"da",e)}function U_(i,e,t=Xn){const n=i.__wdc||(i.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return i()});if(vu(e,n,t),t){let r=t.parent;for(;r&&r.parent;)D_(r.parent.vnode)&&yy(n,e,t,r),r=r.parent}}function yy(i,e,t,n){const r=vu(e,i,n,!0);yu(()=>{qh(n[e],r)},t)}function vu(i,e,t=Xn,n=!1){if(t){const r=t[i]||(t[i]=[]),s=e.__weh||(e.__weh=(...o)=>{Lr();const a=Dl(t),l=ir(e,t,i,o);return a(),Ir(),l});return n?r.unshift(s):r.push(s),s}}const Fr=i=>(e,t=Xn)=>{(!yl||i==="sp")&&vu(i,(...n)=>e(...n),t)},Sy=Fr("bm"),xu=Fr("m"),My=Fr("bu"),Ty=Fr("u"),Ey=Fr("bum"),yu=Fr("um"),by=Fr("sp"),Ay=Fr("rtg"),wy=Fr("rtc");function Ry(i,e=Xn){vu("ec",i,e)}const Cy=Symbol.for("v-ndc"),$f=i=>i?e0(i)?hd(i):$f(i.parent):null,Ja=$n(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>$f(i.parent),$root:i=>$f(i.root),$host:i=>i.ce,$emit:i=>i.emit,$options:i=>O_(i),$forceUpdate:i=>i.f||(i.f=()=>{sd(i.update)}),$nextTick:i=>i.n||(i.n=wc.bind(i.proxy)),$watch:i=>Zy.bind(i)}),ku=(i,e)=>i!==kt&&!i.__isScriptSetup&&Rt(i,e),Py={get({_:i},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:n,data:r,props:s,accessCache:o,type:a,appContext:l}=i;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return n[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(ku(n,e))return o[e]=1,n[e];if(r!==kt&&Rt(r,e))return o[e]=2,r[e];if((c=i.propsOptions[0])&&Rt(c,e))return o[e]=3,s[e];if(t!==kt&&Rt(t,e))return o[e]=4,t[e];Zf&&(o[e]=0)}}const u=Ja[e];let f,h;if(u)return e==="$attrs"&&Rn(i.attrs,"get",""),u(i);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==kt&&Rt(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,Rt(h,e))return h[e]},set({_:i},e,t){const{data:n,setupState:r,ctx:s}=i;return ku(r,e)?(r[e]=t,!0):n!==kt&&Rt(n,e)?(n[e]=t,!0):Rt(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(s[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:n,appContext:r,propsOptions:s}},o){let a;return!!t[o]||i!==kt&&Rt(i,o)||ku(e,o)||(a=s[0])&&Rt(a,o)||Rt(n,o)||Rt(Ja,o)||Rt(r.config.globalProperties,o)},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:Rt(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}};function op(i){return ot(i)?i.reduce((e,t)=>(e[t]=null,e),{}):i}let Zf=!0;function Ly(i){const e=O_(i),t=i.proxy,n=i.ctx;Zf=!1,e.beforeCreate&&ap(e.beforeCreate,i,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:v,activated:g,deactivated:p,beforeDestroy:m,beforeUnmount:T,destroyed:S,unmounted:x,render:w,renderTracked:I,renderTriggered:R,errorCaptured:z,serverPrefetch:M,expose:P,inheritAttrs:Q,components:W,directives:se,filters:k}=e;if(c&&Iy(c,n,null),o)for(const X in o){const j=o[X];lt(j)&&(n[X]=j.bind(t))}if(r){const X=r.call(t,t);Jt(X)&&(i.data=nd(X))}if(Zf=!0,s)for(const X in s){const j=s[X],$=lt(j)?j.bind(t,t):lt(j.get)?j.get.bind(t,t):er,D=!lt(j)&&lt(j.set)?j.set.bind(t):er,G=th({get:$,set:D});Object.defineProperty(n,X,{enumerable:!0,configurable:!0,get:()=>G.value,set:J=>G.value=J})}if(a)for(const X in a)N_(a[X],n,t,X);if(l){const X=lt(l)?l.call(t):l;Reflect.ownKeys(X).forEach(j=>{By(j,X[j])})}u&&ap(u,i,"c");function Z(X,j){ot(j)?j.forEach($=>X($.bind(t))):j&&X(j.bind(t))}if(Z(Sy,f),Z(xu,h),Z(My,d),Z(Ty,v),Z(vy,g),Z(xy,p),Z(Ry,z),Z(wy,I),Z(Ay,R),Z(Ey,T),Z(yu,x),Z(by,M),ot(P))if(P.length){const X=i.exposed||(i.exposed={});P.forEach(j=>{Object.defineProperty(X,j,{get:()=>t[j],set:$=>t[j]=$})})}else i.exposed||(i.exposed={});w&&i.render===er&&(i.render=w),Q!=null&&(i.inheritAttrs=Q),W&&(i.components=W),se&&(i.directives=se),M&&I_(i)}function Iy(i,e,t=er){ot(i)&&(i=Jf(i));for(const n in i){const r=i[n];let s;Jt(r)?"default"in r?s=Rc(r.from||n,r.default,!0):s=Rc(r.from||n):s=Rc(r),In(s)?Object.defineProperty(e,n,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[n]=s}}function ap(i,e,t){ir(ot(i)?i.map(n=>n.bind(e.proxy)):i.bind(e.proxy),e,t)}function N_(i,e,t,n){let r=n.includes(".")?j_(t,n):()=>t[n];if(un(i)){const s=e[i];lt(s)&&Wo(r,s)}else if(lt(i))Wo(r,i.bind(t));else if(Jt(i))if(ot(i))i.forEach(s=>N_(s,e,t,n));else{const s=lt(i.handler)?i.handler.bind(t):e[i.handler];lt(s)&&Wo(r,s,i)}}function O_(i){const e=i.type,{mixins:t,extends:n}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=i.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!n?l=e:(l={},r.length&&r.forEach(c=>Yc(l,c,o,!0)),Yc(l,e,o)),Jt(e)&&s.set(e,l),l}function Yc(i,e,t,n=!1){const{mixins:r,extends:s}=e;s&&Yc(i,s,t,!0),r&&r.forEach(o=>Yc(i,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=Dy[o]||t&&t[o];i[o]=a?a(i[o],e[o]):e[o]}return i}const Dy={data:lp,props:cp,emits:cp,methods:Fa,computed:Fa,beforeCreate:On,created:On,beforeMount:On,mounted:On,beforeUpdate:On,updated:On,beforeDestroy:On,beforeUnmount:On,destroyed:On,unmounted:On,activated:On,deactivated:On,errorCaptured:On,serverPrefetch:On,components:Fa,directives:Fa,watch:Ny,provide:lp,inject:Uy};function lp(i,e){return e?i?function(){return $n(lt(i)?i.call(this,this):i,lt(e)?e.call(this,this):e)}:e:i}function Uy(i,e){return Fa(Jf(i),Jf(e))}function Jf(i){if(ot(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function On(i,e){return i?[...new Set([].concat(i,e))]:e}function Fa(i,e){return i?$n(Object.create(null),i,e):e}function cp(i,e){return i?ot(i)&&ot(e)?[...new Set([...i,...e])]:$n(Object.create(null),op(i),op(e??{})):e}function Ny(i,e){if(!i)return e;if(!e)return i;const t=$n(Object.create(null),i);for(const n in e)t[n]=On(i[n],e[n]);return t}function F_(){return{app:null,config:{isNativeTag:Ex,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Oy=0;function Fy(i,e){return function(n,r=null){lt(n)||(n=$n({},n)),r!=null&&!Jt(r)&&(r=null);const s=F_(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:Oy++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:vS,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&lt(u.install)?(o.add(u),u.install(c,...f)):lt(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const d=c._ceVNode||Rr(n,r);return d.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),i(d,u,h),l=!0,c._container=u,u.__vue_app__=c,hd(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(ir(a,c._instance,16),i(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=Vo;Vo=c;try{return u()}finally{Vo=f}}};return c}}let Vo=null;function By(i,e){if(Xn){let t=Xn.provides;const n=Xn.parent&&Xn.parent.provides;n===t&&(t=Xn.provides=Object.create(n)),t[i]=e}}function Rc(i,e,t=!1){const n=Xn||Zi;if(n||Vo){let r=Vo?Vo._context.provides:n?n.parent==null||n.ce?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(r&&i in r)return r[i];if(arguments.length>1)return t&&lt(e)?e.call(n&&n.proxy):e}}const B_={},k_=()=>Object.create(B_),z_=i=>Object.getPrototypeOf(i)===B_;function ky(i,e,t,n=!1){const r={},s=k_();i.propsDefaults=Object.create(null),H_(i,e,r,s);for(const o in i.propsOptions[0])o in r||(r[o]=void 0);t?i.props=n?r:ny(r):i.type.props?i.props=r:i.props=s,i.attrs=s}function zy(i,e,t,n){const{props:r,attrs:s,vnode:{patchFlag:o}}=i,a=wt(r),[l]=i.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=i.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Su(i.emitsOptions,h))continue;const d=e[h];if(l)if(Rt(s,h))d!==s[h]&&(s[h]=d,c=!0);else{const v=hs(h);r[v]=Qf(l,a,v,d,i,!1)}else d!==s[h]&&(s[h]=d,c=!0)}}}else{H_(i,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!Rt(e,f)&&((u=oo(f))===f||!Rt(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Qf(l,a,f,void 0,i,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!Rt(e,f))&&(delete s[f],c=!0)}c&&Mr(i.attrs,"set","")}function H_(i,e,t,n){const[r,s]=i.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ya(l))continue;const c=e[l];let u;r&&Rt(r,u=hs(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:Su(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(s){const l=wt(t),c=a||kt;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Qf(r,l,f,c[f],i,!Rt(c,f))}}return o}function Qf(i,e,t,n,r,s){const o=i[t];if(o!=null){const a=Rt(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&lt(l)){const{propsDefaults:c}=r;if(t in c)n=c[t];else{const u=Dl(r);n=c[t]=l.call(null,e),u()}}else n=l;r.ce&&r.ce._setProp(t,n)}o[0]&&(s&&!a?n=!1:o[1]&&(n===""||n===oo(t))&&(n=!0))}return n}const Hy=new WeakMap;function G_(i,e,t=!1){const n=t?Hy:e.propsCache,r=n.get(i);if(r)return r;const s=i.props,o={},a=[];let l=!1;if(!lt(i)){const u=f=>{l=!0;const[h,d]=G_(f,e,!0);$n(o,h),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!s&&!l)return Jt(i)&&n.set(i,zo),zo;if(ot(s))for(let u=0;u<s.length;u++){const f=hs(s[u]);up(f)&&(o[f]=kt)}else if(s)for(const u in s){const f=hs(u);if(up(f)){const h=s[u],d=o[f]=ot(h)||lt(h)?{type:h}:$n({},h),v=d.type;let g=!1,p=!0;if(ot(v))for(let m=0;m<v.length;++m){const T=v[m],S=lt(T)&&T.name;if(S==="Boolean"){g=!0;break}else S==="String"&&(p=!1)}else g=lt(v)&&v.name==="Boolean";d[0]=g,d[1]=p,(g||Rt(d,"default"))&&a.push(f)}}const c=[o,a];return Jt(i)&&n.set(i,c),c}function up(i){return i[0]!=="$"&&!Ya(i)}const ad=i=>i[0]==="_"||i==="$stable",ld=i=>ot(i)?i.map(Yi):[Yi(i)],Gy=(i,e,t)=>{if(e._n)return e;const n=my((...r)=>ld(e(...r)),t);return n._c=!1,n},V_=(i,e,t)=>{const n=i._ctx;for(const r in i){if(ad(r))continue;const s=i[r];if(lt(s))e[r]=Gy(r,s,n);else if(s!=null){const o=ld(s);e[r]=()=>o}}},W_=(i,e)=>{const t=ld(e);i.slots.default=()=>t},X_=(i,e,t)=>{for(const n in e)(t||!ad(n))&&(i[n]=e[n])},Vy=(i,e,t)=>{const n=i.slots=k_();if(i.vnode.shapeFlag&32){const r=e.__;r&&Wf(n,"__",r,!0);const s=e._;s?(X_(n,e,t),t&&Wf(n,"_",s,!0)):V_(e,n)}else e&&W_(i,e)},Wy=(i,e,t)=>{const{vnode:n,slots:r}=i;let s=!0,o=kt;if(n.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:X_(r,e,t):(s=!e.$stable,V_(e,r)),o=e}else e&&(W_(i,e),o={default:1});if(s)for(const a in r)!ad(a)&&o[a]==null&&delete r[a]},ai=rS;function Xy(i){return Yy(i)}function Yy(i,e){const t=mu();t.__VUE__=!0;const{insert:n,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=er,insertStaticContent:v}=i,g=(E,B,V,ie=null,ee=null,F=null,de=void 0,ue=null,ge=!!B.dynamicChildren)=>{if(E===B)return;E&&!ba(E,B)&&(ie=Ie(E),J(E,ee,F,!0),E=null),B.patchFlag===-2&&(ge=!1,B.dynamicChildren=null);const{type:le,ref:Re,shapeFlag:C}=B;switch(le){case Mu:p(E,B,V,ie);break;case ea:m(E,B,V,ie);break;case Hu:E==null&&T(B,V,ie,de);break;case yr:W(E,B,V,ie,ee,F,de,ue,ge);break;default:C&1?w(E,B,V,ie,ee,F,de,ue,ge):C&6?se(E,B,V,ie,ee,F,de,ue,ge):(C&64||C&128)&&le.process(E,B,V,ie,ee,F,de,ue,ge,Tt)}Re!=null&&ee?$a(Re,E&&E.ref,F,B||E,!B):Re==null&&E&&E.ref!=null&&$a(E.ref,null,F,E,!0)},p=(E,B,V,ie)=>{if(E==null)n(B.el=a(B.children),V,ie);else{const ee=B.el=E.el;B.children!==E.children&&c(ee,B.children)}},m=(E,B,V,ie)=>{E==null?n(B.el=l(B.children||""),V,ie):B.el=E.el},T=(E,B,V,ie)=>{[E.el,E.anchor]=v(E.children,B,V,ie,E.el,E.anchor)},S=({el:E,anchor:B},V,ie)=>{let ee;for(;E&&E!==B;)ee=h(E),n(E,V,ie),E=ee;n(B,V,ie)},x=({el:E,anchor:B})=>{let V;for(;E&&E!==B;)V=h(E),r(E),E=V;r(B)},w=(E,B,V,ie,ee,F,de,ue,ge)=>{B.type==="svg"?de="svg":B.type==="math"&&(de="mathml"),E==null?I(B,V,ie,ee,F,de,ue,ge):M(E,B,ee,F,de,ue,ge)},I=(E,B,V,ie,ee,F,de,ue)=>{let ge,le;const{props:Re,shapeFlag:C,transition:A,dirs:H}=E;if(ge=E.el=o(E.type,F,Re&&Re.is,Re),C&8?u(ge,E.children):C&16&&z(E.children,ge,null,ie,ee,zu(E,F),de,ue),H&&Ms(E,null,ie,"created"),R(ge,E,E.scopeId,de,ie),Re){for(const oe in Re)oe!=="value"&&!Ya(oe)&&s(ge,oe,null,Re[oe],F,ie);"value"in Re&&s(ge,"value",null,Re.value,F),(le=Re.onVnodeBeforeMount)&&Gi(le,ie,E)}H&&Ms(E,null,ie,"beforeMount");const ce=qy(ee,A);ce&&A.beforeEnter(ge),n(ge,B,V),((le=Re&&Re.onVnodeMounted)||ce||H)&&ai(()=>{le&&Gi(le,ie,E),ce&&A.enter(ge),H&&Ms(E,null,ie,"mounted")},ee)},R=(E,B,V,ie,ee)=>{if(V&&d(E,V),ie)for(let F=0;F<ie.length;F++)d(E,ie[F]);if(ee){let F=ee.subTree;if(B===F||Z_(F.type)&&(F.ssContent===B||F.ssFallback===B)){const de=ee.vnode;R(E,de,de.scopeId,de.slotScopeIds,ee.parent)}}},z=(E,B,V,ie,ee,F,de,ue,ge=0)=>{for(let le=ge;le<E.length;le++){const Re=E[le]=ue?jr(E[le]):Yi(E[le]);g(null,Re,B,V,ie,ee,F,de,ue)}},M=(E,B,V,ie,ee,F,de)=>{const ue=B.el=E.el;let{patchFlag:ge,dynamicChildren:le,dirs:Re}=B;ge|=E.patchFlag&16;const C=E.props||kt,A=B.props||kt;let H;if(V&&Ts(V,!1),(H=A.onVnodeBeforeUpdate)&&Gi(H,V,B,E),Re&&Ms(B,E,V,"beforeUpdate"),V&&Ts(V,!0),(C.innerHTML&&A.innerHTML==null||C.textContent&&A.textContent==null)&&u(ue,""),le?P(E.dynamicChildren,le,ue,V,ie,zu(B,ee),F):de||j(E,B,ue,null,V,ie,zu(B,ee),F,!1),ge>0){if(ge&16)Q(ue,C,A,V,ee);else if(ge&2&&C.class!==A.class&&s(ue,"class",null,A.class,ee),ge&4&&s(ue,"style",C.style,A.style,ee),ge&8){const ce=B.dynamicProps;for(let oe=0;oe<ce.length;oe++){const fe=ce[oe],be=C[fe],ve=A[fe];(ve!==be||fe==="value")&&s(ue,fe,be,ve,ee,V)}}ge&1&&E.children!==B.children&&u(ue,B.children)}else!de&&le==null&&Q(ue,C,A,V,ee);((H=A.onVnodeUpdated)||Re)&&ai(()=>{H&&Gi(H,V,B,E),Re&&Ms(B,E,V,"updated")},ie)},P=(E,B,V,ie,ee,F,de)=>{for(let ue=0;ue<B.length;ue++){const ge=E[ue],le=B[ue],Re=ge.el&&(ge.type===yr||!ba(ge,le)||ge.shapeFlag&198)?f(ge.el):V;g(ge,le,Re,null,ie,ee,F,de,!0)}},Q=(E,B,V,ie,ee)=>{if(B!==V){if(B!==kt)for(const F in B)!Ya(F)&&!(F in V)&&s(E,F,B[F],null,ee,ie);for(const F in V){if(Ya(F))continue;const de=V[F],ue=B[F];de!==ue&&F!=="value"&&s(E,F,ue,de,ee,ie)}"value"in V&&s(E,"value",B.value,V.value,ee)}},W=(E,B,V,ie,ee,F,de,ue,ge)=>{const le=B.el=E?E.el:a(""),Re=B.anchor=E?E.anchor:a("");let{patchFlag:C,dynamicChildren:A,slotScopeIds:H}=B;H&&(ue=ue?ue.concat(H):H),E==null?(n(le,V,ie),n(Re,V,ie),z(B.children||[],V,Re,ee,F,de,ue,ge)):C>0&&C&64&&A&&E.dynamicChildren?(P(E.dynamicChildren,A,V,ee,F,de,ue),(B.key!=null||ee&&B===ee.subTree)&&Y_(E,B,!0)):j(E,B,V,Re,ee,F,de,ue,ge)},se=(E,B,V,ie,ee,F,de,ue,ge)=>{B.slotScopeIds=ue,E==null?B.shapeFlag&512?ee.ctx.activate(B,V,ie,de,ge):k(B,V,ie,ee,F,de,ge):q(E,B,ge)},k=(E,B,V,ie,ee,F,de)=>{const ue=E.component=hS(E,ie,ee);if(D_(E)&&(ue.ctx.renderer=Tt),dS(ue,!1,de),ue.asyncDep){if(ee&&ee.registerDep(ue,Z,de),!E.el){const ge=ue.subTree=Rr(ea);m(null,ge,B,V)}}else Z(ue,E,B,V,ee,F,de)},q=(E,B,V)=>{const ie=B.component=E.component;if(nS(E,B,V))if(ie.asyncDep&&!ie.asyncResolved){X(ie,B,V);return}else ie.next=B,ie.update();else B.el=E.el,ie.vnode=B},Z=(E,B,V,ie,ee,F,de)=>{const ue=()=>{if(E.isMounted){let{next:C,bu:A,u:H,parent:ce,vnode:oe}=E;{const Pe=q_(E);if(Pe){C&&(C.el=oe.el,X(E,C,de)),Pe.asyncDep.then(()=>{E.isUnmounted||ue()});return}}let fe=C,be;Ts(E,!1),C?(C.el=oe.el,X(E,C,de)):C=oe,A&&Uu(A),(be=C.props&&C.props.onVnodeBeforeUpdate)&&Gi(be,ce,C,oe),Ts(E,!0);const ve=hp(E),Ae=E.subTree;E.subTree=ve,g(Ae,ve,f(Ae.el),Ie(Ae),E,ee,F),C.el=ve.el,fe===null&&iS(E,ve.el),H&&ai(H,ee),(be=C.props&&C.props.onVnodeUpdated)&&ai(()=>Gi(be,ce,C,oe),ee)}else{let C;const{el:A,props:H}=B,{bm:ce,m:oe,parent:fe,root:be,type:ve}=E,Ae=Za(B);Ts(E,!1),ce&&Uu(ce),!Ae&&(C=H&&H.onVnodeBeforeMount)&&Gi(C,fe,B),Ts(E,!0);{be.ce&&be.ce._def.shadowRoot!==!1&&be.ce._injectChildStyle(ve);const Pe=E.subTree=hp(E);g(null,Pe,V,ie,E,ee,F),B.el=Pe.el}if(oe&&ai(oe,ee),!Ae&&(C=H&&H.onVnodeMounted)){const Pe=B;ai(()=>Gi(C,fe,Pe),ee)}(B.shapeFlag&256||fe&&Za(fe.vnode)&&fe.vnode.shapeFlag&256)&&E.a&&ai(E.a,ee),E.isMounted=!0,B=V=ie=null}};E.scope.on();const ge=E.effect=new f_(ue);E.scope.off();const le=E.update=ge.run.bind(ge),Re=E.job=ge.runIfDirty.bind(ge);Re.i=E,Re.id=E.uid,ge.scheduler=()=>sd(Re),Ts(E,!0),le()},X=(E,B,V)=>{B.component=E;const ie=E.vnode.props;E.vnode=B,E.next=null,zy(E,B.props,ie,V),Wy(E,B.children,V),Lr(),sp(E),Ir()},j=(E,B,V,ie,ee,F,de,ue,ge=!1)=>{const le=E&&E.children,Re=E?E.shapeFlag:0,C=B.children,{patchFlag:A,shapeFlag:H}=B;if(A>0){if(A&128){D(le,C,V,ie,ee,F,de,ue,ge);return}else if(A&256){$(le,C,V,ie,ee,F,de,ue,ge);return}}H&8?(Re&16&&Me(le,ee,F),C!==le&&u(V,C)):Re&16?H&16?D(le,C,V,ie,ee,F,de,ue,ge):Me(le,ee,F,!0):(Re&8&&u(V,""),H&16&&z(C,V,ie,ee,F,de,ue,ge))},$=(E,B,V,ie,ee,F,de,ue,ge)=>{E=E||zo,B=B||zo;const le=E.length,Re=B.length,C=Math.min(le,Re);let A;for(A=0;A<C;A++){const H=B[A]=ge?jr(B[A]):Yi(B[A]);g(E[A],H,V,null,ee,F,de,ue,ge)}le>Re?Me(E,ee,F,!0,!1,C):z(B,V,ie,ee,F,de,ue,ge,C)},D=(E,B,V,ie,ee,F,de,ue,ge)=>{let le=0;const Re=B.length;let C=E.length-1,A=Re-1;for(;le<=C&&le<=A;){const H=E[le],ce=B[le]=ge?jr(B[le]):Yi(B[le]);if(ba(H,ce))g(H,ce,V,null,ee,F,de,ue,ge);else break;le++}for(;le<=C&&le<=A;){const H=E[C],ce=B[A]=ge?jr(B[A]):Yi(B[A]);if(ba(H,ce))g(H,ce,V,null,ee,F,de,ue,ge);else break;C--,A--}if(le>C){if(le<=A){const H=A+1,ce=H<Re?B[H].el:ie;for(;le<=A;)g(null,B[le]=ge?jr(B[le]):Yi(B[le]),V,ce,ee,F,de,ue,ge),le++}}else if(le>A)for(;le<=C;)J(E[le],ee,F,!0),le++;else{const H=le,ce=le,oe=new Map;for(le=ce;le<=A;le++){const Qe=B[le]=ge?jr(B[le]):Yi(B[le]);Qe.key!=null&&oe.set(Qe.key,le)}let fe,be=0;const ve=A-ce+1;let Ae=!1,Pe=0;const nt=new Array(ve);for(le=0;le<ve;le++)nt[le]=0;for(le=H;le<=C;le++){const Qe=E[le];if(be>=ve){J(Qe,ee,F,!0);continue}let Ge;if(Qe.key!=null)Ge=oe.get(Qe.key);else for(fe=ce;fe<=A;fe++)if(nt[fe-ce]===0&&ba(Qe,B[fe])){Ge=fe;break}Ge===void 0?J(Qe,ee,F,!0):(nt[Ge-ce]=le+1,Ge>=Pe?Pe=Ge:Ae=!0,g(Qe,B[Ge],V,null,ee,F,de,ue,ge),be++)}const _e=Ae?Ky(nt):zo;for(fe=_e.length-1,le=ve-1;le>=0;le--){const Qe=ce+le,Ge=B[Qe],Be=Qe+1<Re?B[Qe+1].el:ie;nt[le]===0?g(null,Ge,V,Be,ee,F,de,ue,ge):Ae&&(fe<0||le!==_e[fe]?G(Ge,V,Be,2):fe--)}}},G=(E,B,V,ie,ee=null)=>{const{el:F,type:de,transition:ue,children:ge,shapeFlag:le}=E;if(le&6){G(E.component.subTree,B,V,ie);return}if(le&128){E.suspense.move(B,V,ie);return}if(le&64){de.move(E,B,V,Tt);return}if(de===yr){n(F,B,V);for(let C=0;C<ge.length;C++)G(ge[C],B,V,ie);n(E.anchor,B,V);return}if(de===Hu){S(E,B,V);return}if(ie!==2&&le&1&&ue)if(ie===0)ue.beforeEnter(F),n(F,B,V),ai(()=>ue.enter(F),ee);else{const{leave:C,delayLeave:A,afterLeave:H}=ue,ce=()=>{E.ctx.isUnmounted?r(F):n(F,B,V)},oe=()=>{C(F,()=>{ce(),H&&H()})};A?A(F,ce,oe):oe()}else n(F,B,V)},J=(E,B,V,ie=!1,ee=!1)=>{const{type:F,props:de,ref:ue,children:ge,dynamicChildren:le,shapeFlag:Re,patchFlag:C,dirs:A,cacheIndex:H}=E;if(C===-2&&(ee=!1),ue!=null&&(Lr(),$a(ue,null,V,E,!0),Ir()),H!=null&&(B.renderCache[H]=void 0),Re&256){B.ctx.deactivate(E);return}const ce=Re&1&&A,oe=!Za(E);let fe;if(oe&&(fe=de&&de.onVnodeBeforeUnmount)&&Gi(fe,B,E),Re&6)Ee(E.component,V,ie);else{if(Re&128){E.suspense.unmount(V,ie);return}ce&&Ms(E,null,B,"beforeUnmount"),Re&64?E.type.remove(E,B,V,Tt,ie):le&&!le.hasOnce&&(F!==yr||C>0&&C&64)?Me(le,B,V,!1,!0):(F===yr&&C&384||!ee&&Re&16)&&Me(ge,B,V),ie&&Te(E)}(oe&&(fe=de&&de.onVnodeUnmounted)||ce)&&ai(()=>{fe&&Gi(fe,B,E),ce&&Ms(E,null,B,"unmounted")},V)},Te=E=>{const{type:B,el:V,anchor:ie,transition:ee}=E;if(B===yr){ye(V,ie);return}if(B===Hu){x(E);return}const F=()=>{r(V),ee&&!ee.persisted&&ee.afterLeave&&ee.afterLeave()};if(E.shapeFlag&1&&ee&&!ee.persisted){const{leave:de,delayLeave:ue}=ee,ge=()=>de(V,F);ue?ue(E.el,F,ge):ge()}else F()},ye=(E,B)=>{let V;for(;E!==B;)V=h(E),r(E),E=V;r(B)},Ee=(E,B,V)=>{const{bum:ie,scope:ee,job:F,subTree:de,um:ue,m:ge,a:le,parent:Re,slots:{__:C}}=E;fp(ge),fp(le),ie&&Uu(ie),Re&&ot(C)&&C.forEach(A=>{Re.renderCache[A]=void 0}),ee.stop(),F&&(F.flags|=8,J(de,E,B,V)),ue&&ai(ue,B),ai(()=>{E.isUnmounted=!0},B),B&&B.pendingBranch&&!B.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===B.pendingId&&(B.deps--,B.deps===0&&B.resolve())},Me=(E,B,V,ie=!1,ee=!1,F=0)=>{for(let de=F;de<E.length;de++)J(E[de],B,V,ie,ee)},Ie=E=>{if(E.shapeFlag&6)return Ie(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const B=h(E.anchor||E.el),V=B&&B[gy];return V?h(V):B};let Ue=!1;const Je=(E,B,V)=>{E==null?B._vnode&&J(B._vnode,null,null,!0):g(B._vnode||null,E,B,null,null,null,V),B._vnode=E,Ue||(Ue=!0,sp(),C_(),Ue=!1)},Tt={p:g,um:J,m:G,r:Te,mt:k,mc:z,pc:j,pbc:P,n:Ie,o:i};return{render:Je,hydrate:void 0,createApp:Fy(Je)}}function zu({type:i,props:e},t){return t==="svg"&&i==="foreignObject"||t==="mathml"&&i==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Ts({effect:i,job:e},t){t?(i.flags|=32,e.flags|=4):(i.flags&=-33,e.flags&=-5)}function qy(i,e){return(!i||i&&!i.pendingBranch)&&e&&!e.persisted}function Y_(i,e,t=!1){const n=i.children,r=e.children;if(ot(n)&&ot(r))for(let s=0;s<n.length;s++){const o=n[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=jr(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&Y_(o,a)),a.type===Mu&&(a.el=o.el),a.type===ea&&!a.el&&(a.el=o.el)}}function Ky(i){const e=i.slice(),t=[0];let n,r,s,o,a;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(r=t[t.length-1],i[r]<c){e[n]=r,t.push(n);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,i[t[a]]<c?s=a+1:o=a;c<i[t[s]]&&(s>0&&(e[n]=t[s-1]),t[s]=n)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function q_(i){const e=i.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:q_(e)}function fp(i){if(i)for(let e=0;e<i.length;e++)i[e].flags|=8}const jy=Symbol.for("v-scx"),$y=()=>Rc(jy);function Wo(i,e,t){return K_(i,e,t)}function K_(i,e,t=kt){const{immediate:n,deep:r,flush:s,once:o}=t,a=$n({},t),l=e&&n||!e&&s!=="post";let c;if(yl){if(s==="sync"){const d=$y();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=er,d.resume=er,d.pause=er,d}}const u=Xn;a.call=(d,v,g)=>ir(d,u,v,g);let f=!1;s==="post"?a.scheduler=d=>{ai(d,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(d,v)=>{v?d():sd(d)}),a.augmentJob=d=>{e&&(d.flags|=4),f&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const h=fy(i,e,a);return yl&&(c?c.push(h):l&&h()),h}function Zy(i,e,t){const n=this.proxy,r=un(i)?i.includes(".")?j_(n,i):()=>n[i]:i.bind(n,n);let s;lt(e)?s=e:(s=e.handler,t=e);const o=Dl(this),a=K_(r,s.bind(n),t);return o(),a}function j_(i,e){const t=e.split(".");return()=>{let n=i;for(let r=0;r<t.length&&n;r++)n=n[t[r]];return n}}const Jy=(i,e)=>e==="modelValue"||e==="model-value"?i.modelModifiers:i[`${e}Modifiers`]||i[`${hs(e)}Modifiers`]||i[`${oo(e)}Modifiers`];function Qy(i,e,...t){if(i.isUnmounted)return;const n=i.vnode.props||kt;let r=t;const s=e.startsWith("update:"),o=s&&Jy(n,e.slice(7));o&&(o.trim&&(r=t.map(u=>un(u)?u.trim():u)),o.number&&(r=t.map(Cx)));let a,l=n[a=Du(e)]||n[a=Du(hs(e))];!l&&s&&(l=n[a=Du(oo(e))]),l&&ir(l,i,6,r);const c=n[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,ir(c,i,6,r)}}function $_(i,e,t=!1){const n=e.emitsCache,r=n.get(i);if(r!==void 0)return r;const s=i.emits;let o={},a=!1;if(!lt(i)){const l=c=>{const u=$_(c,e,!0);u&&(a=!0,$n(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!s&&!a?(Jt(i)&&n.set(i,null),null):(ot(s)?s.forEach(l=>o[l]=null):$n(o,s),Jt(i)&&n.set(i,o),o)}function Su(i,e){return!i||!hu(e)?!1:(e=e.slice(2).replace(/Once$/,""),Rt(i,e[0].toLowerCase()+e.slice(1))||Rt(i,oo(e))||Rt(i,e))}function hp(i){const{type:e,vnode:t,proxy:n,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:v,inheritAttrs:g}=i,p=Xc(i);let m,T;try{if(t.shapeFlag&4){const x=r||n,w=x;m=Yi(c.call(w,x,u,f,d,h,v)),T=a}else{const x=e;m=Yi(x.length>1?x(f,{attrs:a,slots:o,emit:l}):x(f,null)),T=e.props?a:eS(a)}}catch(x){Qa.length=0,_u(x,i,1),m=Rr(ea)}let S=m;if(T&&g!==!1){const x=Object.keys(T),{shapeFlag:w}=S;x.length&&w&7&&(s&&x.some(Yh)&&(T=tS(T,s)),S=ta(S,T,!1,!0))}return t.dirs&&(S=ta(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(t.dirs):t.dirs),t.transition&&od(S,t.transition),m=S,Xc(p),m}const eS=i=>{let e;for(const t in i)(t==="class"||t==="style"||hu(t))&&((e||(e={}))[t]=i[t]);return e},tS=(i,e)=>{const t={};for(const n in i)(!Yh(n)||!(n.slice(9)in e))&&(t[n]=i[n]);return t};function nS(i,e,t){const{props:n,children:r,component:s}=i,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?dp(n,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==n[h]&&!Su(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?dp(n,o,c):!0:!!o;return!1}function dp(i,e,t){const n=Object.keys(e);if(n.length!==Object.keys(i).length)return!0;for(let r=0;r<n.length;r++){const s=n[r];if(e[s]!==i[s]&&!Su(t,s))return!0}return!1}function iS({vnode:i,parent:e},t){for(;e;){const n=e.subTree;if(n.suspense&&n.suspense.activeBranch===i&&(n.el=i.el),n===i)(i=e.vnode).el=t,e=e.parent;else break}}const Z_=i=>i.__isSuspense;function rS(i,e){e&&e.pendingBranch?ot(i)?e.effects.push(...i):e.effects.push(i):py(i)}const yr=Symbol.for("v-fgt"),Mu=Symbol.for("v-txt"),ea=Symbol.for("v-cmt"),Hu=Symbol.for("v-stc"),Qa=[];let gi=null;function cd(i=!1){Qa.push(gi=i?null:[])}function sS(){Qa.pop(),gi=Qa[Qa.length-1]||null}let xl=1;function pp(i,e=!1){xl+=i,i<0&&gi&&e&&(gi.hasOnce=!0)}function oS(i){return i.dynamicChildren=xl>0?gi||zo:null,sS(),xl>0&&gi&&gi.push(i),i}function ud(i,e,t,n,r,s){return oS(Vt(i,e,t,n,r,s,!0))}function J_(i){return i?i.__v_isVNode===!0:!1}function ba(i,e){return i.type===e.type&&i.key===e.key}const Q_=({key:i})=>i??null,Cc=({ref:i,ref_key:e,ref_for:t})=>(typeof i=="number"&&(i=""+i),i!=null?un(i)||In(i)||lt(i)?{i:Zi,r:i,k:e,f:!!t}:i:null);function Vt(i,e=null,t=null,n=0,r=null,s=i===yr?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&Q_(e),ref:e&&Cc(e),scopeId:L_,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Zi};return a?(fd(l,t),s&128&&i.normalize(l)):t&&(l.shapeFlag|=un(t)?8:16),xl>0&&!o&&gi&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&gi.push(l),l}const Rr=aS;function aS(i,e=null,t=null,n=0,r=null,s=!1){if((!i||i===Cy)&&(i=ea),J_(i)){const a=ta(i,e,!0);return t&&fd(a,t),xl>0&&!s&&gi&&(a.shapeFlag&6?gi[gi.indexOf(i)]=a:gi.push(a)),a.patchFlag=-2,a}if(_S(i)&&(i=i.__vccOpts),e){e=lS(e);let{class:a,style:l}=e;a&&!un(a)&&(e.class=gu(a)),Jt(l)&&(rd(l)&&!ot(l)&&(l=$n({},l)),e.style=jh(l))}const o=un(i)?1:Z_(i)?128:_y(i)?64:Jt(i)?4:lt(i)?2:0;return Vt(i,e,t,n,r,o,s,!0)}function lS(i){return i?rd(i)||z_(i)?$n({},i):i:null}function ta(i,e,t=!1,n=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=i,c=e?cS(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:i.type,props:c,key:c&&Q_(c),ref:e&&e.ref?t&&s?ot(s)?s.concat(Cc(e)):[s,Cc(e)]:Cc(e):s,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:a,target:i.target,targetStart:i.targetStart,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==yr?o===-1?16:o|16:o,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:l,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&ta(i.ssContent),ssFallback:i.ssFallback&&ta(i.ssFallback),el:i.el,anchor:i.anchor,ctx:i.ctx,ce:i.ce};return l&&n&&od(u,l.clone(u)),u}function Pc(i=" ",e=0){return Rr(Mu,null,i,e)}function Yi(i){return i==null||typeof i=="boolean"?Rr(ea):ot(i)?Rr(yr,null,i.slice()):J_(i)?jr(i):Rr(Mu,null,String(i))}function jr(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:ta(i)}function fd(i,e){let t=0;const{shapeFlag:n}=i;if(e==null)e=null;else if(ot(e))t=16;else if(typeof e=="object")if(n&65){const r=e.default;r&&(r._c&&(r._d=!1),fd(i,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!z_(e)?e._ctx=Zi:r===3&&Zi&&(Zi.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else lt(e)?(e={default:e,_ctx:Zi},t=32):(e=String(e),n&64?(t=16,e=[Pc(e)]):t=8);i.children=e,i.shapeFlag|=t}function cS(...i){const e={};for(let t=0;t<i.length;t++){const n=i[t];for(const r in n)if(r==="class")e.class!==n.class&&(e.class=gu([e.class,n.class]));else if(r==="style")e.style=jh([e.style,n.style]);else if(hu(r)){const s=e[r],o=n[r];o&&s!==o&&!(ot(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=n[r])}return e}function Gi(i,e,t,n=null){ir(i,e,7,[t,n])}const uS=F_();let fS=0;function hS(i,e,t){const n=i.type,r=(e?e.appContext:i.appContext)||uS,s={uid:fS++,vnode:i,type:n,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ox(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:G_(n,r),emitsOptions:$_(n,r),emit:null,emitted:null,propsDefaults:kt,inheritAttrs:n.inheritAttrs,ctx:kt,data:kt,props:kt,attrs:kt,slots:kt,refs:kt,setupState:kt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Qy.bind(null,s),i.ce&&i.ce(s),s}let Xn=null,qc,eh;{const i=mu(),e=(t,n)=>{let r;return(r=i[t])||(r=i[t]=[]),r.push(n),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};qc=e("__VUE_INSTANCE_SETTERS__",t=>Xn=t),eh=e("__VUE_SSR_SETTERS__",t=>yl=t)}const Dl=i=>{const e=Xn;return qc(i),i.scope.on(),()=>{i.scope.off(),qc(e)}},mp=()=>{Xn&&Xn.scope.off(),qc(null)};function e0(i){return i.vnode.shapeFlag&4}let yl=!1;function dS(i,e=!1,t=!1){e&&eh(e);const{props:n,children:r}=i.vnode,s=e0(i);ky(i,n,s,e),Vy(i,r,t||e);const o=s?pS(i,e):void 0;return e&&eh(!1),o}function pS(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=new Proxy(i.ctx,Py);const{setup:n}=t;if(n){Lr();const r=i.setupContext=n.length>1?gS(i):null,s=Dl(i),o=Il(n,i,0,[i.props,r]),a=r_(o);if(Ir(),s(),(a||i.sp)&&!Za(i)&&I_(i),a){if(o.then(mp,mp),e)return o.then(l=>{gp(i,l)}).catch(l=>{_u(l,i,0)});i.asyncDep=o}else gp(i,o)}else t0(i)}function gp(i,e,t){lt(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:Jt(e)&&(i.setupState=A_(e)),t0(i)}function t0(i,e,t){const n=i.type;i.render||(i.render=n.render||er);{const r=Dl(i);Lr();try{Ly(i)}finally{Ir(),r()}}}const mS={get(i,e){return Rn(i,"get",""),i[e]}};function gS(i){const e=t=>{i.exposed=t||{}};return{attrs:new Proxy(i.attrs,mS),slots:i.slots,emit:i.emit,expose:e}}function hd(i){return i.exposed?i.exposeProxy||(i.exposeProxy=new Proxy(A_(iy(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in Ja)return Ja[t](i)},has(e,t){return t in e||t in Ja}})):i.proxy}function _S(i){return lt(i)&&"__vccOpts"in i}const th=(i,e)=>cy(i,e,yl),vS="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let nh;const _p=typeof window<"u"&&window.trustedTypes;if(_p)try{nh=_p.createPolicy("vue",{createHTML:i=>i})}catch{}const n0=nh?i=>nh.createHTML(i):i=>i,xS="http://www.w3.org/2000/svg",yS="http://www.w3.org/1998/Math/MathML",vr=typeof document<"u"?document:null,vp=vr&&vr.createElement("template"),SS={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,n)=>{const r=e==="svg"?vr.createElementNS(xS,i):e==="mathml"?vr.createElementNS(yS,i):t?vr.createElement(i,{is:t}):vr.createElement(i);return i==="select"&&n&&n.multiple!=null&&r.setAttribute("multiple",n.multiple),r},createText:i=>vr.createTextNode(i),createComment:i=>vr.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>vr.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},insertStaticContent(i,e,t,n,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{vp.innerHTML=n0(n==="svg"?`<svg>${i}</svg>`:n==="mathml"?`<math>${i}</math>`:i);const a=vp.content;if(n==="svg"||n==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},MS=Symbol("_vtc");function TS(i,e,t){const n=i[MS];n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}const xp=Symbol("_vod"),ES=Symbol("_vsh"),bS=Symbol(""),AS=/(^|;)\s*display\s*:/;function wS(i,e,t){const n=i.style,r=un(t);let s=!1;if(t&&!r){if(e)if(un(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Lc(n,a,"")}else for(const o in e)t[o]==null&&Lc(n,o,"");for(const o in t)o==="display"&&(s=!0),Lc(n,o,t[o])}else if(r){if(e!==t){const o=n[bS];o&&(t+=";"+o),n.cssText=t,s=AS.test(t)}}else e&&i.removeAttribute("style");xp in i&&(i[xp]=s?n.display:"",i[ES]&&(n.display="none"))}const yp=/\s*!important$/;function Lc(i,e,t){if(ot(t))t.forEach(n=>Lc(i,e,n));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const n=RS(i,e);yp.test(t)?i.setProperty(oo(n),t.replace(yp,""),"important"):i[n]=t}}const Sp=["Webkit","Moz","ms"],Gu={};function RS(i,e){const t=Gu[e];if(t)return t;let n=hs(e);if(n!=="filter"&&n in i)return Gu[e]=n;n=a_(n);for(let r=0;r<Sp.length;r++){const s=Sp[r]+n;if(s in i)return Gu[e]=s}return e}const Mp="http://www.w3.org/1999/xlink";function Tp(i,e,t,n,r,s=Nx(e)){n&&e.startsWith("xlink:")?t==null?i.removeAttributeNS(Mp,e.slice(6,e.length)):i.setAttributeNS(Mp,e,t):t==null||s&&!l_(t)?i.removeAttribute(e):i.setAttribute(e,s?"":_s(t)?String(t):t)}function Ep(i,e,t,n,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(i[e]=e==="innerHTML"?n0(t):t);return}const s=i.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?i.getAttribute("value")||"":i.value,l=t==null?i.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in i))&&(i.value=l),t==null&&i.removeAttribute(e),i._value=t;return}let o=!1;if(t===""||t==null){const a=typeof i[e];a==="boolean"?t=l_(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{i[e]=t}catch{}o&&i.removeAttribute(r||e)}function CS(i,e,t,n){i.addEventListener(e,t,n)}function PS(i,e,t,n){i.removeEventListener(e,t,n)}const bp=Symbol("_vei");function LS(i,e,t,n,r=null){const s=i[bp]||(i[bp]={}),o=s[e];if(n&&o)o.value=n;else{const[a,l]=IS(e);if(n){const c=s[e]=NS(n,r);CS(i,a,c,l)}else o&&(PS(i,a,o,l),s[e]=void 0)}}const Ap=/(?:Once|Passive|Capture)$/;function IS(i){let e;if(Ap.test(i)){e={};let n;for(;n=i.match(Ap);)i=i.slice(0,i.length-n[0].length),e[n[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):oo(i.slice(2)),e]}let Vu=0;const DS=Promise.resolve(),US=()=>Vu||(DS.then(()=>Vu=0),Vu=Date.now());function NS(i,e){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;ir(OS(n,t.value),e,5,[n])};return t.value=i,t.attached=US(),t}function OS(i,e){if(ot(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(n=>r=>!r._stopped&&n&&n(r))}else return e}const wp=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&i.charCodeAt(2)>96&&i.charCodeAt(2)<123,FS=(i,e,t,n,r,s)=>{const o=r==="svg";e==="class"?TS(i,n,o):e==="style"?wS(i,t,n):hu(e)?Yh(e)||LS(i,e,t,n,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):BS(i,e,n,o))?(Ep(i,e,n),!i.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Tp(i,e,n,o,s,e!=="value")):i._isVueCE&&(/[A-Z]/.test(e)||!un(n))?Ep(i,hs(e),n,s,e):(e==="true-value"?i._trueValue=n:e==="false-value"&&(i._falseValue=n),Tp(i,e,n,o))};function BS(i,e,t,n){if(n)return!!(e==="innerHTML"||e==="textContent"||e in i&&wp(e)&&lt(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=i.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return wp(e)&&un(t)?!1:e in i}const kS=$n({patchProp:FS},SS);let Rp;function zS(){return Rp||(Rp=Xy(kS))}const HS=(...i)=>{const e=zS().createApp(...i),{mount:t}=e;return e.mount=n=>{const r=VS(n);if(!r)return;const s=e._component;!lt(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,GS(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function GS(i){if(i instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&i instanceof MathMLElement)return"mathml"}function VS(i){return un(i)?document.querySelector(i):i}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const dd="157",WS=0,Cp=1,XS=2,i0=1,YS=2,_r=3,Dr=0,Kn=1,Ki=2,os=0,Xo=1,Pp=2,Lp=3,Ip=4,qS=5,Do=100,KS=101,jS=102,Dp=103,Up=104,$S=200,ZS=201,JS=202,QS=203,r0=204,s0=205,eM=206,tM=207,nM=208,iM=209,rM=210,sM=0,oM=1,aM=2,ih=3,lM=4,cM=5,uM=6,fM=7,o0=0,hM=1,dM=2,as=0,pM=1,mM=2,gM=3,a0=4,_M=5,l0=300,na=301,ia=302,rh=303,sh=304,Tu=306,ra=1e3,Qn=1001,Kc=1002,_n=1003,oh=1004,Ic=1005,cn=1006,c0=1007,ds=1008,ls=1009,vM=1010,xM=1011,pd=1012,u0=1013,Jr=1014,Ci=1015,br=1016,f0=1017,h0=1018,Vs=1020,yM=1021,hi=1023,SM=1024,MM=1025,Ws=1026,sa=1027,d0=1028,p0=1029,TM=1030,m0=1031,g0=1033,Wu=33776,Xu=33777,Yu=33778,qu=33779,Np=35840,Op=35841,Fp=35842,Bp=35843,EM=36196,kp=37492,zp=37496,Hp=37808,Gp=37809,Vp=37810,Wp=37811,Xp=37812,Yp=37813,qp=37814,Kp=37815,jp=37816,$p=37817,Zp=37818,Jp=37819,Qp=37820,em=37821,Ku=36492,tm=36494,nm=36495,bM=36283,im=36284,rm=36285,sm=36286,Sl=2300,oa=2301,ju=2302,om=2400,am=2401,lm=2402,AM=2500,wM=0,_0=1,ah=2,v0=3e3,Xs=3001,RM=3200,CM=3201,x0=0,PM=1,di="",$t="srgb",fn="srgb-linear",md="display-p3",Eu="display-p3-linear",jc="linear",Ht="srgb",$c="rec709",Zc="p3",$u=7680,LM=519,IM=512,DM=513,UM=514,NM=515,OM=516,FM=517,BM=518,kM=519,lh=35044,cm="300 es",ch=1035,Ar=2e3,Jc=2001;class xa{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let um=1234567;const el=Math.PI/180,aa=180/Math.PI;function Hi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(En[i&255]+En[i>>8&255]+En[i>>16&255]+En[i>>24&255]+"-"+En[e&255]+En[e>>8&255]+"-"+En[e>>16&15|64]+En[e>>24&255]+"-"+En[t&63|128]+En[t>>8&255]+"-"+En[t>>16&255]+En[t>>24&255]+En[n&255]+En[n>>8&255]+En[n>>16&255]+En[n>>24&255]).toLowerCase()}function xn(i,e,t){return Math.max(e,Math.min(t,i))}function gd(i,e){return(i%e+e)%e}function zM(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function HM(i,e,t){return i!==e?(t-i)/(e-i):0}function tl(i,e,t){return(1-t)*i+t*e}function GM(i,e,t,n){return tl(i,e,1-Math.exp(-t*n))}function VM(i,e=1){return e-Math.abs(gd(i,e*2)-e)}function WM(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function XM(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function YM(i,e){return i+Math.floor(Math.random()*(e-i+1))}function qM(i,e){return i+Math.random()*(e-i)}function KM(i){return i*(.5-Math.random())}function jM(i){i!==void 0&&(um=i);let e=um+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function $M(i){return i*el}function ZM(i){return i*aa}function uh(i){return(i&i-1)===0&&i!==0}function y0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Qc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function JM(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),f=s((e-n)/2),h=o((e-n)/2),d=s((n-e)/2),v=o((n-e)/2);switch(r){case"XYX":i.set(a*u,l*f,l*h,a*c);break;case"YZY":i.set(l*h,a*u,l*f,a*c);break;case"ZXZ":i.set(l*f,l*h,a*u,a*c);break;case"XZX":i.set(a*u,l*v,l*d,a*c);break;case"YXY":i.set(l*d,a*u,l*v,a*c);break;case"ZYZ":i.set(l*v,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ji(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Lt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const fh={DEG2RAD:el,RAD2DEG:aa,generateUUID:Hi,clamp:xn,euclideanModulo:gd,mapLinear:zM,inverseLerp:HM,lerp:tl,damp:GM,pingpong:VM,smoothstep:WM,smootherstep:XM,randInt:YM,randFloat:qM,randFloatSpread:KM,seededRandom:jM,degToRad:$M,radToDeg:ZM,isPowerOfTwo:uh,ceilPowerOfTwo:y0,floorPowerOfTwo:Qc,setQuaternionFromProperEuler:JM,normalize:Lt,denormalize:ji};class vt{constructor(e=0,t=0){vt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(xn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ht{constructor(e,t,n,r,s,o,a,l,c){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],v=n[8],g=r[0],p=r[3],m=r[6],T=r[1],S=r[4],x=r[7],w=r[2],I=r[5],R=r[8];return s[0]=o*g+a*T+l*w,s[3]=o*p+a*S+l*I,s[6]=o*m+a*x+l*R,s[1]=c*g+u*T+f*w,s[4]=c*p+u*S+f*I,s[7]=c*m+u*x+f*R,s[2]=h*g+d*T+v*w,s[5]=h*p+d*S+v*I,s[8]=h*m+d*x+v*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,v=t*f+n*h+r*d;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=f*g,e[1]=(r*c-u*n)*g,e[2]=(a*n-r*o)*g,e[3]=h*g,e[4]=(u*t-r*l)*g,e[5]=(r*s-a*t)*g,e[6]=d*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Zu.makeScale(e,t)),this}rotate(e){return this.premultiply(Zu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Zu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Zu=new ht;function S0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ml(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function QM(){const i=Ml("canvas");return i.style.display="block",i}const fm={};function nl(i){i in fm||(fm[i]=!0,console.warn(i))}const hm=new ht().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),dm=new ht().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),zl={[fn]:{transfer:jc,primaries:$c,toReference:i=>i,fromReference:i=>i},[$t]:{transfer:Ht,primaries:$c,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Eu]:{transfer:jc,primaries:Zc,toReference:i=>i.applyMatrix3(dm),fromReference:i=>i.applyMatrix3(hm)},[md]:{transfer:Ht,primaries:Zc,toReference:i=>i.convertSRGBToLinear().applyMatrix3(dm),fromReference:i=>i.applyMatrix3(hm).convertLinearToSRGB()}},eT=new Set([fn,Eu]),Ct={enabled:!0,_workingColorSpace:fn,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!eT.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=zl[e].toReference,r=zl[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return zl[i].primaries},getTransfer:function(i){return i===di?jc:zl[i].transfer}};function Yo(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ju(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let uo;class M0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{uo===void 0&&(uo=Ml("canvas")),uo.width=e.width,uo.height=e.height;const n=uo.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=uo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ml("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Yo(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Yo(t[n]/255)*255):t[n]=Yo(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let tT=0;class T0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tT++}),this.uuid=Hi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Qu(r[o].image)):s.push(Qu(r[o]))}else s=Qu(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Qu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?M0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let nT=0;class Sn extends xa{constructor(e=Sn.DEFAULT_IMAGE,t=Sn.DEFAULT_MAPPING,n=Qn,r=Qn,s=cn,o=ds,a=hi,l=ls,c=Sn.DEFAULT_ANISOTROPY,u=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nT++}),this.uuid=Hi(),this.name="",this.source=new T0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(nl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Xs?$t:di),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==l0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ra:e.x=e.x-Math.floor(e.x);break;case Qn:e.x=e.x<0?0:1;break;case Kc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ra:e.y=e.y-Math.floor(e.y);break;case Qn:e.y=e.y<0?0:1;break;case Kc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return nl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===$t?Xs:v0}set encoding(e){nl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Xs?$t:di}}Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=l0;Sn.DEFAULT_ANISOTROPY=1;class Nt{constructor(e=0,t=0,n=0,r=1){Nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],v=l[9],g=l[2],p=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-g)<.01&&Math.abs(v-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+g)<.1&&Math.abs(v+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,x=(d+1)/2,w=(m+1)/2,I=(u+h)/4,R=(f+g)/4,z=(v+p)/4;return S>x&&S>w?S<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(S),r=I/n,s=R/n):x>w?x<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),n=I/r,s=z/r):w<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),n=R/s,r=z/s),this.set(n,r,s,t),this}let T=Math.sqrt((p-v)*(p-v)+(f-g)*(f-g)+(h-u)*(h-u));return Math.abs(T)<.001&&(T=1),this.x=(p-v)/T,this.y=(f-g)/T,this.z=(h-u)/T,this.w=Math.acos((c+d+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class iT extends xa{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(nl("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Xs?$t:di),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Sn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new T0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class eo extends iT{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class E0 extends Sn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=_n,this.minFilter=_n,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rT extends Sn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=_n,this.minFilter=_n,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vs{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],f=n[r+3];const h=s[o+0],d=s[o+1],v=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=d,e[t+2]=v,e[t+3]=g;return}if(f!==g||l!==h||c!==d||u!==v){let p=1-a;const m=l*h+c*d+u*v+f*g,T=m>=0?1:-1,S=1-m*m;if(S>Number.EPSILON){const w=Math.sqrt(S),I=Math.atan2(w,m*T);p=Math.sin(p*I)/w,a=Math.sin(a*I)/w}const x=a*T;if(l=l*p+h*x,c=c*p+d*x,u=u*p+v*x,f=f*p+g*x,p===1-a){const w=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=w,c*=w,u*=w,f*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],f=s[o],h=s[o+1],d=s[o+2],v=s[o+3];return e[t]=a*v+u*f+l*d-c*h,e[t+1]=l*v+u*h+c*f-a*d,e[t+2]=c*v+u*d+a*h-l*f,e[t+3]=u*v-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),f=a(s/2),h=l(n/2),d=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*v,this._y=c*d*f-h*u*v,this._z=c*u*v+h*d*f,this._w=c*u*f-h*d*v;break;case"YXZ":this._x=h*u*f+c*d*v,this._y=c*d*f-h*u*v,this._z=c*u*v-h*d*f,this._w=c*u*f+h*d*v;break;case"ZXY":this._x=h*u*f-c*d*v,this._y=c*d*f+h*u*v,this._z=c*u*v+h*d*f,this._w=c*u*f-h*d*v;break;case"ZYX":this._x=h*u*f-c*d*v,this._y=c*d*f+h*u*v,this._z=c*u*v-h*d*f,this._w=c*u*f+h*d*v;break;case"YZX":this._x=h*u*f+c*d*v,this._y=c*d*f+h*u*v,this._z=c*u*v-h*d*f,this._w=c*u*f-h*d*v;break;case"XZY":this._x=h*u*f-c*d*v,this._y=c*d*f-h*u*v,this._z=c*u*v+h*d*f,this._w=c*u*f+h*d*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,t=0,n=0){Y.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*r-a*n,u=l*n+a*t-s*r,f=l*r+s*n-o*t,h=-s*t-o*n-a*r;return this.x=c*l+h*-s+u*-a-f*-o,this.y=u*l+h*-o+f*-s-c*-a,this.z=f*l+h*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ef.copy(this).projectOnVector(e),this.sub(ef)}reflect(e){return this.sub(ef.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(xn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ef=new Y,pm=new vs;class Br{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(fr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(fr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=fr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),fo.copy(e.boundingBox),fo.applyMatrix4(e.matrixWorld),this.union(fo);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)fr.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(fr)}else r.boundingBox===null&&r.computeBoundingBox(),fo.copy(r.boundingBox),fo.applyMatrix4(e.matrixWorld),this.union(fo)}const n=e.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,fr),fr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Aa),Hl.subVectors(this.max,Aa),ho.subVectors(e.a,Aa),po.subVectors(e.b,Aa),mo.subVectors(e.c,Aa),kr.subVectors(po,ho),zr.subVectors(mo,po),Es.subVectors(ho,mo);let t=[0,-kr.z,kr.y,0,-zr.z,zr.y,0,-Es.z,Es.y,kr.z,0,-kr.x,zr.z,0,-zr.x,Es.z,0,-Es.x,-kr.y,kr.x,0,-zr.y,zr.x,0,-Es.y,Es.x,0];return!tf(t,ho,po,mo,Hl)||(t=[1,0,0,0,1,0,0,0,1],!tf(t,ho,po,mo,Hl))?!1:(Gl.crossVectors(kr,zr),t=[Gl.x,Gl.y,Gl.z],tf(t,ho,po,mo,Hl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ur[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ur[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ur[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ur[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ur[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ur[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ur[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ur[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ur),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ur=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],fr=new Y,fo=new Br,ho=new Y,po=new Y,mo=new Y,kr=new Y,zr=new Y,Es=new Y,Aa=new Y,Hl=new Y,Gl=new Y,bs=new Y;function tf(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){bs.fromArray(i,s);const a=r.x*Math.abs(bs.x)+r.y*Math.abs(bs.y)+r.z*Math.abs(bs.z),l=e.dot(bs),c=t.dot(bs),u=n.dot(bs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const sT=new Br,wa=new Y,nf=new Y;class sr{constructor(e=new Y,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):sT.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wa.subVectors(e,this.center);const t=wa.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(wa,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wa.copy(e.center).add(nf)),this.expandByPoint(wa.copy(e.center).sub(nf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hr=new Y,rf=new Y,Vl=new Y,Hr=new Y,sf=new Y,Wl=new Y,of=new Y;class bu{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=hr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hr.copy(this.origin).addScaledVector(this.direction,t),hr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){rf.copy(e).add(t).multiplyScalar(.5),Vl.copy(t).sub(e).normalize(),Hr.copy(this.origin).sub(rf);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Vl),a=Hr.dot(this.direction),l=-Hr.dot(Vl),c=Hr.lengthSq(),u=Math.abs(1-o*o);let f,h,d,v;if(u>0)if(f=o*l-a,h=o*a-l,v=s*u,f>=0)if(h>=-v)if(h<=v){const g=1/u;f*=g,h*=g,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-v?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=v?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(rf).addScaledVector(Vl,h),d}intersectSphere(e,t){hr.subVectors(e.center,this.origin);const n=hr.dot(this.direction),r=hr.dot(hr)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,hr)!==null}intersectTriangle(e,t,n,r,s){sf.subVectors(t,e),Wl.subVectors(n,e),of.crossVectors(sf,Wl);let o=this.direction.dot(of),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Hr.subVectors(this.origin,e);const l=a*this.direction.dot(Wl.crossVectors(Hr,Wl));if(l<0)return null;const c=a*this.direction.dot(sf.cross(Hr));if(c<0||l+c>o)return null;const u=-a*Hr.dot(of);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(e,t,n,r,s,o,a,l,c,u,f,h,d,v,g,p){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,f,h,d,v,g,p)}set(e,t,n,r,s,o,a,l,c,u,f,h,d,v,g,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=f,m[14]=h,m[3]=d,m[7]=v,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/go.setFromMatrixColumn(e,0).length(),s=1/go.setFromMatrixColumn(e,1).length(),o=1/go.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,d=o*f,v=a*u,g=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+v*c,t[5]=h-g*c,t[9]=-a*l,t[2]=g-h*c,t[6]=v+d*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,v=c*u,g=c*f;t[0]=h+g*a,t[4]=v*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-v,t[6]=g+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,v=c*u,g=c*f;t[0]=h-g*a,t[4]=-o*f,t[8]=v+d*a,t[1]=d+v*a,t[5]=o*u,t[9]=g-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*f,v=a*u,g=a*f;t[0]=l*u,t[4]=v*c-d,t[8]=h*c+g,t[1]=l*f,t[5]=g*c+h,t[9]=d*c-v,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,v=a*l,g=a*c;t[0]=l*u,t[4]=g-h*f,t[8]=v*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+v,t[10]=h-g*f}else if(e.order==="XZY"){const h=o*l,d=o*c,v=a*l,g=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+g,t[5]=o*u,t[9]=d*f-v,t[2]=v*f-d,t[6]=a*u,t[10]=g*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(oT,e,aT)}lookAt(e,t,n){const r=this.elements;return si.subVectors(e,t),si.lengthSq()===0&&(si.z=1),si.normalize(),Gr.crossVectors(n,si),Gr.lengthSq()===0&&(Math.abs(n.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),Gr.crossVectors(n,si)),Gr.normalize(),Xl.crossVectors(si,Gr),r[0]=Gr.x,r[4]=Xl.x,r[8]=si.x,r[1]=Gr.y,r[5]=Xl.y,r[9]=si.y,r[2]=Gr.z,r[6]=Xl.z,r[10]=si.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],v=n[2],g=n[6],p=n[10],m=n[14],T=n[3],S=n[7],x=n[11],w=n[15],I=r[0],R=r[4],z=r[8],M=r[12],P=r[1],Q=r[5],W=r[9],se=r[13],k=r[2],q=r[6],Z=r[10],X=r[14],j=r[3],$=r[7],D=r[11],G=r[15];return s[0]=o*I+a*P+l*k+c*j,s[4]=o*R+a*Q+l*q+c*$,s[8]=o*z+a*W+l*Z+c*D,s[12]=o*M+a*se+l*X+c*G,s[1]=u*I+f*P+h*k+d*j,s[5]=u*R+f*Q+h*q+d*$,s[9]=u*z+f*W+h*Z+d*D,s[13]=u*M+f*se+h*X+d*G,s[2]=v*I+g*P+p*k+m*j,s[6]=v*R+g*Q+p*q+m*$,s[10]=v*z+g*W+p*Z+m*D,s[14]=v*M+g*se+p*X+m*G,s[3]=T*I+S*P+x*k+w*j,s[7]=T*R+S*Q+x*q+w*$,s[11]=T*z+S*W+x*Z+w*D,s[15]=T*M+S*se+x*X+w*G,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],v=e[3],g=e[7],p=e[11],m=e[15];return v*(+s*l*f-r*c*f-s*a*h+n*c*h+r*a*d-n*l*d)+g*(+t*l*d-t*c*h+s*o*h-r*o*d+r*c*u-s*l*u)+p*(+t*c*f-t*a*d-s*o*f+n*o*d+s*a*u-n*c*u)+m*(-r*a*u-t*l*f+t*a*h+r*o*f-n*o*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],v=e[12],g=e[13],p=e[14],m=e[15],T=f*p*c-g*h*c+g*l*d-a*p*d-f*l*m+a*h*m,S=v*h*c-u*p*c-v*l*d+o*p*d+u*l*m-o*h*m,x=u*g*c-v*f*c+v*a*d-o*g*d-u*a*m+o*f*m,w=v*f*l-u*g*l-v*a*h+o*g*h+u*a*p-o*f*p,I=t*T+n*S+r*x+s*w;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/I;return e[0]=T*R,e[1]=(g*h*s-f*p*s-g*r*d+n*p*d+f*r*m-n*h*m)*R,e[2]=(a*p*s-g*l*s+g*r*c-n*p*c-a*r*m+n*l*m)*R,e[3]=(f*l*s-a*h*s-f*r*c+n*h*c+a*r*d-n*l*d)*R,e[4]=S*R,e[5]=(u*p*s-v*h*s+v*r*d-t*p*d-u*r*m+t*h*m)*R,e[6]=(v*l*s-o*p*s-v*r*c+t*p*c+o*r*m-t*l*m)*R,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*d+t*l*d)*R,e[8]=x*R,e[9]=(v*f*s-u*g*s-v*n*d+t*g*d+u*n*m-t*f*m)*R,e[10]=(o*g*s-v*a*s+v*n*c-t*g*c-o*n*m+t*a*m)*R,e[11]=(u*a*s-o*f*s-u*n*c+t*f*c+o*n*d-t*a*d)*R,e[12]=w*R,e[13]=(u*g*r-v*f*r+v*n*h-t*g*h-u*n*p+t*f*p)*R,e[14]=(v*a*r-o*g*r-v*n*l+t*g*l+o*n*p-t*a*p)*R,e[15]=(o*f*r-u*a*r+u*n*l-t*f*l-o*n*h+t*a*h)*R,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,v=s*f,g=o*u,p=o*f,m=a*f,T=l*c,S=l*u,x=l*f,w=n.x,I=n.y,R=n.z;return r[0]=(1-(g+m))*w,r[1]=(d+x)*w,r[2]=(v-S)*w,r[3]=0,r[4]=(d-x)*I,r[5]=(1-(h+m))*I,r[6]=(p+T)*I,r[7]=0,r[8]=(v+S)*R,r[9]=(p-T)*R,r[10]=(1-(h+g))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=go.set(r[0],r[1],r[2]).length();const o=go.set(r[4],r[5],r[6]).length(),a=go.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ui.copy(this);const c=1/s,u=1/o,f=1/a;return Ui.elements[0]*=c,Ui.elements[1]*=c,Ui.elements[2]*=c,Ui.elements[4]*=u,Ui.elements[5]*=u,Ui.elements[6]*=u,Ui.elements[8]*=f,Ui.elements[9]*=f,Ui.elements[10]*=f,t.setFromRotationMatrix(Ui),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=Ar){const l=this.elements,c=2*s/(t-e),u=2*s/(n-r),f=(t+e)/(t-e),h=(n+r)/(n-r);let d,v;if(a===Ar)d=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Jc)d=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=Ar){const l=this.elements,c=1/(t-e),u=1/(n-r),f=1/(o-s),h=(t+e)*c,d=(n+r)*u;let v,g;if(a===Ar)v=(o+s)*f,g=-2*f;else if(a===Jc)v=s*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const go=new Y,Ui=new pt,oT=new Y(0,0,0),aT=new Y(1,1,1),Gr=new Y,Xl=new Y,si=new Y,mm=new pt,gm=new vs;class Au{constructor(e=0,t=0,n=0,r=Au.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(xn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(xn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-xn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(xn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-xn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return mm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mm,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gm.setFromEuler(this),this.setFromQuaternion(gm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Au.DEFAULT_ORDER="XYZ";class b0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let lT=0;const _m=new Y,_o=new vs,dr=new pt,Yl=new Y,Ra=new Y,cT=new Y,uT=new vs,vm=new Y(1,0,0),xm=new Y(0,1,0),ym=new Y(0,0,1),fT={type:"added"},hT={type:"removed"};class jt extends xa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lT++}),this.uuid=Hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jt.DEFAULT_UP.clone();const e=new Y,t=new Au,n=new vs,r=new Y(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pt},normalMatrix:{value:new ht}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new b0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _o.setFromAxisAngle(e,t),this.quaternion.multiply(_o),this}rotateOnWorldAxis(e,t){return _o.setFromAxisAngle(e,t),this.quaternion.premultiply(_o),this}rotateX(e){return this.rotateOnAxis(vm,e)}rotateY(e){return this.rotateOnAxis(xm,e)}rotateZ(e){return this.rotateOnAxis(ym,e)}translateOnAxis(e,t){return _m.copy(e).applyQuaternion(this.quaternion),this.position.add(_m.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vm,e)}translateY(e){return this.translateOnAxis(xm,e)}translateZ(e){return this.translateOnAxis(ym,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(dr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Yl.copy(e):Yl.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dr.lookAt(Ra,Yl,this.up):dr.lookAt(Yl,Ra,this.up),this.quaternion.setFromRotationMatrix(dr),r&&(dr.extractRotation(r.matrixWorld),_o.setFromRotationMatrix(dr),this.quaternion.premultiply(_o.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(fT)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hT)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),dr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),dr.multiply(e.parent.matrixWorld)),e.applyMatrix4(dr),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ra,e,cT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ra,uT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),v=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),v.length>0&&(n.nodes=v)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}jt.DEFAULT_UP=new Y(0,1,0);jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ni=new Y,pr=new Y,af=new Y,mr=new Y,vo=new Y,xo=new Y,Sm=new Y,lf=new Y,cf=new Y,uf=new Y;let ql=!1;class Bi{constructor(e=new Y,t=new Y,n=new Y){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Ni.subVectors(e,t),r.cross(Ni);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Ni.subVectors(r,t),pr.subVectors(n,t),af.subVectors(e,t);const o=Ni.dot(Ni),a=Ni.dot(pr),l=Ni.dot(af),c=pr.dot(pr),u=pr.dot(af),f=o*c-a*a;if(f===0)return s.set(-2,-1,-1);const h=1/f,d=(c*l-a*u)*h,v=(o*u-a*l)*h;return s.set(1-d-v,v,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,mr),mr.x>=0&&mr.y>=0&&mr.x+mr.y<=1}static getUV(e,t,n,r,s,o,a,l){return ql===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ql=!0),this.getInterpolation(e,t,n,r,s,o,a,l)}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,mr),l.setScalar(0),l.addScaledVector(s,mr.x),l.addScaledVector(o,mr.y),l.addScaledVector(a,mr.z),l}static isFrontFacing(e,t,n,r){return Ni.subVectors(n,t),pr.subVectors(e,t),Ni.cross(pr).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ni.subVectors(this.c,this.b),pr.subVectors(this.a,this.b),Ni.cross(pr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Bi.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return ql===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ql=!0),Bi.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}getInterpolation(e,t,n,r,s){return Bi.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Bi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;vo.subVectors(r,n),xo.subVectors(s,n),lf.subVectors(e,n);const l=vo.dot(lf),c=xo.dot(lf);if(l<=0&&c<=0)return t.copy(n);cf.subVectors(e,r);const u=vo.dot(cf),f=xo.dot(cf);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(vo,o);uf.subVectors(e,s);const d=vo.dot(uf),v=xo.dot(uf);if(v>=0&&d<=v)return t.copy(s);const g=d*c-l*v;if(g<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(n).addScaledVector(xo,a);const p=u*v-d*f;if(p<=0&&f-u>=0&&d-v>=0)return Sm.subVectors(s,r),a=(f-u)/(f-u+(d-v)),t.copy(r).addScaledVector(Sm,a);const m=1/(p+g+h);return o=g*m,a=h*m,t.copy(n).addScaledVector(vo,o).addScaledVector(xo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let dT=0;class tr extends xa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dT++}),this.uuid=Hi(),this.name="",this.type="Material",this.blending=Xo,this.side=Dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=r0,this.blendDst=s0,this.blendEquation=Do,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ih,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=LM,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$u,this.stencilZFail=$u,this.stencilZPass=$u,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Xo&&(n.blending=this.blending),this.side!==Dr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const A0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vr={h:0,s:0,l:0},Kl={h:0,s:0,l:0};function ff(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ct{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ct.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Ct.workingColorSpace){if(e=gd(e,1),t=xn(t,0,1),n=xn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=ff(o,s,e+1/3),this.g=ff(o,s,e),this.b=ff(o,s,e-1/3)}return Ct.toWorkingColorSpace(this,r),this}setStyle(e,t=$t){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$t){const n=A0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yo(e.r),this.g=Yo(e.g),this.b=Yo(e.b),this}copyLinearToSRGB(e){return this.r=Ju(e.r),this.g=Ju(e.g),this.b=Ju(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$t){return Ct.fromWorkingColorSpace(bn.copy(this),e),Math.round(xn(bn.r*255,0,255))*65536+Math.round(xn(bn.g*255,0,255))*256+Math.round(xn(bn.b*255,0,255))}getHexString(e=$t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ct.workingColorSpace){Ct.fromWorkingColorSpace(bn.copy(this),t);const n=bn.r,r=bn.g,s=bn.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ct.workingColorSpace){return Ct.fromWorkingColorSpace(bn.copy(this),t),e.r=bn.r,e.g=bn.g,e.b=bn.b,e}getStyle(e=$t){Ct.fromWorkingColorSpace(bn.copy(this),e);const t=bn.r,n=bn.g,r=bn.b;return e!==$t?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Vr),this.setHSL(Vr.h+e,Vr.s+t,Vr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Vr),e.getHSL(Kl);const n=tl(Vr.h,Kl.h,t),r=tl(Vr.s,Kl.s,t),s=tl(Vr.l,Kl.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bn=new ct;ct.NAMES=A0;class Bs extends tr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=o0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tr=pT();function pT(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,r[l]=24,r[l|256]=24):(n[l]=31744,n[l|256]=64512,r[l]=13,r[l|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:o,offsetTable:a}}function mT(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=xn(i,-65504,65504),Tr.floatView[0]=i;const e=Tr.uint32View[0],t=e>>23&511;return Tr.baseTable[t]+((e&8388607)>>Tr.shiftTable[t])}function gT(i){const e=i>>10;return Tr.uint32View[0]=Tr.mantissaTable[Tr.offsetTable[e]+(i&1023)]+Tr.exponentTable[e],Tr.floatView[0]}const Mm={toHalfFloat:mT,fromHalfFloat:gT},nn=new Y,jl=new vt;class jn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=lh,this.updateRange={offset:0,count:-1},this.gpuType=Ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)jl.fromBufferAttribute(this,t),jl.applyMatrix3(e),this.setXY(t,jl.x,jl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix3(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ji(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ji(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ji(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ji(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ji(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),r=Lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),r=Lt(r,this.array),s=Lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==lh&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class w0 extends jn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class R0 extends jn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Cr extends jn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let _T=0;const Ti=new pt,hf=new jt,yo=new Y,oi=new Br,Ca=new Br,pn=new Y;class or extends xa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_T++}),this.uuid=Hi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(S0(e)?R0:w0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ht().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ti.makeRotationFromQuaternion(e),this.applyMatrix4(Ti),this}rotateX(e){return Ti.makeRotationX(e),this.applyMatrix4(Ti),this}rotateY(e){return Ti.makeRotationY(e),this.applyMatrix4(Ti),this}rotateZ(e){return Ti.makeRotationZ(e),this.applyMatrix4(Ti),this}translate(e,t,n){return Ti.makeTranslation(e,t,n),this.applyMatrix4(Ti),this}scale(e,t,n){return Ti.makeScale(e,t,n),this.applyMatrix4(Ti),this}lookAt(e){return hf.lookAt(e),hf.updateMatrix(),this.applyMatrix4(hf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yo).negate(),this.translate(yo.x,yo.y,yo.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Cr(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Br);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];oi.setFromBufferAttribute(s),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Y,1/0);return}if(e){const n=this.boundingSphere.center;if(oi.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ca.setFromBufferAttribute(a),this.morphTargetsRelative?(pn.addVectors(oi.min,Ca.min),oi.expandByPoint(pn),pn.addVectors(oi.max,Ca.max),oi.expandByPoint(pn)):(oi.expandByPoint(Ca.min),oi.expandByPoint(Ca.max))}oi.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)pn.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(pn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)pn.fromBufferAttribute(a,c),l&&(yo.fromBufferAttribute(e,c),pn.add(yo)),r=Math.max(r,n.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let P=0;P<a;P++)c[P]=new Y,u[P]=new Y;const f=new Y,h=new Y,d=new Y,v=new vt,g=new vt,p=new vt,m=new Y,T=new Y;function S(P,Q,W){f.fromArray(r,P*3),h.fromArray(r,Q*3),d.fromArray(r,W*3),v.fromArray(o,P*2),g.fromArray(o,Q*2),p.fromArray(o,W*2),h.sub(f),d.sub(f),g.sub(v),p.sub(v);const se=1/(g.x*p.y-p.x*g.y);isFinite(se)&&(m.copy(h).multiplyScalar(p.y).addScaledVector(d,-g.y).multiplyScalar(se),T.copy(d).multiplyScalar(g.x).addScaledVector(h,-p.x).multiplyScalar(se),c[P].add(m),c[Q].add(m),c[W].add(m),u[P].add(T),u[Q].add(T),u[W].add(T))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let P=0,Q=x.length;P<Q;++P){const W=x[P],se=W.start,k=W.count;for(let q=se,Z=se+k;q<Z;q+=3)S(n[q+0],n[q+1],n[q+2])}const w=new Y,I=new Y,R=new Y,z=new Y;function M(P){R.fromArray(s,P*3),z.copy(R);const Q=c[P];w.copy(Q),w.sub(R.multiplyScalar(R.dot(Q))).normalize(),I.crossVectors(z,Q);const se=I.dot(u[P])<0?-1:1;l[P*4]=w.x,l[P*4+1]=w.y,l[P*4+2]=w.z,l[P*4+3]=se}for(let P=0,Q=x.length;P<Q;++P){const W=x[P],se=W.start,k=W.count;for(let q=se,Z=se+k;q<Z;q+=3)M(n[q+0]),M(n[q+1]),M(n[q+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new jn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const r=new Y,s=new Y,o=new Y,a=new Y,l=new Y,c=new Y,u=new Y,f=new Y;if(e)for(let h=0,d=e.count;h<d;h+=3){const v=e.getX(h+0),g=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,p),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)pn.fromBufferAttribute(e,t),pn.normalize(),e.setXYZ(t,pn.x,pn.y,pn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,v=0;for(let g=0,p=l.length;g<p;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*u;for(let m=0;m<u;m++)h[v++]=c[d++]}return new jn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new or,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tm=new pt,As=new bu,$l=new sr,Em=new Y,So=new Y,Mo=new Y,To=new Y,df=new Y,Zl=new Y,Jl=new vt,Ql=new vt,ec=new vt,bm=new Y,Am=new Y,wm=new Y,tc=new Y,nc=new Y;class _i extends jt{constructor(e=new or,t=new Bs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Zl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(df.fromBufferAttribute(f,e),o?Zl.addScaledVector(df,u):Zl.addScaledVector(df.sub(t),u))}t.add(Zl)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$l.copy(n.boundingSphere),$l.applyMatrix4(s),As.copy(e.ray).recast(e.near),!($l.containsPoint(As.origin)===!1&&(As.intersectSphere($l,Em)===null||As.origin.distanceToSquared(Em)>(e.far-e.near)**2))&&(Tm.copy(s).invert(),As.copy(e.ray).applyMatrix4(Tm),!(n.boundingBox!==null&&As.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,As)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,g=h.length;v<g;v++){const p=h[v],m=o[p.materialIndex],T=Math.max(p.start,d.start),S=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let x=T,w=S;x<w;x+=3){const I=a.getX(x),R=a.getX(x+1),z=a.getX(x+2);r=ic(this,m,e,n,c,u,f,I,R,z),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let p=v,m=g;p<m;p+=3){const T=a.getX(p),S=a.getX(p+1),x=a.getX(p+2);r=ic(this,o,e,n,c,u,f,T,S,x),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,g=h.length;v<g;v++){const p=h[v],m=o[p.materialIndex],T=Math.max(p.start,d.start),S=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let x=T,w=S;x<w;x+=3){const I=x,R=x+1,z=x+2;r=ic(this,m,e,n,c,u,f,I,R,z),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let p=v,m=g;p<m;p+=3){const T=p,S=p+1,x=p+2;r=ic(this,o,e,n,c,u,f,T,S,x),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function vT(i,e,t,n,r,s,o,a){let l;if(e.side===Kn?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===Dr,a),l===null)return null;nc.copy(a),nc.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(nc);return c<t.near||c>t.far?null:{distance:c,point:nc.clone(),object:i}}function ic(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,So),i.getVertexPosition(l,Mo),i.getVertexPosition(c,To);const u=vT(i,e,t,n,So,Mo,To,tc);if(u){r&&(Jl.fromBufferAttribute(r,a),Ql.fromBufferAttribute(r,l),ec.fromBufferAttribute(r,c),u.uv=Bi.getInterpolation(tc,So,Mo,To,Jl,Ql,ec,new vt)),s&&(Jl.fromBufferAttribute(s,a),Ql.fromBufferAttribute(s,l),ec.fromBufferAttribute(s,c),u.uv1=Bi.getInterpolation(tc,So,Mo,To,Jl,Ql,ec,new vt),u.uv2=u.uv1),o&&(bm.fromBufferAttribute(o,a),Am.fromBufferAttribute(o,l),wm.fromBufferAttribute(o,c),u.normal=Bi.getInterpolation(tc,So,Mo,To,bm,Am,wm,new Y),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new Y,materialIndex:0};Bi.getNormal(So,Mo,To,f.normal),u.face=f}return u}class ya extends or{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;v("z","y","x",-1,-1,n,t,e,o,s,0),v("z","y","x",1,-1,n,t,-e,o,s,1),v("x","z","y",1,1,e,n,t,r,o,2),v("x","z","y",1,-1,e,n,-t,r,o,3),v("x","y","z",1,-1,e,t,n,r,s,4),v("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Cr(c,3)),this.setAttribute("normal",new Cr(u,3)),this.setAttribute("uv",new Cr(f,2));function v(g,p,m,T,S,x,w,I,R,z,M){const P=x/R,Q=w/z,W=x/2,se=w/2,k=I/2,q=R+1,Z=z+1;let X=0,j=0;const $=new Y;for(let D=0;D<Z;D++){const G=D*Q-se;for(let J=0;J<q;J++){const Te=J*P-W;$[g]=Te*T,$[p]=G*S,$[m]=k,c.push($.x,$.y,$.z),$[g]=0,$[p]=0,$[m]=I>0?1:-1,u.push($.x,$.y,$.z),f.push(J/R),f.push(1-D/z),X+=1}}for(let D=0;D<z;D++)for(let G=0;G<R;G++){const J=h+G+q*D,Te=h+G+q*(D+1),ye=h+(G+1)+q*(D+1),Ee=h+(G+1)+q*D;l.push(J,Te,Ee),l.push(Te,ye,Ee),j+=6}a.addGroup(d,j,M),d+=j,h+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ya(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function la(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Bn(i){const e={};for(let t=0;t<i.length;t++){const n=la(i[t]);for(const r in n)e[r]=n[r]}return e}function xT(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function C0(i){return i.getRenderTarget()===null?i.outputColorSpace:Ct.workingColorSpace}const P0={clone:la,merge:Bn};var yT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ST=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ur extends tr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yT,this.fragmentShader=ST,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=la(e.uniforms),this.uniformsGroups=xT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class L0 extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=Ar}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Cn extends L0{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=aa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(el*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return aa*2*Math.atan(Math.tan(el*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(el*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Eo=-90,bo=1;class MT extends jt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Cn(Eo,bo,e,t);r.layers=this.layers,this.add(r);const s=new Cn(Eo,bo,e,t);s.layers=this.layers,this.add(s);const o=new Cn(Eo,bo,e,t);o.layers=this.layers,this.add(o);const a=new Cn(Eo,bo,e,t);a.layers=this.layers,this.add(a);const l=new Cn(Eo,bo,e,t);l.layers=this.layers,this.add(l);const c=new Cn(Eo,bo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Ar)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Jc)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class I0 extends Sn{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:na,super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class TT extends eo{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(nl("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Xs?$t:di),this.texture=new I0(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:cn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ya(5,5,5),s=new Ur({name:"CubemapFromEquirect",uniforms:la(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kn,blending:os});s.uniforms.tEquirect.value=t;const o=new _i(r,s),a=t.minFilter;return t.minFilter===ds&&(t.minFilter=cn),new MT(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const pf=new Y,ET=new Y,bT=new ht;class Is{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=pf.subVectors(n,t).cross(ET.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(pf),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||bT.getNormalMatrix(e),r=this.coplanarPoint(pf).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ws=new sr,rc=new Y;class _d{constructor(e=new Is,t=new Is,n=new Is,r=new Is,s=new Is,o=new Is){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ar){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],d=r[8],v=r[9],g=r[10],p=r[11],m=r[12],T=r[13],S=r[14],x=r[15];if(n[0].setComponents(l-s,h-c,p-d,x-m).normalize(),n[1].setComponents(l+s,h+c,p+d,x+m).normalize(),n[2].setComponents(l+o,h+u,p+v,x+T).normalize(),n[3].setComponents(l-o,h-u,p-v,x-T).normalize(),n[4].setComponents(l-a,h-f,p-g,x-S).normalize(),t===Ar)n[5].setComponents(l+a,h+f,p+g,x+S).normalize();else if(t===Jc)n[5].setComponents(a,f,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ws.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ws.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ws)}intersectsSprite(e){return ws.center.set(0,0,0),ws.radius=.7071067811865476,ws.applyMatrix4(e.matrixWorld),this.intersectsSphere(ws)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(rc.x=r.normal.x>0?e.max.x:e.min.x,rc.y=r.normal.y>0?e.max.y:e.min.y,rc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(rc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function D0(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function AT(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,u){const f=c.array,h=c.usage,d=i.createBuffer();i.bindBuffer(u,d),i.bufferData(u,f,h),c.onUploadCallback();let v;if(f instanceof Float32Array)v=i.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)v=i.SHORT;else if(f instanceof Uint32Array)v=i.UNSIGNED_INT;else if(f instanceof Int32Array)v=i.INT;else if(f instanceof Int8Array)v=i.BYTE;else if(f instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:d,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const h=u.array,d=u.updateRange;i.bindBuffer(f,c),d.count===-1?i.bufferSubData(f,0,h):(t?i.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):i.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);f===void 0?n.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:o,remove:a,update:l}}class vd extends or{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,d=[],v=[],g=[],p=[];for(let m=0;m<u;m++){const T=m*h-o;for(let S=0;S<c;S++){const x=S*f-s;v.push(x,-T,0),g.push(0,0,1),p.push(S/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let T=0;T<a;T++){const S=T+c*m,x=T+c*(m+1),w=T+1+c*(m+1),I=T+1+c*m;d.push(S,x,I),d.push(x,w,I)}this.setIndex(d),this.setAttribute("position",new Cr(v,3)),this.setAttribute("normal",new Cr(g,3)),this.setAttribute("uv",new Cr(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vd(e.width,e.height,e.widthSegments,e.heightSegments)}}var wT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,RT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,CT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,PT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,LT=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,IT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,DT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,UT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,NT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,OT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,FT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,BT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,kT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,HT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,GT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,VT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,WT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,XT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,YT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,qT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,KT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,jT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$T=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ZT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,JT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,QT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tE="gl_FragColor = linearToOutputTexel( gl_FragColor );",nE=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,iE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,rE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,oE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,aE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,lE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,dE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,pE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_E=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,vE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,xE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,SE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ME=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,TE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,EE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal;
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,AE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,RE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,CE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,LE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,IE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,DE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,UE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,NE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,OE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,FE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,BE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,zE=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,HE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,GE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,VE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,WE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,KE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$E=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ZE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,JE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,QE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,eb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ib=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ob=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,ab=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,cb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ub=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,hb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,db=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,pb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_b=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,yb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Mb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Tb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Eb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ab=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pb=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Lb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Ib=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Db=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ub=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ob=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bb=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,kb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Vb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Xb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Yb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,jb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$b=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Qb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eA=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,at={alphahash_fragment:wT,alphahash_pars_fragment:RT,alphamap_fragment:CT,alphamap_pars_fragment:PT,alphatest_fragment:LT,alphatest_pars_fragment:IT,aomap_fragment:DT,aomap_pars_fragment:UT,begin_vertex:NT,beginnormal_vertex:OT,bsdfs:FT,iridescence_fragment:BT,bumpmap_pars_fragment:kT,clipping_planes_fragment:zT,clipping_planes_pars_fragment:HT,clipping_planes_pars_vertex:GT,clipping_planes_vertex:VT,color_fragment:WT,color_pars_fragment:XT,color_pars_vertex:YT,color_vertex:qT,common:KT,cube_uv_reflection_fragment:jT,defaultnormal_vertex:$T,displacementmap_pars_vertex:ZT,displacementmap_vertex:JT,emissivemap_fragment:QT,emissivemap_pars_fragment:eE,colorspace_fragment:tE,colorspace_pars_fragment:nE,envmap_fragment:iE,envmap_common_pars_fragment:rE,envmap_pars_fragment:sE,envmap_pars_vertex:oE,envmap_physical_pars_fragment:vE,envmap_vertex:aE,fog_vertex:lE,fog_pars_vertex:cE,fog_fragment:uE,fog_pars_fragment:fE,gradientmap_pars_fragment:hE,lightmap_fragment:dE,lightmap_pars_fragment:pE,lights_lambert_fragment:mE,lights_lambert_pars_fragment:gE,lights_pars_begin:_E,lights_toon_fragment:xE,lights_toon_pars_fragment:yE,lights_phong_fragment:SE,lights_phong_pars_fragment:ME,lights_physical_fragment:TE,lights_physical_pars_fragment:EE,lights_fragment_begin:bE,lights_fragment_maps:AE,lights_fragment_end:wE,logdepthbuf_fragment:RE,logdepthbuf_pars_fragment:CE,logdepthbuf_pars_vertex:PE,logdepthbuf_vertex:LE,map_fragment:IE,map_pars_fragment:DE,map_particle_fragment:UE,map_particle_pars_fragment:NE,metalnessmap_fragment:OE,metalnessmap_pars_fragment:FE,morphcolor_vertex:BE,morphnormal_vertex:kE,morphtarget_pars_vertex:zE,morphtarget_vertex:HE,normal_fragment_begin:GE,normal_fragment_maps:VE,normal_pars_fragment:WE,normal_pars_vertex:XE,normal_vertex:YE,normalmap_pars_fragment:qE,clearcoat_normal_fragment_begin:KE,clearcoat_normal_fragment_maps:jE,clearcoat_pars_fragment:$E,iridescence_pars_fragment:ZE,opaque_fragment:JE,packing:QE,premultiplied_alpha_fragment:eb,project_vertex:tb,dithering_fragment:nb,dithering_pars_fragment:ib,roughnessmap_fragment:rb,roughnessmap_pars_fragment:sb,shadowmap_pars_fragment:ob,shadowmap_pars_vertex:ab,shadowmap_vertex:lb,shadowmask_pars_fragment:cb,skinbase_vertex:ub,skinning_pars_vertex:fb,skinning_vertex:hb,skinnormal_vertex:db,specularmap_fragment:pb,specularmap_pars_fragment:mb,tonemapping_fragment:gb,tonemapping_pars_fragment:_b,transmission_fragment:vb,transmission_pars_fragment:xb,uv_pars_fragment:yb,uv_pars_vertex:Sb,uv_vertex:Mb,worldpos_vertex:Tb,background_vert:Eb,background_frag:bb,backgroundCube_vert:Ab,backgroundCube_frag:wb,cube_vert:Rb,cube_frag:Cb,depth_vert:Pb,depth_frag:Lb,distanceRGBA_vert:Ib,distanceRGBA_frag:Db,equirect_vert:Ub,equirect_frag:Nb,linedashed_vert:Ob,linedashed_frag:Fb,meshbasic_vert:Bb,meshbasic_frag:kb,meshlambert_vert:zb,meshlambert_frag:Hb,meshmatcap_vert:Gb,meshmatcap_frag:Vb,meshnormal_vert:Wb,meshnormal_frag:Xb,meshphong_vert:Yb,meshphong_frag:qb,meshphysical_vert:Kb,meshphysical_frag:jb,meshtoon_vert:$b,meshtoon_frag:Zb,points_vert:Jb,points_frag:Qb,shadow_vert:eA,shadow_frag:tA,sprite_vert:nA,sprite_frag:iA},Ne={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},qi={basic:{uniforms:Bn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:Bn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new ct(0)}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:Bn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:Bn([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:Bn([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new ct(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:Bn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:Bn([Ne.points,Ne.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:Bn([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:Bn([Ne.common,Ne.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:Bn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:Bn([Ne.sprite,Ne.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distanceRGBA:{uniforms:Bn([Ne.common,Ne.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distanceRGBA_vert,fragmentShader:at.distanceRGBA_frag},shadow:{uniforms:Bn([Ne.lights,Ne.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};qi.physical={uniforms:Bn([qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const sc={r:0,b:0,g:0};function rA(i,e,t,n,r,s,o){const a=new ct(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function v(p,m){let T=!1,S=m.isScene===!0?m.background:null;S&&S.isTexture&&(S=(m.backgroundBlurriness>0?t:e).get(S)),S===null?g(a,l):S&&S.isColor&&(g(S,1),T=!0);const x=i.xr.getEnvironmentBlendMode();x==="additive"?n.buffers.color.setClear(0,0,0,1,o):x==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||T)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),S&&(S.isCubeTexture||S.mapping===Tu)?(u===void 0&&(u=new _i(new ya(1,1,1),new Ur({name:"BackgroundCubeMaterial",uniforms:la(qi.backgroundCube.uniforms),vertexShader:qi.backgroundCube.vertexShader,fragmentShader:qi.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,I,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=Ct.getTransfer(S.colorSpace)!==Ht,(f!==S||h!==S.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,f=S,h=S.version,d=i.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new _i(new vd(2,2),new Ur({name:"BackgroundMaterial",uniforms:la(qi.background.uniforms),vertexShader:qi.background.vertexShader,fragmentShader:qi.background.fragmentShader,side:Dr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=Ct.getTransfer(S.colorSpace)!==Ht,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||h!==S.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,f=S,h=S.version,d=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function g(p,m){p.getRGB(sc,C0(i)),n.buffers.color.setClear(sc.r,sc.g,sc.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),l=m,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,g(a,l)},render:v}}function sA(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=p(null);let c=l,u=!1;function f(k,q,Z,X,j){let $=!1;if(o){const D=g(X,Z,q);c!==D&&(c=D,d(c.object)),$=m(k,X,Z,j),$&&T(k,X,Z,j)}else{const D=q.wireframe===!0;(c.geometry!==X.id||c.program!==Z.id||c.wireframe!==D)&&(c.geometry=X.id,c.program=Z.id,c.wireframe=D,$=!0)}j!==null&&t.update(j,i.ELEMENT_ARRAY_BUFFER),($||u)&&(u=!1,z(k,q,Z,X),j!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function h(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function d(k){return n.isWebGL2?i.bindVertexArray(k):s.bindVertexArrayOES(k)}function v(k){return n.isWebGL2?i.deleteVertexArray(k):s.deleteVertexArrayOES(k)}function g(k,q,Z){const X=Z.wireframe===!0;let j=a[k.id];j===void 0&&(j={},a[k.id]=j);let $=j[q.id];$===void 0&&($={},j[q.id]=$);let D=$[X];return D===void 0&&(D=p(h()),$[X]=D),D}function p(k){const q=[],Z=[],X=[];for(let j=0;j<r;j++)q[j]=0,Z[j]=0,X[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:Z,attributeDivisors:X,object:k,attributes:{},index:null}}function m(k,q,Z,X){const j=c.attributes,$=q.attributes;let D=0;const G=Z.getAttributes();for(const J in G)if(G[J].location>=0){const ye=j[J];let Ee=$[J];if(Ee===void 0&&(J==="instanceMatrix"&&k.instanceMatrix&&(Ee=k.instanceMatrix),J==="instanceColor"&&k.instanceColor&&(Ee=k.instanceColor)),ye===void 0||ye.attribute!==Ee||Ee&&ye.data!==Ee.data)return!0;D++}return c.attributesNum!==D||c.index!==X}function T(k,q,Z,X){const j={},$=q.attributes;let D=0;const G=Z.getAttributes();for(const J in G)if(G[J].location>=0){let ye=$[J];ye===void 0&&(J==="instanceMatrix"&&k.instanceMatrix&&(ye=k.instanceMatrix),J==="instanceColor"&&k.instanceColor&&(ye=k.instanceColor));const Ee={};Ee.attribute=ye,ye&&ye.data&&(Ee.data=ye.data),j[J]=Ee,D++}c.attributes=j,c.attributesNum=D,c.index=X}function S(){const k=c.newAttributes;for(let q=0,Z=k.length;q<Z;q++)k[q]=0}function x(k){w(k,0)}function w(k,q){const Z=c.newAttributes,X=c.enabledAttributes,j=c.attributeDivisors;Z[k]=1,X[k]===0&&(i.enableVertexAttribArray(k),X[k]=1),j[k]!==q&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](k,q),j[k]=q)}function I(){const k=c.newAttributes,q=c.enabledAttributes;for(let Z=0,X=q.length;Z<X;Z++)q[Z]!==k[Z]&&(i.disableVertexAttribArray(Z),q[Z]=0)}function R(k,q,Z,X,j,$,D){D===!0?i.vertexAttribIPointer(k,q,Z,j,$):i.vertexAttribPointer(k,q,Z,X,j,$)}function z(k,q,Z,X){if(n.isWebGL2===!1&&(k.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;S();const j=X.attributes,$=Z.getAttributes(),D=q.defaultAttributeValues;for(const G in $){const J=$[G];if(J.location>=0){let Te=j[G];if(Te===void 0&&(G==="instanceMatrix"&&k.instanceMatrix&&(Te=k.instanceMatrix),G==="instanceColor"&&k.instanceColor&&(Te=k.instanceColor)),Te!==void 0){const ye=Te.normalized,Ee=Te.itemSize,Me=t.get(Te);if(Me===void 0)continue;const Ie=Me.buffer,Ue=Me.type,Je=Me.bytesPerElement,Tt=n.isWebGL2===!0&&(Ue===i.INT||Ue===i.UNSIGNED_INT||Te.gpuType===u0);if(Te.isInterleavedBufferAttribute){const $e=Te.data,E=$e.stride,B=Te.offset;if($e.isInstancedInterleavedBuffer){for(let V=0;V<J.locationSize;V++)w(J.location+V,$e.meshPerAttribute);k.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=$e.meshPerAttribute*$e.count)}else for(let V=0;V<J.locationSize;V++)x(J.location+V);i.bindBuffer(i.ARRAY_BUFFER,Ie);for(let V=0;V<J.locationSize;V++)R(J.location+V,Ee/J.locationSize,Ue,ye,E*Je,(B+Ee/J.locationSize*V)*Je,Tt)}else{if(Te.isInstancedBufferAttribute){for(let $e=0;$e<J.locationSize;$e++)w(J.location+$e,Te.meshPerAttribute);k.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let $e=0;$e<J.locationSize;$e++)x(J.location+$e);i.bindBuffer(i.ARRAY_BUFFER,Ie);for(let $e=0;$e<J.locationSize;$e++)R(J.location+$e,Ee/J.locationSize,Ue,ye,Ee*Je,Ee/J.locationSize*$e*Je,Tt)}}else if(D!==void 0){const ye=D[G];if(ye!==void 0)switch(ye.length){case 2:i.vertexAttrib2fv(J.location,ye);break;case 3:i.vertexAttrib3fv(J.location,ye);break;case 4:i.vertexAttrib4fv(J.location,ye);break;default:i.vertexAttrib1fv(J.location,ye)}}}}I()}function M(){W();for(const k in a){const q=a[k];for(const Z in q){const X=q[Z];for(const j in X)v(X[j].object),delete X[j];delete q[Z]}delete a[k]}}function P(k){if(a[k.id]===void 0)return;const q=a[k.id];for(const Z in q){const X=q[Z];for(const j in X)v(X[j].object),delete X[j];delete q[Z]}delete a[k.id]}function Q(k){for(const q in a){const Z=a[q];if(Z[k.id]===void 0)continue;const X=Z[k.id];for(const j in X)v(X[j].object),delete X[j];delete Z[k.id]}}function W(){se(),u=!0,c!==l&&(c=l,d(c.object))}function se(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:W,resetDefaultState:se,dispose:M,releaseStatesOfGeometry:P,releaseStatesOfProgram:Q,initAttributes:S,enableAttribute:x,disableUnusedAttributes:I}}function oA(i,e,t,n){const r=n.isWebGL2;let s;function o(c){s=c}function a(c,u){i.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,d;if(r)h=i,d="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[d](s,c,u,f),t.update(u,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function aA(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),h=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),m=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=h>0,x=o||e.has("OES_texture_float"),w=S&&x,I=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:T,vertexTextures:S,floatFragmentTextures:x,floatVertexTextures:w,maxSamples:I}}function lA(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Is,a=new ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||r;return r=h,n=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const v=f.clippingPlanes,g=f.clipIntersection,p=f.clipShadows,m=i.get(f);if(!r||v===null||v.length===0||s&&!p)s?u(null):c();else{const T=s?0:n,S=T*4;let x=m.clippingState||null;l.value=x,x=u(v,h,S,d);for(let w=0;w!==S;++w)x[w]=t[w];m.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,v){const g=f!==null?f.length:0;let p=null;if(g!==0){if(p=l.value,v!==!0||p===null){const m=d+g*4,T=h.matrixWorldInverse;a.getNormalMatrix(T),(p===null||p.length<m)&&(p=new Float32Array(m));for(let S=0,x=d;S!==g;++S,x+=4)o.copy(f[S]).applyMatrix4(T,a),o.normal.toArray(p,x),p[x+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function cA(i){let e=new WeakMap;function t(o,a){return a===rh?o.mapping=na:a===sh&&(o.mapping=ia),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===rh||a===sh)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new TT(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class xd extends L0{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Oo=4,Rm=[.125,.215,.35,.446,.526,.582],Fs=20,mf=new xd,Cm=new ct;let gf=null;const Ds=(1+Math.sqrt(5))/2,Ao=1/Ds,Pm=[new Y(1,1,1),new Y(-1,1,1),new Y(1,1,-1),new Y(-1,1,-1),new Y(0,Ds,Ao),new Y(0,Ds,-Ao),new Y(Ao,0,Ds),new Y(-Ao,0,Ds),new Y(Ds,Ao,0),new Y(-Ds,Ao,0)];class hh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){gf=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Im(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(gf),e.scissorTest=!1,oc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===na||e.mapping===ia?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gf=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:br,format:hi,colorSpace:fn,depthBuffer:!1},r=Lm(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lm(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=uA(s)),this._blurMaterial=fA(s,e,t)}return r}_compileMaterial(e){const t=new _i(this._lodPlanes[0],e);this._renderer.compile(t,mf)}_sceneToCubeUV(e,t,n,r){const a=new Cn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Cm),u.toneMapping=as,u.autoClear=!1;const d=new Bs({name:"PMREM.Background",side:Kn,depthWrite:!1,depthTest:!1}),v=new _i(new ya,d);let g=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,g=!0):(d.color.copy(Cm),g=!0);for(let m=0;m<6;m++){const T=m%3;T===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):T===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const S=this._cubeSize;oc(r,T*S,m>2?S:0,S,S),u.setRenderTarget(r),g&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===na||e.mapping===ia;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Im());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new _i(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;oc(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,mf)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Pm[(r-1)%Pm.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new _i(this._lodPlanes[r],c),h=c.uniforms,d=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Fs-1),g=s/v,p=isFinite(s)?1+Math.floor(u*g):Fs;p>Fs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Fs}`);const m=[];let T=0;for(let R=0;R<Fs;++R){const z=R/g,M=Math.exp(-z*z/2);m.push(M),R===0?T+=M:R<p&&(T+=2*M)}for(let R=0;R<m.length;R++)m[R]=m[R]/T;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=m,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:S}=this;h.dTheta.value=v,h.mipInt.value=S-n;const x=this._sizeLods[r],w=3*x*(r>S-Oo?r-S+Oo:0),I=4*(this._cubeSize-x);oc(t,w,I,3*x,2*x),l.setRenderTarget(t),l.render(f,mf)}}function uA(i){const e=[],t=[],n=[];let r=i;const s=i-Oo+1+Rm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-Oo?l=Rm[o-i+Oo-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,v=6,g=3,p=2,m=1,T=new Float32Array(g*v*d),S=new Float32Array(p*v*d),x=new Float32Array(m*v*d);for(let I=0;I<d;I++){const R=I%3*2/3-1,z=I>2?0:-1,M=[R,z,0,R+2/3,z,0,R+2/3,z+1,0,R,z,0,R+2/3,z+1,0,R,z+1,0];T.set(M,g*v*I),S.set(h,p*v*I);const P=[I,I,I,I,I,I];x.set(P,m*v*I)}const w=new or;w.setAttribute("position",new jn(T,g)),w.setAttribute("uv",new jn(S,p)),w.setAttribute("faceIndex",new jn(x,m)),e.push(w),r>Oo&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Lm(i,e,t){const n=new eo(i,e,t);return n.texture.mapping=Tu,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function oc(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function fA(i,e,t){const n=new Float32Array(Fs),r=new Y(0,1,0);return new Ur({name:"SphericalGaussianBlur",defines:{n:Fs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:yd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:os,depthTest:!1,depthWrite:!1})}function Im(){return new Ur({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:os,depthTest:!1,depthWrite:!1})}function Dm(){return new Ur({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:os,depthTest:!1,depthWrite:!1})}function yd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function hA(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===rh||l===sh,u=l===na||l===ia;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new hh(i)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new hh(i));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function dA(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function pA(i,e,t,n){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);for(const v in h.morphAttributes){const g=h.morphAttributes[v];for(let p=0,m=g.length;p<m;p++)e.remove(g[p])}h.removeEventListener("dispose",o),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const v in h)e.update(h[v],i.ARRAY_BUFFER);const d=f.morphAttributes;for(const v in d){const g=d[v];for(let p=0,m=g.length;p<m;p++)e.update(g[p],i.ARRAY_BUFFER)}}function c(f){const h=[],d=f.index,v=f.attributes.position;let g=0;if(d!==null){const T=d.array;g=d.version;for(let S=0,x=T.length;S<x;S+=3){const w=T[S+0],I=T[S+1],R=T[S+2];h.push(w,I,I,R,R,w)}}else if(v!==void 0){const T=v.array;g=v.version;for(let S=0,x=T.length/3-1;S<x;S+=3){const w=S+0,I=S+1,R=S+2;h.push(w,I,I,R,R,w)}}else return;const p=new(S0(h)?R0:w0)(h,1);p.version=g;const m=s.get(f);m&&e.remove(m),s.set(f,p)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function mA(i,e,t,n){const r=n.isWebGL2;let s;function o(h){s=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,d){i.drawElements(s,d,a,h*l),t.update(d,s,1)}function f(h,d,v){if(v===0)return;let g,p;if(r)g=i,p="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[p](s,d,a,h*l,v),t.update(d,s,v)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function gA(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function _A(i,e){return i[0]-e[0]}function vA(i,e){return Math.abs(e[1])-Math.abs(i[1])}function xA(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new Nt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const v=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=v!==void 0?v.length:0;let p=s.get(u);if(p===void 0||p.count!==g){let q=function(){se.dispose(),s.delete(u),u.removeEventListener("dispose",q)};var d=q;p!==void 0&&p.texture.dispose();const S=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,I=u.morphAttributes.position||[],R=u.morphAttributes.normal||[],z=u.morphAttributes.color||[];let M=0;S===!0&&(M=1),x===!0&&(M=2),w===!0&&(M=3);let P=u.attributes.position.count*M,Q=1;P>e.maxTextureSize&&(Q=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const W=new Float32Array(P*Q*4*g),se=new E0(W,P,Q,g);se.type=Ci,se.needsUpdate=!0;const k=M*4;for(let Z=0;Z<g;Z++){const X=I[Z],j=R[Z],$=z[Z],D=P*Q*4*Z;for(let G=0;G<X.count;G++){const J=G*k;S===!0&&(o.fromBufferAttribute(X,G),W[D+J+0]=o.x,W[D+J+1]=o.y,W[D+J+2]=o.z,W[D+J+3]=0),x===!0&&(o.fromBufferAttribute(j,G),W[D+J+4]=o.x,W[D+J+5]=o.y,W[D+J+6]=o.z,W[D+J+7]=0),w===!0&&(o.fromBufferAttribute($,G),W[D+J+8]=o.x,W[D+J+9]=o.y,W[D+J+10]=o.z,W[D+J+11]=$.itemSize===4?o.w:1)}}p={count:g,texture:se,size:new vt(P,Q)},s.set(u,p),u.addEventListener("dispose",q)}let m=0;for(let S=0;S<h.length;S++)m+=h[S];const T=u.morphTargetsRelative?1:1-m;f.getUniforms().setValue(i,"morphTargetBaseInfluence",T),f.getUniforms().setValue(i,"morphTargetInfluences",h),f.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}else{const v=h===void 0?0:h.length;let g=n[u.id];if(g===void 0||g.length!==v){g=[];for(let x=0;x<v;x++)g[x]=[x,0];n[u.id]=g}for(let x=0;x<v;x++){const w=g[x];w[0]=x,w[1]=h[x]}g.sort(vA);for(let x=0;x<8;x++)x<v&&g[x][1]?(a[x][0]=g[x][0],a[x][1]=g[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(_A);const p=u.morphAttributes.position,m=u.morphAttributes.normal;let T=0;for(let x=0;x<8;x++){const w=a[x],I=w[0],R=w[1];I!==Number.MAX_SAFE_INTEGER&&R?(p&&u.getAttribute("morphTarget"+x)!==p[I]&&u.setAttribute("morphTarget"+x,p[I]),m&&u.getAttribute("morphNormal"+x)!==m[I]&&u.setAttribute("morphNormal"+x,m[I]),r[x]=R,T+=R):(p&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),m&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),r[x]=0)}const S=u.morphTargetsRelative?1:1-T;f.getUniforms().setValue(i,"morphTargetBaseInfluence",S),f.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function yA(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const U0=new Sn,N0=new E0,O0=new rT,F0=new I0,Um=[],Nm=[],Om=new Float32Array(16),Fm=new Float32Array(9),Bm=new Float32Array(4);function Sa(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Um[r];if(s===void 0&&(s=new Float32Array(r),Um[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function hn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function dn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function wu(i,e){let t=Nm[e];t===void 0&&(t=new Int32Array(e),Nm[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function SA(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function MA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;i.uniform2fv(this.addr,e),dn(t,e)}}function TA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(hn(t,e))return;i.uniform3fv(this.addr,e),dn(t,e)}}function EA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;i.uniform4fv(this.addr,e),dn(t,e)}}function bA(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),dn(t,e)}else{if(hn(t,n))return;Bm.set(n),i.uniformMatrix2fv(this.addr,!1,Bm),dn(t,n)}}function AA(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),dn(t,e)}else{if(hn(t,n))return;Fm.set(n),i.uniformMatrix3fv(this.addr,!1,Fm),dn(t,n)}}function wA(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),dn(t,e)}else{if(hn(t,n))return;Om.set(n),i.uniformMatrix4fv(this.addr,!1,Om),dn(t,n)}}function RA(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function CA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;i.uniform2iv(this.addr,e),dn(t,e)}}function PA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;i.uniform3iv(this.addr,e),dn(t,e)}}function LA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;i.uniform4iv(this.addr,e),dn(t,e)}}function IA(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function DA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;i.uniform2uiv(this.addr,e),dn(t,e)}}function UA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;i.uniform3uiv(this.addr,e),dn(t,e)}}function NA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;i.uniform4uiv(this.addr,e),dn(t,e)}}function OA(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||U0,r)}function FA(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||O0,r)}function BA(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||F0,r)}function kA(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||N0,r)}function zA(i){switch(i){case 5126:return SA;case 35664:return MA;case 35665:return TA;case 35666:return EA;case 35674:return bA;case 35675:return AA;case 35676:return wA;case 5124:case 35670:return RA;case 35667:case 35671:return CA;case 35668:case 35672:return PA;case 35669:case 35673:return LA;case 5125:return IA;case 36294:return DA;case 36295:return UA;case 36296:return NA;case 35678:case 36198:case 36298:case 36306:case 35682:return OA;case 35679:case 36299:case 36307:return FA;case 35680:case 36300:case 36308:case 36293:return BA;case 36289:case 36303:case 36311:case 36292:return kA}}function HA(i,e){i.uniform1fv(this.addr,e)}function GA(i,e){const t=Sa(e,this.size,2);i.uniform2fv(this.addr,t)}function VA(i,e){const t=Sa(e,this.size,3);i.uniform3fv(this.addr,t)}function WA(i,e){const t=Sa(e,this.size,4);i.uniform4fv(this.addr,t)}function XA(i,e){const t=Sa(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function YA(i,e){const t=Sa(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function qA(i,e){const t=Sa(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function KA(i,e){i.uniform1iv(this.addr,e)}function jA(i,e){i.uniform2iv(this.addr,e)}function $A(i,e){i.uniform3iv(this.addr,e)}function ZA(i,e){i.uniform4iv(this.addr,e)}function JA(i,e){i.uniform1uiv(this.addr,e)}function QA(i,e){i.uniform2uiv(this.addr,e)}function ew(i,e){i.uniform3uiv(this.addr,e)}function tw(i,e){i.uniform4uiv(this.addr,e)}function nw(i,e,t){const n=this.cache,r=e.length,s=wu(t,r);hn(n,s)||(i.uniform1iv(this.addr,s),dn(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||U0,s[o])}function iw(i,e,t){const n=this.cache,r=e.length,s=wu(t,r);hn(n,s)||(i.uniform1iv(this.addr,s),dn(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||O0,s[o])}function rw(i,e,t){const n=this.cache,r=e.length,s=wu(t,r);hn(n,s)||(i.uniform1iv(this.addr,s),dn(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||F0,s[o])}function sw(i,e,t){const n=this.cache,r=e.length,s=wu(t,r);hn(n,s)||(i.uniform1iv(this.addr,s),dn(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||N0,s[o])}function ow(i){switch(i){case 5126:return HA;case 35664:return GA;case 35665:return VA;case 35666:return WA;case 35674:return XA;case 35675:return YA;case 35676:return qA;case 5124:case 35670:return KA;case 35667:case 35671:return jA;case 35668:case 35672:return $A;case 35669:case 35673:return ZA;case 5125:return JA;case 36294:return QA;case 36295:return ew;case 36296:return tw;case 35678:case 36198:case 36298:case 36306:case 35682:return nw;case 35679:case 36299:case 36307:return iw;case 35680:case 36300:case 36308:case 36293:return rw;case 36289:case 36303:case 36311:case 36292:return sw}}class aw{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=zA(t.type)}}class lw{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=ow(t.type)}}class cw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const _f=/(\w+)(\])?(\[|\.)?/g;function km(i,e){i.seq.push(e),i.map[e.id]=e}function uw(i,e,t){const n=i.name,r=n.length;for(_f.lastIndex=0;;){const s=_f.exec(n),o=_f.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){km(t,c===void 0?new aw(a,i,e):new lw(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new cw(a),km(t,f)),t=f}}}class Dc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);uw(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function zm(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let fw=0;function hw(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function dw(i){const e=Ct.getPrimaries(Ct.workingColorSpace),t=Ct.getPrimaries(i);let n;switch(e===t?n="":e===Zc&&t===$c?n="LinearDisplayP3ToLinearSRGB":e===$c&&t===Zc&&(n="LinearSRGBToLinearDisplayP3"),i){case fn:case Eu:return[n,"LinearTransferOETF"];case $t:case md:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Hm(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+hw(i.getShaderSource(e),o)}else return r}function pw(i,e){const t=dw(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function mw(i,e){let t;switch(e){case pM:t="Linear";break;case mM:t="Reinhard";break;case gM:t="OptimizedCineon";break;case a0:t="ACESFilmic";break;case _M:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function gw(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ba).join(`
`)}function _w(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function vw(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ba(i){return i!==""}function Gm(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vm(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xw=/^[ \t]*#include +<([\w\d./]+)>/gm;function dh(i){return i.replace(xw,Sw)}const yw=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Sw(i,e){let t=at[e];if(t===void 0){const n=yw.get(e);if(n!==void 0)t=at[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return dh(t)}const Mw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wm(i){return i.replace(Mw,Tw)}function Tw(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Xm(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ew(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===i0?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===YS?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===_r&&(e="SHADOWMAP_TYPE_VSM"),e}function bw(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case na:case ia:e="ENVMAP_TYPE_CUBE";break;case Tu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Aw(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ia:e="ENVMAP_MODE_REFRACTION";break}return e}function ww(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case o0:e="ENVMAP_BLENDING_MULTIPLY";break;case hM:e="ENVMAP_BLENDING_MIX";break;case dM:e="ENVMAP_BLENDING_ADD";break}return e}function Rw(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Cw(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Ew(t),c=bw(t),u=Aw(t),f=ww(t),h=Rw(t),d=t.isWebGL2?"":gw(t),v=_w(s),g=r.createProgram();let p,m,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ba).join(`
`),p.length>0&&(p+=`
`),m=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ba).join(`
`),m.length>0&&(m+=`
`)):(p=[Xm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ba).join(`
`),m=[d,Xm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==as?"#define TONE_MAPPING":"",t.toneMapping!==as?at.tonemapping_pars_fragment:"",t.toneMapping!==as?mw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,pw("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ba).join(`
`)),o=dh(o),o=Gm(o,t),o=Vm(o,t),a=dh(a),a=Gm(a,t),a=Vm(a,t),o=Wm(o),a=Wm(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===cm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const S=T+p+o,x=T+m+a,w=zm(r,r.VERTEX_SHADER,S),I=zm(r,r.FRAGMENT_SHADER,x);if(r.attachShader(g,w),r.attachShader(g,I),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g),i.debug.checkShaderErrors){const M=r.getProgramInfoLog(g).trim(),P=r.getShaderInfoLog(w).trim(),Q=r.getShaderInfoLog(I).trim();let W=!0,se=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,w,I);else{const k=Hm(r,w,"vertex"),q=Hm(r,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Program Info Log: `+M+`
`+k+`
`+q)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(P===""||Q==="")&&(se=!1);se&&(this.diagnostics={runnable:W,programLog:M,vertexShader:{log:P,prefix:p},fragmentShader:{log:Q,prefix:m}})}r.deleteShader(w),r.deleteShader(I);let R;this.getUniforms=function(){return R===void 0&&(R=new Dc(r,g)),R};let z;return this.getAttributes=function(){return z===void 0&&(z=vw(r,g)),z},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=fw++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=I,this}let Pw=0;class Lw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Iw(e),t.set(e,n)),n}}class Iw{constructor(e){this.id=Pw++,this.code=e,this.usedTimes=0}}function Dw(i,e,t,n,r,s,o){const a=new b0,l=new Lw,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let d=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return M===0?"uv":`uv${M}`}function p(M,P,Q,W,se){const k=W.fog,q=se.geometry,Z=M.isMeshStandardMaterial?W.environment:null,X=(M.isMeshStandardMaterial?t:e).get(M.envMap||Z),j=X&&X.mapping===Tu?X.image.height:null,$=v[M.type];M.precision!==null&&(d=r.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const D=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,G=D!==void 0?D.length:0;let J=0;q.morphAttributes.position!==void 0&&(J=1),q.morphAttributes.normal!==void 0&&(J=2),q.morphAttributes.color!==void 0&&(J=3);let Te,ye,Ee,Me;if($){const ke=qi[$];Te=ke.vertexShader,ye=ke.fragmentShader}else Te=M.vertexShader,ye=M.fragmentShader,l.update(M),Ee=l.getVertexShaderID(M),Me=l.getFragmentShaderID(M);const Ie=i.getRenderTarget(),Ue=se.isInstancedMesh===!0,Je=!!M.map,Tt=!!M.matcap,$e=!!X,E=!!M.aoMap,B=!!M.lightMap,V=!!M.bumpMap,ie=!!M.normalMap,ee=!!M.displacementMap,F=!!M.emissiveMap,de=!!M.metalnessMap,ue=!!M.roughnessMap,ge=M.anisotropy>0,le=M.clearcoat>0,Re=M.iridescence>0,C=M.sheen>0,A=M.transmission>0,H=ge&&!!M.anisotropyMap,ce=le&&!!M.clearcoatMap,oe=le&&!!M.clearcoatNormalMap,fe=le&&!!M.clearcoatRoughnessMap,be=Re&&!!M.iridescenceMap,ve=Re&&!!M.iridescenceThicknessMap,Ae=C&&!!M.sheenColorMap,Pe=C&&!!M.sheenRoughnessMap,nt=!!M.specularMap,_e=!!M.specularColorMap,Qe=!!M.specularIntensityMap,Ge=A&&!!M.transmissionMap,Be=A&&!!M.thicknessMap,Oe=!!M.gradientMap,O=!!M.alphaMap,te=M.alphaTest>0,Se=!!M.alphaHash,Le=!!M.extensions,we=!!q.attributes.uv1,xe=!!q.attributes.uv2,Ye=!!q.attributes.uv3;let Ze=as;return M.toneMapped&&(Ie===null||Ie.isXRRenderTarget===!0)&&(Ze=i.toneMapping),{isWebGL2:u,shaderID:$,shaderType:M.type,shaderName:M.name,vertexShader:Te,fragmentShader:ye,defines:M.defines,customVertexShaderID:Ee,customFragmentShaderID:Me,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,instancing:Ue,instancingColor:Ue&&se.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:Ie===null?i.outputColorSpace:Ie.isXRRenderTarget===!0?Ie.texture.colorSpace:fn,map:Je,matcap:Tt,envMap:$e,envMapMode:$e&&X.mapping,envMapCubeUVHeight:j,aoMap:E,lightMap:B,bumpMap:V,normalMap:ie,displacementMap:h&&ee,emissiveMap:F,normalMapObjectSpace:ie&&M.normalMapType===PM,normalMapTangentSpace:ie&&M.normalMapType===x0,metalnessMap:de,roughnessMap:ue,anisotropy:ge,anisotropyMap:H,clearcoat:le,clearcoatMap:ce,clearcoatNormalMap:oe,clearcoatRoughnessMap:fe,iridescence:Re,iridescenceMap:be,iridescenceThicknessMap:ve,sheen:C,sheenColorMap:Ae,sheenRoughnessMap:Pe,specularMap:nt,specularColorMap:_e,specularIntensityMap:Qe,transmission:A,transmissionMap:Ge,thicknessMap:Be,gradientMap:Oe,opaque:M.transparent===!1&&M.blending===Xo,alphaMap:O,alphaTest:te,alphaHash:Se,combine:M.combine,mapUv:Je&&g(M.map.channel),aoMapUv:E&&g(M.aoMap.channel),lightMapUv:B&&g(M.lightMap.channel),bumpMapUv:V&&g(M.bumpMap.channel),normalMapUv:ie&&g(M.normalMap.channel),displacementMapUv:ee&&g(M.displacementMap.channel),emissiveMapUv:F&&g(M.emissiveMap.channel),metalnessMapUv:de&&g(M.metalnessMap.channel),roughnessMapUv:ue&&g(M.roughnessMap.channel),anisotropyMapUv:H&&g(M.anisotropyMap.channel),clearcoatMapUv:ce&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:oe&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&g(M.sheenRoughnessMap.channel),specularMapUv:nt&&g(M.specularMap.channel),specularColorMapUv:_e&&g(M.specularColorMap.channel),specularIntensityMapUv:Qe&&g(M.specularIntensityMap.channel),transmissionMapUv:Ge&&g(M.transmissionMap.channel),thicknessMapUv:Be&&g(M.thicknessMap.channel),alphaMapUv:O&&g(M.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(ie||ge),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,vertexUv1s:we,vertexUv2s:xe,vertexUv3s:Ye,pointsUvs:se.isPoints===!0&&!!q.attributes.uv&&(Je||O),fog:!!k,useFog:M.fog===!0,fogExp2:k&&k.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:se.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:J,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&Q.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ze,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Je&&M.map.isVideoTexture===!0&&Ct.getTransfer(M.map.colorSpace)===Ht,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ki,flipSided:M.side===Kn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:Le&&M.extensions.derivatives===!0,extensionFragDepth:Le&&M.extensions.fragDepth===!0,extensionDrawBuffers:Le&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:Le&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function m(M){const P=[];if(M.shaderID?P.push(M.shaderID):(P.push(M.customVertexShaderID),P.push(M.customFragmentShaderID)),M.defines!==void 0)for(const Q in M.defines)P.push(Q),P.push(M.defines[Q]);return M.isRawShaderMaterial===!1&&(T(P,M),S(P,M),P.push(i.outputColorSpace)),P.push(M.customProgramCacheKey),P.join()}function T(M,P){M.push(P.precision),M.push(P.outputColorSpace),M.push(P.envMapMode),M.push(P.envMapCubeUVHeight),M.push(P.mapUv),M.push(P.alphaMapUv),M.push(P.lightMapUv),M.push(P.aoMapUv),M.push(P.bumpMapUv),M.push(P.normalMapUv),M.push(P.displacementMapUv),M.push(P.emissiveMapUv),M.push(P.metalnessMapUv),M.push(P.roughnessMapUv),M.push(P.anisotropyMapUv),M.push(P.clearcoatMapUv),M.push(P.clearcoatNormalMapUv),M.push(P.clearcoatRoughnessMapUv),M.push(P.iridescenceMapUv),M.push(P.iridescenceThicknessMapUv),M.push(P.sheenColorMapUv),M.push(P.sheenRoughnessMapUv),M.push(P.specularMapUv),M.push(P.specularColorMapUv),M.push(P.specularIntensityMapUv),M.push(P.transmissionMapUv),M.push(P.thicknessMapUv),M.push(P.combine),M.push(P.fogExp2),M.push(P.sizeAttenuation),M.push(P.morphTargetsCount),M.push(P.morphAttributeCount),M.push(P.numDirLights),M.push(P.numPointLights),M.push(P.numSpotLights),M.push(P.numSpotLightMaps),M.push(P.numHemiLights),M.push(P.numRectAreaLights),M.push(P.numDirLightShadows),M.push(P.numPointLightShadows),M.push(P.numSpotLightShadows),M.push(P.numSpotLightShadowsWithMaps),M.push(P.numLightProbes),M.push(P.shadowMapType),M.push(P.toneMapping),M.push(P.numClippingPlanes),M.push(P.numClipIntersection),M.push(P.depthPacking)}function S(M,P){a.disableAll(),P.isWebGL2&&a.enable(0),P.supportsVertexTextures&&a.enable(1),P.instancing&&a.enable(2),P.instancingColor&&a.enable(3),P.matcap&&a.enable(4),P.envMap&&a.enable(5),P.normalMapObjectSpace&&a.enable(6),P.normalMapTangentSpace&&a.enable(7),P.clearcoat&&a.enable(8),P.iridescence&&a.enable(9),P.alphaTest&&a.enable(10),P.vertexColors&&a.enable(11),P.vertexAlphas&&a.enable(12),P.vertexUv1s&&a.enable(13),P.vertexUv2s&&a.enable(14),P.vertexUv3s&&a.enable(15),P.vertexTangents&&a.enable(16),P.anisotropy&&a.enable(17),M.push(a.mask),a.disableAll(),P.fog&&a.enable(0),P.useFog&&a.enable(1),P.flatShading&&a.enable(2),P.logarithmicDepthBuffer&&a.enable(3),P.skinning&&a.enable(4),P.morphTargets&&a.enable(5),P.morphNormals&&a.enable(6),P.morphColors&&a.enable(7),P.premultipliedAlpha&&a.enable(8),P.shadowMapEnabled&&a.enable(9),P.useLegacyLights&&a.enable(10),P.doubleSided&&a.enable(11),P.flipSided&&a.enable(12),P.useDepthPacking&&a.enable(13),P.dithering&&a.enable(14),P.transmission&&a.enable(15),P.sheen&&a.enable(16),P.opaque&&a.enable(17),P.pointsUvs&&a.enable(18),P.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function x(M){const P=v[M.type];let Q;if(P){const W=qi[P];Q=P0.clone(W.uniforms)}else Q=M.uniforms;return Q}function w(M,P){let Q;for(let W=0,se=c.length;W<se;W++){const k=c[W];if(k.cacheKey===P){Q=k,++Q.usedTimes;break}}return Q===void 0&&(Q=new Cw(i,P,M,s),c.push(Q)),Q}function I(M){if(--M.usedTimes===0){const P=c.indexOf(M);c[P]=c[c.length-1],c.pop(),M.destroy()}}function R(M){l.remove(M)}function z(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:x,acquireProgram:w,releaseProgram:I,releaseShaderCache:R,programs:c,dispose:z}}function Uw(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function Nw(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ym(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function qm(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(f,h,d,v,g,p){let m=i[e];return m===void 0?(m={id:f.id,object:f,geometry:h,material:d,groupOrder:v,renderOrder:f.renderOrder,z:g,group:p},i[e]=m):(m.id=f.id,m.object=f,m.geometry=h,m.material=d,m.groupOrder=v,m.renderOrder=f.renderOrder,m.z=g,m.group=p),e++,m}function a(f,h,d,v,g,p){const m=o(f,h,d,v,g,p);d.transmission>0?n.push(m):d.transparent===!0?r.push(m):t.push(m)}function l(f,h,d,v,g,p){const m=o(f,h,d,v,g,p);d.transmission>0?n.unshift(m):d.transparent===!0?r.unshift(m):t.unshift(m)}function c(f,h){t.length>1&&t.sort(f||Nw),n.length>1&&n.sort(h||Ym),r.length>1&&r.sort(h||Ym)}function u(){for(let f=e,h=i.length;f<h;f++){const d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function Ow(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new qm,i.set(n,[o])):r>=s.length?(o=new qm,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Fw(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new ct};break;case"SpotLight":t={position:new Y,direction:new Y,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":t={color:new ct,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return i[e.id]=t,t}}}function Bw(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let kw=0;function zw(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Hw(i,e){const t=new Fw,n=Bw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new Y);const s=new Y,o=new pt,a=new pt;function l(u,f){let h=0,d=0,v=0;for(let W=0;W<9;W++)r.probe[W].set(0,0,0);let g=0,p=0,m=0,T=0,S=0,x=0,w=0,I=0,R=0,z=0,M=0;u.sort(zw);const P=f===!0?Math.PI:1;for(let W=0,se=u.length;W<se;W++){const k=u[W],q=k.color,Z=k.intensity,X=k.distance,j=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)h+=q.r*Z*P,d+=q.g*Z*P,v+=q.b*Z*P;else if(k.isLightProbe){for(let $=0;$<9;$++)r.probe[$].addScaledVector(k.sh.coefficients[$],Z);M++}else if(k.isDirectionalLight){const $=t.get(k);if($.color.copy(k.color).multiplyScalar(k.intensity*P),k.castShadow){const D=k.shadow,G=n.get(k);G.shadowBias=D.bias,G.shadowNormalBias=D.normalBias,G.shadowRadius=D.radius,G.shadowMapSize=D.mapSize,r.directionalShadow[g]=G,r.directionalShadowMap[g]=j,r.directionalShadowMatrix[g]=k.shadow.matrix,x++}r.directional[g]=$,g++}else if(k.isSpotLight){const $=t.get(k);$.position.setFromMatrixPosition(k.matrixWorld),$.color.copy(q).multiplyScalar(Z*P),$.distance=X,$.coneCos=Math.cos(k.angle),$.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),$.decay=k.decay,r.spot[m]=$;const D=k.shadow;if(k.map&&(r.spotLightMap[R]=k.map,R++,D.updateMatrices(k),k.castShadow&&z++),r.spotLightMatrix[m]=D.matrix,k.castShadow){const G=n.get(k);G.shadowBias=D.bias,G.shadowNormalBias=D.normalBias,G.shadowRadius=D.radius,G.shadowMapSize=D.mapSize,r.spotShadow[m]=G,r.spotShadowMap[m]=j,I++}m++}else if(k.isRectAreaLight){const $=t.get(k);$.color.copy(q).multiplyScalar(Z),$.halfWidth.set(k.width*.5,0,0),$.halfHeight.set(0,k.height*.5,0),r.rectArea[T]=$,T++}else if(k.isPointLight){const $=t.get(k);if($.color.copy(k.color).multiplyScalar(k.intensity*P),$.distance=k.distance,$.decay=k.decay,k.castShadow){const D=k.shadow,G=n.get(k);G.shadowBias=D.bias,G.shadowNormalBias=D.normalBias,G.shadowRadius=D.radius,G.shadowMapSize=D.mapSize,G.shadowCameraNear=D.camera.near,G.shadowCameraFar=D.camera.far,r.pointShadow[p]=G,r.pointShadowMap[p]=j,r.pointShadowMatrix[p]=k.shadow.matrix,w++}r.point[p]=$,p++}else if(k.isHemisphereLight){const $=t.get(k);$.skyColor.copy(k.color).multiplyScalar(Z*P),$.groundColor.copy(k.groundColor).multiplyScalar(Z*P),r.hemi[S]=$,S++}}T>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ne.LTC_FLOAT_1,r.rectAreaLTC2=Ne.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Ne.LTC_HALF_1,r.rectAreaLTC2=Ne.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=d,r.ambient[2]=v;const Q=r.hash;(Q.directionalLength!==g||Q.pointLength!==p||Q.spotLength!==m||Q.rectAreaLength!==T||Q.hemiLength!==S||Q.numDirectionalShadows!==x||Q.numPointShadows!==w||Q.numSpotShadows!==I||Q.numSpotMaps!==R||Q.numLightProbes!==M)&&(r.directional.length=g,r.spot.length=m,r.rectArea.length=T,r.point.length=p,r.hemi.length=S,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=I,r.spotShadowMap.length=I,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=I+R-z,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=z,r.numLightProbes=M,Q.directionalLength=g,Q.pointLength=p,Q.spotLength=m,Q.rectAreaLength=T,Q.hemiLength=S,Q.numDirectionalShadows=x,Q.numPointShadows=w,Q.numSpotShadows=I,Q.numSpotMaps=R,Q.numLightProbes=M,r.version=kw++)}function c(u,f){let h=0,d=0,v=0,g=0,p=0;const m=f.matrixWorldInverse;for(let T=0,S=u.length;T<S;T++){const x=u[T];if(x.isDirectionalLight){const w=r.directional[h];w.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),h++}else if(x.isSpotLight){const w=r.spot[v];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),v++}else if(x.isRectAreaLight){const w=r.rectArea[g];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(m),a.identity(),o.copy(x.matrixWorld),o.premultiply(m),a.extractRotation(o),w.halfWidth.set(x.width*.5,0,0),w.halfHeight.set(0,x.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const w=r.point[d];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const w=r.hemi[p];w.direction.setFromMatrixPosition(x.matrixWorld),w.direction.transformDirection(m),p++}}}return{setup:l,setupView:c,state:r}}function Km(i,e){const t=new Hw(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(f){n.push(f)}function a(f){r.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Gw(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Km(i,e),t.set(s,[l])):o>=a.length?(l=new Km(i,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class Vw extends tr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=RM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ww extends tr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Xw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function qw(i,e,t){let n=new _d;const r=new vt,s=new vt,o=new Nt,a=new Vw({depthPacking:CM}),l=new Ww,c={},u=t.maxTextureSize,f={[Dr]:Kn,[Kn]:Dr,[Ki]:Ki},h=new Ur({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:Xw,fragmentShader:Yw}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const v=new or;v.setAttribute("position",new jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new _i(v,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=i0;let m=this.type;this.render=function(w,I,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const z=i.getRenderTarget(),M=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),Q=i.state;Q.setBlending(os),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const W=m!==_r&&this.type===_r,se=m===_r&&this.type!==_r;for(let k=0,q=w.length;k<q;k++){const Z=w[k],X=Z.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const j=X.getFrameExtents();if(r.multiply(j),s.copy(X.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/j.x),r.x=s.x*j.x,X.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/j.y),r.y=s.y*j.y,X.mapSize.y=s.y)),X.map===null||W===!0||se===!0){const D=this.type!==_r?{minFilter:_n,magFilter:_n}:{};X.map!==null&&X.map.dispose(),X.map=new eo(r.x,r.y,D),X.map.texture.name=Z.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const $=X.getViewportCount();for(let D=0;D<$;D++){const G=X.getViewport(D);o.set(s.x*G.x,s.y*G.y,s.x*G.z,s.y*G.w),Q.viewport(o),X.updateMatrices(Z,D),n=X.getFrustum(),x(I,R,X.camera,Z,this.type)}X.isPointLightShadow!==!0&&this.type===_r&&T(X,R),X.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(z,M,P)};function T(w,I){const R=e.update(g);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new eo(r.x,r.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(I,null,R,h,g,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(I,null,R,d,g,null)}function S(w,I,R,z){let M=null;const P=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)M=P;else if(M=R.isPointLight===!0?l:a,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const Q=M.uuid,W=I.uuid;let se=c[Q];se===void 0&&(se={},c[Q]=se);let k=se[W];k===void 0&&(k=M.clone(),se[W]=k),M=k}if(M.visible=I.visible,M.wireframe=I.wireframe,z===_r?M.side=I.shadowSide!==null?I.shadowSide:I.side:M.side=I.shadowSide!==null?I.shadowSide:f[I.side],M.alphaMap=I.alphaMap,M.alphaTest=I.alphaTest,M.map=I.map,M.clipShadows=I.clipShadows,M.clippingPlanes=I.clippingPlanes,M.clipIntersection=I.clipIntersection,M.displacementMap=I.displacementMap,M.displacementScale=I.displacementScale,M.displacementBias=I.displacementBias,M.wireframeLinewidth=I.wireframeLinewidth,M.linewidth=I.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const Q=i.properties.get(M);Q.light=R}return M}function x(w,I,R,z,M){if(w.visible===!1)return;if(w.layers.test(I.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===_r)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);const W=e.update(w),se=w.material;if(Array.isArray(se)){const k=W.groups;for(let q=0,Z=k.length;q<Z;q++){const X=k[q],j=se[X.materialIndex];if(j&&j.visible){const $=S(w,j,z,M);i.renderBufferDirect(R,null,W,$,w,X)}}}else if(se.visible){const k=S(w,se,z,M);i.renderBufferDirect(R,null,W,k,w,null)}}const Q=w.children;for(let W=0,se=Q.length;W<se;W++)x(Q[W],I,R,z,M)}}function Kw(i,e,t){const n=t.isWebGL2;function r(){let O=!1;const te=new Nt;let Se=null;const Le=new Nt(0,0,0,0);return{setMask:function(we){Se!==we&&!O&&(i.colorMask(we,we,we,we),Se=we)},setLocked:function(we){O=we},setClear:function(we,xe,Ye,Ze,Xt){Xt===!0&&(we*=Ze,xe*=Ze,Ye*=Ze),te.set(we,xe,Ye,Ze),Le.equals(te)===!1&&(i.clearColor(we,xe,Ye,Ze),Le.copy(te))},reset:function(){O=!1,Se=null,Le.set(-1,0,0,0)}}}function s(){let O=!1,te=null,Se=null,Le=null;return{setTest:function(we){we?Ie(i.DEPTH_TEST):Ue(i.DEPTH_TEST)},setMask:function(we){te!==we&&!O&&(i.depthMask(we),te=we)},setFunc:function(we){if(Se!==we){switch(we){case sM:i.depthFunc(i.NEVER);break;case oM:i.depthFunc(i.ALWAYS);break;case aM:i.depthFunc(i.LESS);break;case ih:i.depthFunc(i.LEQUAL);break;case lM:i.depthFunc(i.EQUAL);break;case cM:i.depthFunc(i.GEQUAL);break;case uM:i.depthFunc(i.GREATER);break;case fM:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Se=we}},setLocked:function(we){O=we},setClear:function(we){Le!==we&&(i.clearDepth(we),Le=we)},reset:function(){O=!1,te=null,Se=null,Le=null}}}function o(){let O=!1,te=null,Se=null,Le=null,we=null,xe=null,Ye=null,Ze=null,Xt=null;return{setTest:function(ke){O||(ke?Ie(i.STENCIL_TEST):Ue(i.STENCIL_TEST))},setMask:function(ke){te!==ke&&!O&&(i.stencilMask(ke),te=ke)},setFunc:function(ke,qe,tt){(Se!==ke||Le!==qe||we!==tt)&&(i.stencilFunc(ke,qe,tt),Se=ke,Le=qe,we=tt)},setOp:function(ke,qe,tt){(xe!==ke||Ye!==qe||Ze!==tt)&&(i.stencilOp(ke,qe,tt),xe=ke,Ye=qe,Ze=tt)},setLocked:function(ke){O=ke},setClear:function(ke){Xt!==ke&&(i.clearStencil(ke),Xt=ke)},reset:function(){O=!1,te=null,Se=null,Le=null,we=null,xe=null,Ye=null,Ze=null,Xt=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,f=new WeakMap;let h={},d={},v=new WeakMap,g=[],p=null,m=!1,T=null,S=null,x=null,w=null,I=null,R=null,z=null,M=!1,P=null,Q=null,W=null,se=null,k=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,X=0;const j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(j)[1]),Z=X>=1):j.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),Z=X>=2);let $=null,D={};const G=i.getParameter(i.SCISSOR_BOX),J=i.getParameter(i.VIEWPORT),Te=new Nt().fromArray(G),ye=new Nt().fromArray(J);function Ee(O,te,Se,Le){const we=new Uint8Array(4),xe=i.createTexture();i.bindTexture(O,xe),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ye=0;Ye<Se;Ye++)n&&(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)?i.texImage3D(te,0,i.RGBA,1,1,Le,0,i.RGBA,i.UNSIGNED_BYTE,we):i.texImage2D(te+Ye,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,we);return xe}const Me={};Me[i.TEXTURE_2D]=Ee(i.TEXTURE_2D,i.TEXTURE_2D,1),Me[i.TEXTURE_CUBE_MAP]=Ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Me[i.TEXTURE_2D_ARRAY]=Ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Me[i.TEXTURE_3D]=Ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ie(i.DEPTH_TEST),l.setFunc(ih),ee(!1),F(Cp),Ie(i.CULL_FACE),V(os);function Ie(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function Ue(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function Je(O,te){return d[O]!==te?(i.bindFramebuffer(O,te),d[O]=te,n&&(O===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=te),O===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=te)),!0):!1}function Tt(O,te){let Se=g,Le=!1;if(O)if(Se=v.get(te),Se===void 0&&(Se=[],v.set(te,Se)),O.isWebGLMultipleRenderTargets){const we=O.texture;if(Se.length!==we.length||Se[0]!==i.COLOR_ATTACHMENT0){for(let xe=0,Ye=we.length;xe<Ye;xe++)Se[xe]=i.COLOR_ATTACHMENT0+xe;Se.length=we.length,Le=!0}}else Se[0]!==i.COLOR_ATTACHMENT0&&(Se[0]=i.COLOR_ATTACHMENT0,Le=!0);else Se[0]!==i.BACK&&(Se[0]=i.BACK,Le=!0);Le&&(t.isWebGL2?i.drawBuffers(Se):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Se))}function $e(O){return p!==O?(i.useProgram(O),p=O,!0):!1}const E={[Do]:i.FUNC_ADD,[KS]:i.FUNC_SUBTRACT,[jS]:i.FUNC_REVERSE_SUBTRACT};if(n)E[Dp]=i.MIN,E[Up]=i.MAX;else{const O=e.get("EXT_blend_minmax");O!==null&&(E[Dp]=O.MIN_EXT,E[Up]=O.MAX_EXT)}const B={[$S]:i.ZERO,[ZS]:i.ONE,[JS]:i.SRC_COLOR,[r0]:i.SRC_ALPHA,[rM]:i.SRC_ALPHA_SATURATE,[nM]:i.DST_COLOR,[eM]:i.DST_ALPHA,[QS]:i.ONE_MINUS_SRC_COLOR,[s0]:i.ONE_MINUS_SRC_ALPHA,[iM]:i.ONE_MINUS_DST_COLOR,[tM]:i.ONE_MINUS_DST_ALPHA};function V(O,te,Se,Le,we,xe,Ye,Ze){if(O===os){m===!0&&(Ue(i.BLEND),m=!1);return}if(m===!1&&(Ie(i.BLEND),m=!0),O!==qS){if(O!==T||Ze!==M){if((S!==Do||I!==Do)&&(i.blendEquation(i.FUNC_ADD),S=Do,I=Do),Ze)switch(O){case Xo:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pp:i.blendFunc(i.ONE,i.ONE);break;case Lp:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ip:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Xo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pp:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Lp:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ip:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}x=null,w=null,R=null,z=null,T=O,M=Ze}return}we=we||te,xe=xe||Se,Ye=Ye||Le,(te!==S||we!==I)&&(i.blendEquationSeparate(E[te],E[we]),S=te,I=we),(Se!==x||Le!==w||xe!==R||Ye!==z)&&(i.blendFuncSeparate(B[Se],B[Le],B[xe],B[Ye]),x=Se,w=Le,R=xe,z=Ye),T=O,M=!1}function ie(O,te){O.side===Ki?Ue(i.CULL_FACE):Ie(i.CULL_FACE);let Se=O.side===Kn;te&&(Se=!Se),ee(Se),O.blending===Xo&&O.transparent===!1?V(os):V(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),a.setMask(O.colorWrite);const Le=O.stencilWrite;c.setTest(Le),Le&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ue(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Ie(i.SAMPLE_ALPHA_TO_COVERAGE):Ue(i.SAMPLE_ALPHA_TO_COVERAGE)}function ee(O){P!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),P=O)}function F(O){O!==WS?(Ie(i.CULL_FACE),O!==Q&&(O===Cp?i.cullFace(i.BACK):O===XS?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ue(i.CULL_FACE),Q=O}function de(O){O!==W&&(Z&&i.lineWidth(O),W=O)}function ue(O,te,Se){O?(Ie(i.POLYGON_OFFSET_FILL),(se!==te||k!==Se)&&(i.polygonOffset(te,Se),se=te,k=Se)):Ue(i.POLYGON_OFFSET_FILL)}function ge(O){O?Ie(i.SCISSOR_TEST):Ue(i.SCISSOR_TEST)}function le(O){O===void 0&&(O=i.TEXTURE0+q-1),$!==O&&(i.activeTexture(O),$=O)}function Re(O,te,Se){Se===void 0&&($===null?Se=i.TEXTURE0+q-1:Se=$);let Le=D[Se];Le===void 0&&(Le={type:void 0,texture:void 0},D[Se]=Le),(Le.type!==O||Le.texture!==te)&&($!==Se&&(i.activeTexture(Se),$=Se),i.bindTexture(O,te||Me[O]),Le.type=O,Le.texture=te)}function C(){const O=D[$];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function A(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function H(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ce(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function oe(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function fe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function be(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ve(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ae(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Pe(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function nt(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _e(O){Te.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),Te.copy(O))}function Qe(O){ye.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),ye.copy(O))}function Ge(O,te){let Se=f.get(te);Se===void 0&&(Se=new WeakMap,f.set(te,Se));let Le=Se.get(O);Le===void 0&&(Le=i.getUniformBlockIndex(te,O.name),Se.set(O,Le))}function Be(O,te){const Le=f.get(te).get(O);u.get(te)!==Le&&(i.uniformBlockBinding(te,Le,O.__bindingPointIndex),u.set(te,Le))}function Oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},$=null,D={},d={},v=new WeakMap,g=[],p=null,m=!1,T=null,S=null,x=null,w=null,I=null,R=null,z=null,M=!1,P=null,Q=null,W=null,se=null,k=null,Te.set(0,0,i.canvas.width,i.canvas.height),ye.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ie,disable:Ue,bindFramebuffer:Je,drawBuffers:Tt,useProgram:$e,setBlending:V,setMaterial:ie,setFlipSided:ee,setCullFace:F,setLineWidth:de,setPolygonOffset:ue,setScissorTest:ge,activeTexture:le,bindTexture:Re,unbindTexture:C,compressedTexImage2D:A,compressedTexImage3D:H,texImage2D:Pe,texImage3D:nt,updateUBOMapping:Ge,uniformBlockBinding:Be,texStorage2D:ve,texStorage3D:Ae,texSubImage2D:ce,texSubImage3D:oe,compressedTexSubImage2D:fe,compressedTexSubImage3D:be,scissor:_e,viewport:Qe,reset:Oe}}function jw(i,e,t,n,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let g;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(C,A){return m?new OffscreenCanvas(C,A):Ml("canvas")}function S(C,A,H,ce){let oe=1;if((C.width>ce||C.height>ce)&&(oe=ce/Math.max(C.width,C.height)),oe<1||A===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const fe=A?Qc:Math.floor,be=fe(oe*C.width),ve=fe(oe*C.height);g===void 0&&(g=T(be,ve));const Ae=H?T(be,ve):g;return Ae.width=be,Ae.height=ve,Ae.getContext("2d").drawImage(C,0,0,be,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+be+"x"+ve+")."),Ae}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function x(C){return uh(C.width)&&uh(C.height)}function w(C){return a?!1:C.wrapS!==Qn||C.wrapT!==Qn||C.minFilter!==_n&&C.minFilter!==cn}function I(C,A){return C.generateMipmaps&&A&&C.minFilter!==_n&&C.minFilter!==cn}function R(C){i.generateMipmap(C)}function z(C,A,H,ce,oe=!1){if(a===!1)return A;if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let fe=A;if(A===i.RED&&(H===i.FLOAT&&(fe=i.R32F),H===i.HALF_FLOAT&&(fe=i.R16F),H===i.UNSIGNED_BYTE&&(fe=i.R8)),A===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(fe=i.R8UI),H===i.UNSIGNED_SHORT&&(fe=i.R16UI),H===i.UNSIGNED_INT&&(fe=i.R32UI),H===i.BYTE&&(fe=i.R8I),H===i.SHORT&&(fe=i.R16I),H===i.INT&&(fe=i.R32I)),A===i.RG&&(H===i.FLOAT&&(fe=i.RG32F),H===i.HALF_FLOAT&&(fe=i.RG16F),H===i.UNSIGNED_BYTE&&(fe=i.RG8)),A===i.RGBA){const be=oe?jc:Ct.getTransfer(ce);H===i.FLOAT&&(fe=i.RGBA32F),H===i.HALF_FLOAT&&(fe=i.RGBA16F),H===i.UNSIGNED_BYTE&&(fe=be===Ht?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(fe=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(fe=i.RGB5_A1)}return(fe===i.R16F||fe===i.R32F||fe===i.RG16F||fe===i.RG32F||fe===i.RGBA16F||fe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function M(C,A,H){return I(C,H)===!0||C.isFramebufferTexture&&C.minFilter!==_n&&C.minFilter!==cn?Math.log2(Math.max(A.width,A.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?A.mipmaps.length:1}function P(C){return C===_n||C===oh||C===Ic?i.NEAREST:i.LINEAR}function Q(C){const A=C.target;A.removeEventListener("dispose",Q),se(A),A.isVideoTexture&&v.delete(A)}function W(C){const A=C.target;A.removeEventListener("dispose",W),q(A)}function se(C){const A=n.get(C);if(A.__webglInit===void 0)return;const H=C.source,ce=p.get(H);if(ce){const oe=ce[A.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&k(C),Object.keys(ce).length===0&&p.delete(H)}n.remove(C)}function k(C){const A=n.get(C);i.deleteTexture(A.__webglTexture);const H=C.source,ce=p.get(H);delete ce[A.__cacheKey],o.memory.textures--}function q(C){const A=C.texture,H=n.get(C),ce=n.get(A);if(ce.__webglTexture!==void 0&&(i.deleteTexture(ce.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(H.__webglFramebuffer[oe]))for(let fe=0;fe<H.__webglFramebuffer[oe].length;fe++)i.deleteFramebuffer(H.__webglFramebuffer[oe][fe]);else i.deleteFramebuffer(H.__webglFramebuffer[oe]);H.__webglDepthbuffer&&i.deleteRenderbuffer(H.__webglDepthbuffer[oe])}else{if(Array.isArray(H.__webglFramebuffer))for(let oe=0;oe<H.__webglFramebuffer.length;oe++)i.deleteFramebuffer(H.__webglFramebuffer[oe]);else i.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&i.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&i.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let oe=0;oe<H.__webglColorRenderbuffer.length;oe++)H.__webglColorRenderbuffer[oe]&&i.deleteRenderbuffer(H.__webglColorRenderbuffer[oe]);H.__webglDepthRenderbuffer&&i.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let oe=0,fe=A.length;oe<fe;oe++){const be=n.get(A[oe]);be.__webglTexture&&(i.deleteTexture(be.__webglTexture),o.memory.textures--),n.remove(A[oe])}n.remove(A),n.remove(C)}let Z=0;function X(){Z=0}function j(){const C=Z;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),Z+=1,C}function $(C){const A=[];return A.push(C.wrapS),A.push(C.wrapT),A.push(C.wrapR||0),A.push(C.magFilter),A.push(C.minFilter),A.push(C.anisotropy),A.push(C.internalFormat),A.push(C.format),A.push(C.type),A.push(C.generateMipmaps),A.push(C.premultiplyAlpha),A.push(C.flipY),A.push(C.unpackAlignment),A.push(C.colorSpace),A.join()}function D(C,A){const H=n.get(C);if(C.isVideoTexture&&le(C),C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){const ce=C.image;if(ce===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Je(H,C,A);return}}t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+A)}function G(C,A){const H=n.get(C);if(C.version>0&&H.__version!==C.version){Je(H,C,A);return}t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+A)}function J(C,A){const H=n.get(C);if(C.version>0&&H.__version!==C.version){Je(H,C,A);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+A)}function Te(C,A){const H=n.get(C);if(C.version>0&&H.__version!==C.version){Tt(H,C,A);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+A)}const ye={[ra]:i.REPEAT,[Qn]:i.CLAMP_TO_EDGE,[Kc]:i.MIRRORED_REPEAT},Ee={[_n]:i.NEAREST,[oh]:i.NEAREST_MIPMAP_NEAREST,[Ic]:i.NEAREST_MIPMAP_LINEAR,[cn]:i.LINEAR,[c0]:i.LINEAR_MIPMAP_NEAREST,[ds]:i.LINEAR_MIPMAP_LINEAR},Me={[IM]:i.NEVER,[kM]:i.ALWAYS,[DM]:i.LESS,[NM]:i.LEQUAL,[UM]:i.EQUAL,[BM]:i.GEQUAL,[OM]:i.GREATER,[FM]:i.NOTEQUAL};function Ie(C,A,H){if(H?(i.texParameteri(C,i.TEXTURE_WRAP_S,ye[A.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,ye[A.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,ye[A.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,Ee[A.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,Ee[A.minFilter])):(i.texParameteri(C,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(C,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(A.wrapS!==Qn||A.wrapT!==Qn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(C,i.TEXTURE_MAG_FILTER,P(A.magFilter)),i.texParameteri(C,i.TEXTURE_MIN_FILTER,P(A.minFilter)),A.minFilter!==_n&&A.minFilter!==cn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Me[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ce=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===_n||A.minFilter!==Ic&&A.minFilter!==ds||A.type===Ci&&e.has("OES_texture_float_linear")===!1||a===!1&&A.type===br&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||n.get(A).__currentAnisotropy)&&(i.texParameterf(C,ce.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy)}}function Ue(C,A){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,A.addEventListener("dispose",Q));const ce=A.source;let oe=p.get(ce);oe===void 0&&(oe={},p.set(ce,oe));const fe=$(A);if(fe!==C.__cacheKey){oe[fe]===void 0&&(oe[fe]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),oe[fe].usedTimes++;const be=oe[C.__cacheKey];be!==void 0&&(oe[C.__cacheKey].usedTimes--,be.usedTimes===0&&k(A)),C.__cacheKey=fe,C.__webglTexture=oe[fe].texture}return H}function Je(C,A,H){let ce=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ce=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ce=i.TEXTURE_3D);const oe=Ue(C,A),fe=A.source;t.bindTexture(ce,C.__webglTexture,i.TEXTURE0+H);const be=n.get(fe);if(fe.version!==be.__version||oe===!0){t.activeTexture(i.TEXTURE0+H);const ve=Ct.getPrimaries(Ct.workingColorSpace),Ae=A.colorSpace===di?null:Ct.getPrimaries(A.colorSpace),Pe=A.colorSpace===di||ve===Ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const nt=w(A)&&x(A.image)===!1;let _e=S(A.image,nt,!1,u);_e=Re(A,_e);const Qe=x(_e)||a,Ge=s.convert(A.format,A.colorSpace);let Be=s.convert(A.type),Oe=z(A.internalFormat,Ge,Be,A.colorSpace,A.isVideoTexture);Ie(ce,A,Qe);let O;const te=A.mipmaps,Se=a&&A.isVideoTexture!==!0,Le=be.__version===void 0||oe===!0,we=M(A,_e,Qe);if(A.isDepthTexture)Oe=i.DEPTH_COMPONENT,a?A.type===Ci?Oe=i.DEPTH_COMPONENT32F:A.type===Jr?Oe=i.DEPTH_COMPONENT24:A.type===Vs?Oe=i.DEPTH24_STENCIL8:Oe=i.DEPTH_COMPONENT16:A.type===Ci&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===Ws&&Oe===i.DEPTH_COMPONENT&&A.type!==pd&&A.type!==Jr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=Jr,Be=s.convert(A.type)),A.format===sa&&Oe===i.DEPTH_COMPONENT&&(Oe=i.DEPTH_STENCIL,A.type!==Vs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=Vs,Be=s.convert(A.type))),Le&&(Se?t.texStorage2D(i.TEXTURE_2D,1,Oe,_e.width,_e.height):t.texImage2D(i.TEXTURE_2D,0,Oe,_e.width,_e.height,0,Ge,Be,null));else if(A.isDataTexture)if(te.length>0&&Qe){Se&&Le&&t.texStorage2D(i.TEXTURE_2D,we,Oe,te[0].width,te[0].height);for(let xe=0,Ye=te.length;xe<Ye;xe++)O=te[xe],Se?t.texSubImage2D(i.TEXTURE_2D,xe,0,0,O.width,O.height,Ge,Be,O.data):t.texImage2D(i.TEXTURE_2D,xe,Oe,O.width,O.height,0,Ge,Be,O.data);A.generateMipmaps=!1}else Se?(Le&&t.texStorage2D(i.TEXTURE_2D,we,Oe,_e.width,_e.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,_e.width,_e.height,Ge,Be,_e.data)):t.texImage2D(i.TEXTURE_2D,0,Oe,_e.width,_e.height,0,Ge,Be,_e.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Se&&Le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,Oe,te[0].width,te[0].height,_e.depth);for(let xe=0,Ye=te.length;xe<Ye;xe++)O=te[xe],A.format!==hi?Ge!==null?Se?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,xe,0,0,0,O.width,O.height,_e.depth,Ge,O.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,xe,Oe,O.width,O.height,_e.depth,0,O.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Se?t.texSubImage3D(i.TEXTURE_2D_ARRAY,xe,0,0,0,O.width,O.height,_e.depth,Ge,Be,O.data):t.texImage3D(i.TEXTURE_2D_ARRAY,xe,Oe,O.width,O.height,_e.depth,0,Ge,Be,O.data)}else{Se&&Le&&t.texStorage2D(i.TEXTURE_2D,we,Oe,te[0].width,te[0].height);for(let xe=0,Ye=te.length;xe<Ye;xe++)O=te[xe],A.format!==hi?Ge!==null?Se?t.compressedTexSubImage2D(i.TEXTURE_2D,xe,0,0,O.width,O.height,Ge,O.data):t.compressedTexImage2D(i.TEXTURE_2D,xe,Oe,O.width,O.height,0,O.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Se?t.texSubImage2D(i.TEXTURE_2D,xe,0,0,O.width,O.height,Ge,Be,O.data):t.texImage2D(i.TEXTURE_2D,xe,Oe,O.width,O.height,0,Ge,Be,O.data)}else if(A.isDataArrayTexture)Se?(Le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,Oe,_e.width,_e.height,_e.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Ge,Be,_e.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Oe,_e.width,_e.height,_e.depth,0,Ge,Be,_e.data);else if(A.isData3DTexture)Se?(Le&&t.texStorage3D(i.TEXTURE_3D,we,Oe,_e.width,_e.height,_e.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Ge,Be,_e.data)):t.texImage3D(i.TEXTURE_3D,0,Oe,_e.width,_e.height,_e.depth,0,Ge,Be,_e.data);else if(A.isFramebufferTexture){if(Le)if(Se)t.texStorage2D(i.TEXTURE_2D,we,Oe,_e.width,_e.height);else{let xe=_e.width,Ye=_e.height;for(let Ze=0;Ze<we;Ze++)t.texImage2D(i.TEXTURE_2D,Ze,Oe,xe,Ye,0,Ge,Be,null),xe>>=1,Ye>>=1}}else if(te.length>0&&Qe){Se&&Le&&t.texStorage2D(i.TEXTURE_2D,we,Oe,te[0].width,te[0].height);for(let xe=0,Ye=te.length;xe<Ye;xe++)O=te[xe],Se?t.texSubImage2D(i.TEXTURE_2D,xe,0,0,Ge,Be,O):t.texImage2D(i.TEXTURE_2D,xe,Oe,Ge,Be,O);A.generateMipmaps=!1}else Se?(Le&&t.texStorage2D(i.TEXTURE_2D,we,Oe,_e.width,_e.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ge,Be,_e)):t.texImage2D(i.TEXTURE_2D,0,Oe,Ge,Be,_e);I(A,Qe)&&R(ce),be.__version=fe.version,A.onUpdate&&A.onUpdate(A)}C.__version=A.version}function Tt(C,A,H){if(A.image.length!==6)return;const ce=Ue(C,A),oe=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+H);const fe=n.get(oe);if(oe.version!==fe.__version||ce===!0){t.activeTexture(i.TEXTURE0+H);const be=Ct.getPrimaries(Ct.workingColorSpace),ve=A.colorSpace===di?null:Ct.getPrimaries(A.colorSpace),Ae=A.colorSpace===di||be===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const Pe=A.isCompressedTexture||A.image[0].isCompressedTexture,nt=A.image[0]&&A.image[0].isDataTexture,_e=[];for(let xe=0;xe<6;xe++)!Pe&&!nt?_e[xe]=S(A.image[xe],!1,!0,c):_e[xe]=nt?A.image[xe].image:A.image[xe],_e[xe]=Re(A,_e[xe]);const Qe=_e[0],Ge=x(Qe)||a,Be=s.convert(A.format,A.colorSpace),Oe=s.convert(A.type),O=z(A.internalFormat,Be,Oe,A.colorSpace),te=a&&A.isVideoTexture!==!0,Se=fe.__version===void 0||ce===!0;let Le=M(A,Qe,Ge);Ie(i.TEXTURE_CUBE_MAP,A,Ge);let we;if(Pe){te&&Se&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Le,O,Qe.width,Qe.height);for(let xe=0;xe<6;xe++){we=_e[xe].mipmaps;for(let Ye=0;Ye<we.length;Ye++){const Ze=we[Ye];A.format!==hi?Be!==null?te?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ye,0,0,Ze.width,Ze.height,Be,Ze.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ye,O,Ze.width,Ze.height,0,Ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):te?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ye,0,0,Ze.width,Ze.height,Be,Oe,Ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ye,O,Ze.width,Ze.height,0,Be,Oe,Ze.data)}}}else{we=A.mipmaps,te&&Se&&(we.length>0&&Le++,t.texStorage2D(i.TEXTURE_CUBE_MAP,Le,O,_e[0].width,_e[0].height));for(let xe=0;xe<6;xe++)if(nt){te?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,_e[xe].width,_e[xe].height,Be,Oe,_e[xe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,O,_e[xe].width,_e[xe].height,0,Be,Oe,_e[xe].data);for(let Ye=0;Ye<we.length;Ye++){const Xt=we[Ye].image[xe].image;te?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ye+1,0,0,Xt.width,Xt.height,Be,Oe,Xt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ye+1,O,Xt.width,Xt.height,0,Be,Oe,Xt.data)}}else{te?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Be,Oe,_e[xe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,O,Be,Oe,_e[xe]);for(let Ye=0;Ye<we.length;Ye++){const Ze=we[Ye];te?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ye+1,0,0,Be,Oe,Ze.image[xe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ye+1,O,Be,Oe,Ze.image[xe])}}}I(A,Ge)&&R(i.TEXTURE_CUBE_MAP),fe.__version=oe.version,A.onUpdate&&A.onUpdate(A)}C.__version=A.version}function $e(C,A,H,ce,oe,fe){const be=s.convert(H.format,H.colorSpace),ve=s.convert(H.type),Ae=z(H.internalFormat,be,ve,H.colorSpace);if(!n.get(A).__hasExternalTextures){const nt=Math.max(1,A.width>>fe),_e=Math.max(1,A.height>>fe);oe===i.TEXTURE_3D||oe===i.TEXTURE_2D_ARRAY?t.texImage3D(oe,fe,Ae,nt,_e,A.depth,0,be,ve,null):t.texImage2D(oe,fe,Ae,nt,_e,0,be,ve,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),ge(A)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ce,oe,n.get(H).__webglTexture,0,ue(A)):(oe===i.TEXTURE_2D||oe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ce,oe,n.get(H).__webglTexture,fe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function E(C,A,H){if(i.bindRenderbuffer(i.RENDERBUFFER,C),A.depthBuffer&&!A.stencilBuffer){let ce=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(H||ge(A)){const oe=A.depthTexture;oe&&oe.isDepthTexture&&(oe.type===Ci?ce=i.DEPTH_COMPONENT32F:oe.type===Jr&&(ce=i.DEPTH_COMPONENT24));const fe=ue(A);ge(A)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe,ce,A.width,A.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,ce,A.width,A.height)}else i.renderbufferStorage(i.RENDERBUFFER,ce,A.width,A.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,C)}else if(A.depthBuffer&&A.stencilBuffer){const ce=ue(A);H&&ge(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,i.DEPTH24_STENCIL8,A.width,A.height):ge(A)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,i.DEPTH24_STENCIL8,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,C)}else{const ce=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let oe=0;oe<ce.length;oe++){const fe=ce[oe],be=s.convert(fe.format,fe.colorSpace),ve=s.convert(fe.type),Ae=z(fe.internalFormat,be,ve,fe.colorSpace),Pe=ue(A);H&&ge(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe,Ae,A.width,A.height):ge(A)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pe,Ae,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,Ae,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function B(C,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),D(A.depthTexture,0);const ce=n.get(A.depthTexture).__webglTexture,oe=ue(A);if(A.depthTexture.format===Ws)ge(A)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ce,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ce,0);else if(A.depthTexture.format===sa)ge(A)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ce,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function V(C){const A=n.get(C),H=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!A.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");B(A.__webglFramebuffer,C)}else if(H){A.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[ce]),A.__webglDepthbuffer[ce]=i.createRenderbuffer(),E(A.__webglDepthbuffer[ce],C,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=i.createRenderbuffer(),E(A.__webglDepthbuffer,C,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function ie(C,A,H){const ce=n.get(C);A!==void 0&&$e(ce.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&V(C)}function ee(C){const A=C.texture,H=n.get(C),ce=n.get(A);C.addEventListener("dispose",W),C.isWebGLMultipleRenderTargets!==!0&&(ce.__webglTexture===void 0&&(ce.__webglTexture=i.createTexture()),ce.__version=A.version,o.memory.textures++);const oe=C.isWebGLCubeRenderTarget===!0,fe=C.isWebGLMultipleRenderTargets===!0,be=x(C)||a;if(oe){H.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(a&&A.mipmaps&&A.mipmaps.length>0){H.__webglFramebuffer[ve]=[];for(let Ae=0;Ae<A.mipmaps.length;Ae++)H.__webglFramebuffer[ve][Ae]=i.createFramebuffer()}else H.__webglFramebuffer[ve]=i.createFramebuffer()}else{if(a&&A.mipmaps&&A.mipmaps.length>0){H.__webglFramebuffer=[];for(let ve=0;ve<A.mipmaps.length;ve++)H.__webglFramebuffer[ve]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(fe)if(r.drawBuffers){const ve=C.texture;for(let Ae=0,Pe=ve.length;Ae<Pe;Ae++){const nt=n.get(ve[Ae]);nt.__webglTexture===void 0&&(nt.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&ge(C)===!1){const ve=fe?A:[A];H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Ae=0;Ae<ve.length;Ae++){const Pe=ve[Ae];H.__webglColorRenderbuffer[Ae]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[Ae]);const nt=s.convert(Pe.format,Pe.colorSpace),_e=s.convert(Pe.type),Qe=z(Pe.internalFormat,nt,_e,Pe.colorSpace,C.isXRRenderTarget===!0),Ge=ue(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ge,Qe,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,H.__webglColorRenderbuffer[Ae])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),E(H.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(oe){t.bindTexture(i.TEXTURE_CUBE_MAP,ce.__webglTexture),Ie(i.TEXTURE_CUBE_MAP,A,be);for(let ve=0;ve<6;ve++)if(a&&A.mipmaps&&A.mipmaps.length>0)for(let Ae=0;Ae<A.mipmaps.length;Ae++)$e(H.__webglFramebuffer[ve][Ae],C,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ae);else $e(H.__webglFramebuffer[ve],C,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);I(A,be)&&R(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){const ve=C.texture;for(let Ae=0,Pe=ve.length;Ae<Pe;Ae++){const nt=ve[Ae],_e=n.get(nt);t.bindTexture(i.TEXTURE_2D,_e.__webglTexture),Ie(i.TEXTURE_2D,nt,be),$e(H.__webglFramebuffer,C,nt,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,0),I(nt,be)&&R(i.TEXTURE_2D)}t.unbindTexture()}else{let ve=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?ve=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ve,ce.__webglTexture),Ie(ve,A,be),a&&A.mipmaps&&A.mipmaps.length>0)for(let Ae=0;Ae<A.mipmaps.length;Ae++)$e(H.__webglFramebuffer[Ae],C,A,i.COLOR_ATTACHMENT0,ve,Ae);else $e(H.__webglFramebuffer,C,A,i.COLOR_ATTACHMENT0,ve,0);I(A,be)&&R(ve),t.unbindTexture()}C.depthBuffer&&V(C)}function F(C){const A=x(C)||a,H=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ce=0,oe=H.length;ce<oe;ce++){const fe=H[ce];if(I(fe,A)){const be=C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ve=n.get(fe).__webglTexture;t.bindTexture(be,ve),R(be),t.unbindTexture()}}}function de(C){if(a&&C.samples>0&&ge(C)===!1){const A=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],H=C.width,ce=C.height;let oe=i.COLOR_BUFFER_BIT;const fe=[],be=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=n.get(C),Ae=C.isWebGLMultipleRenderTargets===!0;if(Ae)for(let Pe=0;Pe<A.length;Pe++)t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let Pe=0;Pe<A.length;Pe++){fe.push(i.COLOR_ATTACHMENT0+Pe),C.depthBuffer&&fe.push(be);const nt=ve.__ignoreDepthValues!==void 0?ve.__ignoreDepthValues:!1;if(nt===!1&&(C.depthBuffer&&(oe|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&(oe|=i.STENCIL_BUFFER_BIT)),Ae&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ve.__webglColorRenderbuffer[Pe]),nt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[be]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[be])),Ae){const _e=n.get(A[Pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,_e,0)}i.blitFramebuffer(0,0,H,ce,0,0,H,ce,oe,i.NEAREST),d&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,fe)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ae)for(let Pe=0;Pe<A.length;Pe++){t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,ve.__webglColorRenderbuffer[Pe]);const nt=n.get(A[Pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,nt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}}function ue(C){return Math.min(f,C.samples)}function ge(C){const A=n.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function le(C){const A=o.render.frame;v.get(C)!==A&&(v.set(C,A),C.update())}function Re(C,A){const H=C.colorSpace,ce=C.format,oe=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===ch||H!==fn&&H!==di&&(Ct.getTransfer(H)===Ht?a===!1?e.has("EXT_sRGB")===!0&&ce===hi?(C.format=ch,C.minFilter=cn,C.generateMipmaps=!1):A=M0.sRGBToLinear(A):(ce!==hi||oe!==ls)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),A}this.allocateTextureUnit=j,this.resetTextureUnits=X,this.setTexture2D=D,this.setTexture2DArray=G,this.setTexture3D=J,this.setTextureCube=Te,this.rebindTextures=ie,this.setupRenderTarget=ee,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=V,this.setupFrameBufferTexture=$e,this.useMultisampledRTT=ge}function $w(i,e,t){const n=t.isWebGL2;function r(s,o=di){let a;const l=Ct.getTransfer(o);if(s===ls)return i.UNSIGNED_BYTE;if(s===f0)return i.UNSIGNED_SHORT_4_4_4_4;if(s===h0)return i.UNSIGNED_SHORT_5_5_5_1;if(s===vM)return i.BYTE;if(s===xM)return i.SHORT;if(s===pd)return i.UNSIGNED_SHORT;if(s===u0)return i.INT;if(s===Jr)return i.UNSIGNED_INT;if(s===Ci)return i.FLOAT;if(s===br)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===yM)return i.ALPHA;if(s===hi)return i.RGBA;if(s===SM)return i.LUMINANCE;if(s===MM)return i.LUMINANCE_ALPHA;if(s===Ws)return i.DEPTH_COMPONENT;if(s===sa)return i.DEPTH_STENCIL;if(s===ch)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===d0)return i.RED;if(s===p0)return i.RED_INTEGER;if(s===TM)return i.RG;if(s===m0)return i.RG_INTEGER;if(s===g0)return i.RGBA_INTEGER;if(s===Wu||s===Xu||s===Yu||s===qu)if(l===Ht)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Wu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Xu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Yu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===qu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Wu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Xu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Yu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===qu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Np||s===Op||s===Fp||s===Bp)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Np)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Op)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Fp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Bp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===EM)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===kp||s===zp)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===kp)return l===Ht?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===zp)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Hp||s===Gp||s===Vp||s===Wp||s===Xp||s===Yp||s===qp||s===Kp||s===jp||s===$p||s===Zp||s===Jp||s===Qp||s===em)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Hp)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Gp)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Vp)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Wp)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Xp)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Yp)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===qp)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Kp)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===jp)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===$p)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Zp)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Jp)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Qp)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===em)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ku||s===tm||s===nm)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Ku)return l===Ht?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===tm)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===nm)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===bM||s===im||s===rm||s===sm)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Ku)return a.COMPRESSED_RED_RGTC1_EXT;if(s===im)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===rm)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===sm)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Vs?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class Zw extends Cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ks extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jw={type:"move"};class vf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ks,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ks,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ks,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,n),m=this._getHandJoint(c,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,v=.005;c.inputState.pinching&&h>d+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Jw)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ks;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Qw extends Sn{constructor(e,t,n,r,s,o,a,l,c,u){if(u=u!==void 0?u:Ws,u!==Ws&&u!==sa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ws&&(n=Jr),n===void 0&&u===sa&&(n=Vs),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:_n,this.minFilter=l!==void 0?l:_n,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class e1 extends xa{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,v=null;const g=t.getContextAttributes();let p=null,m=null;const T=[],S=[],x=new Cn;x.layers.enable(1),x.viewport=new Nt;const w=new Cn;w.layers.enable(2),w.viewport=new Nt;const I=[x,w],R=new Zw;R.layers.enable(1),R.layers.enable(2);let z=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let J=T[G];return J===void 0&&(J=new vf,T[G]=J),J.getTargetRaySpace()},this.getControllerGrip=function(G){let J=T[G];return J===void 0&&(J=new vf,T[G]=J),J.getGripSpace()},this.getHand=function(G){let J=T[G];return J===void 0&&(J=new vf,T[G]=J),J.getHandSpace()};function P(G){const J=S.indexOf(G.inputSource);if(J===-1)return;const Te=T[J];Te!==void 0&&(Te.update(G.inputSource,G.frame,c||o),Te.dispatchEvent({type:G.type,data:G.inputSource}))}function Q(){r.removeEventListener("select",P),r.removeEventListener("selectstart",P),r.removeEventListener("selectend",P),r.removeEventListener("squeeze",P),r.removeEventListener("squeezestart",P),r.removeEventListener("squeezeend",P),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",W);for(let G=0;G<T.length;G++){const J=S[G];J!==null&&(S[G]=null,T[G].disconnect(J))}z=null,M=null,e.setRenderTarget(p),d=null,h=null,f=null,r=null,m=null,D.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",P),r.addEventListener("selectstart",P),r.addEventListener("selectend",P),r.addEventListener("squeeze",P),r.addEventListener("squeezestart",P),r.addEventListener("squeezeend",P),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",W),g.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const J={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,J),r.updateRenderState({baseLayer:d}),m=new eo(d.framebufferWidth,d.framebufferHeight,{format:hi,type:ls,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let J=null,Te=null,ye=null;g.depth&&(ye=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=g.stencil?sa:Ws,Te=g.stencil?Vs:Jr);const Ee={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(Ee),r.updateRenderState({layers:[h]}),m=new eo(h.textureWidth,h.textureHeight,{format:hi,type:ls,depthTexture:new Qw(h.textureWidth,h.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const Me=e.properties.get(m);Me.__ignoreDepthValues=h.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),D.setContext(r),D.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function W(G){for(let J=0;J<G.removed.length;J++){const Te=G.removed[J],ye=S.indexOf(Te);ye>=0&&(S[ye]=null,T[ye].disconnect(Te))}for(let J=0;J<G.added.length;J++){const Te=G.added[J];let ye=S.indexOf(Te);if(ye===-1){for(let Me=0;Me<T.length;Me++)if(Me>=S.length){S.push(Te),ye=Me;break}else if(S[Me]===null){S[Me]=Te,ye=Me;break}if(ye===-1)break}const Ee=T[ye];Ee&&Ee.connect(Te)}}const se=new Y,k=new Y;function q(G,J,Te){se.setFromMatrixPosition(J.matrixWorld),k.setFromMatrixPosition(Te.matrixWorld);const ye=se.distanceTo(k),Ee=J.projectionMatrix.elements,Me=Te.projectionMatrix.elements,Ie=Ee[14]/(Ee[10]-1),Ue=Ee[14]/(Ee[10]+1),Je=(Ee[9]+1)/Ee[5],Tt=(Ee[9]-1)/Ee[5],$e=(Ee[8]-1)/Ee[0],E=(Me[8]+1)/Me[0],B=Ie*$e,V=Ie*E,ie=ye/(-$e+E),ee=ie*-$e;J.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(ee),G.translateZ(ie),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const F=Ie+ie,de=Ue+ie,ue=B-ee,ge=V+(ye-ee),le=Je*Ue/de*F,Re=Tt*Ue/de*F;G.projectionMatrix.makePerspective(ue,ge,le,Re,F,de),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function Z(G,J){J===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(J.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;R.near=w.near=x.near=G.near,R.far=w.far=x.far=G.far,(z!==R.near||M!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),z=R.near,M=R.far);const J=G.parent,Te=R.cameras;Z(R,J);for(let ye=0;ye<Te.length;ye++)Z(Te[ye],J);Te.length===2?q(R,x,w):R.projectionMatrix.copy(x.projectionMatrix),X(G,R,J)};function X(G,J,Te){Te===null?G.matrix.copy(J.matrixWorld):(G.matrix.copy(Te.matrixWorld),G.matrix.invert(),G.matrix.multiply(J.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(J.projectionMatrix),G.projectionMatrixInverse.copy(J.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=aa*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(G){l=G,h!==null&&(h.fixedFoveation=G),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=G)};let j=null;function $(G,J){if(u=J.getViewerPose(c||o),v=J,u!==null){const Te=u.views;d!==null&&(e.setRenderTargetFramebuffer(m,d.framebuffer),e.setRenderTarget(m));let ye=!1;Te.length!==R.cameras.length&&(R.cameras.length=0,ye=!0);for(let Ee=0;Ee<Te.length;Ee++){const Me=Te[Ee];let Ie=null;if(d!==null)Ie=d.getViewport(Me);else{const Je=f.getViewSubImage(h,Me);Ie=Je.viewport,Ee===0&&(e.setRenderTargetTextures(m,Je.colorTexture,h.ignoreDepthValues?void 0:Je.depthStencilTexture),e.setRenderTarget(m))}let Ue=I[Ee];Ue===void 0&&(Ue=new Cn,Ue.layers.enable(Ee),Ue.viewport=new Nt,I[Ee]=Ue),Ue.matrix.fromArray(Me.transform.matrix),Ue.matrix.decompose(Ue.position,Ue.quaternion,Ue.scale),Ue.projectionMatrix.fromArray(Me.projectionMatrix),Ue.projectionMatrixInverse.copy(Ue.projectionMatrix).invert(),Ue.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),Ee===0&&(R.matrix.copy(Ue.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),ye===!0&&R.cameras.push(Ue)}}for(let Te=0;Te<T.length;Te++){const ye=S[Te],Ee=T[Te];ye!==null&&Ee!==void 0&&Ee.update(ye,J,c||o)}j&&j(G,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),v=null}const D=new D0;D.setAnimationLoop($),this.setAnimationLoop=function(G){j=G},this.dispose=function(){}}}function t1(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,C0(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function r(p,m,T,S,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),f(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),h(p,m),m.isMeshPhysicalMaterial&&d(p,m,x)):m.isMeshMatcapMaterial?(s(p,m),v(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),g(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,T,S):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Kn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Kn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const T=e.get(m).envMap;if(T&&(p.envMap.value=T,p.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const S=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*S,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,T,S){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*T,p.scale.value=S*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,T){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Kn&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){const T=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function n1(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(T,S){const x=S.program;n.uniformBlockBinding(T,x)}function c(T,S){let x=r[T.id];x===void 0&&(v(T),x=u(T),r[T.id]=x,T.addEventListener("dispose",p));const w=S.program;n.updateUBOMapping(T,w);const I=e.render.frame;s[T.id]!==I&&(h(T),s[T.id]=I)}function u(T){const S=f();T.__bindingPointIndex=S;const x=i.createBuffer(),w=T.__size,I=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,w,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,x),x}function f(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(T){const S=r[T.id],x=T.uniforms,w=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let I=0,R=x.length;I<R;I++){const z=x[I];if(d(z,I,w)===!0){const M=z.__offset,P=Array.isArray(z.value)?z.value:[z.value];let Q=0;for(let W=0;W<P.length;W++){const se=P[W],k=g(se);typeof se=="number"?(z.__data[0]=se,i.bufferSubData(i.UNIFORM_BUFFER,M+Q,z.__data)):se.isMatrix3?(z.__data[0]=se.elements[0],z.__data[1]=se.elements[1],z.__data[2]=se.elements[2],z.__data[3]=se.elements[0],z.__data[4]=se.elements[3],z.__data[5]=se.elements[4],z.__data[6]=se.elements[5],z.__data[7]=se.elements[0],z.__data[8]=se.elements[6],z.__data[9]=se.elements[7],z.__data[10]=se.elements[8],z.__data[11]=se.elements[0]):(se.toArray(z.__data,Q),Q+=k.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,M,z.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(T,S,x){const w=T.value;if(x[S]===void 0){if(typeof w=="number")x[S]=w;else{const I=Array.isArray(w)?w:[w],R=[];for(let z=0;z<I.length;z++)R.push(I[z].clone());x[S]=R}return!0}else if(typeof w=="number"){if(x[S]!==w)return x[S]=w,!0}else{const I=Array.isArray(x[S])?x[S]:[x[S]],R=Array.isArray(w)?w:[w];for(let z=0;z<I.length;z++){const M=I[z];if(M.equals(R[z])===!1)return M.copy(R[z]),!0}}return!1}function v(T){const S=T.uniforms;let x=0;const w=16;let I=0;for(let R=0,z=S.length;R<z;R++){const M=S[R],P={boundary:0,storage:0},Q=Array.isArray(M.value)?M.value:[M.value];for(let W=0,se=Q.length;W<se;W++){const k=Q[W],q=g(k);P.boundary+=q.boundary,P.storage+=q.storage}if(M.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=x,R>0){I=x%w;const W=w-I;I!==0&&W-P.boundary<0&&(x+=w-I,M.__offset=x)}x+=P.storage}return I=x%w,I>0&&(x+=w-I),T.__size=x,T.__cache={},this}function g(T){const S={boundary:0,storage:0};return typeof T=="number"?(S.boundary=4,S.storage=4):T.isVector2?(S.boundary=8,S.storage=8):T.isVector3||T.isColor?(S.boundary=16,S.storage=12):T.isVector4?(S.boundary=16,S.storage=16):T.isMatrix3?(S.boundary=48,S.storage=48):T.isMatrix4?(S.boundary=64,S.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),S}function p(T){const S=T.target;S.removeEventListener("dispose",p);const x=o.indexOf(S.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function m(){for(const T in r)i.deleteBuffer(r[T]);o=[],r={},s={}}return{bind:l,update:c,dispose:m}}class B0{constructor(e={}){const{canvas:t=QM(),context:n=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=o;const d=new Uint32Array(4),v=new Int32Array(4);let g=null,p=null;const m=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$t,this._useLegacyLights=!1,this.toneMapping=as,this.toneMappingExposure=1;const S=this;let x=!1,w=0,I=0,R=null,z=-1,M=null;const P=new Nt,Q=new Nt;let W=null;const se=new ct(0);let k=0,q=t.width,Z=t.height,X=1,j=null,$=null;const D=new Nt(0,0,q,Z),G=new Nt(0,0,q,Z);let J=!1;const Te=new _d;let ye=!1,Ee=!1,Me=null;const Ie=new pt,Ue=new vt,Je=new Y,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function $e(){return R===null?X:1}let E=n;function B(_,b){for(let L=0;L<_.length;L++){const U=_[L],N=t.getContext(U,b);if(N!==null)return N}return null}try{const _={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${dd}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",Se,!1),t.addEventListener("webglcontextcreationerror",Le,!1),E===null){const b=["webgl2","webgl","experimental-webgl"];if(S.isWebGL1Renderer===!0&&b.shift(),E=B(b,_),E===null)throw B(b)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&E instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),E.getShaderPrecisionFormat===void 0&&(E.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let V,ie,ee,F,de,ue,ge,le,Re,C,A,H,ce,oe,fe,be,ve,Ae,Pe,nt,_e,Qe,Ge,Be;function Oe(){V=new dA(E),ie=new aA(E,V,e),V.init(ie),Qe=new $w(E,V,ie),ee=new Kw(E,V,ie),F=new gA(E),de=new Uw,ue=new jw(E,V,ee,de,ie,Qe,F),ge=new cA(S),le=new hA(S),Re=new AT(E,ie),Ge=new sA(E,V,Re,ie),C=new pA(E,Re,F,Ge),A=new yA(E,C,Re,F),Pe=new xA(E,ie,ue),be=new lA(de),H=new Dw(S,ge,le,V,ie,Ge,be),ce=new t1(S,de),oe=new Ow,fe=new Gw(V,ie),Ae=new rA(S,ge,le,ee,A,h,l),ve=new qw(S,A,ie),Be=new n1(E,F,ie,ee),nt=new oA(E,V,F,ie),_e=new mA(E,V,F,ie),F.programs=H.programs,S.capabilities=ie,S.extensions=V,S.properties=de,S.renderLists=oe,S.shadowMap=ve,S.state=ee,S.info=F}Oe();const O=new e1(S,E);this.xr=O,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){const _=V.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){const _=V.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(_){_!==void 0&&(X=_,this.setSize(q,Z,!1))},this.getSize=function(_){return _.set(q,Z)},this.setSize=function(_,b,L=!0){if(O.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=_,Z=b,t.width=Math.floor(_*X),t.height=Math.floor(b*X),L===!0&&(t.style.width=_+"px",t.style.height=b+"px"),this.setViewport(0,0,_,b)},this.getDrawingBufferSize=function(_){return _.set(q*X,Z*X).floor()},this.setDrawingBufferSize=function(_,b,L){q=_,Z=b,X=L,t.width=Math.floor(_*L),t.height=Math.floor(b*L),this.setViewport(0,0,_,b)},this.getCurrentViewport=function(_){return _.copy(P)},this.getViewport=function(_){return _.copy(D)},this.setViewport=function(_,b,L,U){_.isVector4?D.set(_.x,_.y,_.z,_.w):D.set(_,b,L,U),ee.viewport(P.copy(D).multiplyScalar(X).floor())},this.getScissor=function(_){return _.copy(G)},this.setScissor=function(_,b,L,U){_.isVector4?G.set(_.x,_.y,_.z,_.w):G.set(_,b,L,U),ee.scissor(Q.copy(G).multiplyScalar(X).floor())},this.getScissorTest=function(){return J},this.setScissorTest=function(_){ee.setScissorTest(J=_)},this.setOpaqueSort=function(_){j=_},this.setTransparentSort=function(_){$=_},this.getClearColor=function(_){return _.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor.apply(Ae,arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha.apply(Ae,arguments)},this.clear=function(_=!0,b=!0,L=!0){let U=0;if(_){let N=!1;if(R!==null){const K=R.texture.format;N=K===g0||K===m0||K===p0}if(N){const K=R.texture.type,ne=K===ls||K===Jr||K===pd||K===Vs||K===f0||K===h0,ae=Ae.getClearColor(),re=Ae.getClearAlpha(),he=ae.r,pe=ae.g,me=ae.b;ne?(d[0]=he,d[1]=pe,d[2]=me,d[3]=re,E.clearBufferuiv(E.COLOR,0,d)):(v[0]=he,v[1]=pe,v[2]=me,v[3]=re,E.clearBufferiv(E.COLOR,0,v))}else U|=E.COLOR_BUFFER_BIT}b&&(U|=E.DEPTH_BUFFER_BIT),L&&(U|=E.STENCIL_BUFFER_BIT),E.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",Se,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),oe.dispose(),fe.dispose(),de.dispose(),ge.dispose(),le.dispose(),A.dispose(),Ge.dispose(),Be.dispose(),H.dispose(),O.dispose(),O.removeEventListener("sessionstart",ke),O.removeEventListener("sessionend",qe),Me&&(Me.dispose(),Me=null),tt.stop()};function te(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function Se(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const _=F.autoReset,b=ve.enabled,L=ve.autoUpdate,U=ve.needsUpdate,N=ve.type;Oe(),F.autoReset=_,ve.enabled=b,ve.autoUpdate=L,ve.needsUpdate=U,ve.type=N}function Le(_){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function we(_){const b=_.target;b.removeEventListener("dispose",we),xe(b)}function xe(_){Ye(_),de.remove(_)}function Ye(_){const b=de.get(_).programs;b!==void 0&&(b.forEach(function(L){H.releaseProgram(L)}),_.isShaderMaterial&&H.releaseShaderCache(_))}this.renderBufferDirect=function(_,b,L,U,N,K){b===null&&(b=Tt);const ne=N.isMesh&&N.matrixWorld.determinant()<0,ae=Qt(_,b,L,U,N);ee.setMaterial(U,ne);let re=L.index,he=1;if(U.wireframe===!0){if(re=C.getWireframeAttribute(L),re===void 0)return;he=2}const pe=L.drawRange,me=L.attributes.position;let Ce=pe.start*he,Ve=(pe.start+pe.count)*he;K!==null&&(Ce=Math.max(Ce,K.start*he),Ve=Math.min(Ve,(K.start+K.count)*he)),re!==null?(Ce=Math.max(Ce,0),Ve=Math.min(Ve,re.count)):me!=null&&(Ce=Math.max(Ce,0),Ve=Math.min(Ve,me.count));const Fe=Ve-Ce;if(Fe<0||Fe===1/0)return;Ge.setup(N,U,ae,L,re);let ze,He=nt;if(re!==null&&(ze=Re.get(re),He=_e,He.setIndex(ze)),N.isMesh)U.wireframe===!0?(ee.setLineWidth(U.wireframeLinewidth*$e()),He.setMode(E.LINES)):He.setMode(E.TRIANGLES);else if(N.isLine){let We=U.linewidth;We===void 0&&(We=1),ee.setLineWidth(We*$e()),N.isLineSegments?He.setMode(E.LINES):N.isLineLoop?He.setMode(E.LINE_LOOP):He.setMode(E.LINE_STRIP)}else N.isPoints?He.setMode(E.POINTS):N.isSprite&&He.setMode(E.TRIANGLES);if(N.isInstancedMesh)He.renderInstances(Ce,Fe,N.count);else if(L.isInstancedBufferGeometry){const We=L._maxInstanceCount!==void 0?L._maxInstanceCount:1/0,Et=Math.min(L.instanceCount,We);He.renderInstances(Ce,Fe,Et)}else He.render(Ce,Fe)},this.compile=function(_,b){function L(U,N,K){U.transparent===!0&&U.side===Ki&&U.forceSinglePass===!1?(U.side=Kn,U.needsUpdate=!0,rt(U,N,K),U.side=Dr,U.needsUpdate=!0,rt(U,N,K),U.side=Ki):rt(U,N,K)}p=fe.get(_),p.init(),T.push(p),_.traverseVisible(function(U){U.isLight&&U.layers.test(b.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights(S._useLegacyLights),_.traverse(function(U){const N=U.material;if(N)if(Array.isArray(N))for(let K=0;K<N.length;K++){const ne=N[K];L(ne,_,U)}else L(N,_,U)}),T.pop(),p=null};let Ze=null;function Xt(_){Ze&&Ze(_)}function ke(){tt.stop()}function qe(){tt.start()}const tt=new D0;tt.setAnimationLoop(Xt),typeof self<"u"&&tt.setContext(self),this.setAnimationLoop=function(_){Ze=_,O.setAnimationLoop(_),_===null?tt.stop():tt.start()},O.addEventListener("sessionstart",ke),O.addEventListener("sessionend",qe),this.render=function(_,b){if(b!==void 0&&b.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),b.parent===null&&b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.enabled===!0&&O.isPresenting===!0&&(O.cameraAutoUpdate===!0&&O.updateCamera(b),b=O.getCamera()),_.isScene===!0&&_.onBeforeRender(S,_,b,R),p=fe.get(_,T.length),p.init(),T.push(p),Ie.multiplyMatrices(b.projectionMatrix,b.matrixWorldInverse),Te.setFromProjectionMatrix(Ie),Ee=this.localClippingEnabled,ye=be.init(this.clippingPlanes,Ee),g=oe.get(_,m.length),g.init(),m.push(g),De(_,b,0,S.sortObjects),g.finish(),S.sortObjects===!0&&g.sort(j,$),this.info.render.frame++,ye===!0&&be.beginShadows();const L=p.state.shadowsArray;if(ve.render(L,_,b),ye===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ae.render(g,_),p.setupLights(S._useLegacyLights),b.isArrayCamera){const U=b.cameras;for(let N=0,K=U.length;N<K;N++){const ne=U[N];it(g,_,ne,ne.viewport)}}else it(g,_,b);R!==null&&(ue.updateMultisampleRenderTarget(R),ue.updateRenderTargetMipmap(R)),_.isScene===!0&&_.onAfterRender(S,_,b),Ge.resetDefaultState(),z=-1,M=null,T.pop(),T.length>0?p=T[T.length-1]:p=null,m.pop(),m.length>0?g=m[m.length-1]:g=null};function De(_,b,L,U){if(_.visible===!1)return;if(_.layers.test(b.layers)){if(_.isGroup)L=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(b);else if(_.isLight)p.pushLight(_),_.castShadow&&p.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||Te.intersectsSprite(_)){U&&Je.setFromMatrixPosition(_.matrixWorld).applyMatrix4(Ie);const ne=A.update(_),ae=_.material;ae.visible&&g.push(_,ne,ae,L,Je.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||Te.intersectsObject(_))){const ne=A.update(_),ae=_.material;if(U&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),Je.copy(_.boundingSphere.center)):(ne.boundingSphere===null&&ne.computeBoundingSphere(),Je.copy(ne.boundingSphere.center)),Je.applyMatrix4(_.matrixWorld).applyMatrix4(Ie)),Array.isArray(ae)){const re=ne.groups;for(let he=0,pe=re.length;he<pe;he++){const me=re[he],Ce=ae[me.materialIndex];Ce&&Ce.visible&&g.push(_,ne,Ce,L,Je.z,me)}}else ae.visible&&g.push(_,ne,ae,L,Je.z,null)}}const K=_.children;for(let ne=0,ae=K.length;ne<ae;ne++)De(K[ne],b,L,U)}function it(_,b,L,U){const N=_.opaque,K=_.transmissive,ne=_.transparent;p.setupLightsView(L),ye===!0&&be.setGlobalState(S.clippingPlanes,L),K.length>0&&je(N,K,b,L),U&&ee.viewport(P.copy(U)),N.length>0&&et(N,b,L),K.length>0&&et(K,b,L),ne.length>0&&et(ne,b,L),ee.buffers.depth.setTest(!0),ee.buffers.depth.setMask(!0),ee.buffers.color.setMask(!0),ee.setPolygonOffset(!1)}function je(_,b,L,U){const N=ie.isWebGL2;Me===null&&(Me=new eo(1,1,{generateMipmaps:!0,type:V.has("EXT_color_buffer_half_float")?br:ls,minFilter:ds,samples:N?4:0})),S.getDrawingBufferSize(Ue),N?Me.setSize(Ue.x,Ue.y):Me.setSize(Qc(Ue.x),Qc(Ue.y));const K=S.getRenderTarget();S.setRenderTarget(Me),S.getClearColor(se),k=S.getClearAlpha(),k<1&&S.setClearColor(16777215,.5),S.clear();const ne=S.toneMapping;S.toneMapping=as,et(_,L,U),ue.updateMultisampleRenderTarget(Me),ue.updateRenderTargetMipmap(Me);let ae=!1;for(let re=0,he=b.length;re<he;re++){const pe=b[re],me=pe.object,Ce=pe.geometry,Ve=pe.material,Fe=pe.group;if(Ve.side===Ki&&me.layers.test(U.layers)){const ze=Ve.side;Ve.side=Kn,Ve.needsUpdate=!0,It(me,L,U,Ce,Ve,Fe),Ve.side=ze,Ve.needsUpdate=!0,ae=!0}}ae===!0&&(ue.updateMultisampleRenderTarget(Me),ue.updateRenderTargetMipmap(Me)),S.setRenderTarget(K),S.setClearColor(se,k),S.toneMapping=ne}function et(_,b,L){const U=b.isScene===!0?b.overrideMaterial:null;for(let N=0,K=_.length;N<K;N++){const ne=_[N],ae=ne.object,re=ne.geometry,he=U===null?ne.material:U,pe=ne.group;ae.layers.test(L.layers)&&It(ae,b,L,re,he,pe)}}function It(_,b,L,U,N,K){_.onBeforeRender(S,b,L,U,N,K),_.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),N.onBeforeRender(S,b,L,U,_,K),N.transparent===!0&&N.side===Ki&&N.forceSinglePass===!1?(N.side=Kn,N.needsUpdate=!0,S.renderBufferDirect(L,b,U,N,_,K),N.side=Dr,N.needsUpdate=!0,S.renderBufferDirect(L,b,U,N,_,K),N.side=Ki):S.renderBufferDirect(L,b,U,N,_,K),_.onAfterRender(S,b,L,U,N,K)}function rt(_,b,L){b.isScene!==!0&&(b=Tt);const U=de.get(_),N=p.state.lights,K=p.state.shadowsArray,ne=N.state.version,ae=H.getParameters(_,N.state,K,b,L),re=H.getProgramCacheKey(ae);let he=U.programs;U.environment=_.isMeshStandardMaterial?b.environment:null,U.fog=b.fog,U.envMap=(_.isMeshStandardMaterial?le:ge).get(_.envMap||U.environment),he===void 0&&(_.addEventListener("dispose",we),he=new Map,U.programs=he);let pe=he.get(re);if(pe!==void 0){if(U.currentProgram===pe&&U.lightsStateVersion===ne)return Ke(_,ae),pe}else ae.uniforms=H.getUniforms(_),_.onBuild(L,ae,S),_.onBeforeCompile(ae,S),pe=H.acquireProgram(ae,re),he.set(re,pe),U.uniforms=ae.uniforms;const me=U.uniforms;(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(me.clippingPlanes=be.uniform),Ke(_,ae),U.needsLights=y(_),U.lightsStateVersion=ne,U.needsLights&&(me.ambientLightColor.value=N.state.ambient,me.lightProbe.value=N.state.probe,me.directionalLights.value=N.state.directional,me.directionalLightShadows.value=N.state.directionalShadow,me.spotLights.value=N.state.spot,me.spotLightShadows.value=N.state.spotShadow,me.rectAreaLights.value=N.state.rectArea,me.ltc_1.value=N.state.rectAreaLTC1,me.ltc_2.value=N.state.rectAreaLTC2,me.pointLights.value=N.state.point,me.pointLightShadows.value=N.state.pointShadow,me.hemisphereLights.value=N.state.hemi,me.directionalShadowMap.value=N.state.directionalShadowMap,me.directionalShadowMatrix.value=N.state.directionalShadowMatrix,me.spotShadowMap.value=N.state.spotShadowMap,me.spotLightMatrix.value=N.state.spotLightMatrix,me.spotLightMap.value=N.state.spotLightMap,me.pointShadowMap.value=N.state.pointShadowMap,me.pointShadowMatrix.value=N.state.pointShadowMatrix);const Ce=pe.getUniforms(),Ve=Dc.seqWithValue(Ce.seq,me);return U.currentProgram=pe,U.uniformsList=Ve,pe}function Ke(_,b){const L=de.get(_);L.outputColorSpace=b.outputColorSpace,L.instancing=b.instancing,L.instancingColor=b.instancingColor,L.skinning=b.skinning,L.morphTargets=b.morphTargets,L.morphNormals=b.morphNormals,L.morphColors=b.morphColors,L.morphTargetsCount=b.morphTargetsCount,L.numClippingPlanes=b.numClippingPlanes,L.numIntersection=b.numClipIntersection,L.vertexAlphas=b.vertexAlphas,L.vertexTangents=b.vertexTangents,L.toneMapping=b.toneMapping}function Qt(_,b,L,U,N){b.isScene!==!0&&(b=Tt),ue.resetTextureUnits();const K=b.fog,ne=U.isMeshStandardMaterial?b.environment:null,ae=R===null?S.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:fn,re=(U.isMeshStandardMaterial?le:ge).get(U.envMap||ne),he=U.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pe=!!L.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),me=!!L.morphAttributes.position,Ce=!!L.morphAttributes.normal,Ve=!!L.morphAttributes.color;let Fe=as;U.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Fe=S.toneMapping);const ze=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,He=ze!==void 0?ze.length:0,We=de.get(U),Et=p.state.lights;if(ye===!0&&(Ee===!0||_!==M)){const Yt=_===M&&U.id===z;be.setState(U,_,Yt)}let st=!1;U.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Et.state.version||We.outputColorSpace!==ae||N.isInstancedMesh&&We.instancing===!1||!N.isInstancedMesh&&We.instancing===!0||N.isSkinnedMesh&&We.skinning===!1||!N.isSkinnedMesh&&We.skinning===!0||N.isInstancedMesh&&We.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&We.instancingColor===!1&&N.instanceColor!==null||We.envMap!==re||U.fog===!0&&We.fog!==K||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==be.numPlanes||We.numIntersection!==be.numIntersection)||We.vertexAlphas!==he||We.vertexTangents!==pe||We.morphTargets!==me||We.morphNormals!==Ce||We.morphColors!==Ve||We.toneMapping!==Fe||ie.isWebGL2===!0&&We.morphTargetsCount!==He)&&(st=!0):(st=!0,We.__version=U.version);let Mt=We.currentProgram;st===!0&&(Mt=rt(U,b,N));let _t=!1,zt=!1,Tn=!1;const St=Mt.getUniforms(),mt=We.uniforms;if(ee.useProgram(Mt.program)&&(_t=!0,zt=!0,Tn=!0),U.id!==z&&(z=U.id,zt=!0),_t||M!==_){St.setValue(E,"projectionMatrix",_.projectionMatrix),St.setValue(E,"viewMatrix",_.matrixWorldInverse);const Yt=St.map.cameraPosition;Yt!==void 0&&Yt.setValue(E,Je.setFromMatrixPosition(_.matrixWorld)),ie.logarithmicDepthBuffer&&St.setValue(E,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&St.setValue(E,"isOrthographic",_.isOrthographicCamera===!0),M!==_&&(M=_,zt=!0,Tn=!0)}if(N.isSkinnedMesh){St.setOptional(E,N,"bindMatrix"),St.setOptional(E,N,"bindMatrixInverse");const Yt=N.skeleton;Yt&&(ie.floatVertexTextures?(Yt.boneTexture===null&&Yt.computeBoneTexture(),St.setValue(E,"boneTexture",Yt.boneTexture,ue),St.setValue(E,"boneTextureSize",Yt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const bt=L.morphAttributes;if((bt.position!==void 0||bt.normal!==void 0||bt.color!==void 0&&ie.isWebGL2===!0)&&Pe.update(N,L,Mt),(zt||We.receiveShadow!==N.receiveShadow)&&(We.receiveShadow=N.receiveShadow,St.setValue(E,"receiveShadow",N.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(mt.envMap.value=re,mt.flipEnvMap.value=re.isCubeTexture&&re.isRenderTargetTexture===!1?-1:1),zt&&(St.setValue(E,"toneMappingExposure",S.toneMappingExposure),We.needsLights&&Ot(mt,Tn),K&&U.fog===!0&&ce.refreshFogUniforms(mt,K),ce.refreshMaterialUniforms(mt,U,X,Z,Me),Dc.upload(E,We.uniformsList,mt,ue)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(Dc.upload(E,We.uniformsList,mt,ue),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&St.setValue(E,"center",N.center),St.setValue(E,"modelViewMatrix",N.modelViewMatrix),St.setValue(E,"normalMatrix",N.normalMatrix),St.setValue(E,"modelMatrix",N.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){const Yt=U.uniformsGroups;for(let lr=0,Mi=Yt.length;lr<Mi;lr++)if(ie.isWebGL2){const Ss=Yt[lr];Be.update(Ss,Mt),Be.bind(Ss,Mt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Mt}function Ot(_,b){_.ambientLightColor.needsUpdate=b,_.lightProbe.needsUpdate=b,_.directionalLights.needsUpdate=b,_.directionalLightShadows.needsUpdate=b,_.pointLights.needsUpdate=b,_.pointLightShadows.needsUpdate=b,_.spotLights.needsUpdate=b,_.spotLightShadows.needsUpdate=b,_.rectAreaLights.needsUpdate=b,_.hemisphereLights.needsUpdate=b}function y(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(_,b,L){de.get(_.texture).__webglTexture=b,de.get(_.depthTexture).__webglTexture=L;const U=de.get(_);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=L===void 0,U.__autoAllocateDepthBuffer||V.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(_,b){const L=de.get(_);L.__webglFramebuffer=b,L.__useDefaultFramebuffer=b===void 0},this.setRenderTarget=function(_,b=0,L=0){R=_,w=b,I=L;let U=!0,N=null,K=!1,ne=!1;if(_){const re=de.get(_);re.__useDefaultFramebuffer!==void 0?(ee.bindFramebuffer(E.FRAMEBUFFER,null),U=!1):re.__webglFramebuffer===void 0?ue.setupRenderTarget(_):re.__hasExternalTextures&&ue.rebindTextures(_,de.get(_.texture).__webglTexture,de.get(_.depthTexture).__webglTexture);const he=_.texture;(he.isData3DTexture||he.isDataArrayTexture||he.isCompressedArrayTexture)&&(ne=!0);const pe=de.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(pe[b])?N=pe[b][L]:N=pe[b],K=!0):ie.isWebGL2&&_.samples>0&&ue.useMultisampledRTT(_)===!1?N=de.get(_).__webglMultisampledFramebuffer:Array.isArray(pe)?N=pe[L]:N=pe,P.copy(_.viewport),Q.copy(_.scissor),W=_.scissorTest}else P.copy(D).multiplyScalar(X).floor(),Q.copy(G).multiplyScalar(X).floor(),W=J;if(ee.bindFramebuffer(E.FRAMEBUFFER,N)&&ie.drawBuffers&&U&&ee.drawBuffers(_,N),ee.viewport(P),ee.scissor(Q),ee.setScissorTest(W),K){const re=de.get(_.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+b,re.__webglTexture,L)}else if(ne){const re=de.get(_.texture),he=b||0;E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,re.__webglTexture,L||0,he)}z=-1},this.readRenderTargetPixels=function(_,b,L,U,N,K,ne){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ae=de.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&ne!==void 0&&(ae=ae[ne]),ae){ee.bindFramebuffer(E.FRAMEBUFFER,ae);try{const re=_.texture,he=re.format,pe=re.type;if(he!==hi&&Qe.convert(he)!==E.getParameter(E.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const me=pe===br&&(V.has("EXT_color_buffer_half_float")||ie.isWebGL2&&V.has("EXT_color_buffer_float"));if(pe!==ls&&Qe.convert(pe)!==E.getParameter(E.IMPLEMENTATION_COLOR_READ_TYPE)&&!(pe===Ci&&(ie.isWebGL2||V.has("OES_texture_float")||V.has("WEBGL_color_buffer_float")))&&!me){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}b>=0&&b<=_.width-U&&L>=0&&L<=_.height-N&&E.readPixels(b,L,U,N,Qe.convert(he),Qe.convert(pe),K)}finally{const re=R!==null?de.get(R).__webglFramebuffer:null;ee.bindFramebuffer(E.FRAMEBUFFER,re)}}},this.copyFramebufferToTexture=function(_,b,L=0){const U=Math.pow(2,-L),N=Math.floor(b.image.width*U),K=Math.floor(b.image.height*U);ue.setTexture2D(b,0),E.copyTexSubImage2D(E.TEXTURE_2D,L,0,0,_.x,_.y,N,K),ee.unbindTexture()},this.copyTextureToTexture=function(_,b,L,U=0){const N=b.image.width,K=b.image.height,ne=Qe.convert(L.format),ae=Qe.convert(L.type);ue.setTexture2D(L,0),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,L.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,L.unpackAlignment),b.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,U,_.x,_.y,N,K,ne,ae,b.image.data):b.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,U,_.x,_.y,b.mipmaps[0].width,b.mipmaps[0].height,ne,b.mipmaps[0].data):E.texSubImage2D(E.TEXTURE_2D,U,_.x,_.y,ne,ae,b.image),U===0&&L.generateMipmaps&&E.generateMipmap(E.TEXTURE_2D),ee.unbindTexture()},this.copyTextureToTexture3D=function(_,b,L,U,N=0){if(S.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const K=_.max.x-_.min.x+1,ne=_.max.y-_.min.y+1,ae=_.max.z-_.min.z+1,re=Qe.convert(U.format),he=Qe.convert(U.type);let pe;if(U.isData3DTexture)ue.setTexture3D(U,0),pe=E.TEXTURE_3D;else if(U.isDataArrayTexture)ue.setTexture2DArray(U,0),pe=E.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,U.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,U.unpackAlignment);const me=E.getParameter(E.UNPACK_ROW_LENGTH),Ce=E.getParameter(E.UNPACK_IMAGE_HEIGHT),Ve=E.getParameter(E.UNPACK_SKIP_PIXELS),Fe=E.getParameter(E.UNPACK_SKIP_ROWS),ze=E.getParameter(E.UNPACK_SKIP_IMAGES),He=L.isCompressedTexture?L.mipmaps[0]:L.image;E.pixelStorei(E.UNPACK_ROW_LENGTH,He.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,He.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,_.min.x),E.pixelStorei(E.UNPACK_SKIP_ROWS,_.min.y),E.pixelStorei(E.UNPACK_SKIP_IMAGES,_.min.z),L.isDataTexture||L.isData3DTexture?E.texSubImage3D(pe,N,b.x,b.y,b.z,K,ne,ae,re,he,He.data):L.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),E.compressedTexSubImage3D(pe,N,b.x,b.y,b.z,K,ne,ae,re,He.data)):E.texSubImage3D(pe,N,b.x,b.y,b.z,K,ne,ae,re,he,He),E.pixelStorei(E.UNPACK_ROW_LENGTH,me),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Ce),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Ve),E.pixelStorei(E.UNPACK_SKIP_ROWS,Fe),E.pixelStorei(E.UNPACK_SKIP_IMAGES,ze),N===0&&U.generateMipmaps&&E.generateMipmap(pe),ee.unbindTexture()},this.initTexture=function(_){_.isCubeTexture?ue.setTextureCube(_,0):_.isData3DTexture?ue.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?ue.setTexture2DArray(_,0):ue.setTexture2D(_,0),ee.unbindTexture()},this.resetState=function(){w=0,I=0,R=null,ee.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ar}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===md?"display-p3":"srgb",t.unpackColorSpace=Ct.workingColorSpace===Eu?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===$t?Xs:v0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Xs?$t:fn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class i1 extends B0{}i1.prototype.isWebGL1Renderer=!0;class r1 extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class s1{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=lh,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Hi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Un=new Y;class Sd{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Un.fromBufferAttribute(this,t),Un.applyMatrix4(e),this.setXYZ(t,Un.x,Un.y,Un.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Un.fromBufferAttribute(this,t),Un.applyNormalMatrix(e),this.setXYZ(t,Un.x,Un.y,Un.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Un.fromBufferAttribute(this,t),Un.transformDirection(e),this.setXYZ(t,Un.x,Un.y,Un.z);return this}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ji(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ji(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ji(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ji(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),r=Lt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),r=Lt(r,this.array),s=Lt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new jn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Sd(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const jm=new Y,$m=new Nt,Zm=new Nt,o1=new Y,Jm=new pt,wo=new Y,xf=new sr,Qm=new pt,yf=new bu;class a1 extends _i{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new pt,this.bindMatrixInverse=new pt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Br),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)wo.fromBufferAttribute(t,n),this.applyBoneTransform(n,wo),this.boundingBox.expandByPoint(wo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new sr),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)wo.fromBufferAttribute(t,n),this.applyBoneTransform(n,wo),this.boundingSphere.expandByPoint(wo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xf.copy(this.boundingSphere),xf.applyMatrix4(r),e.ray.intersectsSphere(xf)!==!1&&(Qm.copy(r).invert(),yf.copy(e.ray).applyMatrix4(Qm),!(this.boundingBox!==null&&yf.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,yf)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Nt,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,r=this.geometry;$m.fromBufferAttribute(r.attributes.skinIndex,e),Zm.fromBufferAttribute(r.attributes.skinWeight,e),jm.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Zm.getComponent(s);if(o!==0){const a=$m.getComponent(s);Jm.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(o1.copy(jm).applyMatrix4(Jm),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class k0 extends jt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class z0 extends Sn{constructor(e=null,t=1,n=1,r,s,o,a,l,c=_n,u=_n,f,h){super(null,o,a,l,c,u,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const eg=new pt,l1=new pt;class Md{constructor(e=[],t=[]){this.uuid=Hi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new pt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new pt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:l1;eg.multiplyMatrices(a,t[s]),eg.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Md(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=y0(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new z0(t,e,e,hi,Ci);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new k0),this.bones.push(o),this.boneInverses.push(new pt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=n[r];e.boneInverses.push(a.toArray())}return e}}class tg extends jn{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ro=new pt,ng=new pt,ac=[],ig=new Br,c1=new pt,Pa=new _i,La=new sr;class u1 extends _i{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new tg(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,c1)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Br),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ro),ig.copy(e.boundingBox).applyMatrix4(Ro),this.boundingBox.union(ig)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new sr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ro),La.copy(e.boundingSphere).applyMatrix4(Ro),this.boundingSphere.union(La)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,r=this.count;if(Pa.geometry=this.geometry,Pa.material=this.material,Pa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),La.copy(this.boundingSphere),La.applyMatrix4(n),e.ray.intersectsSphere(La)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Ro),ng.multiplyMatrices(n,Ro),Pa.matrixWorld=ng,Pa.raycast(e,ac);for(let o=0,a=ac.length;o<a;o++){const l=ac[o];l.instanceId=s,l.object=this,t.push(l)}ac.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new tg(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class H0 extends tr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const rg=new Y,sg=new Y,og=new pt,Sf=new bu,lc=new sr;class Td extends jt{constructor(e=new or,t=new H0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)rg.fromBufferAttribute(t,r-1),sg.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=rg.distanceTo(sg);e.setAttribute("lineDistance",new Cr(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),lc.copy(n.boundingSphere),lc.applyMatrix4(r),lc.radius+=s,e.ray.intersectsSphere(lc)===!1)return;og.copy(r).invert(),Sf.copy(e.ray).applyMatrix4(og);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new Y,u=new Y,f=new Y,h=new Y,d=this.isLineSegments?2:1,v=n.index,p=n.attributes.position;if(v!==null){const m=Math.max(0,o.start),T=Math.min(v.count,o.start+o.count);for(let S=m,x=T-1;S<x;S+=d){const w=v.getX(S),I=v.getX(S+1);if(c.fromBufferAttribute(p,w),u.fromBufferAttribute(p,I),Sf.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const z=e.ray.origin.distanceTo(h);z<e.near||z>e.far||t.push({distance:z,point:f.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,o.start),T=Math.min(p.count,o.start+o.count);for(let S=m,x=T-1;S<x;S+=d){if(c.fromBufferAttribute(p,S),u.fromBufferAttribute(p,S+1),Sf.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const I=e.ray.origin.distanceTo(h);I<e.near||I>e.far||t.push({distance:I,point:f.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const ag=new Y,lg=new Y;class f1 extends Td{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)ag.fromBufferAttribute(t,r),lg.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+ag.distanceTo(lg);e.setAttribute("lineDistance",new Cr(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class h1 extends Td{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class G0 extends tr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const cg=new pt,ph=new bu,cc=new sr,uc=new Y;class d1 extends jt{constructor(e=new or,t=new G0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cc.copy(n.boundingSphere),cc.applyMatrix4(r),cc.radius+=s,e.ray.intersectsSphere(cc)===!1)return;cg.copy(r).invert(),ph.copy(e.ray).applyMatrix4(cg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){const h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let v=h,g=d;v<g;v++){const p=c.getX(v);uc.fromBufferAttribute(f,p),ug(uc,p,l,r,e,t,this)}}else{const h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let v=h,g=d;v<g;v++)uc.fromBufferAttribute(f,v),ug(uc,v,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ug(i,e,t,n,r,s,o){const a=ph.distanceSqToPoint(i);if(a<t){const l=new Y;ph.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Ed extends tr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=x0,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class xs extends Ed{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new vt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return xn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ct(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ct(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ct(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function fc(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function p1(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function m1(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function fg(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=i[a+l]}return r}function V0(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=i[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=i[r++];while(s!==void 0)}class Ul{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class g1 extends Ul{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:om,endingEnd:om}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case am:s=e,a=2*t-n;break;case lm:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case am:o=e,l=2*n-t;break;case lm:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,v=(n-t)/(r-t),g=v*v,p=g*v,m=-h*p+2*h*g-h*v,T=(1+h)*p+(-1.5-2*h)*g+(-.5+h)*v+1,S=(-1-d)*p+(1.5+d)*g+.5*v,x=d*p-d*g;for(let w=0;w!==a;++w)s[w]=m*o[u+w]+T*o[c+w]+S*o[l+w]+x*o[f+w];return s}}class _1 extends Ul{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(r-t),f=1-u;for(let h=0;h!==a;++h)s[h]=o[c+h]*f+o[l+h]*u;return s}}class v1 extends Ul{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class ar{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=fc(t,this.TimeBufferType),this.values=fc(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:fc(e.times,Array),values:fc(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new v1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new _1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new g1(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Sl:t=this.InterpolantFactoryMethodDiscrete;break;case oa:t=this.InterpolantFactoryMethodLinear;break;case ju:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Sl;case this.InterpolantFactoryMethodLinear:return oa;case this.InterpolantFactoryMethodSmooth:return ju}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&p1(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===ju,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{const f=a*n,h=f-n,d=f+n;for(let v=0;v!==n;++v){const g=t[f+v];if(g!==t[h+v]||g!==t[d+v]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const f=a*n,h=o*n;for(let d=0;d!==n;++d)t[h+d]=t[f+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}ar.prototype.TimeBufferType=Float32Array;ar.prototype.ValueBufferType=Float32Array;ar.prototype.DefaultInterpolation=oa;class Ma extends ar{}Ma.prototype.ValueTypeName="bool";Ma.prototype.ValueBufferType=Array;Ma.prototype.DefaultInterpolation=Sl;Ma.prototype.InterpolantFactoryMethodLinear=void 0;Ma.prototype.InterpolantFactoryMethodSmooth=void 0;class W0 extends ar{}W0.prototype.ValueTypeName="color";class ca extends ar{}ca.prototype.ValueTypeName="number";class x1 extends Ul{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t);let c=e*a;for(let u=c+a;c!==u;c+=4)vs.slerpFlat(s,0,o,c-a,o,c,l);return s}}class to extends ar{InterpolantFactoryMethodLinear(e){return new x1(this.times,this.values,this.getValueSize(),e)}}to.prototype.ValueTypeName="quaternion";to.prototype.DefaultInterpolation=oa;to.prototype.InterpolantFactoryMethodSmooth=void 0;class Ta extends ar{}Ta.prototype.ValueTypeName="string";Ta.prototype.ValueBufferType=Array;Ta.prototype.DefaultInterpolation=Sl;Ta.prototype.InterpolantFactoryMethodLinear=void 0;Ta.prototype.InterpolantFactoryMethodSmooth=void 0;class ua extends ar{}ua.prototype.ValueTypeName="vector";class y1{constructor(e,t=-1,n,r=AM){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=Hi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(M1(n[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(ar.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=m1(l);l=fg(l,1,u),c=fg(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new ca(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const f=u[1];let h=r[f];h||(r[f]=h=[]),h.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(f,h,d,v,g){if(d.length!==0){const p=[],m=[];V0(d,p,m,v),p.length!==0&&g.push(new f(h,p,m))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let f=0;f<c.length;f++){const h=c[f].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const d={};let v;for(v=0;v<h.length;v++)if(h[v].morphTargets)for(let g=0;g<h[v].morphTargets.length;g++)d[h[v].morphTargets[g]]=-1;for(const g in d){const p=[],m=[];for(let T=0;T!==h[v].morphTargets.length;++T){const S=h[v];p.push(S.time),m.push(S.morphTarget===g?1:0)}r.push(new ca(".morphTargetInfluence["+g+"]",p,m))}l=d.length*o}else{const d=".bones["+t[f].name+"]";n(ua,d+".position",h,"pos",r),n(to,d+".quaternion",h,"rot",r),n(ua,d+".scale",h,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function S1(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ca;case"vector":case"vector2":case"vector3":case"vector4":return ua;case"color":return W0;case"quaternion":return to;case"bool":case"boolean":return Ma;case"string":return Ta}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function M1(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=S1(i.type);if(i.times===void 0){const t=[],n=[];V0(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const fa={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class T1{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],v=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return v}return null}}}const E1=new T1;class ao{constructor(e){this.manager=e!==void 0?e:E1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ao.DEFAULT_MATERIAL_NAME="__DEFAULT";const gr={};class b1 extends Error{constructor(e,t){super(e),this.response=t}}class bd extends ao{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=fa.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(gr[e]!==void 0){gr[e].push({onLoad:t,onProgress:n,onError:r});return}gr[e]=[],gr[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=gr[e],f=c.body.getReader(),h=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),d=h?parseInt(h):0,v=d!==0;let g=0;const p=new ReadableStream({start(m){T();function T(){f.read().then(({done:S,value:x})=>{if(S)m.close();else{g+=x.byteLength;const w=new ProgressEvent("progress",{lengthComputable:v,loaded:g,total:d});for(let I=0,R=u.length;I<R;I++){const z=u[I];z.onProgress&&z.onProgress(w)}m.enqueue(x),T()}})}}});return new Response(p)}else throw new b1(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return c.arrayBuffer().then(v=>d.decode(v))}}}).then(c=>{fa.add(e,c);const u=gr[e];delete gr[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=gr[e];if(u===void 0)throw this.manager.itemError(e),c;delete gr[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class A1 extends ao{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=fa.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Ml("img");function l(){u(),fa.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class w1 extends ao{constructor(e){super(e)}load(e,t,n,r){const s=this,o=new z0,a=new bd(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(l){let c;try{c=s.parse(l)}catch(u){if(r!==void 0)r(u);else{console.error(u);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:Qn,o.wrapT=c.wrapT!==void 0?c.wrapT:Qn,o.magFilter=c.magFilter!==void 0?c.magFilter:cn,o.minFilter=c.minFilter!==void 0?c.minFilter:cn,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0?o.colorSpace=c.colorSpace:c.encoding!==void 0&&(o.encoding=c.encoding),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=ds),c.mipmapCount===1&&(o.minFilter=cn),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},n,r),o}}class R1 extends ao{constructor(e){super(e)}load(e,t,n,r){const s=new Sn,o=new A1(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class Ad extends jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ct(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Mf=new pt,hg=new Y,dg=new Y;class wd{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _d,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;hg.setFromMatrixPosition(e.matrixWorld),t.position.copy(hg),dg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(dg),t.updateMatrixWorld(),Mf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mf),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Mf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class C1 extends wd{constructor(){super(new Cn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=aa*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class P1 extends Ad{constructor(e,t,n=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new C1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const pg=new pt,Ia=new Y,Tf=new Y;class L1 extends wd{constructor(){super(new Cn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new vt(4,2),this._viewportCount=6,this._viewports=[new Nt(2,1,1,1),new Nt(0,1,1,1),new Nt(3,1,1,1),new Nt(1,1,1,1),new Nt(3,0,1,1),new Nt(1,0,1,1)],this._cubeDirections=[new Y(1,0,0),new Y(-1,0,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,1,0),new Y(0,-1,0)],this._cubeUps=[new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,0,1),new Y(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ia.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ia),Tf.copy(n.position),Tf.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Tf),n.updateMatrixWorld(),r.makeTranslation(-Ia.x,-Ia.y,-Ia.z),pg.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pg)}}class I1 extends Ad{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new L1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class D1 extends wd{constructor(){super(new xd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class X0 extends Ad{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.shadow=new D1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class mh{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class U1 extends ao{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=fa.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){fa.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){r&&r(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}const Rd="\\[\\]\\.:\\/",N1=new RegExp("["+Rd+"]","g"),Cd="[^"+Rd+"]",O1="[^"+Rd.replace("\\.","")+"]",F1=/((?:WC+[\/:])*)/.source.replace("WC",Cd),B1=/(WCOD+)?/.source.replace("WCOD",O1),k1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Cd),z1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Cd),H1=new RegExp("^"+F1+B1+k1+z1+"$"),G1=["material","materials","bones","map"];class V1{constructor(e,t,n){const r=n||Pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Pt{constructor(e,t,n){this.path=t,this.parsedPath=n||Pt.parseTrackName(t),this.node=Pt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Pt.Composite(e,t,n):new Pt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(N1,"")}static parseTrackName(e){const t=H1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);G1.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=Pt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Pt.Composite=V1;Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dd);class Ru extends _i{constructor(){const e=Ru.SkyShader,t=new Ur({name:"SkyShader",fragmentShader:e.fragmentShader,vertexShader:e.vertexShader,uniforms:P0.clone(e.uniforms),side:Kn,depthWrite:!1});super(new ya(1,1,1),t),this.isSky=!0}}Ru.SkyShader={uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new Y},up:{value:new Y(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorbtion + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};class W1{constructor(e){this.scene=e,this.sky=new Ru,this.sky.scale.setScalar(45e4),this.scene.add(this.sky),this.sunParameters={elevation:2,azimuth:180},this.uniforms=this.sky.material.uniforms,this.setSunPosition(this.sunParameters.elevation,this.sunParameters.azimuth)}setSunPosition(e,t){const n=fh.degToRad(90-e),r=fh.degToRad(t),s=new Y;s.setFromSphericalCoords(1,n,r),this.uniforms.sunPosition.value.copy(s)}update(e){const t=2+86*Math.sin(Math.PI*e);this.setSunPosition(t,180)}}function mg(i,e){if(e===wM)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===ah||e===_0){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,r=[];if(e===ah)for(let o=1;o<=n;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=i.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class X1 extends ao{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new $1(t)}),this.register(function(t){return new rR(t)}),this.register(function(t){return new sR(t)}),this.register(function(t){return new oR(t)}),this.register(function(t){return new J1(t)}),this.register(function(t){return new Q1(t)}),this.register(function(t){return new eR(t)}),this.register(function(t){return new tR(t)}),this.register(function(t){return new j1(t)}),this.register(function(t){return new nR(t)}),this.register(function(t){return new Z1(t)}),this.register(function(t){return new iR(t)}),this.register(function(t){return new q1(t)}),this.register(function(t){return new aR(t)}),this.register(function(t){return new lR(t)})}load(e,t,n,r){const s=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=mh.extractUrlBase(e),this.manager.itemStart(e);const a=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new bd(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Y0){try{o[xt.KHR_BINARY_GLTF]=new cR(e)}catch(f){r&&r(f);return}s=JSON.parse(o[xt.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new MR(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const f=this.pluginCallbacks[u](c);a[f.name]=f,o[f.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const f=s.extensionsUsed[u],h=s.extensionsRequired||[];switch(f){case xt.KHR_MATERIALS_UNLIT:o[f]=new K1;break;case xt.KHR_DRACO_MESH_COMPRESSION:o[f]=new uR(s,this.dracoLoader);break;case xt.KHR_TEXTURE_TRANSFORM:o[f]=new fR;break;case xt.KHR_MESH_QUANTIZATION:o[f]=new hR;break;default:h.indexOf(f)>=0&&a[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,r)}parseAsync(e,t){const n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}}function Y1(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const xt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class q1{constructor(e){this.parser=e,this.name=xt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let r=t.cache.get(n);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new ct(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],fn);const f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new X0(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new I1(u),c.distance=f;break;case"spot":c=new P1(u),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,$r(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class K1{constructor(){this.name=xt.KHR_MATERIALS_UNLIT}getMaterialType(){return Bs}extendParams(e,t,n){const r=[];e.color=new ct(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],fn),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,$t))}return Promise.all(r)}}class j1{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class $1{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xs}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new vt(a,a)}return Promise.all(s)}}class Z1{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xs}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class J1{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xs}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new ct(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],fn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,$t)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class Q1{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xs}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class eR{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xs}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new ct().setRGB(a[0],a[1],a[2],fn),Promise.all(s)}}class tR{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xs}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class nR{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xs}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new ct().setRGB(a[0],a[1],a[2],fn),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,$t)),Promise.all(s)}}class iR{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xs}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class rR{constructor(e){this.parser=e,this.name=xt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class sR{constructor(e){this.parser=e,this.name=xt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class oR{constructor(e){this.parser=e,this.name=xt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class aR{constructor(e){this.name=xt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=r.byteOffset||0,c=r.byteLength||0,u=r.count,f=r.byteStride,h=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,f,h,r.mode,r.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*f);return o.decodeGltfBuffer(new Uint8Array(d),u,f,h,r.mode,r.filter),d})})}else return null}}class lR{constructor(e){this.name=xt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const r=t.meshes[n.mesh];for(const c of r.primitives)if(c.mode!==bi.TRIANGLES&&c.mode!==bi.TRIANGLE_STRIP&&c.mode!==bi.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),f=u.isGroup?u.children:[u],h=c[0].count,d=[];for(const v of f){const g=new pt,p=new Y,m=new vs,T=new Y(1,1,1),S=new u1(v.geometry,v.material,h);for(let x=0;x<h;x++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,x),l.SCALE&&T.fromBufferAttribute(l.SCALE,x),S.setMatrixAt(x,g.compose(p,m,T));for(const x in l)x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&v.geometry.setAttribute(x,l[x]);jt.prototype.copy.call(S,v),this.parser.assignFinalMaterial(S),d.push(S)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const Y0="glTF",Da=12,gg={JSON:1313821514,BIN:5130562};class cR{constructor(e){this.name=xt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Da),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Y0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-Da,s=new DataView(e,Da);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===gg.JSON){const c=new Uint8Array(e,Da+o,a);this.content=n.decode(c)}else if(l===gg.BIN){const c=Da+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class uR{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=xt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const f=gh[u]||u.toLowerCase();a[f]=o[u]}for(const u in e.attributes){const f=gh[u]||u.toLowerCase();if(o[u]!==void 0){const h=n.accessors[e.attributes[u]],d=qo[h.componentType];c[f]=d.name,l[f]=h.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(f){r.decodeDracoFile(u,function(h){for(const d in h.attributes){const v=h.attributes[d],g=l[d];g!==void 0&&(v.normalized=g)}f(h)},a,c)})})}}class fR{constructor(){this.name=xt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class hR{constructor(){this.name=xt.KHR_MESH_QUANTIZATION}}class q0 extends Ul{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=r-t,f=(n-t)/u,h=f*f,d=h*f,v=e*c,g=v-c,p=-2*d+3*h,m=d-h,T=1-p,S=m-h+f;for(let x=0;x!==a;x++){const w=o[g+x+a],I=o[g+x+l]*u,R=o[v+x+a],z=o[v+x]*u;s[x]=T*w+S*I+p*R+m*z}return s}}const dR=new vs;class pR extends q0{interpolate_(e,t,n,r){const s=super.interpolate_(e,t,n,r);return dR.fromArray(s).normalize().toArray(s),s}}const bi={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},qo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},_g={9728:_n,9729:cn,9984:oh,9985:c0,9986:Ic,9987:ds},vg={33071:Qn,33648:Kc,10497:ra},Ef={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},gh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Wr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},mR={CUBICSPLINE:void 0,LINEAR:oa,STEP:Sl},bf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function gR(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Ed({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Dr})),i.DefaultMaterial}function Rs(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function $r(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function _R(i,e,t){let n=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const f=e[c];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(r=!0),f.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const f=e[c];if(n){const h=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):i.attributes.position;o.push(h)}if(r){const h=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):i.attributes.normal;a.push(h)}if(s){const h=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):i.attributes.color;l.push(h)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],f=c[1],h=c[2];return n&&(i.morphAttributes.position=u),r&&(i.morphAttributes.normal=f),s&&(i.morphAttributes.color=h),i.morphTargetsRelative=!0,i})}function vR(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function xR(i){let e;const t=i.extensions&&i.extensions[xt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Af(t.attributes):e=i.indices+":"+Af(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,r=i.targets.length;n<r;n++)e+=":"+Af(i.targets[n]);return e}function Af(i){let e="";const t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function _h(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function yR(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const SR=new pt;class MR{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Y1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,s=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||r&&s<98?this.textureLoader=new R1(this.options.manager):this.textureLoader=new U1(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new bd(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:n,userData:{}};return Rs(s,a,r),$r(a,r),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const r=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const r=e(t[n]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[xt.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){n.load(mh.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){const t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=Ef[r.type],a=qo[r.componentType],l=r.normalized===!0,c=new a(r.count*o);return Promise.resolve(new jn(c,o,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=Ef[r.type],c=qo[r.componentType],u=c.BYTES_PER_ELEMENT,f=u*l,h=r.byteOffset||0,d=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,v=r.normalized===!0;let g,p;if(d&&d!==f){const m=Math.floor(h/d),T="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+m+":"+r.count;let S=t.cache.get(T);S||(g=new c(a,m*d,r.count*d/u),S=new s1(g,d/u),t.cache.add(T,S)),p=new Sd(S,l,h%d/u,v)}else a===null?g=new c(r.count*l):g=new c(a,h,r.count*l),p=new jn(g,l,v);if(r.sparse!==void 0){const m=Ef.SCALAR,T=qo[r.sparse.indices.componentType],S=r.sparse.indices.byteOffset||0,x=r.sparse.values.byteOffset||0,w=new T(o[1],S,r.sparse.count*m),I=new c(o[2],x,r.sparse.count*l);a!==null&&(p=new jn(p.array.slice(),p.itemSize,p.normalized));for(let R=0,z=w.length;R<z;R++){const M=w[R];if(p.setX(M,I[R*l]),l>=2&&p.setY(M,I[R*l+1]),l>=3&&p.setZ(M,I[R*l+2]),l>=4&&p.setW(M,I[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const r=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const h=(s.samplers||{})[o.sampler]||{};return u.magFilter=_g[h.magFilter]||cn,u.minFilter=_g[h.minFilter]||ds,u.wrapS=vg[h.wrapS]||ra,u.wrapT=vg[h.wrapT]||ra,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const o=r.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(f){c=!0;const h=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(h),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(f){return new Promise(function(h,d){let v=h;t.isImageBitmapLoader===!0&&(v=function(g){const p=new Sn(g);p.needsUpdate=!0,h(p)}),t.load(mh.resolveURL(f,s.path),v,void 0,d)})}).then(function(f){return c===!0&&a.revokeObjectURL(l),f.userData.mimeType=o.mimeType||yR(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=u,u}assignTexture(e,t,n,r){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[xt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[xt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[xt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new G0,tr.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new H0,tr.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(r||s||o){let a="ClonedMaterial:"+n.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Ed}loadMaterial(e){const t=this,n=this.json,r=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[xt.KHR_MATERIALS_UNLIT]){const f=r[xt.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),c.push(f.extendParams(a,s,t))}else{const f=s.pbrMetallicRoughness||{};if(a.color=new ct(1,1,1),a.opacity=1,Array.isArray(f.baseColorFactor)){const h=f.baseColorFactor;a.color.setRGB(h[0],h[1],h[2],fn),a.opacity=h[3]}f.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",f.baseColorTexture,$t)),a.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,a.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",f.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Ki);const u=s.alphaMode||bf.OPAQUE;if(u===bf.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===bf.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Bs&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new vt(1,1),s.normalTexture.scale!==void 0)){const f=s.normalTexture.scale;a.normalScale.set(f,f)}if(s.occlusionTexture!==void 0&&o!==Bs&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Bs){const f=s.emissiveFactor;a.emissive=new ct().setRGB(f[0],f[1],f[2],fn)}return s.emissiveTexture!==void 0&&o!==Bs&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,$t)),Promise.all(c).then(function(){const f=new o(a);return s.name&&(f.name=s.name),$r(f,s),t.associations.set(f,{materials:e}),s.extensions&&Rs(r,f,s),f})}createUniqueName(e){const t=Pt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,r=this.primitiveCache;function s(a){return n[xt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return xg(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=xR(c),f=r[u];if(f)o.push(f.promise);else{let h;c.extensions&&c.extensions[xt.KHR_DRACO_MESH_COMPRESSION]?h=s(c):h=xg(new or,c,t),r[u]={primitive:c,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,r=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?gR(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],f=[];for(let d=0,v=u.length;d<v;d++){const g=u[d],p=o[d];let m;const T=c[d];if(p.mode===bi.TRIANGLES||p.mode===bi.TRIANGLE_STRIP||p.mode===bi.TRIANGLE_FAN||p.mode===void 0)m=s.isSkinnedMesh===!0?new a1(g,T):new _i(g,T),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===bi.TRIANGLE_STRIP?m.geometry=mg(m.geometry,_0):p.mode===bi.TRIANGLE_FAN&&(m.geometry=mg(m.geometry,ah));else if(p.mode===bi.LINES)m=new f1(g,T);else if(p.mode===bi.LINE_STRIP)m=new Td(g,T);else if(p.mode===bi.LINE_LOOP)m=new h1(g,T);else if(p.mode===bi.POINTS)m=new d1(g,T);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&vR(m,s),m.name=t.createUniqueName(s.name||"mesh_"+e),$r(m,s),p.extensions&&Rs(r,m,p),t.assignFinalMaterial(m),f.push(m)}for(let d=0,v=f.length;d<v;d++)t.associations.set(f[d],{meshes:e,primitives:d});if(f.length===1)return s.extensions&&Rs(r,f[0],s),f[0];const h=new ks;s.extensions&&Rs(r,h,s),t.associations.set(h,{meshes:e});for(let d=0,v=f.length;d<v;d++)h.add(f[d]);return h})}loadCamera(e){let t;const n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Cn(fh.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new xd(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),$r(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let r=0,s=t.joints.length;r<s;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){const s=r.pop(),o=r,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const f=o[c];if(f){a.push(f);const h=new pt;s!==null&&h.fromArray(s.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Md(a,l)})}loadAnimation(e){const t=this.json,n=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let f=0,h=r.channels.length;f<h;f++){const d=r.channels[f],v=r.samplers[d.sampler],g=d.target,p=g.node,m=r.parameters!==void 0?r.parameters[v.input]:v.input,T=r.parameters!==void 0?r.parameters[v.output]:v.output;g.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",T)),c.push(v),u.push(g))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(f){const h=f[0],d=f[1],v=f[2],g=f[3],p=f[4],m=[];for(let T=0,S=h.length;T<S;T++){const x=h[T],w=d[T],I=v[T],R=g[T],z=p[T];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const M=n._createAnimationTracks(x,w,I,R,z);if(M)for(let P=0;P<M.length;P++)m.push(M[P])}return new y1(s,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=r.weights.length;l<c;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){const t=this.json,n=this,r=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=r.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],f=c[1],h=c[2];h!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(h,SR)});for(let d=0,v=f.length;d<v;d++)u.add(f[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new k0:c.length>1?u=new ks:c.length===1?u=c[0]:u=new jt,u!==c[0])for(let f=0,h=c.length;f<h;f++)u.add(c[f]);if(s.name&&(u.userData.name=s.name,u.name=o),$r(u,s),s.extensions&&Rs(n,u,s),s.matrix!==void 0){const f=new pt;f.fromArray(s.matrix),u.applyMatrix4(f)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return r.associations.has(u)||r.associations.set(u,{}),r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],r=this,s=new ks;n.name&&(s.name=r.createUniqueName(n.name)),$r(s,n),n.extensions&&Rs(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,f=l.length;u<f;u++)s.add(l[u]);const c=u=>{const f=new Map;for(const[h,d]of r.associations)(h instanceof tr||h instanceof Sn)&&f.set(h,d);return u.traverse(h=>{const d=r.associations.get(h);d!=null&&f.set(h,d)}),f};return r.associations=c(s),s})}_createAnimationTracks(e,t,n,r,s){const o=[],a=e.name?e.name:e.uuid,l=[];Wr[s.path]===Wr.weights?e.traverse(function(h){h.morphTargetInfluences&&l.push(h.name?h.name:h.uuid)}):l.push(a);let c;switch(Wr[s.path]){case Wr.weights:c=ca;break;case Wr.rotation:c=to;break;case Wr.position:case Wr.scale:c=ua;break;default:switch(n.itemSize){case 1:c=ca;break;case 2:case 3:default:c=ua;break}break}const u=r.interpolation!==void 0?mR[r.interpolation]:oa,f=this._getArrayFromAccessor(n);for(let h=0,d=l.length;h<d;h++){const v=new c(l[h]+"."+Wr[s.path],t.array,f,u);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),o.push(v)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=_h(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const r=this instanceof to?pR:q0;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function TR(i,e,t){const n=e.attributes,r=new Br;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(r.set(new Y(l[0],l[1],l[2]),new Y(c[0],c[1],c[2])),a.normalized){const u=_h(qo[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new Y,l=new Y;for(let c=0,u=s.length;c<u;c++){const f=s[c];if(f.POSITION!==void 0){const h=t.json.accessors[f.POSITION],d=h.min,v=h.max;if(d!==void 0&&v!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(v[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(v[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(v[2]))),h.normalized){const g=_h(qo[h.componentType]);l.multiplyScalar(g)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}i.boundingBox=r;const o=new sr;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=o}function xg(i,e,t){const n=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=gh[o]||o.toLowerCase();a in i.attributes||r.push(s(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});r.push(o)}return Ct.workingColorSpace!==fn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ct.workingColorSpace}" not supported.`),$r(i,e),TR(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?_R(i,e.targets,t):i})}const ER=`varying vec2 vUv;\r
void main() {\r
    vUv = uv;\r
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\r
} `,bR=`precision mediump float;

uniform float u_time;
uniform vec2 u_mouse;
uniform vec2 u_resolution;
varying vec2 vUv;

// Parameters
const float STRIPE_DENSITY = 80.0;  // Density of stripes along X axis
const float MIN_HEIGHT = 0.1;       // Minimum stripe height
const float MAX_HEIGHT = 0.3;       // Maximum stripe height
const float SPEED = 0.05;            // Upward movement speed
const float STRIPE_BASE_WIDTH = 0.01;      // Base width of stripes
const float STRIPE_WIDTH_VARIATION = 0.00; // Max random width variation

// Hash function for random values
float hash(float n) {
    return fract(sin(n) * 43758.5453123);
}

// 1D noise function
float noise(float x) {
    float i = floor(x);
    float f = fract(x);
    float u = f * f * (3.0 - 2.0 * f);
    return mix(hash(i), hash(i + 1.0), u);
}

// Function to create a single stripe
float stripe(vec2 uv, float index, float height) {
    // Calculate stripe position
    float xPos = hash(index) * 0.8 + 0.1;  // Random position between 0.1 and 0.9
    float width = STRIPE_BASE_WIDTH + hash(index + 7.89) * STRIPE_WIDTH_VARIATION;  // Adjustable width
    // Calculate distance from stripe center
    float dist = abs(uv.x - xPos) / width;
    // Create tapered shape
    float taper = 1.0 - uv.y / height;
    taper = max(0.0, taper);
    // Combine for final stripe shape
    float stripe = smoothstep(1.0, 0.0, dist) * taper;
    return stripe;
}

void main() {
    // Correct aspect ratio
    vec2 uv = vUv;
    float aspect = u_resolution.x / u_resolution.y;
    uv.x *= aspect;
    // Mouse influence
    vec2 mousePos = u_mouse;
    mousePos.x *= aspect;
    float mouseDist = length(uv - mousePos);
    float mouseInfluence = smoothstep(0.5, 0.0, mouseDist) * 0.5;
    // Animate vertical position
    float yOffset = u_time * SPEED;
    // Initialize color
    vec3 color = vec3(0.0);
    // Generate stripes
    for (float i = 0.0; i < STRIPE_DENSITY; i++) {
        // Random height for this stripe
        float height = mix(MIN_HEIGHT, MAX_HEIGHT, hash(i + 3.14)) * (1.0 + mouseInfluence);
        // Random speed variation
        float speed = 1.0 + hash(i) * 0.5;
        // Add random time offset so stripes appear at different times
        float timeOffset = hash(i + 12.345) * 10.0;
        // Calculate y position with wrapping and random offset
        float y = fract(uv.y + (u_time + timeOffset) * SPEED * speed);
        // Create stripe
        float stripeValue = stripe(vec2(uv.x, y), i, height);
        // Add glow effect
        float glow = stripeValue * (0.8 + 0.2 * sin(u_time + i));
        // Add to final color
        color += vec3(1.0, 1.0, 1.0) * glow;
    }
    // Add subtle color variation
    color.r += color.r * 0.1 * sin(u_time * 0.2);
    color.b += color.b * 0.05 * cos(u_time * 0.3);
    // Apply mouse-based intensity boost
    color *= 1.0 + mouseInfluence;
    // Output final color
    gl_FragColor = vec4(color, 1.0);
} `;async function AR(i){return new Promise((e,t)=>{new X1().load(i,r=>{r.scene.traverse(s=>{s.isMesh&&console.log("[Mesh]",s.name,"Material:",s.material&&s.material.name,"Type:",s.material&&s.material.type),s.isMesh&&s.material&&s.material.name==="Lighting_Stripes"&&(s.material=new Ur({vertexShader:ER,fragmentShader:bR,uniforms:{u_time:{value:0},u_resolution:{value:new vt(1,1)},u_mouse:{value:new vt(.5,.5)}},transparent:!0}),s.material.needsUpdate=!0,console.log("[Shader Replace] Applied ShaderMaterial to mesh:",s.name,"Material type:",s.material.type))}),e(r)},r=>console.log("Loading progress:",r),r=>t(r))})}function yg(i){return new Y(i.x,i.z,-i.y)}async function wR(i){const e=await fetch(i);if(!e.ok)throw new Error("Failed to load camera presets JSON");return(await e.json()).cameras.map(n=>{const r=yg(new Y(...n.position)),s=yg(new Y(...n.lookAtTarget));return{name:n.name,position:r,fov:n.fov,focalLength:n.focalLength,lookAtTarget:s,near:n.near,far:n.far,sunElevation:n.sunElevation,sunAzimuth:n.sunAzimuth}})}class RR{constructor(e,t){if(this.threeCamera=e,this.cameraPresets=t,this.currentIndex=0,this.basePosition=new Y,this.baseTarget=new Y,this.cameraPresets.length>0){const n=this.cameraPresets[0];this.basePosition.copy(n.position),this.baseTarget.copy(n.lookAtTarget)}this.setFromPreset(0),this.targetOffset=new Y,this.currentOffset=new Y,this._setupMouse()}setFromPreset(e){e!==this.currentIndex&&this.cameraPresets[e]&&this._startTransition(e)}nextPreset(){this.setFromPreset((this.currentIndex+1)%this.cameraPresets.length)}prevPreset(){this.setFromPreset((this.currentIndex-1+this.cameraPresets.length)%this.cameraPresets.length)}_setupMouse(){window.addEventListener("mousemove",e=>{const t=e.clientX/window.innerWidth*2-1;let n=e.clientY/window.innerHeight*2-1;n=-n,this.targetOffset.set(t*.21,n*.105,0)})}_startTransition(e){const t=this.cameraPresets[e];if(!t)return;let n=t.position.clone(),r=t.lookAtTarget.clone();this._transition={fromPos:this.basePosition.clone(),fromTarget:this.baseTarget.clone(),toPos:n,toTarget:r,start:performance.now()/1e3,duration:1.5,active:!0,toIndex:e}}_easeInOutCubic(e){return e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2}update(){if(this._transition&&this._transition.active){let t=(performance.now()/1e3-this._transition.start)/this._transition.duration;if(t>=1){t=1,this._transition.active=!1,this.basePosition.copy(this._transition.toPos),this.baseTarget.copy(this._transition.toTarget),this.currentIndex=this._transition.toIndex;const n=this.cameraPresets[this.currentIndex];n&&n.fov&&(this.threeCamera.fov=n.fov,this.threeCamera.updateProjectionMatrix())}else{const n=this._easeInOutCubic(t);this.basePosition.lerpVectors(this._transition.fromPos,this._transition.toPos,n),this.baseTarget.lerpVectors(this._transition.fromTarget,this._transition.toTarget,n);const r=this.cameraPresets[this.currentIndex],s=this.cameraPresets[this._transition.toIndex];r&&s&&r.fov&&s.fov&&(this.threeCamera.fov=r.fov+(s.fov-r.fov)*n,this.threeCamera.updateProjectionMatrix())}}this.currentOffset.lerp(this.targetOffset,.08),this.threeCamera.position.copy(this.basePosition).add(this.currentOffset),this.threeCamera.lookAt(this.baseTarget)}getCurrentPresetName(){var e;return((e=this.cameraPresets[this.currentIndex])==null?void 0:e.name)||""}getCurrentPreset(){return this.cameraPresets[this.currentIndex]||null}}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/var Sg=function(i){return URL.createObjectURL(new Blob([i],{type:"text/javascript"}))};try{URL.revokeObjectURL(Sg(""))}catch{Sg=function(e){return"data:application/javascript;charset=UTF-8,"+encodeURI(e)}}var Ri=Uint8Array,Qr=Uint16Array,vh=Uint32Array,K0=new Ri([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),j0=new Ri([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),CR=new Ri([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),$0=function(i,e){for(var t=new Qr(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var r=new vh(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)r[s]=s-t[n]<<5|n;return[t,r]},Z0=$0(K0,2),J0=Z0[0],PR=Z0[1];J0[28]=258,PR[258]=28;var LR=$0(j0,0),IR=LR[0],xh=new Qr(32768);for(var Gt=0;Gt<32768;++Gt){var Xr=(Gt&43690)>>>1|(Gt&21845)<<1;Xr=(Xr&52428)>>>2|(Xr&13107)<<2,Xr=(Xr&61680)>>>4|(Xr&3855)<<4,xh[Gt]=((Xr&65280)>>>8|(Xr&255)<<8)>>>1}var il=function(i,e,t){for(var n=i.length,r=0,s=new Qr(e);r<n;++r)++s[i[r]-1];var o=new Qr(e);for(r=0;r<e;++r)o[r]=o[r-1]+s[r-1]<<1;var a;if(t){a=new Qr(1<<e);var l=15-e;for(r=0;r<n;++r)if(i[r])for(var c=r<<4|i[r],u=e-i[r],f=o[i[r]-1]++<<u,h=f|(1<<u)-1;f<=h;++f)a[xh[f]>>>l]=c}else for(a=new Qr(n),r=0;r<n;++r)i[r]&&(a[r]=xh[o[i[r]-1]++]>>>15-i[r]);return a},Nl=new Ri(288);for(var Gt=0;Gt<144;++Gt)Nl[Gt]=8;for(var Gt=144;Gt<256;++Gt)Nl[Gt]=9;for(var Gt=256;Gt<280;++Gt)Nl[Gt]=7;for(var Gt=280;Gt<288;++Gt)Nl[Gt]=8;var Q0=new Ri(32);for(var Gt=0;Gt<32;++Gt)Q0[Gt]=5;var DR=il(Nl,9,1),UR=il(Q0,5,1),wf=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},Oi=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},Rf=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},NR=function(i){return(i/8|0)+(i&7&&1)},OR=function(i,e,t){(t==null||t>i.length)&&(t=i.length);var n=new(i instanceof Qr?Qr:i instanceof vh?vh:Ri)(t-e);return n.set(i.subarray(e,t)),n},FR=function(i,e,t){var n=i.length;if(!n||t&&!t.l&&n<5)return e||new Ri(0);var r=!e||t,s=!t||t.i;t||(t={}),e||(e=new Ri(n*3));var o=function(Me){var Ie=e.length;if(Me>Ie){var Ue=new Ri(Math.max(Ie*2,Me));Ue.set(e),e=Ue}},a=t.f||0,l=t.p||0,c=t.b||0,u=t.l,f=t.d,h=t.m,d=t.n,v=n*8;do{if(!u){t.f=a=Oi(i,l,1);var g=Oi(i,l+1,3);if(l+=3,g)if(g==1)u=DR,f=UR,h=9,d=5;else if(g==2){var S=Oi(i,l,31)+257,x=Oi(i,l+10,15)+4,w=S+Oi(i,l+5,31)+1;l+=14;for(var I=new Ri(w),R=new Ri(19),z=0;z<x;++z)R[CR[z]]=Oi(i,l+z*3,7);l+=x*3;for(var M=wf(R),P=(1<<M)-1,Q=il(R,M,1),z=0;z<w;){var W=Q[Oi(i,l,P)];l+=W&15;var p=W>>>4;if(p<16)I[z++]=p;else{var se=0,k=0;for(p==16?(k=3+Oi(i,l,3),l+=2,se=I[z-1]):p==17?(k=3+Oi(i,l,7),l+=3):p==18&&(k=11+Oi(i,l,127),l+=7);k--;)I[z++]=se}}var q=I.subarray(0,S),Z=I.subarray(S);h=wf(q),d=wf(Z),u=il(q,h,1),f=il(Z,d,1)}else throw"invalid block type";else{var p=NR(l)+4,m=i[p-4]|i[p-3]<<8,T=p+m;if(T>n){if(s)throw"unexpected EOF";break}r&&o(c+m),e.set(i.subarray(p,T),c),t.b=c+=m,t.p=l=T*8;continue}if(l>v){if(s)throw"unexpected EOF";break}}r&&o(c+131072);for(var X=(1<<h)-1,j=(1<<d)-1,$=l;;$=l){var se=u[Rf(i,l)&X],D=se>>>4;if(l+=se&15,l>v){if(s)throw"unexpected EOF";break}if(!se)throw"invalid length/literal";if(D<256)e[c++]=D;else if(D==256){$=l,u=null;break}else{var G=D-254;if(D>264){var z=D-257,J=K0[z];G=Oi(i,l,(1<<J)-1)+J0[z],l+=J}var Te=f[Rf(i,l)&j],ye=Te>>>4;if(!Te)throw"invalid distance";l+=Te&15;var Z=IR[ye];if(ye>3){var J=j0[ye];Z+=Rf(i,l)&(1<<J)-1,l+=J}if(l>v){if(s)throw"unexpected EOF";break}r&&o(c+131072);for(var Ee=c+G;c<Ee;c+=4)e[c]=e[c-Z],e[c+1]=e[c+1-Z],e[c+2]=e[c+2-Z],e[c+3]=e[c+3-Z];c=Ee}}t.l=u,t.p=$,t.b=c,u&&(a=1,t.m=h,t.d=f,t.n=d)}while(!a);return c==e.length?e:OR(e,0,c)},BR=new Ri(0),kR=function(i){if((i[0]&15)!=8||i[0]>>>4>7||(i[0]<<8|i[1])%31)throw"invalid zlib data";if(i[1]&32)throw"invalid zlib data: preset dictionaries not supported"};function hc(i,e){return FR((kR(i),i.subarray(2,-4)),e)}var zR=typeof TextDecoder<"u"&&new TextDecoder,HR=0;try{zR.decode(BR,{stream:!0}),HR=1}catch{}class GR extends w1{constructor(e){super(e),this.type=br}parse(e){const M=Math.pow(2.7182818,2.2);function P(y,_){let b=0;for(let U=0;U<65536;++U)(U==0||y[U>>3]&1<<(U&7))&&(_[b++]=U);const L=b-1;for(;b<65536;)_[b++]=0;return L}function Q(y){for(let _=0;_<16384;_++)y[_]={},y[_].len=0,y[_].lit=0,y[_].p=null}const W={l:0,c:0,lc:0};function se(y,_,b,L,U){for(;b<y;)_=_<<8|Qe(L,U),b+=8;b-=y,W.l=_>>b&(1<<y)-1,W.c=_,W.lc=b}const k=new Array(59);function q(y){for(let b=0;b<=58;++b)k[b]=0;for(let b=0;b<65537;++b)k[y[b]]+=1;let _=0;for(let b=58;b>0;--b){const L=_+k[b]>>1;k[b]=_,_=L}for(let b=0;b<65537;++b){const L=y[b];L>0&&(y[b]=L|k[L]++<<6)}}function Z(y,_,b,L,U,N){const K=_;let ne=0,ae=0;for(;L<=U;L++){if(K.value-_.value>b)return!1;se(6,ne,ae,y,K);const re=W.l;if(ne=W.c,ae=W.lc,N[L]=re,re==63){if(K.value-_.value>b)throw new Error("Something wrong with hufUnpackEncTable");se(8,ne,ae,y,K);let he=W.l+6;if(ne=W.c,ae=W.lc,L+he>U+1)throw new Error("Something wrong with hufUnpackEncTable");for(;he--;)N[L++]=0;L--}else if(re>=59){let he=re-59+2;if(L+he>U+1)throw new Error("Something wrong with hufUnpackEncTable");for(;he--;)N[L++]=0;L--}}q(N)}function X(y){return y&63}function j(y){return y>>6}function $(y,_,b,L){for(;_<=b;_++){const U=j(y[_]),N=X(y[_]);if(U>>N)throw new Error("Invalid table entry");if(N>14){const K=L[U>>N-14];if(K.len)throw new Error("Invalid table entry");if(K.lit++,K.p){const ne=K.p;K.p=new Array(K.lit);for(let ae=0;ae<K.lit-1;++ae)K.p[ae]=ne[ae]}else K.p=new Array(1);K.p[K.lit-1]=_}else if(N){let K=0;for(let ne=1<<14-N;ne>0;ne--){const ae=L[(U<<14-N)+K];if(ae.len||ae.p)throw new Error("Invalid table entry");ae.len=N,ae.lit=_,K++}}}return!0}const D={c:0,lc:0};function G(y,_,b,L){y=y<<8|Qe(b,L),_+=8,D.c=y,D.lc=_}const J={c:0,lc:0};function Te(y,_,b,L,U,N,K,ne,ae){if(y==_){L<8&&(G(b,L,U,N),b=D.c,L=D.lc),L-=8;let re=b>>L;if(re=new Uint8Array([re])[0],ne.value+re>ae)return!1;const he=K[ne.value-1];for(;re-- >0;)K[ne.value++]=he}else if(ne.value<ae)K[ne.value++]=y;else return!1;J.c=b,J.lc=L}function ye(y){return y&65535}function Ee(y){const _=ye(y);return _>32767?_-65536:_}const Me={a:0,b:0};function Ie(y,_){const b=Ee(y),U=Ee(_),N=b+(U&1)+(U>>1),K=N,ne=N-U;Me.a=K,Me.b=ne}function Ue(y,_){const b=ye(y),L=ye(_),U=b-(L>>1)&65535,N=L+U-32768&65535;Me.a=N,Me.b=U}function Je(y,_,b,L,U,N,K){const ne=K<16384,ae=b>U?U:b;let re=1,he,pe;for(;re<=ae;)re<<=1;for(re>>=1,he=re,re>>=1;re>=1;){pe=0;const me=pe+N*(U-he),Ce=N*re,Ve=N*he,Fe=L*re,ze=L*he;let He,We,Et,st;for(;pe<=me;pe+=Ve){let Mt=pe;const _t=pe+L*(b-he);for(;Mt<=_t;Mt+=ze){const zt=Mt+Fe,Tn=Mt+Ce,St=Tn+Fe;ne?(Ie(y[Mt+_],y[Tn+_]),He=Me.a,Et=Me.b,Ie(y[zt+_],y[St+_]),We=Me.a,st=Me.b,Ie(He,We),y[Mt+_]=Me.a,y[zt+_]=Me.b,Ie(Et,st),y[Tn+_]=Me.a,y[St+_]=Me.b):(Ue(y[Mt+_],y[Tn+_]),He=Me.a,Et=Me.b,Ue(y[zt+_],y[St+_]),We=Me.a,st=Me.b,Ue(He,We),y[Mt+_]=Me.a,y[zt+_]=Me.b,Ue(Et,st),y[Tn+_]=Me.a,y[St+_]=Me.b)}if(b&re){const zt=Mt+Ce;ne?Ie(y[Mt+_],y[zt+_]):Ue(y[Mt+_],y[zt+_]),He=Me.a,y[zt+_]=Me.b,y[Mt+_]=He}}if(U&re){let Mt=pe;const _t=pe+L*(b-he);for(;Mt<=_t;Mt+=ze){const zt=Mt+Fe;ne?Ie(y[Mt+_],y[zt+_]):Ue(y[Mt+_],y[zt+_]),He=Me.a,y[zt+_]=Me.b,y[Mt+_]=He}}he=re,re>>=1}return pe}function Tt(y,_,b,L,U,N,K,ne,ae){let re=0,he=0;const pe=K,me=Math.trunc(L.value+(U+7)/8);for(;L.value<me;)for(G(re,he,b,L),re=D.c,he=D.lc;he>=14;){const Ve=re>>he-14&16383,Fe=_[Ve];if(Fe.len)he-=Fe.len,Te(Fe.lit,N,re,he,b,L,ne,ae,pe),re=J.c,he=J.lc;else{if(!Fe.p)throw new Error("hufDecode issues");let ze;for(ze=0;ze<Fe.lit;ze++){const He=X(y[Fe.p[ze]]);for(;he<He&&L.value<me;)G(re,he,b,L),re=D.c,he=D.lc;if(he>=He&&j(y[Fe.p[ze]])==(re>>he-He&(1<<He)-1)){he-=He,Te(Fe.p[ze],N,re,he,b,L,ne,ae,pe),re=J.c,he=J.lc;break}}if(ze==Fe.lit)throw new Error("hufDecode issues")}}const Ce=8-U&7;for(re>>=Ce,he-=Ce;he>0;){const Ve=_[re<<14-he&16383];if(Ve.len)he-=Ve.len,Te(Ve.lit,N,re,he,b,L,ne,ae,pe),re=J.c,he=J.lc;else throw new Error("hufDecode issues")}return!0}function $e(y,_,b,L,U,N){const K={value:0},ne=b.value,ae=_e(_,b),re=_e(_,b);b.value+=4;const he=_e(_,b);if(b.value+=4,ae<0||ae>=65537||re<0||re>=65537)throw new Error("Something wrong with HUF_ENCSIZE");const pe=new Array(65537),me=new Array(16384);Q(me);const Ce=L-(b.value-ne);if(Z(y,b,Ce,ae,re,pe),he>8*(L-(b.value-ne)))throw new Error("Something wrong with hufUncompress");$(pe,ae,re,me),Tt(pe,me,y,b,he,re,N,U,K)}function E(y,_,b){for(let L=0;L<b;++L)_[L]=y[_[L]]}function B(y){for(let _=1;_<y.length;_++){const b=y[_-1]+y[_]-128;y[_]=b}}function V(y,_){let b=0,L=Math.floor((y.length+1)/2),U=0;const N=y.length-1;for(;!(U>N||(_[U++]=y[b++],U>N));)_[U++]=y[L++]}function ie(y){let _=y.byteLength;const b=new Array;let L=0;const U=new DataView(y);for(;_>0;){const N=U.getInt8(L++);if(N<0){const K=-N;_-=K+1;for(let ne=0;ne<K;ne++)b.push(U.getUint8(L++))}else{const K=N;_-=2;const ne=U.getUint8(L++);for(let ae=0;ae<K+1;ae++)b.push(ne)}}return b}function ee(y,_,b,L,U,N){let K=new DataView(N.buffer);const ne=b[y.idx[0]].width,ae=b[y.idx[0]].height,re=3,he=Math.floor(ne/8),pe=Math.ceil(ne/8),me=Math.ceil(ae/8),Ce=ne-(pe-1)*8,Ve=ae-(me-1)*8,Fe={value:0},ze=new Array(re),He=new Array(re),We=new Array(re),Et=new Array(re),st=new Array(re);for(let _t=0;_t<re;++_t)st[_t]=_[y.idx[_t]],ze[_t]=_t<1?0:ze[_t-1]+pe*me,He[_t]=new Float32Array(64),We[_t]=new Uint16Array(64),Et[_t]=new Uint16Array(pe*64);for(let _t=0;_t<me;++_t){let zt=8;_t==me-1&&(zt=Ve);let Tn=8;for(let mt=0;mt<pe;++mt){mt==pe-1&&(Tn=Ce);for(let bt=0;bt<re;++bt)We[bt].fill(0),We[bt][0]=U[ze[bt]++],F(Fe,L,We[bt]),de(We[bt],He[bt]),ue(He[bt]);ge(He);for(let bt=0;bt<re;++bt)le(He[bt],Et[bt],mt*64)}let St=0;for(let mt=0;mt<re;++mt){const bt=b[y.idx[mt]].type;for(let Yt=8*_t;Yt<8*_t+zt;++Yt){St=st[mt][Yt];for(let lr=0;lr<he;++lr){const Mi=lr*64+(Yt&7)*8;K.setUint16(St+0*2*bt,Et[mt][Mi+0],!0),K.setUint16(St+1*2*bt,Et[mt][Mi+1],!0),K.setUint16(St+2*2*bt,Et[mt][Mi+2],!0),K.setUint16(St+3*2*bt,Et[mt][Mi+3],!0),K.setUint16(St+4*2*bt,Et[mt][Mi+4],!0),K.setUint16(St+5*2*bt,Et[mt][Mi+5],!0),K.setUint16(St+6*2*bt,Et[mt][Mi+6],!0),K.setUint16(St+7*2*bt,Et[mt][Mi+7],!0),St+=8*2*bt}}if(he!=pe)for(let Yt=8*_t;Yt<8*_t+zt;++Yt){const lr=st[mt][Yt]+8*he*2*bt,Mi=he*64+(Yt&7)*8;for(let Ss=0;Ss<Tn;++Ss)K.setUint16(lr+Ss*2*bt,Et[mt][Mi+Ss],!0)}}}const Mt=new Uint16Array(ne);K=new DataView(N.buffer);for(let _t=0;_t<re;++_t){b[y.idx[_t]].decoded=!0;const zt=b[y.idx[_t]].type;if(b[_t].type==2)for(let Tn=0;Tn<ae;++Tn){const St=st[_t][Tn];for(let mt=0;mt<ne;++mt)Mt[mt]=K.getUint16(St+mt*2*zt,!0);for(let mt=0;mt<ne;++mt)K.setFloat32(St+mt*2*zt,te(Mt[mt]),!0)}}}function F(y,_,b){let L,U=1;for(;U<64;)L=_[y.value],L==65280?U=64:L>>8==255?U+=L&255:(b[U]=L,U++),y.value++}function de(y,_){_[0]=te(y[0]),_[1]=te(y[1]),_[2]=te(y[5]),_[3]=te(y[6]),_[4]=te(y[14]),_[5]=te(y[15]),_[6]=te(y[27]),_[7]=te(y[28]),_[8]=te(y[2]),_[9]=te(y[4]),_[10]=te(y[7]),_[11]=te(y[13]),_[12]=te(y[16]),_[13]=te(y[26]),_[14]=te(y[29]),_[15]=te(y[42]),_[16]=te(y[3]),_[17]=te(y[8]),_[18]=te(y[12]),_[19]=te(y[17]),_[20]=te(y[25]),_[21]=te(y[30]),_[22]=te(y[41]),_[23]=te(y[43]),_[24]=te(y[9]),_[25]=te(y[11]),_[26]=te(y[18]),_[27]=te(y[24]),_[28]=te(y[31]),_[29]=te(y[40]),_[30]=te(y[44]),_[31]=te(y[53]),_[32]=te(y[10]),_[33]=te(y[19]),_[34]=te(y[23]),_[35]=te(y[32]),_[36]=te(y[39]),_[37]=te(y[45]),_[38]=te(y[52]),_[39]=te(y[54]),_[40]=te(y[20]),_[41]=te(y[22]),_[42]=te(y[33]),_[43]=te(y[38]),_[44]=te(y[46]),_[45]=te(y[51]),_[46]=te(y[55]),_[47]=te(y[60]),_[48]=te(y[21]),_[49]=te(y[34]),_[50]=te(y[37]),_[51]=te(y[47]),_[52]=te(y[50]),_[53]=te(y[56]),_[54]=te(y[59]),_[55]=te(y[61]),_[56]=te(y[35]),_[57]=te(y[36]),_[58]=te(y[48]),_[59]=te(y[49]),_[60]=te(y[57]),_[61]=te(y[58]),_[62]=te(y[62]),_[63]=te(y[63])}function ue(y){const _=.5*Math.cos(.7853975),b=.5*Math.cos(3.14159/16),L=.5*Math.cos(3.14159/8),U=.5*Math.cos(3*3.14159/16),N=.5*Math.cos(5*3.14159/16),K=.5*Math.cos(3*3.14159/8),ne=.5*Math.cos(7*3.14159/16),ae=new Array(4),re=new Array(4),he=new Array(4),pe=new Array(4);for(let me=0;me<8;++me){const Ce=me*8;ae[0]=L*y[Ce+2],ae[1]=K*y[Ce+2],ae[2]=L*y[Ce+6],ae[3]=K*y[Ce+6],re[0]=b*y[Ce+1]+U*y[Ce+3]+N*y[Ce+5]+ne*y[Ce+7],re[1]=U*y[Ce+1]-ne*y[Ce+3]-b*y[Ce+5]-N*y[Ce+7],re[2]=N*y[Ce+1]-b*y[Ce+3]+ne*y[Ce+5]+U*y[Ce+7],re[3]=ne*y[Ce+1]-N*y[Ce+3]+U*y[Ce+5]-b*y[Ce+7],he[0]=_*(y[Ce+0]+y[Ce+4]),he[3]=_*(y[Ce+0]-y[Ce+4]),he[1]=ae[0]+ae[3],he[2]=ae[1]-ae[2],pe[0]=he[0]+he[1],pe[1]=he[3]+he[2],pe[2]=he[3]-he[2],pe[3]=he[0]-he[1],y[Ce+0]=pe[0]+re[0],y[Ce+1]=pe[1]+re[1],y[Ce+2]=pe[2]+re[2],y[Ce+3]=pe[3]+re[3],y[Ce+4]=pe[3]-re[3],y[Ce+5]=pe[2]-re[2],y[Ce+6]=pe[1]-re[1],y[Ce+7]=pe[0]-re[0]}for(let me=0;me<8;++me)ae[0]=L*y[16+me],ae[1]=K*y[16+me],ae[2]=L*y[48+me],ae[3]=K*y[48+me],re[0]=b*y[8+me]+U*y[24+me]+N*y[40+me]+ne*y[56+me],re[1]=U*y[8+me]-ne*y[24+me]-b*y[40+me]-N*y[56+me],re[2]=N*y[8+me]-b*y[24+me]+ne*y[40+me]+U*y[56+me],re[3]=ne*y[8+me]-N*y[24+me]+U*y[40+me]-b*y[56+me],he[0]=_*(y[me]+y[32+me]),he[3]=_*(y[me]-y[32+me]),he[1]=ae[0]+ae[3],he[2]=ae[1]-ae[2],pe[0]=he[0]+he[1],pe[1]=he[3]+he[2],pe[2]=he[3]-he[2],pe[3]=he[0]-he[1],y[0+me]=pe[0]+re[0],y[8+me]=pe[1]+re[1],y[16+me]=pe[2]+re[2],y[24+me]=pe[3]+re[3],y[32+me]=pe[3]-re[3],y[40+me]=pe[2]-re[2],y[48+me]=pe[1]-re[1],y[56+me]=pe[0]-re[0]}function ge(y){for(let _=0;_<64;++_){const b=y[0][_],L=y[1][_],U=y[2][_];y[0][_]=b+1.5747*U,y[1][_]=b-.1873*L-.4682*U,y[2][_]=b+1.8556*L}}function le(y,_,b){for(let L=0;L<64;++L)_[b+L]=Mm.toHalfFloat(Re(y[L]))}function Re(y){return y<=1?Math.sign(y)*Math.pow(Math.abs(y),2.2):Math.sign(y)*Math.pow(M,Math.abs(y)-1)}function C(y){return new DataView(y.array.buffer,y.offset.value,y.size)}function A(y){const _=y.viewer.buffer.slice(y.offset.value,y.offset.value+y.size),b=new Uint8Array(ie(_)),L=new Uint8Array(b.length);return B(b),V(b,L),new DataView(L.buffer)}function H(y){const _=y.array.slice(y.offset.value,y.offset.value+y.size),b=hc(_),L=new Uint8Array(b.length);return B(b),V(b,L),new DataView(L.buffer)}function ce(y){const _=y.viewer,b={value:y.offset.value},L=new Uint16Array(y.width*y.scanlineBlockSize*(y.channels*y.type)),U=new Uint8Array(8192);let N=0;const K=new Array(y.channels);for(let Ve=0;Ve<y.channels;Ve++)K[Ve]={},K[Ve].start=N,K[Ve].end=K[Ve].start,K[Ve].nx=y.width,K[Ve].ny=y.lines,K[Ve].size=y.type,N+=K[Ve].nx*K[Ve].ny*K[Ve].size;const ne=Se(_,b),ae=Se(_,b);if(ae>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(ne<=ae)for(let Ve=0;Ve<ae-ne+1;Ve++)U[Ve+ne]=Ge(_,b);const re=new Uint16Array(65536),he=P(U,re),pe=_e(_,b);$e(y.array,_,b,pe,L,N);for(let Ve=0;Ve<y.channels;++Ve){const Fe=K[Ve];for(let ze=0;ze<K[Ve].size;++ze)Je(L,Fe.start+ze,Fe.nx,Fe.size,Fe.ny,Fe.nx*Fe.size,he)}E(re,L,N);let me=0;const Ce=new Uint8Array(L.buffer.byteLength);for(let Ve=0;Ve<y.lines;Ve++)for(let Fe=0;Fe<y.channels;Fe++){const ze=K[Fe],He=ze.nx*ze.size,We=new Uint8Array(L.buffer,ze.end*2,He*2);Ce.set(We,me),me+=He*2,ze.end+=He}return new DataView(Ce.buffer)}function oe(y){const _=y.array.slice(y.offset.value,y.offset.value+y.size),b=hc(_),L=y.lines*y.channels*y.width,U=y.type==1?new Uint16Array(L):new Uint32Array(L);let N=0,K=0;const ne=new Array(4);for(let ae=0;ae<y.lines;ae++)for(let re=0;re<y.channels;re++){let he=0;switch(y.type){case 1:ne[0]=N,ne[1]=ne[0]+y.width,N=ne[1]+y.width;for(let pe=0;pe<y.width;++pe){const me=b[ne[0]++]<<8|b[ne[1]++];he+=me,U[K]=he,K++}break;case 2:ne[0]=N,ne[1]=ne[0]+y.width,ne[2]=ne[1]+y.width,N=ne[2]+y.width;for(let pe=0;pe<y.width;++pe){const me=b[ne[0]++]<<24|b[ne[1]++]<<16|b[ne[2]++]<<8;he+=me,U[K]=he,K++}break}}return new DataView(U.buffer)}function fe(y){const _=y.viewer,b={value:y.offset.value},L=new Uint8Array(y.width*y.lines*(y.channels*y.type*2)),U={version:Be(_,b),unknownUncompressedSize:Be(_,b),unknownCompressedSize:Be(_,b),acCompressedSize:Be(_,b),dcCompressedSize:Be(_,b),rleCompressedSize:Be(_,b),rleUncompressedSize:Be(_,b),rleRawSize:Be(_,b),totalAcUncompressedCount:Be(_,b),totalDcUncompressedCount:Be(_,b),acCompression:Be(_,b)};if(U.version<2)throw new Error("EXRLoader.parse: "+rt.compression+" version "+U.version+" is unsupported");const N=new Array;let K=Se(_,b)-2;for(;K>0;){const Fe=be(_.buffer,b),ze=Ge(_,b),He=ze>>2&3,We=(ze>>4)-1,Et=new Int8Array([We])[0],st=Ge(_,b);N.push({name:Fe,index:Et,type:st,compression:He}),K-=Fe.length+3}const ne=rt.channels,ae=new Array(y.channels);for(let Fe=0;Fe<y.channels;++Fe){const ze=ae[Fe]={},He=ne[Fe];ze.name=He.name,ze.compression=0,ze.decoded=!1,ze.type=He.pixelType,ze.pLinear=He.pLinear,ze.width=y.width,ze.height=y.lines}const re={idx:new Array(3)};for(let Fe=0;Fe<y.channels;++Fe){const ze=ae[Fe];for(let He=0;He<N.length;++He){const We=N[He];ze.name==We.name&&(ze.compression=We.compression,We.index>=0&&(re.idx[We.index]=Fe),ze.offset=Fe)}}let he,pe,me;if(U.acCompressedSize>0)switch(U.acCompression){case 0:he=new Uint16Array(U.totalAcUncompressedCount),$e(y.array,_,b,U.acCompressedSize,he,U.totalAcUncompressedCount);break;case 1:const Fe=y.array.slice(b.value,b.value+U.totalAcUncompressedCount),ze=hc(Fe);he=new Uint16Array(ze.buffer),b.value+=U.totalAcUncompressedCount;break}if(U.dcCompressedSize>0){const Fe={array:y.array,offset:b,size:U.dcCompressedSize};pe=new Uint16Array(H(Fe).buffer),b.value+=U.dcCompressedSize}if(U.rleRawSize>0){const Fe=y.array.slice(b.value,b.value+U.rleCompressedSize),ze=hc(Fe);me=ie(ze.buffer),b.value+=U.rleCompressedSize}let Ce=0;const Ve=new Array(ae.length);for(let Fe=0;Fe<Ve.length;++Fe)Ve[Fe]=new Array;for(let Fe=0;Fe<y.lines;++Fe)for(let ze=0;ze<ae.length;++ze)Ve[ze].push(Ce),Ce+=ae[ze].width*y.type*2;ee(re,Ve,ae,he,pe,L);for(let Fe=0;Fe<ae.length;++Fe){const ze=ae[Fe];if(!ze.decoded)switch(ze.compression){case 2:let He=0,We=0;for(let Et=0;Et<y.lines;++Et){let st=Ve[Fe][He];for(let Mt=0;Mt<ze.width;++Mt){for(let _t=0;_t<2*ze.type;++_t)L[st++]=me[We+_t*ze.width*ze.height];We++}He++}break;case 1:default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(L.buffer)}function be(y,_){const b=new Uint8Array(y);let L=0;for(;b[_.value+L]!=0;)L+=1;const U=new TextDecoder().decode(b.slice(_.value,_.value+L));return _.value=_.value+L+1,U}function ve(y,_,b){const L=new TextDecoder().decode(new Uint8Array(y).slice(_.value,_.value+b));return _.value=_.value+b,L}function Ae(y,_){const b=nt(y,_),L=_e(y,_);return[b,L]}function Pe(y,_){const b=_e(y,_),L=_e(y,_);return[b,L]}function nt(y,_){const b=y.getInt32(_.value,!0);return _.value=_.value+4,b}function _e(y,_){const b=y.getUint32(_.value,!0);return _.value=_.value+4,b}function Qe(y,_){const b=y[_.value];return _.value=_.value+1,b}function Ge(y,_){const b=y.getUint8(_.value);return _.value=_.value+1,b}const Be=function(y,_){let b;return"getBigInt64"in DataView.prototype?b=Number(y.getBigInt64(_.value,!0)):b=y.getUint32(_.value+4,!0)+Number(y.getUint32(_.value,!0)<<32),_.value+=8,b};function Oe(y,_){const b=y.getFloat32(_.value,!0);return _.value+=4,b}function O(y,_){return Mm.toHalfFloat(Oe(y,_))}function te(y){const _=(y&31744)>>10,b=y&1023;return(y>>15?-1:1)*(_?_===31?b?NaN:1/0:Math.pow(2,_-15)*(1+b/1024):6103515625e-14*(b/1024))}function Se(y,_){const b=y.getUint16(_.value,!0);return _.value+=2,b}function Le(y,_){return te(Se(y,_))}function we(y,_,b,L){const U=b.value,N=[];for(;b.value<U+L-1;){const K=be(_,b),ne=nt(y,b),ae=Ge(y,b);b.value+=3;const re=nt(y,b),he=nt(y,b);N.push({name:K,pixelType:ne,pLinear:ae,xSampling:re,ySampling:he})}return b.value+=1,N}function xe(y,_){const b=Oe(y,_),L=Oe(y,_),U=Oe(y,_),N=Oe(y,_),K=Oe(y,_),ne=Oe(y,_),ae=Oe(y,_),re=Oe(y,_);return{redX:b,redY:L,greenX:U,greenY:N,blueX:K,blueY:ne,whiteX:ae,whiteY:re}}function Ye(y,_){const b=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],L=Ge(y,_);return b[L]}function Ze(y,_){const b=_e(y,_),L=_e(y,_),U=_e(y,_),N=_e(y,_);return{xMin:b,yMin:L,xMax:U,yMax:N}}function Xt(y,_){const b=["INCREASING_Y"],L=Ge(y,_);return b[L]}function ke(y,_){const b=Oe(y,_),L=Oe(y,_);return[b,L]}function qe(y,_){const b=Oe(y,_),L=Oe(y,_),U=Oe(y,_);return[b,L,U]}function tt(y,_,b,L,U){if(L==="string"||L==="stringvector"||L==="iccProfile")return ve(_,b,U);if(L==="chlist")return we(y,_,b,U);if(L==="chromaticities")return xe(y,b);if(L==="compression")return Ye(y,b);if(L==="box2i")return Ze(y,b);if(L==="lineOrder")return Xt(y,b);if(L==="float")return Oe(y,b);if(L==="v2f")return ke(y,b);if(L==="v3f")return qe(y,b);if(L==="int")return nt(y,b);if(L==="rational")return Ae(y,b);if(L==="timecode")return Pe(y,b);if(L==="preview")return b.value+=U,"skipped";b.value+=U}function De(y,_,b){const L={};if(y.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");L.version=y.getUint8(4);const U=y.getUint8(5);L.spec={singleTile:!!(U&2),longName:!!(U&4),deepFormat:!!(U&8),multiPart:!!(U&16)},b.value=8;let N=!0;for(;N;){const K=be(_,b);if(K==0)N=!1;else{const ne=be(_,b),ae=_e(y,b),re=tt(y,_,b,ne,ae);re===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${ne}'.`):L[K]=re}}if((U&-5)!=0)throw console.error("THREE.EXRHeader:",L),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return L}function it(y,_,b,L,U){const N={size:0,viewer:_,array:b,offset:L,width:y.dataWindow.xMax-y.dataWindow.xMin+1,height:y.dataWindow.yMax-y.dataWindow.yMin+1,channels:y.channels.length,bytesPerLine:null,lines:null,inputSize:null,type:y.channels[0].pixelType,uncompress:null,getter:null,format:null,colorSpace:fn};switch(y.compression){case"NO_COMPRESSION":N.lines=1,N.uncompress=C;break;case"RLE_COMPRESSION":N.lines=1,N.uncompress=A;break;case"ZIPS_COMPRESSION":N.lines=1,N.uncompress=H;break;case"ZIP_COMPRESSION":N.lines=16,N.uncompress=H;break;case"PIZ_COMPRESSION":N.lines=32,N.uncompress=ce;break;case"PXR24_COMPRESSION":N.lines=16,N.uncompress=oe;break;case"DWAA_COMPRESSION":N.lines=32,N.uncompress=fe;break;case"DWAB_COMPRESSION":N.lines=256,N.uncompress=fe;break;default:throw new Error("EXRLoader.parse: "+y.compression+" is unsupported")}if(N.scanlineBlockSize=N.lines,N.type==1)switch(U){case Ci:N.getter=Le,N.inputSize=2;break;case br:N.getter=Se,N.inputSize=2;break}else if(N.type==2)switch(U){case Ci:N.getter=Oe,N.inputSize=4;break;case br:N.getter=O,N.inputSize=4}else throw new Error("EXRLoader.parse: unsupported pixelType "+N.type+" for "+y.compression+".");N.blockCount=(y.dataWindow.yMax+1)/N.scanlineBlockSize;for(let ne=0;ne<N.blockCount;ne++)Be(_,L);N.outputChannels=N.channels==3?4:N.channels;const K=N.width*N.height*N.outputChannels;switch(U){case Ci:N.byteArray=new Float32Array(K),N.channels<N.outputChannels&&N.byteArray.fill(1,0,K);break;case br:N.byteArray=new Uint16Array(K),N.channels<N.outputChannels&&N.byteArray.fill(15360,0,K);break;default:console.error("THREE.EXRLoader: unsupported type: ",U);break}return N.bytesPerLine=N.width*N.inputSize*N.channels,N.outputChannels==4?(N.format=hi,N.colorSpace=fn):(N.format=d0,N.colorSpace=di),N}const je=new DataView(e),et=new Uint8Array(e),It={value:0},rt=De(je,e,It),Ke=it(rt,je,et,It,this.type),Qt={value:0},Ot={R:0,G:1,B:2,A:3,Y:0};for(let y=0;y<Ke.height/Ke.scanlineBlockSize;y++){const _=_e(je,It);Ke.size=_e(je,It),Ke.lines=_+Ke.scanlineBlockSize>Ke.height?Ke.height-_:Ke.scanlineBlockSize;const L=Ke.size<Ke.lines*Ke.bytesPerLine?Ke.uncompress(Ke):C(Ke);It.value+=Ke.size;for(let U=0;U<Ke.scanlineBlockSize;U++){const N=U+y*Ke.scanlineBlockSize;if(N>=Ke.height)break;for(let K=0;K<Ke.channels;K++){const ne=Ot[rt.channels[K].name];for(let ae=0;ae<Ke.width;ae++){Qt.value=(U*(Ke.channels*Ke.width)+K*Ke.width+ae)*Ke.inputSize;const re=(Ke.height-1-N)*(Ke.width*Ke.outputChannels)+ae*Ke.outputChannels+ne;Ke.byteArray[re]=Ke.getter(L,Qt)}}}}return{header:rt,width:Ke.width,height:Ke.height,data:Ke.byteArray,format:Ke.format,colorSpace:Ke.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}load(e,t,n,r){function s(o,a){o.colorSpace=a.colorSpace,o.minFilter=cn,o.magFilter=cn,o.generateMipmaps=!1,o.flipY=!1,t&&t(o,a)}return super.load(e,s,n,r)}}class VR{constructor(e,t=1){this.renderer=e,this.intensity=t,this.scene=null,this.pmremGenerator=new hh(e),this.pmremGenerator.compileEquirectangularShader()}setIntensity(e){this.intensity=Math.max(0,Math.min(2,e)),this.updateIntensity(),console.log(`HDRI intensity set to: ${this.intensity}`)}getIntensity(){return this.intensity}updateIntensity(){this.scene&&this.scene.traverse(e=>{e.material&&(e.material.envMapIntensity!==void 0?(e.material.envMapIntensity=this.intensity,e.material.needsUpdate=!0):Array.isArray(e.material)&&e.material.forEach(t=>{t.envMapIntensity!==void 0&&(t.envMapIntensity=this.intensity,t.needsUpdate=!0)}))})}async loadHDRI(e){return new Promise((t,n)=>{new GR().load(e,s=>{const o=this.pmremGenerator.fromEquirectangular(s).texture;s.dispose(),this.pmremGenerator.dispose(),t(o)},s=>{console.log("HDRI loading progress:",s)},s=>{console.error("Failed to load HDRI:",s),n(s)})})}setEnvironmentMap(e,t){this.scene=e,e.environment=t,e.background=t,this.updateIntensity()}}const ev=(i,e)=>{const t=i.__vccOpts||i;for(const[n,r]of e)t[n]=r;return t},WR=400,XR={__name:"ThreeScene",props:{sunElevation:{type:Number,default:-20},sunAzimuth:{type:Number,default:120},isManualSunControl:{type:Boolean,default:!1},hdriIntensity:{type:Number,default:1}},emits:["presetChanged"],setup(i,{expose:e,emit:t}){const n=i,r=t,s=Gn(null);let o,a,l,c,u,f,h,d=-20,v=120,g=-20,p=120,m=1,T=1.2,S=0;const x="/DW_3dTest/";let w=null;const I=j=>j<.5?4*j*j*j:1-Math.pow(-2*j+2,3)/2,R=()=>{u&&u.nextPreset()},z=()=>{u&&u.prevPreset()},M=()=>u?u.getCurrentPresetName():"",P=()=>u?u.getCurrentPreset():null,Q=(j,$,D=!0)=>{if(D&&(j!==g||$!==p)){const G=d,J=v;g=j,p=$,m=0,S=performance.now()*.001,window.sunStartElevation=G,window.sunStartAzimuth=J}else D||(d=j,v=$,g=j,p=$,m=1)};Wo(()=>[n.sunElevation,n.sunAzimuth],([j,$])=>{const D=!n.isManualSunControl;Q(j,$,D)},{immediate:!0}),Wo(()=>n.hdriIntensity,j=>{o&&o.environment&&o.environment.intensity!==void 0?o.environment.intensity=j:l&&l.toneMappingExposure!==void 0&&(l.toneMappingExposure=j)},{immediate:!0});let W=0;const se=j=>{const $=Date.now();$-W<WR||(W=$,u&&(j.deltaY>0?(R(),r("presetChanged")):j.deltaY<0&&(z(),r("presetChanged"))))},k=()=>{!a||!l||(a.aspect=window.innerWidth/window.innerHeight,a.updateProjectionMatrix(),l.setSize(window.innerWidth,window.innerHeight))},q=()=>{if(w=requestAnimationFrame(q),o&&l){const j=performance.now()*.001;o.traverse($=>{$.isMesh&&$.material&&$.material.isShaderMaterial&&$.material.uniforms&&$.material.uniforms.u_time&&$.material.uniforms.u_resolution&&($.material.uniforms.u_time.value=j,$.material.uniforms.u_resolution.value.set(l.domElement.width,l.domElement.height))})}if(m<1){const $=performance.now()*.001-S;m=Math.min($/T,1);const D=I(m),G=window.sunStartElevation||d,J=window.sunStartAzimuth||v;d=G+(g-G)*D,v=J+(p-J)*D}c&&c.setSunPosition(d,v),u&&u.update(),l&&o&&a&&l.render(o,a)},Z=async()=>{if(!s.value)return;o=new r1,a=new Cn(60,window.innerWidth/window.innerHeight,1,1e5),a.position.set(0,100,400),l=new B0({antialias:!0}),l.setSize(window.innerWidth,window.innerHeight),l.toneMapping=a0,l.toneMappingExposure=.5,s.value.appendChild(l.domElement),h=new VR(l,.2);try{const $=await h.loadHDRI(x+"assets/environment.exr");h.setEnvironmentMap(o,$),console.log("HDRI environment loaded successfully"),console.log("Current HDRI intensity:",h.getIntensity()),console.log("Use hdriLoader.setIntensity(value) to adjust HDRI strength (0-2 range)")}catch($){console.error("Failed to load HDRI:",$)}const j=new X0(16777215,1.2);j.position.set(0,100,100),o.add(j),c=new W1(o);try{f=(await AR(x+"assets/Tower.glb")).scene,f.rotation.x=-Math.PI/2,o.add(f),h&&h.updateIntensity(),console.log("Model loaded successfully")}catch($){console.error("Failed to load model:",$)}try{const $=await wR(x+"assets/camera_presets.json");if($.length>0){const D=$[0];a=new Cn(D.fov||60,window.innerWidth/window.innerHeight,D.near||.1,D.far||1e3),a.position.copy(D.position),a.fov=D.fov,a.near=D.near,a.far=D.far,a.updateProjectionMatrix(),a.lookAt(D.lookAtTarget),u=new RR(a,$),c.setSunPosition(d,v),console.log("Camera presets loaded successfully")}}catch($){console.error("Failed to load camera presets:",$),a.position.set(0,100,400),a.lookAt(0,0,0)}q()},X=()=>{w&&cancelAnimationFrame(w),l&&l.dispose(),window.removeEventListener("wheel",se),window.removeEventListener("resize",k)};return xu(async()=>{await Z(),window.addEventListener("wheel",se),window.addEventListener("resize",k)}),yu(()=>{X()}),e({nextPreset:R,prevPreset:z,getCurrentPresetName:M,getCurrentPreset:P,hdriLoader:h}),(j,$)=>(cd(),ud("div",{ref_key:"container",ref:s,class:"w-full h-full"},null,512))}},YR=ev(XR,[["__scopeId","data-v-47ae7796"]]);function xr(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function tv(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var xi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ha={duration:.5,overwrite:!1,delay:0},Pd,Mn,Wt,Pi=1e8,Ut=1/Pi,yh=Math.PI*2,qR=yh/4,KR=0,nv=Math.sqrt,jR=Math.cos,$R=Math.sin,vn=function(e){return typeof e=="string"},Zt=function(e){return typeof e=="function"},Nr=function(e){return typeof e=="number"},Ld=function(e){return typeof e>"u"},rr=function(e){return typeof e=="object"},ei=function(e){return e!==!1},Id=function(){return typeof window<"u"},dc=function(e){return Zt(e)||vn(e)},iv=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Dn=Array.isArray,Sh=/(?:-?\.?\d|\.)+/gi,rv=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Fo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Cf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,sv=/[+-]=-?[.\d]+/,ov=/[^,'"\[\]\s]+/gi,ZR=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,qt,Wi,Mh,Dd,yi={},eu={},av,lv=function(e){return(eu=da(e,yi))&&ri},Ud=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Tl=function(e,t){return!t&&console.warn(e)},cv=function(e,t){return e&&(yi[e]=t)&&eu&&(eu[e]=t)||yi},El=function(){return 0},JR={suppressEvents:!0,isStart:!0,kill:!1},Uc={suppressEvents:!0,kill:!1},QR={suppressEvents:!0},Nd={},cs=[],Th={},uv,ui={},Pf={},Mg=30,Nc=[],Od="",Fd=function(e){var t=e[0],n,r;if(rr(t)||Zt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=Nc.length;r--&&!Nc[r].targetTest(t););n=Nc[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new Uv(e[r],n)))||e.splice(r,1);return e},Ys=function(e){return e._gsap||Fd(Li(e))[0]._gsap},fv=function(e,t,n){return(n=e[t])&&Zt(n)?e[t]():Ld(n)&&e.getAttribute&&e.getAttribute(t)||n},ti=function(e,t){return(e=e.split(",")).forEach(t)||e},en=function(e){return Math.round(e*1e5)/1e5||0},on=function(e){return Math.round(e*1e7)/1e7||0},Ko=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},eC=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},tu=function(){var e=cs.length,t=cs.slice(0),n,r;for(Th={},cs.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Bd=function(e){return!!(e._initted||e._startAt||e.add)},hv=function(e,t,n,r){cs.length&&!Mn&&tu(),e.render(t,n,!!(Mn&&t<0&&Bd(e))),cs.length&&!Mn&&tu()},dv=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(ov).length<2?t:vn(e)?e.trim():e},pv=function(e){return e},Si=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},tC=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},da=function(e,t){for(var n in t)e[n]=t[n];return e},Tg=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=rr(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},nu=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},rl=function(e){var t=e.parent||qt,n=e.keyframes?tC(Dn(e.keyframes)):Si;if(ei(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},nC=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},mv=function(e,t,n,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},Cu=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},ps=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},qs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},iC=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Eh=function(e,t,n,r){return e._startAt&&(Mn?e._startAt.revert(Uc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},rC=function i(e){return!e||e._ts&&i(e.parent)},Eg=function(e){return e._repeat?pa(e._tTime,e=e.duration()+e._rDelay)*e:0},pa=function(e,t){var n=Math.floor(e=on(e/t));return e&&n===e?n-1:n},iu=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Pu=function(e){return e._end=on(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ut)||0))},Lu=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=on(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Pu(e),n._dirty||qs(n,e)),e},gv=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=iu(e.rawTime(),t),(!t._dur||Ol(0,t.totalDuration(),n)-t._tTime>Ut)&&t.render(n,!0)),qs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Ut}},$i=function(e,t,n,r){return t.parent&&ps(t),t._start=on((Nr(n)?n:n||e!==qt?Ei(e,n,t):e._time)+t._delay),t._end=on(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),mv(e,t,"_first","_last",e._sort?"_start":0),bh(t)||(e._recent=t),r||gv(e,t),e._ts<0&&Lu(e,e._tTime),e},_v=function(e,t){return(yi.ScrollTrigger||Ud("scrollTrigger",t))&&yi.ScrollTrigger.create(t,e)},vv=function(e,t,n,r,s){if(zd(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Mn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&uv!==pi.frame)return cs.push(e),e._lazy=[s,r],1},sC=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},bh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},oC=function(e,t,n,r){var s=e.ratio,o=t<0||!t&&(!e._start&&sC(e)&&!(!e._initted&&bh(e))||(e._ts<0||e._dp._ts<0)&&!bh(e))?0:1,a=e._rDelay,l=0,c,u,f;if(a&&e._repeat&&(l=Ol(0,e._tDur,t),u=pa(l,a),e._yoyo&&u&1&&(o=1-o),u!==pa(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Mn||r||e._zTime===Ut||!t&&e._zTime){if(!e._initted&&vv(e,t,r,n,l))return;for(f=e._zTime,e._zTime=t||(n?Ut:0),n||(n=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Eh(e,t,n,!0),e._onUpdate&&!n&&vi(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&vi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&ps(e,1),!n&&!Mn&&(vi(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},aC=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},ma=function(e,t,n,r){var s=e._repeat,o=on(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:on(o*(s+1)+e._rDelay*s):o,a>0&&!r&&Lu(e,e._tTime=e._tDur*a),e.parent&&Pu(e),n||qs(e.parent,e),e},bg=function(e){return e instanceof Yn?qs(e):ma(e,e._dur)},lC={_start:0,endTime:El,totalDuration:El},Ei=function i(e,t,n){var r=e.labels,s=e._recent||lC,o=e.duration()>=Pi?s.endTime(!1):e._dur,a,l,c;return vn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Dn(n)?n[0]:n).totalDuration()),a>1?i(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},sl=function(e,t,n){var r=Nr(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ei(l.vars.inherit)&&l.parent;o.immediateRender=ei(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new sn(t[0],o,t[s+1])},ys=function(e,t){return e||e===0?t(e):t},Ol=function(e,t,n){return n<e?e:n>t?t:n},Pn=function(e,t){return!vn(e)||!(t=ZR.exec(e))?"":t[1]},cC=function(e,t,n){return ys(n,function(r){return Ol(e,t,r)})},Ah=[].slice,xv=function(e,t){return e&&rr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&rr(e[0]))&&!e.nodeType&&e!==Wi},uC=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return vn(r)&&!t||xv(r,1)?(s=n).push.apply(s,Li(r)):n.push(r)})||n},Li=function(e,t,n){return Wt&&!t&&Wt.selector?Wt.selector(e):vn(e)&&!n&&(Mh||!ga())?Ah.call((t||Dd).querySelectorAll(e),0):Dn(e)?uC(e,n):xv(e)?Ah.call(e,0):e?[e]:[]},wh=function(e){return e=Li(e)[0]||Tl("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Li(t,n.querySelectorAll?n:n===e?Tl("Invalid scope")||Dd.createElement("div"):e)}},yv=function(e){return e.sort(function(){return .5-Math.random()})},Sv=function(e){if(Zt(e))return e;var t=rr(e)?e:{each:e},n=Ks(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,f=r;return vn(r)?u=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],f=r[1]),function(h,d,v){var g=(v||t).length,p=o[g],m,T,S,x,w,I,R,z,M;if(!p){if(M=t.grid==="auto"?0:(t.grid||[1,Pi])[1],!M){for(R=-Pi;R<(R=v[M++].getBoundingClientRect().left)&&M<g;);M<g&&M--}for(p=o[g]=[],m=l?Math.min(M,g)*u-.5:r%M,T=M===Pi?0:l?g*f/M-.5:r/M|0,R=0,z=Pi,I=0;I<g;I++)S=I%M-m,x=T-(I/M|0),p[I]=w=c?Math.abs(c==="y"?x:S):nv(S*S+x*x),w>R&&(R=w),w<z&&(z=w);r==="random"&&yv(p),p.max=R-z,p.min=z,p.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(M>g?g-1:c?c==="y"?g/M:M:Math.max(M,g/M))||0)*(r==="edges"?-1:1),p.b=g<0?s-g:s,p.u=Pn(t.amount||t.each)||0,n=n&&g<0?Lv(n):n}return g=(p[h]-p.min)/p.max||0,on(p.b+(n?n(g):g)*p.v)+p.u}},Rh=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=on(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(Nr(n)?0:Pn(n))}},Mv=function(e,t){var n=Dn(e),r,s;return!n&&rr(e)&&(r=n=e.radius||Pi,e.values?(e=Li(e.values),(s=!Nr(e[0]))&&(r*=r)):e=Rh(e.increment)),ys(t,n?Zt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Pi,u=0,f=e.length,h,d;f--;)s?(h=e[f].x-a,d=e[f].y-l,h=h*h+d*d):h=Math.abs(e[f]-a),h<c&&(c=h,u=f);return u=!r||c<=r?e[u]:o,s||u===o||Nr(o)?u:u+Pn(o)}:Rh(e))},Tv=function(e,t,n,r){return ys(Dn(e)?!t:n===!0?!!(n=0):!r,function(){return Dn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},fC=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(s,o){return o(s)},r)}},hC=function(e,t){return function(n){return e(parseFloat(n))+(t||Pn(n))}},dC=function(e,t,n){return bv(e,t,0,1,n)},Ev=function(e,t,n){return ys(n,function(r){return e[~~t(r)]})},pC=function i(e,t,n){var r=t-e;return Dn(e)?Ev(e,i(0,e.length),t):ys(n,function(s){return(r+(s-e)%r)%r+e})},mC=function i(e,t,n){var r=t-e,s=r*2;return Dn(e)?Ev(e,i(0,e.length-1),t):ys(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},bl=function(e){for(var t=0,n="",r,s,o,a;~(r=e.indexOf("random(",t));)o=e.indexOf(")",r),a=e.charAt(r+7)==="[",s=e.substr(r+7,o-r-7).match(a?ov:Sh),n+=e.substr(t,r-t)+Tv(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},bv=function(e,t,n,r,s){var o=t-e,a=r-n;return ys(s,function(l){return n+((l-e)/o*a||0)})},gC=function i(e,t,n,r){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=vn(e),a={},l,c,u,f,h;if(n===!0&&(r=1)&&(n=null),o)e={p:e},t={p:t};else if(Dn(e)&&!Dn(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(i(e[c-1],e[c]));f--,s=function(v){v*=f;var g=Math.min(h,~~v);return u[g](v-g)},n=t}else r||(e=da(Dn(e)?[]:{},e));if(!u){for(l in t)kd.call(a,e,l,"get",t[l]);s=function(v){return Vd(v,a)||(o?e.p:e)}}}return ys(n,s)},Ag=function(e,t,n){var r=e.labels,s=Pi,o,a,l;for(o in r)a=r[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},vi=function(e,t,n){var r=e.vars,s=r[t],o=Wt,a=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,n&&cs.length&&tu(),a&&(Wt=a),u=l?s.apply(c,l):s.call(c),Wt=o,u},ka=function(e){return ps(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Mn),e.progress()<1&&vi(e,"onInterrupt"),e},Bo,Av=[],wv=function(e){if(e)if(e=!e.name&&e.default||e,Id()||e.headless){var t=e.name,n=Zt(e),r=t&&!n&&e.init?function(){this._props=[]}:e,s={init:El,render:Vd,add:kd,kill:IC,modifier:LC,rawVars:0},o={targetTest:0,get:0,getSetter:Gd,aliases:{},register:0};if(ga(),e!==r){if(ui[t])return;Si(r,Si(nu(e,s),o)),da(r.prototype,da(s,nu(e,o))),ui[r.prop=t]=r,e.targetTest&&(Nc.push(r),Nd[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}cv(t,r),e.register&&e.register(ri,r,ni)}else Av.push(e)},Dt=255,za={aqua:[0,Dt,Dt],lime:[0,Dt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Dt],navy:[0,0,128],white:[Dt,Dt,Dt],olive:[128,128,0],yellow:[Dt,Dt,0],orange:[Dt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Dt,0,0],pink:[Dt,192,203],cyan:[0,Dt,Dt],transparent:[Dt,Dt,Dt,0]},Lf=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Dt+.5|0},Rv=function(e,t,n){var r=e?Nr(e)?[e>>16,e>>8&Dt,e&Dt]:0:za.black,s,o,a,l,c,u,f,h,d,v;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),za[e])r=za[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Dt,r&Dt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Dt,e&Dt]}else if(e.substr(0,3)==="hsl"){if(r=v=e.match(Sh),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=Lf(l+1/3,s,o),r[1]=Lf(l,s,o),r[2]=Lf(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(rv),n&&r.length<4&&(r[3]=1),r}else r=e.match(Sh)||za.transparent;r=r.map(Number)}return t&&!v&&(s=r[0]/Dt,o=r[1]/Dt,a=r[2]/Dt,f=Math.max(s,o,a),h=Math.min(s,o,a),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===s?(o-a)/d+(o<a?6:0):f===o?(a-s)/d+2:(s-o)/d+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},Cv=function(e){var t=[],n=[],r=-1;return e.split(us).forEach(function(s){var o=s.match(Fo)||[];t.push.apply(t,o),n.push(r+=o.length+1)}),t.c=n,t},wg=function(e,t,n){var r="",s=(e+r).match(us),o=t?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return e;if(s=s.map(function(h){return(h=Rv(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=Cv(e),l=n.c,l.join(r)!==u.c.join(r)))for(c=e.replace(us,"1").split(Fo),f=c.length-1;a<f;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(us),f=c.length-1;a<f;a++)r+=c[a]+s[a];return r+c[f]},us=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in za)i+="|"+e+"\\b";return new RegExp(i+")","gi")}(),_C=/hsl[a]?\(/,Pv=function(e){var t=e.join(" "),n;if(us.lastIndex=0,us.test(t))return n=_C.test(t),e[1]=wg(e[1],n),e[0]=wg(e[0],n,Cv(e[1])),!0},Al,pi=function(){var i=Date.now,e=500,t=33,n=i(),r=n,s=1e3/240,o=s,a=[],l,c,u,f,h,d,v=function g(p){var m=i()-r,T=p===!0,S,x,w,I;if((m>e||m<0)&&(n+=m-t),r+=m,w=r-n,S=w-o,(S>0||T)&&(I=++f.frame,h=w-f.time*1e3,f.time=w=w/1e3,o+=S+(S>=s?4:s-S),x=1),T||(l=c(g)),x)for(d=0;d<a.length;d++)a[d](w,h,I,p)};return f={time:0,frame:0,tick:function(){v(!0)},deltaRatio:function(p){return h/(1e3/(p||60))},wake:function(){av&&(!Mh&&Id()&&(Wi=Mh=window,Dd=Wi.document||{},yi.gsap=ri,(Wi.gsapVersions||(Wi.gsapVersions=[])).push(ri.version),lv(eu||Wi.GreenSockGlobals||!Wi.gsap&&Wi||{}),Av.forEach(wv)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(p){return setTimeout(p,o-f.time*1e3+1|0)},Al=1,v(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Al=0,c=El},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),o=f.time*1e3+s},add:function(p,m,T){var S=m?function(x,w,I,R){p(x,w,I,R),f.remove(S)}:p;return f.remove(p),a[T?"unshift":"push"](S),ga(),S},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&d>=m&&d--},_listeners:a},f}(),ga=function(){return!Al&&pi.wake()},yt={},vC=/^[\d.\-M][\d.\-,\s]/,xC=/["']/g,yC=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(xC,"").trim():+c,r=l.substr(a+1).trim();return t},SC=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},MC=function(e){var t=(e+"").split("("),n=yt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[yC(t[1])]:SC(e).split(",").map(dv)):yt._CE&&vC.test(e)?yt._CE("",e):n},Lv=function(e){return function(t){return 1-e(1-t)}},Iv=function i(e,t){for(var n=e._first,r;n;)n instanceof Yn?i(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?i(n.timeline,t):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=t)),n=n._next},Ks=function(e,t){return e&&(Zt(e)?e:yt[e]||MC(e))||t},lo=function(e,t,n,r){n===void 0&&(n=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:r},o;return ti(e,function(a){yt[a]=yi[a]=s,yt[o=a.toLowerCase()]=n;for(var l in s)yt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=yt[a+"."+l]=s[l]}),s},Dv=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},If=function i(e,t,n){var r=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/yh*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*$R((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Dv(a);return s=yh/s,l.config=function(c,u){return i(e,c,u)},l},Df=function i(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Dv(n);return r.config=function(s){return i(e,s)},r};ti("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;lo(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});yt.Linear.easeNone=yt.none=yt.Linear.easeIn;lo("Elastic",If("in"),If("out"),If());(function(i,e){var t=1/e,n=2*t,r=2.5*t,s=function(a){return a<t?i*a*a:a<n?i*Math.pow(a-1.5/e,2)+.75:a<r?i*(a-=2.25/e)*a+.9375:i*Math.pow(a-2.625/e,2)+.984375};lo("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);lo("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});lo("Circ",function(i){return-(nv(1-i*i)-1)});lo("Sine",function(i){return i===1?1:-jR(i*qR)+1});lo("Back",Df("in"),Df("out"),Df());yt.SteppedEase=yt.steps=yi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),s=t?1:0,o=1-Ut;return function(a){return((r*Ol(0,o,a)|0)+s)*n}}};ha.ease=yt["quad.out"];ti("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return Od+=i+","+i+"Params,"});var Uv=function(e,t){this.id=KR++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:fv,this.set=t?t.getSetter:Gd},wl=function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ma(this,+t.duration,1,1),this.data=t.data,Wt&&(this._ctx=Wt,Wt.data.push(this)),Al||pi.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ma(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(ga(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Lu(this,n),!s._dp||s.parent||gv(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&$i(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Ut||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),hv(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Eg(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Eg(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?pa(this._tTime,s)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-Ut?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?iu(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ut?0:this._rts,this.totalTime(Ol(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Pu(this),iC(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ga(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ut&&(this._tTime-=Ut)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&$i(r,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(ei(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?iu(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=QR);var r=Mn;return Mn=n,Bd(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Mn=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,bg(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,bg(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(Ei(this,n),ei(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,ei(r)),this._dur||(this._zTime=-Ut),this},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ut:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ut,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-Ut)},e.eventCallback=function(n,r,s){var o=this.vars;return arguments.length>1?(r?(o[n]=r,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete o[n],this):o[n]},e.then=function(n){var r=this;return new Promise(function(s){var o=Zt(n)?n:pv,a=function(){var c=r.then;r.then=null,Zt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=c),s(o),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){ka(this)},i}();Si(wl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ut,_prom:0,_ps:!1,_rts:1});var Yn=function(i){tv(e,i);function e(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=ei(n.sortChildren),qt&&$i(n.parent||qt,xr(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&_v(xr(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return sl(0,arguments,this),this},t.from=function(r,s,o){return sl(1,arguments,this),this},t.fromTo=function(r,s,o,a){return sl(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,rl(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new sn(r,s,Ei(this,o),1),this},t.call=function(r,s,o){return $i(this,sn.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new sn(r,o,Ei(this,l)),this},t.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,rl(o).immediateRender=ei(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},t.staggerFromTo=function(r,s,o,a,l,c,u,f){return a.startAt=o,rl(a).immediateRender=ei(a.immediateRender),this.staggerTo(r,s,a,l,c,u,f)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:on(r),f=this._zTime<0!=r<0&&(this._initted||!c),h,d,v,g,p,m,T,S,x,w,I,R;if(this!==qt&&u>l&&r>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),h=u,x=this._start,S=this._ts,m=!S,f&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(I=this._yoyo,p=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(p*100+r,s,o);if(h=on(u%p),u===l?(g=this._repeat,h=c):(w=on(u/p),g=~~w,g&&g===w&&(h=c,g--),h>c&&(h=c)),w=pa(this._tTime,p),!a&&this._tTime&&w!==g&&this._tTime-w*p-this._dur<=0&&(w=g),I&&g&1&&(h=c-h,R=1),g!==w&&!this._lock){var z=I&&w&1,M=z===(I&&g&1);if(g<w&&(z=!z),a=z?0:u%c?c:u,this._lock=1,this.render(a||(R?0:on(g*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&vi(this,"onRepeat"),this.vars.repeatRefresh&&!R&&(this.invalidate()._lock=1),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,a=z?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!R&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;Iv(this,R)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(T=aC(this,on(a),on(h)),T&&(u-=h-(h=T._start))),this._tTime=u,this._time=h,this._act=!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&u&&!s&&!w&&(vi(this,"onStart"),this._tTime!==u))return this;if(h>=a&&r>=0)for(d=this._first;d;){if(v=d._next,(d._act||h>=d._start)&&d._ts&&T!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,o),h!==this._time||!this._ts&&!m){T=0,v&&(u+=this._zTime=-Ut);break}}d=v}else{d=this._last;for(var P=r<0?r:h;d;){if(v=d._prev,(d._act||P<=d._end)&&d._ts&&T!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(P-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(P-d._start)*d._ts,s,o||Mn&&Bd(d)),h!==this._time||!this._ts&&!m){T=0,v&&(u+=this._zTime=P?-Ut:Ut);break}}d=v}}if(T&&!s&&(this.pause(),T.render(h>=a?0:-Ut)._zTime=h>=a?1:-1,this._ts))return this._start=x,Pu(this),this.render(r,s,o);this._onUpdate&&!s&&vi(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(x===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&ps(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(vi(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(Nr(s)||(s=Ei(this,s,r)),!(r instanceof wl)){if(Dn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(vn(r))return this.addLabel(r,s);if(Zt(r))r=sn.delayedCall(0,r);else return this}return this!==r?$i(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Pi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof sn?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return vn(r)?this.removeLabel(r):Zt(r)?this.killTweensOf(r):(r.parent===this&&Cu(this,r),r===this._recent&&(this._recent=this._last),qs(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=on(pi.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Ei(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=sn.delayedCall(0,s||El,o);return a.data="isPause",this._hasPause=1,$i(this,a,Ei(this,r))},t.removePause=function(r){var s=this._first;for(r=Ei(this,r);s;)s._start===r&&s.data==="isPause"&&ps(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)es!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Li(r),l=this._first,c=Nr(s),u;l;)l instanceof sn?eC(l._targets,a)&&(c?(!es||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Ei(o,r),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,v=sn.to(o,Si({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Ut,onStart:function(){if(o.pause(),!d){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());v._dur!==p&&ma(v,p,0,1).render(v._time,!0,!0),d=1}u&&u.apply(v,f||[])}},s));return h?v.render(0):v},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Si({startAt:{time:Ei(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Ag(this,Ei(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Ag(this,Ei(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Ut)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return qs(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),qs(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Pi,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,$i(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;ma(o,o===qt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(qt._ts&&(hv(qt,iu(r,qt)),uv=pi.frame),pi.frame>=Mg){Mg+=xi.autoSleep||120;var s=qt._first;if((!s||!s._ts)&&xi.autoSleep&&pi._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||pi.sleep()}}},e}(wl);Si(Yn.prototype,{_lock:0,_hasPause:0,_forcing:0});var TC=function(e,t,n,r,s,o,a){var l=new ni(this._pt,e,t,0,1,zv,null,s),c=0,u=0,f,h,d,v,g,p,m,T;for(l.b=n,l.e=r,n+="",r+="",(m=~r.indexOf("random("))&&(r=bl(r)),o&&(T=[n,r],o(T,e,t),n=T[0],r=T[1]),h=n.match(Cf)||[];f=Cf.exec(r);)v=f[0],g=r.substring(c,f.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),v!==h[u++]&&(p=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:p,c:v.charAt(1)==="="?Ko(p,v)-p:parseFloat(v)-p,m:d&&d<4?Math.round:0},c=Cf.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(sv.test(r)||m)&&(l.e=0),this._pt=l,l},kd=function(e,t,n,r,s,o,a,l,c,u){Zt(r)&&(r=r(s||0,e,o));var f=e[t],h=n!=="get"?n:Zt(f)?c?e[t.indexOf("set")||!Zt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,d=Zt(f)?c?RC:Bv:Hd,v;if(vn(r)&&(~r.indexOf("random(")&&(r=bl(r)),r.charAt(1)==="="&&(v=Ko(h,r)+(Pn(h)||0),(v||v===0)&&(r=v))),!u||h!==r||Ch)return!isNaN(h*r)&&r!==""?(v=new ni(this._pt,e,t,+h||0,r-(h||0),typeof f=="boolean"?PC:kv,0,d),c&&(v.fp=c),a&&v.modifier(a,this,e),this._pt=v):(!f&&!(t in e)&&Ud(t,r),TC.call(this,e,t,h,r,d,l||xi.stringFilter,c))},EC=function(e,t,n,r,s){if(Zt(e)&&(e=ol(e,s,t,n,r)),!rr(e)||e.style&&e.nodeType||Dn(e)||iv(e))return vn(e)?ol(e,s,t,n,r):e;var o={},a;for(a in e)o[a]=ol(e[a],s,t,n,r);return o},Nv=function(e,t,n,r,s,o){var a,l,c,u;if(ui[e]&&(a=new ui[e]).init(s,a.rawVars?t[e]:EC(t[e],r,s,o,n),n,r,o)!==!1&&(n._pt=l=new ni(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==Bo))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},es,Ch,zd=function i(e,t,n){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,f=r.yoyoEase,h=r.keyframes,d=r.autoRevert,v=e._dur,g=e._startAt,p=e._targets,m=e.parent,T=m&&m.data==="nested"?m.vars.targets:p,S=e._overwrite==="auto"&&!Pd,x=e.timeline,w,I,R,z,M,P,Q,W,se,k,q,Z,X;if(x&&(!h||!s)&&(s="none"),e._ease=Ks(s,ha.ease),e._yEase=f?Lv(Ks(f===!0?s:f,ha.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!x&&!!r.runBackwards,!x||h&&!r.stagger){if(W=p[0]?Ys(p[0]).harness:0,Z=W&&r[W.prop],w=nu(r,Nd),g&&(g._zTime<0&&g.progress(1),t<0&&u&&a&&!d?g.render(-1,!0):g.revert(u&&v?Uc:JR),g._lazy=0),o){if(ps(e._startAt=sn.set(p,Si({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&ei(l),startAt:null,delay:0,onUpdate:c&&function(){return vi(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Mn||!a&&!d)&&e._startAt.revert(Uc),a&&v&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&v&&!g){if(t&&(a=!1),R=Si({overwrite:!1,data:"isFromStart",lazy:a&&!g&&ei(l),immediateRender:a,stagger:0,parent:m},w),Z&&(R[W.prop]=Z),ps(e._startAt=sn.set(p,R)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Mn?e._startAt.revert(Uc):e._startAt.render(-1,!0)),e._zTime=t,!a)i(e._startAt,Ut,Ut);else if(!t)return}for(e._pt=e._ptCache=0,l=v&&ei(l)||l&&!v,I=0;I<p.length;I++){if(M=p[I],Q=M._gsap||Fd(p)[I]._gsap,e._ptLookup[I]=k={},Th[Q.id]&&cs.length&&tu(),q=T===p?I:T.indexOf(M),W&&(se=new W).init(M,Z||w,e,q,T)!==!1&&(e._pt=z=new ni(e._pt,M,se.name,0,1,se.render,se,0,se.priority),se._props.forEach(function(j){k[j]=z}),se.priority&&(P=1)),!W||Z)for(R in w)ui[R]&&(se=Nv(R,w,e,q,M,T))?se.priority&&(P=1):k[R]=z=kd.call(e,M,R,"get",w[R],q,T,0,r.stringFilter);e._op&&e._op[I]&&e.kill(M,e._op[I]),S&&e._pt&&(es=e,qt.killTweensOf(M,k,e.globalTime(t)),X=!e.parent,es=0),e._pt&&l&&(Th[Q.id]=1)}P&&Hv(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!X,h&&t<=0&&x.render(Pi,!0,!0)},bC=function(e,t,n,r,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,h,d;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,d=e._targets.length;d--;){if(u=h[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Ch=1,e.vars[t]="+=0",zd(e,a),Ch=0,l?Tl(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)f=c[d],u=f._pt||f,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=n-u.s,f.e&&(f.e=en(n)+Pn(f.e)),f.b&&(f.b=u.s+Pn(f.b))},AC=function(e,t){var n=e[0]?Ys(e[0]).harness:0,r=n&&n.aliases,s,o,a,l;if(!r)return t;s=da({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},wC=function(e,t,n,r){var s=t.ease||r||"power1.inOut",o,a;if(Dn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},ol=function(e,t,n,r,s){return Zt(e)?e.call(t,n,r,s):vn(e)&&~e.indexOf("random(")?bl(e):e},Ov=Od+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Fv={};ti(Ov+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return Fv[i]=1});var sn=function(i){tv(e,i);function e(n,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=i.call(this,o?r:rl(r))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,v=l.keyframes,g=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,T=r.parent||qt,S=(Dn(n)||iv(n)?Nr(n[0]):"length"in r)?[n]:Li(n),x,w,I,R,z,M,P,Q;if(a._targets=S.length?Fd(S):Tl("GSAP target "+n+" not found. https://gsap.com",!xi.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,v||h||dc(c)||dc(u)){if(r=a.vars,x=a.timeline=new Yn({data:"nested",defaults:g||{},targets:T&&T.data==="nested"?T.vars.targets:S}),x.kill(),x.parent=x._dp=xr(a),x._start=0,h||dc(c)||dc(u)){if(R=S.length,P=h&&Sv(h),rr(h))for(z in h)~Ov.indexOf(z)&&(Q||(Q={}),Q[z]=h[z]);for(w=0;w<R;w++)I=nu(r,Fv),I.stagger=0,m&&(I.yoyoEase=m),Q&&da(I,Q),M=S[w],I.duration=+ol(c,xr(a),w,M,S),I.delay=(+ol(u,xr(a),w,M,S)||0)-a._delay,!h&&R===1&&I.delay&&(a._delay=u=I.delay,a._start+=u,I.delay=0),x.to(M,I,P?P(w,M,S):0),x._ease=yt.none;x.duration()?c=u=0:a.timeline=0}else if(v){rl(Si(x.vars.defaults,{ease:"none"})),x._ease=Ks(v.ease||r.ease||"none");var W=0,se,k,q;if(Dn(v))v.forEach(function(Z){return x.to(S,Z,">")}),x.duration();else{I={};for(z in v)z==="ease"||z==="easeEach"||wC(z,v[z],I,v.easeEach);for(z in I)for(se=I[z].sort(function(Z,X){return Z.t-X.t}),W=0,w=0;w<se.length;w++)k=se[w],q={ease:k.e,duration:(k.t-(w?se[w-1].t:0))/100*c},q[z]=k.v,x.to(S,q,W),W+=q.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||a.duration(c=x.duration())}else a.timeline=0;return d===!0&&!Pd&&(es=xr(a),qt.killTweensOf(S),es=0),$i(T,xr(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!c&&!v&&a._start===on(T._time)&&ei(f)&&rC(xr(a))&&T.data!=="nested")&&(a._tTime=-Ut,a.render(Math.max(0,-u)||0)),p&&_v(xr(a),p),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,f=r>l-Ut&&!u?l:r<Ut?0:r,h,d,v,g,p,m,T,S,x;if(!c)oC(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=f,S=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+r,s,o);if(h=on(f%g),f===l?(v=this._repeat,h=c):(p=on(f/g),v=~~p,v&&v===p?(h=c,v--):h>c&&(h=c)),m=this._yoyo&&v&1,m&&(x=this._yEase,h=c-h),p=pa(this._tTime,g),h===a&&!o&&this._initted&&v===p)return this._tTime=f,this;v!==p&&(S&&this._yEase&&Iv(S,m),this.vars.repeatRefresh&&!m&&!this._lock&&h!==g&&this._initted&&(this._lock=o=1,this.render(on(g*v),!0).invalidate()._lock=0))}if(!this._initted){if(vv(this,u?r:h,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&v!==p))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=T=(x||this._ease)(h/c),this._from&&(this.ratio=T=1-T),!a&&f&&!s&&!p&&(vi(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(T,d.d),d=d._next;S&&S.render(r<0?r:S._dur*S._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&Eh(this,r,s,o),vi(this,"onUpdate")),this._repeat&&v!==p&&this.vars.onRepeat&&!s&&this.parent&&vi(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&Eh(this,r,!0,!0),(r||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&ps(this,1),!s&&!(u&&!a)&&(f||a||m)&&(vi(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){Al||pi.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||zd(this,c),u=this._ease(c/this._dur),bC(this,r,s,o,a,u,c,l)?this.resetTo(r,s,o,a,1):(Lu(this,0),this.parent||mv(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ka(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Mn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,es&&es.vars.overwrite!==!0)._first||ka(this),this.parent&&o!==this.timeline.totalDuration()&&ma(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Li(r):a,c=this._ptLookup,u=this._pt,f,h,d,v,g,p,m;if((!s||s==="all")&&nC(a,l))return s==="all"&&(this._pt=0),ka(this);for(f=this._op=this._op||[],s!=="all"&&(vn(s)&&(g={},ti(s,function(T){return g[T]=1}),s=g),s=AC(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){h=c[m],s==="all"?(f[m]=s,v=h,d={}):(d=f[m]=f[m]||{},v=s);for(g in v)p=h&&h[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&Cu(this,p,"_pt"),delete h[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&u&&ka(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return sl(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return sl(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return qt.killTweensOf(r,s,o)},e}(wl);Si(sn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ti("staggerTo,staggerFrom,staggerFromTo",function(i){sn[i]=function(){var e=new Yn,t=Ah.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var Hd=function(e,t,n){return e[t]=n},Bv=function(e,t,n){return e[t](n)},RC=function(e,t,n,r){return e[t](r.fp,n)},CC=function(e,t,n){return e.setAttribute(t,n)},Gd=function(e,t){return Zt(e[t])?Bv:Ld(e[t])&&e.setAttribute?CC:Hd},kv=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},PC=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},zv=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},Vd=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},LC=function(e,t,n,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,n),s=o},IC=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Cu(this,t,"_pt"):t.dep||(n=1),t=r;return!n},DC=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},Hv=function(e){for(var t=e._pt,n,r,s,o;t;){for(n=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=n}e._pt=s},ni=function(){function i(t,n,r,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=r,this.r=a||kv,this.d=l||this,this.set=c||Hd,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=DC,this.m=n,this.mt=s,this.tween=r},i}();ti(Od+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return Nd[i]=1});yi.TweenMax=yi.TweenLite=sn;yi.TimelineLite=yi.TimelineMax=Yn;qt=new Yn({sortChildren:!1,defaults:ha,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});xi.stringFilter=Pv;var js=[],Oc={},UC=[],Rg=0,NC=0,Uf=function(e){return(Oc[e]||UC).map(function(t){return t()})},Ph=function(){var e=Date.now(),t=[];e-Rg>2&&(Uf("matchMediaInit"),js.forEach(function(n){var r=n.queries,s=n.conditions,o,a,l,c;for(a in r)o=Wi.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Uf("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),Rg=e,Uf("matchMedia"))},Gv=function(){function i(t,n){this.selector=n&&wh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=NC++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,s){Zt(n)&&(s=r,r=n,n=Zt);var o=this,a=function(){var c=Wt,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=wh(s)),Wt=o,f=r.apply(o,arguments),Zt(f)&&o._r.push(f),Wt=c,o.selector=u,o.isReverted=!1,f};return o.last=a,n===Zt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var r=Wt;Wt=null,n(this),Wt=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof sn&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Yn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof sn)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=js.length;o--;)js[o].id===this.id&&js.splice(o,1)},e.revert=function(n){this.kill(n||{})},i}(),OC=function(){function i(t){this.contexts=[],this.scope=t,Wt&&Wt.data.push(this)}var e=i.prototype;return e.add=function(n,r,s){rr(n)||(n={matches:n});var o=new Gv(0,s||this.scope),a=o.conditions={},l,c,u;Wt&&!o.selector&&(o.selector=Wt.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=n;for(c in n)c==="all"?u=1:(l=Wi.matchMedia(n[c]),l&&(js.indexOf(o)<0&&js.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Ph):l.addEventListener("change",Ph)));return u&&r(o,function(f){return o.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i}(),ru={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return wv(r)})},timeline:function(e){return new Yn(e)},getTweensOf:function(e,t){return qt.getTweensOf(e,t)},getProperty:function(e,t,n,r){vn(e)&&(e=Li(e)[0]);var s=Ys(e||{}).get,o=n?pv:dv;return n==="native"&&(n=""),e&&(t?o((ui[t]&&ui[t].get||s)(e,t,n,r)):function(a,l,c){return o((ui[a]&&ui[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=Li(e),e.length>1){var r=e.map(function(u){return ri.quickSetter(u,t,n)}),s=r.length;return function(u){for(var f=s;f--;)r[f](u)}}e=e[0]||{};var o=ui[t],a=Ys(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var f=new o;Bo._pt=0,f.init(e,n?u+n:u,Bo,0,[e]),f.render(1,f),Bo._pt&&Vd(1,Bo)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var r,s=ri.to(e,Si((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return qt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ks(e.ease,ha.ease)),Tg(ha,e||{})},config:function(e){return Tg(xi,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!ui[a]&&!yi[a]&&Tl(t+" effect requires "+a+" plugin.")}),Pf[t]=function(a,l,c){return n(Li(a),Si(l||{},s),c)},o&&(Yn.prototype[t]=function(a,l,c){return this.add(Pf[t](a,rr(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){yt[e]=Ks(t)},parseEase:function(e,t){return arguments.length?Ks(e,t):yt},getById:function(e){return qt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Yn(e),r,s;for(n.smoothChildTiming=ei(e.smoothChildTiming),qt.remove(n),n._dp=0,n._time=n._tTime=qt._time,r=qt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof sn&&r.vars.onComplete===r._targets[0]))&&$i(n,r,r._start-r._delay),r=s;return $i(qt,n,0),n},context:function(e,t){return e?new Gv(e,t):Wt},matchMedia:function(e){return new OC(e)},matchMediaRefresh:function(){return js.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||Ph()},addEventListener:function(e,t){var n=Oc[e]||(Oc[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Oc[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:pC,wrapYoyo:mC,distribute:Sv,random:Tv,snap:Mv,normalize:dC,getUnit:Pn,clamp:cC,splitColor:Rv,toArray:Li,selector:wh,mapRange:bv,pipe:fC,unitize:hC,interpolate:gC,shuffle:yv},install:lv,effects:Pf,ticker:pi,updateRoot:Yn.updateRoot,plugins:ui,globalTimeline:qt,core:{PropTween:ni,globals:cv,Tween:sn,Timeline:Yn,Animation:wl,getCache:Ys,_removeLinkedListItem:Cu,reverting:function(){return Mn},context:function(e){return e&&Wt&&(Wt.data.push(e),e._ctx=Wt),Wt},suppressOverwrites:function(e){return Pd=e}}};ti("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return ru[i]=sn[i]});pi.add(Yn.updateRoot);Bo=ru.to({},{duration:0});var FC=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},BC=function(e,t){var n=e._targets,r,s,o;for(r in t)for(s=n.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=FC(o,r)),o&&o.modifier&&o.modifier(t[r],e,n[s],r))},Nf=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(vn(s)&&(l={},ti(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}BC(a,s)}}}},ri=ru.registerPlugin({name:"attr",init:function(e,t,n,r,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Mn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Nf("roundProps",Rh),Nf("modifiers"),Nf("snap",Mv))||ru;sn.version=Yn.version=ri.version="3.13.0";av=1;Id()&&ga();yt.Power0;yt.Power1;yt.Power2;yt.Power3;yt.Power4;yt.Linear;yt.Quad;yt.Cubic;yt.Quart;yt.Quint;yt.Strong;yt.Elastic;yt.Back;yt.SteppedEase;yt.Bounce;yt.Sine;yt.Expo;yt.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Cg,ts,jo,Wd,zs,Pg,Xd,kC=function(){return typeof window<"u"},Or={},Us=180/Math.PI,$o=Math.PI/180,Co=Math.atan2,Lg=1e8,Yd=/([A-Z])/g,zC=/(left|right|width|margin|padding|x)/i,HC=/[\s,\(]\S/,Ji={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Lh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},GC=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},VC=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},WC=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Vv=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Wv=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},XC=function(e,t,n){return e.style[t]=n},YC=function(e,t,n){return e.style.setProperty(t,n)},qC=function(e,t,n){return e._gsap[t]=n},KC=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},jC=function(e,t,n,r,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},$C=function(e,t,n,r,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Kt="transform",ii=Kt+"Origin",ZC=function i(e,t){var n=this,r=this.target,s=r.style,o=r._gsap;if(e in Or&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Ji[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Sr(r,a)}):this.tfm[e]=o.x?o[e]:Sr(r,e),e===ii&&(this.tfm.zOrigin=o.zOrigin);else return Ji.transform.split(",").forEach(function(a){return i.call(n,a,t)});if(this.props.indexOf(Kt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(ii,t,"")),e=Kt}(s||t)&&this.props.push(e,t,s[e])},Xv=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},JC=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Yd,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Xd(),(!s||!s.isStart)&&!n[Kt]&&(Xv(n),r.zOrigin&&n[ii]&&(n[ii]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Yv=function(e,t){var n={target:e,props:[],revert:JC,save:ZC};return e._gsap||ri.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return n.save(r)}),n},qv,Ih=function(e,t){var n=ts.createElementNS?ts.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ts.createElement(e);return n&&n.style?n:ts.createElement(e)},Ii=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Yd,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,_a(t)||t,1)||""},Ig="O,Moz,ms,Ms,Webkit".split(","),_a=function(e,t,n){var r=t||zs,s=r.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Ig[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Ig[o]:"")+e},Dh=function(){kC()&&window.document&&(Cg=window,ts=Cg.document,jo=ts.documentElement,zs=Ih("div")||{style:{}},Ih("div"),Kt=_a(Kt),ii=Kt+"Origin",zs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",qv=!!_a("perspective"),Xd=ri.core.reverting,Wd=1)},Dg=function(e){var t=e.ownerSVGElement,n=Ih("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",n.appendChild(r),jo.appendChild(n);try{s=r.getBBox()}catch{}return n.removeChild(r),jo.removeChild(n),s},Ug=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Kv=function(e){var t,n;try{t=e.getBBox()}catch{t=Dg(e),n=1}return t&&(t.width||t.height)||n||(t=Dg(e)),t&&!t.width&&!t.x&&!t.y?{x:+Ug(e,["x","cx","x1"])||0,y:+Ug(e,["y","cy","y1"])||0,width:0,height:0}:t},jv=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Kv(e))},no=function(e,t){if(t){var n=e.style,r;t in Or&&t!==ii&&(t=Kt),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(Yd,"-$1").toLowerCase())):n.removeAttribute(t)}},ns=function(e,t,n,r,s,o){var a=new ni(e._pt,t,n,0,1,o?Wv:Vv);return e._pt=a,a.b=r,a.e=s,e._props.push(n),a},Ng={deg:1,rad:1,turn:1},QC={grid:1,flex:1},ms=function i(e,t,n,r){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=zs.style,l=zC.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=r==="px",d=r==="%",v,g,p,m;if(r===o||!s||Ng[r]||Ng[o])return s;if(o!=="px"&&!h&&(s=i(e,t,n,"px")),m=e.getCTM&&jv(e),(d||o==="%")&&(Or[t]||~t.indexOf("adius")))return v=m?e.getBBox()[l?"width":"height"]:e[u],en(d?s/v*f:s/100*v);if(a[l?"width":"height"]=f+(h?o:r),g=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===ts||!g.appendChild)&&(g=ts.body),p=g._gsap,p&&d&&p.width&&l&&p.time===pi.time&&!p.uncache)return en(s/p.width*f);if(d&&(t==="height"||t==="width")){var T=e.style[t];e.style[t]=f+r,v=e[u],T?e.style[t]=T:no(e,t)}else(d||o==="%")&&!QC[Ii(g,"display")]&&(a.position=Ii(e,"position")),g===e&&(a.position="static"),g.appendChild(zs),v=zs[u],g.removeChild(zs),a.position="absolute";return l&&d&&(p=Ys(g),p.time=pi.time,p.width=g[u]),en(h?v*s/f:v&&s?f/v*s:0)},Sr=function(e,t,n,r){var s;return Wd||Dh(),t in Ji&&t!=="transform"&&(t=Ji[t],~t.indexOf(",")&&(t=t.split(",")[0])),Or[t]&&t!=="transform"?(s=Cl(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:ou(Ii(e,ii))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=su[t]&&su[t](e,t,n)||Ii(e,t)||fv(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?ms(e,t,s,n)+n:s},eP=function(e,t,n,r){if(!n||n==="none"){var s=_a(t,e,1),o=s&&Ii(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Ii(e,"borderTopColor"))}var a=new ni(this._pt,e.style,t,0,1,zv),l=0,c=0,u,f,h,d,v,g,p,m,T,S,x,w;if(a.b=n,a.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=Ii(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(g=e.style[t],e.style[t]=r,r=Ii(e,t)||r,g?e.style[t]=g:no(e,t)),u=[n,r],Pv(u),n=u[0],r=u[1],h=n.match(Fo)||[],w=r.match(Fo)||[],w.length){for(;f=Fo.exec(r);)p=f[0],T=r.substring(l,f.index),v?v=(v+1)%5:(T.substr(-5)==="rgba("||T.substr(-5)==="hsla(")&&(v=1),p!==(g=h[c++]||"")&&(d=parseFloat(g)||0,x=g.substr((d+"").length),p.charAt(1)==="="&&(p=Ko(d,p)+x),m=parseFloat(p),S=p.substr((m+"").length),l=Fo.lastIndex-S.length,S||(S=S||xi.units[t]||x,l===r.length&&(r+=S,a.e+=S)),x!==S&&(d=ms(e,t,g,S)||0),a._pt={_next:a._pt,p:T||c===1?T:",",s:d,c:m-d,m:v&&v<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?Wv:Vv;return sv.test(r)&&(a.e=0),this._pt=a,a},Og={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},tP=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=Og[n]||n,t[1]=Og[r]||r,t.join(" ")},nP=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Or[a]&&(l=1,a=a==="transformOrigin"?ii:Kt),no(n,a);l&&(no(n,Kt),o&&(o.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Cl(n,1),o.uncache=1,Xv(r)))}},su={clearProps:function(e,t,n,r,s){if(s.data!=="isFromStart"){var o=e._pt=new ni(e._pt,t,n,0,0,nP);return o.u=r,o.pr=-10,o.tween=s,e._props.push(n),1}}},Rl=[1,0,0,1,0,0],$v={},Zv=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Fg=function(e){var t=Ii(e,Kt);return Zv(t)?Rl:t.substr(7).match(rv).map(en)},qd=function(e,t){var n=e._gsap||Ys(e),r=e.style,s=Fg(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Rl:s):(s===Rl&&!e.offsetParent&&e!==jo&&!n.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,jo.appendChild(e)),s=Fg(e),l?r.display=l:no(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):jo.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Uh=function(e,t,n,r,s,o){var a=e._gsap,l=s||qd(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,d=l[0],v=l[1],g=l[2],p=l[3],m=l[4],T=l[5],S=t.split(" "),x=parseFloat(S[0])||0,w=parseFloat(S[1])||0,I,R,z,M;n?l!==Rl&&(R=d*p-v*g)&&(z=x*(p/R)+w*(-g/R)+(g*T-p*m)/R,M=x*(-v/R)+w*(d/R)-(d*T-v*m)/R,x=z,w=M):(I=Kv(e),x=I.x+(~S[0].indexOf("%")?x/100*I.width:x),w=I.y+(~(S[1]||S[0]).indexOf("%")?w/100*I.height:w)),r||r!==!1&&a.smooth?(m=x-c,T=w-u,a.xOffset=f+(m*d+T*g)-m,a.yOffset=h+(m*v+T*p)-T):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=w,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!n,e.style[ii]="0px 0px",o&&(ns(o,a,"xOrigin",c,x),ns(o,a,"yOrigin",u,w),ns(o,a,"xOffset",f,a.xOffset),ns(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",x+" "+w)},Cl=function(e,t){var n=e._gsap||new Uv(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Ii(e,ii)||"0",u,f,h,d,v,g,p,m,T,S,x,w,I,R,z,M,P,Q,W,se,k,q,Z,X,j,$,D,G,J,Te,ye,Ee;return u=f=h=g=p=m=T=S=x=0,d=v=1,n.svg=!!(e.getCTM&&jv(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Kt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Kt]!=="none"?l[Kt]:"")),r.scale=r.rotate=r.translate="none"),R=qd(e,n.svg),n.svg&&(n.uncache?(j=e.getBBox(),c=n.xOrigin-j.x+"px "+(n.yOrigin-j.y)+"px",X=""):X=!t&&e.getAttribute("data-svg-origin"),Uh(e,X||c,!!X||n.originIsAbsolute,n.smooth!==!1,R)),w=n.xOrigin||0,I=n.yOrigin||0,R!==Rl&&(Q=R[0],W=R[1],se=R[2],k=R[3],u=q=R[4],f=Z=R[5],R.length===6?(d=Math.sqrt(Q*Q+W*W),v=Math.sqrt(k*k+se*se),g=Q||W?Co(W,Q)*Us:0,T=se||k?Co(se,k)*Us+g:0,T&&(v*=Math.abs(Math.cos(T*$o))),n.svg&&(u-=w-(w*Q+I*se),f-=I-(w*W+I*k))):(Ee=R[6],Te=R[7],D=R[8],G=R[9],J=R[10],ye=R[11],u=R[12],f=R[13],h=R[14],z=Co(Ee,J),p=z*Us,z&&(M=Math.cos(-z),P=Math.sin(-z),X=q*M+D*P,j=Z*M+G*P,$=Ee*M+J*P,D=q*-P+D*M,G=Z*-P+G*M,J=Ee*-P+J*M,ye=Te*-P+ye*M,q=X,Z=j,Ee=$),z=Co(-se,J),m=z*Us,z&&(M=Math.cos(-z),P=Math.sin(-z),X=Q*M-D*P,j=W*M-G*P,$=se*M-J*P,ye=k*P+ye*M,Q=X,W=j,se=$),z=Co(W,Q),g=z*Us,z&&(M=Math.cos(z),P=Math.sin(z),X=Q*M+W*P,j=q*M+Z*P,W=W*M-Q*P,Z=Z*M-q*P,Q=X,q=j),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,m=180-m),d=en(Math.sqrt(Q*Q+W*W+se*se)),v=en(Math.sqrt(Z*Z+Ee*Ee)),z=Co(q,Z),T=Math.abs(z)>2e-4?z*Us:0,x=ye?1/(ye<0?-ye:ye):0),n.svg&&(X=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Zv(Ii(e,Kt)),X&&e.setAttribute("transform",X))),Math.abs(T)>90&&Math.abs(T)<270&&(s?(d*=-1,T+=g<=0?180:-180,g+=g<=0?180:-180):(v*=-1,T+=T<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=h+o,n.scaleX=en(d),n.scaleY=en(v),n.rotation=en(g)+a,n.rotationX=en(p)+a,n.rotationY=en(m)+a,n.skewX=T+a,n.skewY=S+a,n.transformPerspective=x+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(r[ii]=ou(c)),n.xOffset=n.yOffset=0,n.force3D=xi.force3D,n.renderTransform=n.svg?rP:qv?Jv:iP,n.uncache=0,n},ou=function(e){return(e=e.split(" "))[0]+" "+e[1]},Of=function(e,t,n){var r=Pn(t);return en(parseFloat(t)+parseFloat(ms(e,"x",n+"px",r)))+r},iP=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Jv(e,t)},Cs="0deg",Ua="0px",Ps=") ",Jv=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,d=n.skewY,v=n.scaleX,g=n.scaleY,p=n.transformPerspective,m=n.force3D,T=n.target,S=n.zOrigin,x="",w=m==="auto"&&e&&e!==1||m===!0;if(S&&(f!==Cs||u!==Cs)){var I=parseFloat(u)*$o,R=Math.sin(I),z=Math.cos(I),M;I=parseFloat(f)*$o,M=Math.cos(I),o=Of(T,o,R*M*-S),a=Of(T,a,-Math.sin(I)*-S),l=Of(T,l,z*M*-S+S)}p!==Ua&&(x+="perspective("+p+Ps),(r||s)&&(x+="translate("+r+"%, "+s+"%) "),(w||o!==Ua||a!==Ua||l!==Ua)&&(x+=l!==Ua||w?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Ps),c!==Cs&&(x+="rotate("+c+Ps),u!==Cs&&(x+="rotateY("+u+Ps),f!==Cs&&(x+="rotateX("+f+Ps),(h!==Cs||d!==Cs)&&(x+="skew("+h+", "+d+Ps),(v!==1||g!==1)&&(x+="scale("+v+", "+g+Ps),T.style[Kt]=x||"translate(0, 0)"},rP=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,d=n.target,v=n.xOrigin,g=n.yOrigin,p=n.xOffset,m=n.yOffset,T=n.forceCSS,S=parseFloat(o),x=parseFloat(a),w,I,R,z,M;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=$o,c*=$o,w=Math.cos(l)*f,I=Math.sin(l)*f,R=Math.sin(l-c)*-h,z=Math.cos(l-c)*h,c&&(u*=$o,M=Math.tan(c-u),M=Math.sqrt(1+M*M),R*=M,z*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),w*=M,I*=M)),w=en(w),I=en(I),R=en(R),z=en(z)):(w=f,z=h,I=R=0),(S&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(S=ms(d,"x",o,"px"),x=ms(d,"y",a,"px")),(v||g||p||m)&&(S=en(S+v-(v*w+g*R)+p),x=en(x+g-(v*I+g*z)+m)),(r||s)&&(M=d.getBBox(),S=en(S+r/100*M.width),x=en(x+s/100*M.height)),M="matrix("+w+","+I+","+R+","+z+","+S+","+x+")",d.setAttribute("transform",M),T&&(d.style[Kt]=M)},sP=function(e,t,n,r,s){var o=360,a=vn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Us:1),c=l-r,u=r+c+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*Lg)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*Lg)%o-~~(c/o)*o)),e._pt=h=new ni(e._pt,t,n,r,c,GC),h.e=u,h.u="deg",e._props.push(n),h},Bg=function(e,t){for(var n in t)e[n]=t[n];return e},oP=function(e,t,n){var r=Bg({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,f,h,d,v;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Kt]=t,a=Cl(n,1),no(n,Kt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Kt],o[Kt]=t,a=Cl(n,1),o[Kt]=c);for(l in Or)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=Pn(c),v=Pn(u),f=d!==v?ms(n,l,c,v):parseFloat(c),h=parseFloat(u),e._pt=new ni(e._pt,a,l,f,h-f,Lh),e._pt.u=v||0,e._props.push(l));Bg(a,r)};ti("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",s="Left",o=(e<3?[t,n,r,s]:[t+s,t+n,r+n,r+s]).map(function(a){return e<2?i+a:"border"+a+i});su[e>1?"border"+i:i]=function(a,l,c,u,f){var h,d;if(arguments.length<4)return h=o.map(function(v){return Sr(a,v,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},o.forEach(function(v,g){return d[v]=h[g]=h[g]||h[(g-1)/2|0]}),a.init(l,d,f)}});var Qv={name:"css",register:Dh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,f,h,d,v,g,p,m,T,S,x,w,I,R,z;Wd||Dh(),this.styles=this.styles||Yv(e),z=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(ui[g]&&Nv(g,t,n,r,e,s)))){if(d=typeof u,v=su[g],d==="function"&&(u=u.call(n,r,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=bl(u)),v)v(this,e,g,u,n)&&(R=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",us.lastIndex=0,us.test(c)||(p=Pn(c),m=Pn(u)),m?p!==m&&(c=ms(e,g,c,m)+m):p&&(u+=p),this.add(a,"setProperty",c,u,r,s,0,0,g),o.push(g),z.push(g,0,a[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,r,e,s):l[g],vn(c)&&~c.indexOf("random(")&&(c=bl(c)),Pn(c+"")||c==="auto"||(c+=xi.units[g]||Pn(Sr(e,g))||""),(c+"").charAt(1)==="="&&(c=Sr(e,g))):c=Sr(e,g),h=parseFloat(c),T=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),T&&(u=u.substr(2)),f=parseFloat(u),g in Ji&&(g==="autoAlpha"&&(h===1&&Sr(e,"visibility")==="hidden"&&f&&(h=0),z.push("visibility",0,a.visibility),ns(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),g!=="scale"&&g!=="transform"&&(g=Ji[g],~g.indexOf(",")&&(g=g.split(",")[0]))),S=g in Or,S){if(this.styles.save(g),d==="string"&&u.substring(0,6)==="var(--"&&(u=Ii(e,u.substring(4,u.indexOf(")"))),f=parseFloat(u)),x||(w=e._gsap,w.renderTransform&&!t.parseTransform||Cl(e,t.parseTransform),I=t.smoothOrigin!==!1&&w.smooth,x=this._pt=new ni(this._pt,a,Kt,0,1,w.renderTransform,w,0,-1),x.dep=1),g==="scale")this._pt=new ni(this._pt,w,"scaleY",w.scaleY,(T?Ko(w.scaleY,T+f):f)-w.scaleY||0,Lh),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){z.push(ii,0,a[ii]),u=tP(u),w.svg?Uh(e,u,0,I,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==w.zOrigin&&ns(this,w,"zOrigin",w.zOrigin,m),ns(this,a,g,ou(c),ou(u)));continue}else if(g==="svgOrigin"){Uh(e,u,1,I,0,this);continue}else if(g in $v){sP(this,w,g,h,T?Ko(h,T+u):u);continue}else if(g==="smoothOrigin"){ns(this,w,"smooth",w.smooth,u);continue}else if(g==="force3D"){w[g]=u;continue}else if(g==="transform"){oP(this,u,e);continue}}else g in a||(g=_a(g)||g);if(S||(f||f===0)&&(h||h===0)&&!HC.test(u)&&g in a)p=(c+"").substr((h+"").length),f||(f=0),m=Pn(u)||(g in xi.units?xi.units[g]:p),p!==m&&(h=ms(e,g,c,m)),this._pt=new ni(this._pt,S?w:a,g,h,(T?Ko(h,T+f):f)-h,!S&&(m==="px"||g==="zIndex")&&t.autoRound!==!1?WC:Lh),this._pt.u=m||0,p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=VC);else if(g in a)eP.call(this,e,g,c,T?T+u:u);else if(g in e)this.add(e,g,c||e[g],T?T+u:u,r,s);else if(g!=="parseTransform"){Ud(g,u);continue}S||(g in a?z.push(g,0,a[g]):typeof e[g]=="function"?z.push(g,2,e[g]()):z.push(g,1,c||e[g])),o.push(g)}}R&&Hv(this)},render:function(e,t){if(t.tween._time||!Xd())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Sr,aliases:Ji,getSetter:function(e,t,n){var r=Ji[t];return r&&r.indexOf(",")<0&&(t=r),t in Or&&t!==ii&&(e._gsap.x||Sr(e,"x"))?n&&Pg===n?t==="scale"?KC:qC:(Pg=n||{})&&(t==="scale"?jC:$C):e.style&&!Ld(e.style[t])?XC:~t.indexOf("-")?YC:Gd(e,t)},core:{_removeProperty:no,_getMatrix:qd}};ri.utils.checkPrefix=_a;ri.core.getStyleSaver=Yv;(function(i,e,t,n){var r=ti(i+","+e+","+t,function(s){Or[s]=1});ti(e,function(s){xi.units[s]="deg",$v[s]=1}),Ji[r[13]]=i+","+e,ti(n,function(s){var o=s.split(":");Ji[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ti("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){xi.units[i]="px"});ri.registerPlugin(Qv);var Yr=ri.registerPlugin(Qv)||ri;Yr.core.Tween;function aP(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}function lP(i,e,t){return e&&aP(i.prototype,e),i}/*!
 * Observer 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var yn,Fc,mi,is,rs,Zo,ex,Ns,al,tx,wr,Fi,nx,ix=function(){return yn||typeof window<"u"&&(yn=window.gsap)&&yn.registerPlugin&&yn},rx=1,ko=[],dt=[],nr=[],ll=Date.now,Nh=function(e,t){return t},cP=function(){var e=al.core,t=e.bridge||{},n=e._scrollers,r=e._proxies;n.push.apply(n,dt),r.push.apply(r,nr),dt=n,nr=r,Nh=function(o,a){return t[o](a)}},fs=function(e,t){return~nr.indexOf(e)&&nr[nr.indexOf(e)+1][t]},cl=function(e){return!!~tx.indexOf(e)},Fn=function(e,t,n,r,s){return e.addEventListener(t,n,{passive:r!==!1,capture:!!s})},Nn=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},pc="scrollLeft",mc="scrollTop",Oh=function(){return wr&&wr.isPressed||dt.cache++},au=function(e,t){var n=function r(s){if(s||s===0){rx&&(mi.history.scrollRestoration="manual");var o=wr&&wr.isPressed;s=r.v=Math.round(s)||(wr&&wr.iOS?1:0),e(s),r.cacheID=dt.cache,o&&Nh("ss",s)}else(t||dt.cache!==r.cacheID||Nh("ref"))&&(r.cacheID=dt.cache,r.v=e());return r.v+r.offset};return n.offset=0,e&&n},qn={s:pc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:au(function(i){return arguments.length?mi.scrollTo(i,ln.sc()):mi.pageXOffset||is[pc]||rs[pc]||Zo[pc]||0})},ln={s:mc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:qn,sc:au(function(i){return arguments.length?mi.scrollTo(qn.sc(),i):mi.pageYOffset||is[mc]||rs[mc]||Zo[mc]||0})},Jn=function(e,t){return(t&&t._ctx&&t._ctx.selector||yn.utils.toArray)(e)[0]||(typeof e=="string"&&yn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},uP=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},gs=function(e,t){var n=t.s,r=t.sc;cl(e)&&(e=is.scrollingElement||rs);var s=dt.indexOf(e),o=r===ln.sc?1:2;!~s&&(s=dt.push(e)-1),dt[s+o]||Fn(e,"scroll",Oh);var a=dt[s+o],l=a||(dt[s+o]=au(fs(e,n),!0)||(cl(e)?r:au(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=yn.getProperty(e,"scrollBehavior")==="smooth"),l},Fh=function(e,t,n){var r=e,s=e,o=ll(),a=o,l=t||50,c=Math.max(500,l*3),u=function(v,g){var p=ll();g||p-o>l?(s=r,r=v,a=o,o=p):n?r+=v:r=s+(v-s)/(p-a)*(o-a)},f=function(){s=r=n?0:r,a=o=0},h=function(v){var g=a,p=s,m=ll();return(v||v===0)&&v!==r&&u(v),o===a||m-a>c?0:(r+(n?p:-p))/((n?m:o)-g)*1e3};return{update:u,reset:f,getVelocity:h}},Na=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},kg=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},sx=function(){al=yn.core.globals().ScrollTrigger,al&&al.core&&cP()},ox=function(e){return yn=e||ix(),!Fc&&yn&&typeof document<"u"&&document.body&&(mi=window,is=document,rs=is.documentElement,Zo=is.body,tx=[mi,is,rs,Zo],yn.utils.clamp,nx=yn.core.context||function(){},Ns="onpointerenter"in Zo?"pointer":"mouse",ex=tn.isTouch=mi.matchMedia&&mi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in mi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Fi=tn.eventTypes=("ontouchstart"in rs?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in rs?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return rx=0},500),sx(),Fc=1),Fc};qn.op=ln;dt.cache=0;var tn=function(){function i(t){this.init(t)}var e=i.prototype;return e.init=function(n){Fc||ox(yn)||console.warn("Please gsap.registerPlugin(Observer)"),al||sx();var r=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,f=n.onStop,h=n.onStopDelay,d=n.ignore,v=n.wheelSpeed,g=n.event,p=n.onDragStart,m=n.onDragEnd,T=n.onDrag,S=n.onPress,x=n.onRelease,w=n.onRight,I=n.onLeft,R=n.onUp,z=n.onDown,M=n.onChangeX,P=n.onChangeY,Q=n.onChange,W=n.onToggleX,se=n.onToggleY,k=n.onHover,q=n.onHoverEnd,Z=n.onMove,X=n.ignoreCheck,j=n.isNormalizer,$=n.onGestureStart,D=n.onGestureEnd,G=n.onWheel,J=n.onEnable,Te=n.onDisable,ye=n.onClick,Ee=n.scrollSpeed,Me=n.capture,Ie=n.allowClicks,Ue=n.lockAxis,Je=n.onLockAxis;this.target=a=Jn(a)||rs,this.vars=n,d&&(d=yn.utils.toArray(d)),r=r||1e-9,s=s||0,v=v||1,Ee=Ee||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(mi.getComputedStyle(Zo).lineHeight)||22);var Tt,$e,E,B,V,ie,ee,F=this,de=0,ue=0,ge=n.passive||!u&&n.passive!==!1,le=gs(a,qn),Re=gs(a,ln),C=le(),A=Re(),H=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Fi[0]==="pointerdown",ce=cl(a),oe=a.ownerDocument||is,fe=[0,0,0],be=[0,0,0],ve=0,Ae=function(){return ve=ll()},Pe=function(qe,tt){return(F.event=qe)&&d&&uP(qe.target,d)||tt&&H&&qe.pointerType!=="touch"||X&&X(qe,tt)},nt=function(){F._vx.reset(),F._vy.reset(),$e.pause(),f&&f(F)},_e=function(){var qe=F.deltaX=kg(fe),tt=F.deltaY=kg(be),De=Math.abs(qe)>=r,it=Math.abs(tt)>=r;Q&&(De||it)&&Q(F,qe,tt,fe,be),De&&(w&&F.deltaX>0&&w(F),I&&F.deltaX<0&&I(F),M&&M(F),W&&F.deltaX<0!=de<0&&W(F),de=F.deltaX,fe[0]=fe[1]=fe[2]=0),it&&(z&&F.deltaY>0&&z(F),R&&F.deltaY<0&&R(F),P&&P(F),se&&F.deltaY<0!=ue<0&&se(F),ue=F.deltaY,be[0]=be[1]=be[2]=0),(B||E)&&(Z&&Z(F),E&&(p&&E===1&&p(F),T&&T(F),E=0),B=!1),ie&&!(ie=!1)&&Je&&Je(F),V&&(G(F),V=!1),Tt=0},Qe=function(qe,tt,De){fe[De]+=qe,be[De]+=tt,F._vx.update(qe),F._vy.update(tt),c?Tt||(Tt=requestAnimationFrame(_e)):_e()},Ge=function(qe,tt){Ue&&!ee&&(F.axis=ee=Math.abs(qe)>Math.abs(tt)?"x":"y",ie=!0),ee!=="y"&&(fe[2]+=qe,F._vx.update(qe,!0)),ee!=="x"&&(be[2]+=tt,F._vy.update(tt,!0)),c?Tt||(Tt=requestAnimationFrame(_e)):_e()},Be=function(qe){if(!Pe(qe,1)){qe=Na(qe,u);var tt=qe.clientX,De=qe.clientY,it=tt-F.x,je=De-F.y,et=F.isDragging;F.x=tt,F.y=De,(et||(it||je)&&(Math.abs(F.startX-tt)>=s||Math.abs(F.startY-De)>=s))&&(E=et?2:1,et||(F.isDragging=!0),Ge(it,je))}},Oe=F.onPress=function(ke){Pe(ke,1)||ke&&ke.button||(F.axis=ee=null,$e.pause(),F.isPressed=!0,ke=Na(ke),de=ue=0,F.startX=F.x=ke.clientX,F.startY=F.y=ke.clientY,F._vx.reset(),F._vy.reset(),Fn(j?a:oe,Fi[1],Be,ge,!0),F.deltaX=F.deltaY=0,S&&S(F))},O=F.onRelease=function(ke){if(!Pe(ke,1)){Nn(j?a:oe,Fi[1],Be,!0);var qe=!isNaN(F.y-F.startY),tt=F.isDragging,De=tt&&(Math.abs(F.x-F.startX)>3||Math.abs(F.y-F.startY)>3),it=Na(ke);!De&&qe&&(F._vx.reset(),F._vy.reset(),u&&Ie&&yn.delayedCall(.08,function(){if(ll()-ve>300&&!ke.defaultPrevented){if(ke.target.click)ke.target.click();else if(oe.createEvent){var je=oe.createEvent("MouseEvents");je.initMouseEvent("click",!0,!0,mi,1,it.screenX,it.screenY,it.clientX,it.clientY,!1,!1,!1,!1,0,null),ke.target.dispatchEvent(je)}}})),F.isDragging=F.isGesturing=F.isPressed=!1,f&&tt&&!j&&$e.restart(!0),E&&_e(),m&&tt&&m(F),x&&x(F,De)}},te=function(qe){return qe.touches&&qe.touches.length>1&&(F.isGesturing=!0)&&$(qe,F.isDragging)},Se=function(){return(F.isGesturing=!1)||D(F)},Le=function(qe){if(!Pe(qe)){var tt=le(),De=Re();Qe((tt-C)*Ee,(De-A)*Ee,1),C=tt,A=De,f&&$e.restart(!0)}},we=function(qe){if(!Pe(qe)){qe=Na(qe,u),G&&(V=!0);var tt=(qe.deltaMode===1?l:qe.deltaMode===2?mi.innerHeight:1)*v;Qe(qe.deltaX*tt,qe.deltaY*tt,0),f&&!j&&$e.restart(!0)}},xe=function(qe){if(!Pe(qe)){var tt=qe.clientX,De=qe.clientY,it=tt-F.x,je=De-F.y;F.x=tt,F.y=De,B=!0,f&&$e.restart(!0),(it||je)&&Ge(it,je)}},Ye=function(qe){F.event=qe,k(F)},Ze=function(qe){F.event=qe,q(F)},Xt=function(qe){return Pe(qe)||Na(qe,u)&&ye(F)};$e=F._dc=yn.delayedCall(h||.25,nt).pause(),F.deltaX=F.deltaY=0,F._vx=Fh(0,50,!0),F._vy=Fh(0,50,!0),F.scrollX=le,F.scrollY=Re,F.isDragging=F.isGesturing=F.isPressed=!1,nx(this),F.enable=function(ke){return F.isEnabled||(Fn(ce?oe:a,"scroll",Oh),o.indexOf("scroll")>=0&&Fn(ce?oe:a,"scroll",Le,ge,Me),o.indexOf("wheel")>=0&&Fn(a,"wheel",we,ge,Me),(o.indexOf("touch")>=0&&ex||o.indexOf("pointer")>=0)&&(Fn(a,Fi[0],Oe,ge,Me),Fn(oe,Fi[2],O),Fn(oe,Fi[3],O),Ie&&Fn(a,"click",Ae,!0,!0),ye&&Fn(a,"click",Xt),$&&Fn(oe,"gesturestart",te),D&&Fn(oe,"gestureend",Se),k&&Fn(a,Ns+"enter",Ye),q&&Fn(a,Ns+"leave",Ze),Z&&Fn(a,Ns+"move",xe)),F.isEnabled=!0,F.isDragging=F.isGesturing=F.isPressed=B=E=!1,F._vx.reset(),F._vy.reset(),C=le(),A=Re(),ke&&ke.type&&Oe(ke),J&&J(F)),F},F.disable=function(){F.isEnabled&&(ko.filter(function(ke){return ke!==F&&cl(ke.target)}).length||Nn(ce?oe:a,"scroll",Oh),F.isPressed&&(F._vx.reset(),F._vy.reset(),Nn(j?a:oe,Fi[1],Be,!0)),Nn(ce?oe:a,"scroll",Le,Me),Nn(a,"wheel",we,Me),Nn(a,Fi[0],Oe,Me),Nn(oe,Fi[2],O),Nn(oe,Fi[3],O),Nn(a,"click",Ae,!0),Nn(a,"click",Xt),Nn(oe,"gesturestart",te),Nn(oe,"gestureend",Se),Nn(a,Ns+"enter",Ye),Nn(a,Ns+"leave",Ze),Nn(a,Ns+"move",xe),F.isEnabled=F.isPressed=F.isDragging=!1,Te&&Te(F))},F.kill=F.revert=function(){F.disable();var ke=ko.indexOf(F);ke>=0&&ko.splice(ke,1),wr===F&&(wr=0)},ko.push(F),j&&cl(a)&&(wr=F),F.enable(g)},lP(i,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),i}();tn.version="3.13.0";tn.create=function(i){return new tn(i)};tn.register=ox;tn.getAll=function(){return ko.slice()};tn.getById=function(i){return ko.filter(function(e){return e.vars.id===i})[0]};ix()&&yn.registerPlugin(tn);/*!
 * ScrollTrigger 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Xe,Uo,ft,Ft,fi,At,Kd,lu,Pl,ul,Ha,gc,An,Iu,Bh,zn,zg,Hg,No,ax,Ff,lx,kn,kh,cx,ux,qr,zh,jd,Jo,$d,cu,Hh,Bf,_c=1,wn=Date.now,kf=wn(),Di=0,Ga=0,Gg=function(e,t,n){var r=ci(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},Vg=function(e,t){return t&&(!ci(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},fP=function i(){return Ga&&requestAnimationFrame(i)},Wg=function(){return Iu=1},Xg=function(){return Iu=0},Xi=function(e){return e},Va=function(e){return Math.round(e*1e5)/1e5||0},fx=function(){return typeof window<"u"},hx=function(){return Xe||fx()&&(Xe=window.gsap)&&Xe.registerPlugin&&Xe},io=function(e){return!!~Kd.indexOf(e)},dx=function(e){return(e==="Height"?$d:ft["inner"+e])||fi["client"+e]||At["client"+e]},px=function(e){return fs(e,"getBoundingClientRect")||(io(e)?function(){return Gc.width=ft.innerWidth,Gc.height=$d,Gc}:function(){return Er(e)})},hP=function(e,t,n){var r=n.d,s=n.d2,o=n.a;return(o=fs(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?dx(s):e["client"+s])||0}},dP=function(e,t){return!t||~nr.indexOf(e)?px(e):function(){return Gc}},Qi=function(e,t){var n=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+r)&&(o=fs(e,n))?o()-px(e)()[s]:io(e)?(fi[n]||At[n])-dx(r):e[n]-e["offset"+r])},vc=function(e,t){for(var n=0;n<No.length;n+=3)(!t||~t.indexOf(No[n+1]))&&e(No[n],No[n+1],No[n+2])},ci=function(e){return typeof e=="string"},Ln=function(e){return typeof e=="function"},Wa=function(e){return typeof e=="number"},Os=function(e){return typeof e=="object"},Oa=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},zf=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Po=Math.abs,mx="left",gx="top",Zd="right",Jd="bottom",$s="width",Zs="height",fl="Right",hl="Left",dl="Top",pl="Bottom",rn="padding",Ai="margin",va="Width",Qd="Height",an="px",wi=function(e){return ft.getComputedStyle(e)},pP=function(e){var t=wi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Yg=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Er=function(e,t){var n=t&&wi(e)[Bh]!=="matrix(1, 0, 0, 1, 0, 0)"&&Xe.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return n&&n.progress(0).kill(),r},uu=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},_x=function(e){var t=[],n=e.labels,r=e.duration(),s;for(s in n)t.push(n[s]/r);return t},mP=function(e){return function(t){return Xe.utils.snap(_x(e),t)}},ep=function(e){var t=Xe.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return n?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<n.length;a++)if(n[a]>=r)return n[a];return n[a-1]}else for(a=n.length,r+=o;a--;)if(n[a]<=r)return n[a];return n[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},gP=function(e){return function(t,n){return ep(_x(e))(t,n.direction)}},xc=function(e,t,n,r){return n.split(",").forEach(function(s){return e(t,s,r)})},gn=function(e,t,n,r,s){return e.addEventListener(t,n,{passive:!r,capture:!!s})},mn=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},yc=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},qg={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Sc={toggleActions:"play",anticipatePin:0},fu={top:0,left:0,center:.5,bottom:1,right:1},Bc=function(e,t){if(ci(e)){var n=e.indexOf("="),r=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(r*=t/100),e=e.substr(0,n-1)),e=r+(e in fu?fu[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Mc=function(e,t,n,r,s,o,a,l){var c=s.startColor,u=s.endColor,f=s.fontSize,h=s.indent,d=s.fontWeight,v=Ft.createElement("div"),g=io(n)||fs(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,m=g?At:n,T=e.indexOf("start")!==-1,S=T?c:u,x="border-color:"+S+";font-size:"+f+";color:"+S+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((p||l)&&g?"fixed;":"absolute;"),(p||l||!g)&&(x+=(r===ln?Zd:Jd)+":"+(o+parseFloat(h))+"px;"),a&&(x+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),v._isStart=T,v.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),v.style.cssText=x,v.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(v,m.children[0]):m.appendChild(v),v._offset=v["offset"+r.op.d2],kc(v,0,r,T),v},kc=function(e,t,n,r){var s={display:"block"},o=n[r?"os2":"p2"],a=n[r?"p2":"os2"];e._isFlipped=r,s[n.a+"Percent"]=r?-100:0,s[n.a]=r?"1px":0,s["border"+o+va]=1,s["border"+a+va]=0,s[n.p]=t+"px",Xe.set(e,s)},ut=[],Gh={},Ll,Kg=function(){return wn()-Di>34&&(Ll||(Ll=requestAnimationFrame(Pr)))},Lo=function(){(!kn||!kn.isPressed||kn.startX>At.clientWidth)&&(dt.cache++,kn?Ll||(Ll=requestAnimationFrame(Pr)):Pr(),Di||so("scrollStart"),Di=wn())},Hf=function(){ux=ft.innerWidth,cx=ft.innerHeight},Xa=function(e){dt.cache++,(e===!0||!An&&!lx&&!Ft.fullscreenElement&&!Ft.webkitFullscreenElement&&(!kh||ux!==ft.innerWidth||Math.abs(ft.innerHeight-cx)>ft.innerHeight*.25))&&lu.restart(!0)},ro={},_P=[],vx=function i(){return mn(gt,"scrollEnd",i)||Hs(!0)},so=function(e){return ro[e]&&ro[e].map(function(t){return t()})||_P},li=[],xx=function(e){for(var t=0;t<li.length;t+=5)(!e||li[t+4]&&li[t+4].query===e)&&(li[t].style.cssText=li[t+1],li[t].getBBox&&li[t].setAttribute("transform",li[t+2]||""),li[t+3].uncache=1)},tp=function(e,t){var n;for(zn=0;zn<ut.length;zn++)n=ut[zn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));cu=!0,t&&xx(t),t||so("revert")},yx=function(e,t){dt.cache++,(t||!Hn)&&dt.forEach(function(n){return Ln(n)&&n.cacheID++&&(n.rec=0)}),ci(e)&&(ft.history.scrollRestoration=jd=e)},Hn,Js=0,jg,vP=function(){if(jg!==Js){var e=jg=Js;requestAnimationFrame(function(){return e===Js&&Hs(!0)})}},Sx=function(){At.appendChild(Jo),$d=!kn&&Jo.offsetHeight||ft.innerHeight,At.removeChild(Jo)},$g=function(e){return Pl(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Hs=function(e,t){if(fi=Ft.documentElement,At=Ft.body,Kd=[ft,Ft,fi,At],Di&&!e&&!cu){gn(gt,"scrollEnd",vx);return}Sx(),Hn=gt.isRefreshing=!0,dt.forEach(function(r){return Ln(r)&&++r.cacheID&&(r.rec=r())});var n=so("refreshInit");ax&&gt.sort(),t||tp(),dt.forEach(function(r){Ln(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),ut.slice(0).forEach(function(r){return r.refresh()}),cu=!1,ut.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),Hh=1,$g(!0),ut.forEach(function(r){var s=Qi(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),$g(!1),Hh=0,n.forEach(function(r){return r&&r.render&&r.render(-1)}),dt.forEach(function(r){Ln(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),yx(jd,1),lu.pause(),Js++,Hn=2,Pr(2),ut.forEach(function(r){return Ln(r.vars.onRefresh)&&r.vars.onRefresh(r)}),Hn=gt.isRefreshing=!1,so("refresh")},Vh=0,zc=1,ml,Pr=function(e){if(e===2||!Hn&&!cu){gt.isUpdating=!0,ml&&ml.update(0);var t=ut.length,n=wn(),r=n-kf>=50,s=t&&ut[0].scroll();if(zc=Vh>s?-1:1,Hn||(Vh=s),r&&(Di&&!Iu&&n-Di>200&&(Di=0,so("scrollEnd")),Ha=kf,kf=n),zc<0){for(zn=t;zn-- >0;)ut[zn]&&ut[zn].update(0,r);zc=1}else for(zn=0;zn<t;zn++)ut[zn]&&ut[zn].update(0,r);gt.isUpdating=!1}Ll=0},Wh=[mx,gx,Jd,Zd,Ai+pl,Ai+fl,Ai+dl,Ai+hl,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Hc=Wh.concat([$s,Zs,"boxSizing","max"+va,"max"+Qd,"position",Ai,rn,rn+dl,rn+fl,rn+pl,rn+hl]),xP=function(e,t,n){Qo(n);var r=e._gsap;if(r.spacerIsNative)Qo(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Gf=function(e,t,n,r){if(!e._gsap.swappedIn){for(var s=Wh.length,o=t.style,a=e.style,l;s--;)l=Wh[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Jd]=a[Zd]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[$s]=uu(e,qn)+an,o[Zs]=uu(e,ln)+an,o[rn]=a[Ai]=a[gx]=a[mx]="0",Qo(r),a[$s]=a["max"+va]=n[$s],a[Zs]=a["max"+Qd]=n[Zs],a[rn]=n[rn],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},yP=/([A-Z])/g,Qo=function(e){if(e){var t=e.t.style,n=e.length,r=0,s,o;for((e.t._gsap||Xe.core.getCache(e.t)).uncache=1;r<n;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(yP,"-$1").toLowerCase())}},Tc=function(e){for(var t=Hc.length,n=e.style,r=[],s=0;s<t;s++)r.push(Hc[s],n[Hc[s]]);return r.t=e,r},SP=function(e,t,n){for(var r=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},Gc={left:0,top:0},Zg=function(e,t,n,r,s,o,a,l,c,u,f,h,d,v){Ln(e)&&(e=e(l)),ci(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?Bc("0"+e.substr(3),n):0));var g=d?d.time():0,p,m,T;if(d&&d.seek(0),isNaN(e)||(e=+e),Wa(e))d&&(e=Xe.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,h,e)),a&&kc(a,n,r,!0);else{Ln(t)&&(t=t(l));var S=(e||"0").split(" "),x,w,I,R;T=Jn(t,l)||At,x=Er(T)||{},(!x||!x.left&&!x.top)&&wi(T).display==="none"&&(R=T.style.display,T.style.display="block",x=Er(T),R?T.style.display=R:T.style.removeProperty("display")),w=Bc(S[0],x[r.d]),I=Bc(S[1]||"0",n),e=x[r.p]-c[r.p]-u+w+s-I,a&&kc(a,I,r,n-I<20||a._isStart&&I>20),n-=n-I}if(v&&(l[v]=e||-.001,e<0&&(e=0)),o){var z=e+n,M=o._isStart;p="scroll"+r.d2,kc(o,z,r,M&&z>20||!M&&(f?Math.max(At[p],fi[p]):o.parentNode[p])<=z+1),f&&(c=Er(a),f&&(o.style[r.op.p]=c[r.op.p]-r.op.m-o._offset+an))}return d&&T&&(p=Er(T),d.seek(h),m=Er(T),d._caScrollDist=p[r.p]-m[r.p],e=e/d._caScrollDist*h),d&&d.seek(g),d?e:Math.round(e)},MP=/(webkit|moz|length|cssText|inset)/i,Jg=function(e,t,n,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===At){e._stOrig=s.cssText,a=wi(e);for(o in a)!+o&&!MP.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=r}else s.cssText=e._stOrig;Xe.core.getCache(e).uncache=1,t.appendChild(e)}},Mx=function(e,t,n){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=r,r=Math.round(o),r}},Ec=function(e,t,n){var r={};r[t.p]="+="+n,Xe.set(e,r)},Qg=function(e,t){var n=gs(e,t),r="_scroll"+t.p2,s=function o(a,l,c,u,f){var h=o.tween,d=l.onComplete,v={};c=c||n();var g=Mx(n,c,function(){h.kill(),o.tween=0});return f=u&&f||0,u=u||a-c,h&&h.kill(),l[r]=a,l.inherit=!1,l.modifiers=v,v[r]=function(){return g(c+u*h.ratio+f*h.ratio*h.ratio)},l.onUpdate=function(){dt.cache++,o.tween&&Pr()},l.onComplete=function(){o.tween=0,d&&d.call(h)},h=o.tween=Xe.to(e,l),h};return e[r]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},gn(e,"wheel",n.wheelHandler),gt.isTouch&&gn(e,"touchmove",n.wheelHandler),s},gt=function(){function i(t,n){Uo||i.register(Xe)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),zh(this),this.init(t,n)}var e=i.prototype;return e.init=function(n,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ga){this.update=this.refresh=this.kill=Xi;return}n=Yg(ci(n)||Wa(n)||n.nodeType?{trigger:n}:n,Sc);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,h=s.trigger,d=s.pin,v=s.pinSpacing,g=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,T=s.onSnapComplete,S=s.once,x=s.snap,w=s.pinReparent,I=s.pinSpacer,R=s.containerAnimation,z=s.fastScrollEnd,M=s.preventOverlaps,P=n.horizontal||n.containerAnimation&&n.horizontal!==!1?qn:ln,Q=!f&&f!==0,W=Jn(n.scroller||ft),se=Xe.core.getCache(W),k=io(W),q=("pinType"in n?n.pinType:fs(W,"pinType")||k&&"fixed")==="fixed",Z=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],X=Q&&n.toggleActions.split(" "),j="markers"in n?n.markers:Sc.markers,$=k?0:parseFloat(wi(W)["border"+P.p2+va])||0,D=this,G=n.onRefreshInit&&function(){return n.onRefreshInit(D)},J=hP(W,k,P),Te=dP(W,k),ye=0,Ee=0,Me=0,Ie=gs(W,P),Ue,Je,Tt,$e,E,B,V,ie,ee,F,de,ue,ge,le,Re,C,A,H,ce,oe,fe,be,ve,Ae,Pe,nt,_e,Qe,Ge,Be,Oe,O,te,Se,Le,we,xe,Ye,Ze;if(D._startClamp=D._endClamp=!1,D._dir=P,p*=45,D.scroller=W,D.scroll=R?R.time.bind(R):Ie,$e=Ie(),D.vars=n,r=r||n.animation,"refreshPriority"in n&&(ax=1,n.refreshPriority===-9999&&(ml=D)),se.tweenScroll=se.tweenScroll||{top:Qg(W,ln),left:Qg(W,qn)},D.tweenTo=Ue=se.tweenScroll[P.p],D.scrubDuration=function(De){te=Wa(De)&&De,te?O?O.duration(De):O=Xe.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:te,paused:!0,onComplete:function(){return m&&m(D)}}):(O&&O.progress(1).kill(),O=0)},r&&(r.vars.lazy=!1,r._initted&&!D.isReverted||r.vars.immediateRender!==!1&&n.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),D.animation=r.pause(),r.scrollTrigger=D,D.scrubDuration(f),Be=0,l||(l=r.vars.id)),x&&((!Os(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in At.style&&Xe.set(k?[At,fi]:W,{scrollBehavior:"auto"}),dt.forEach(function(De){return Ln(De)&&De.target===(k?Ft.scrollingElement||fi:W)&&(De.smooth=!1)}),Tt=Ln(x.snapTo)?x.snapTo:x.snapTo==="labels"?mP(r):x.snapTo==="labelsDirectional"?gP(r):x.directional!==!1?function(De,it){return ep(x.snapTo)(De,wn()-Ee<500?0:it.direction)}:Xe.utils.snap(x.snapTo),Se=x.duration||{min:.1,max:2},Se=Os(Se)?ul(Se.min,Se.max):ul(Se,Se),Le=Xe.delayedCall(x.delay||te/2||.1,function(){var De=Ie(),it=wn()-Ee<500,je=Ue.tween;if((it||Math.abs(D.getVelocity())<10)&&!je&&!Iu&&ye!==De){var et=(De-B)/le,It=r&&!Q?r.totalProgress():et,rt=it?0:(It-Oe)/(wn()-Ha)*1e3||0,Ke=Xe.utils.clamp(-et,1-et,Po(rt/2)*rt/.185),Qt=et+(x.inertia===!1?0:Ke),Ot,y,_=x,b=_.onStart,L=_.onInterrupt,U=_.onComplete;if(Ot=Tt(Qt,D),Wa(Ot)||(Ot=Qt),y=Math.max(0,Math.round(B+Ot*le)),De<=V&&De>=B&&y!==De){if(je&&!je._initted&&je.data<=Po(y-De))return;x.inertia===!1&&(Ke=Ot-et),Ue(y,{duration:Se(Po(Math.max(Po(Qt-It),Po(Ot-It))*.185/rt/.05||0)),ease:x.ease||"power3",data:Po(y-De),onInterrupt:function(){return Le.restart(!0)&&L&&L(D)},onComplete:function(){D.update(),ye=Ie(),r&&!Q&&(O?O.resetTo("totalProgress",Ot,r._tTime/r._tDur):r.progress(Ot)),Be=Oe=r&&!Q?r.totalProgress():D.progress,T&&T(D),U&&U(D)}},De,Ke*le,y-De-Ke*le),b&&b(D,Ue.tween)}}else D.isActive&&ye!==De&&Le.restart(!0)}).pause()),l&&(Gh[l]=D),h=D.trigger=Jn(h||d!==!0&&d),Ze=h&&h._gsap&&h._gsap.stRevert,Ze&&(Ze=Ze(D)),d=d===!0?h:Jn(d),ci(a)&&(a={targets:h,className:a}),d&&(v===!1||v===Ai||(v=!v&&d.parentNode&&d.parentNode.style&&wi(d.parentNode).display==="flex"?!1:rn),D.pin=d,Je=Xe.core.getCache(d),Je.spacer?Re=Je.pinState:(I&&(I=Jn(I),I&&!I.nodeType&&(I=I.current||I.nativeElement),Je.spacerIsNative=!!I,I&&(Je.spacerState=Tc(I))),Je.spacer=H=I||Ft.createElement("div"),H.classList.add("pin-spacer"),l&&H.classList.add("pin-spacer-"+l),Je.pinState=Re=Tc(d)),n.force3D!==!1&&Xe.set(d,{force3D:!0}),D.spacer=H=Je.spacer,Ge=wi(d),Ae=Ge[v+P.os2],oe=Xe.getProperty(d),fe=Xe.quickSetter(d,P.a,an),Gf(d,H,Ge),A=Tc(d)),j){ue=Os(j)?Yg(j,qg):qg,F=Mc("scroller-start",l,W,P,ue,0),de=Mc("scroller-end",l,W,P,ue,0,F),ce=F["offset"+P.op.d2];var Xt=Jn(fs(W,"content")||W);ie=this.markerStart=Mc("start",l,Xt,P,ue,ce,0,R),ee=this.markerEnd=Mc("end",l,Xt,P,ue,ce,0,R),R&&(Ye=Xe.quickSetter([ie,ee],P.a,an)),!q&&!(nr.length&&fs(W,"fixedMarkers")===!0)&&(pP(k?At:W),Xe.set([F,de],{force3D:!0}),nt=Xe.quickSetter(F,P.a,an),Qe=Xe.quickSetter(de,P.a,an))}if(R){var ke=R.vars.onUpdate,qe=R.vars.onUpdateParams;R.eventCallback("onUpdate",function(){D.update(0,0,1),ke&&ke.apply(R,qe||[])})}if(D.previous=function(){return ut[ut.indexOf(D)-1]},D.next=function(){return ut[ut.indexOf(D)+1]},D.revert=function(De,it){if(!it)return D.kill(!0);var je=De!==!1||!D.enabled,et=An;je!==D.isReverted&&(je&&(we=Math.max(Ie(),D.scroll.rec||0),Me=D.progress,xe=r&&r.progress()),ie&&[ie,ee,F,de].forEach(function(It){return It.style.display=je?"none":"block"}),je&&(An=D,D.update(je)),d&&(!w||!D.isActive)&&(je?xP(d,H,Re):Gf(d,H,wi(d),Pe)),je||D.update(je),An=et,D.isReverted=je)},D.refresh=function(De,it,je,et){if(!((An||!D.enabled)&&!it)){if(d&&De&&Di){gn(i,"scrollEnd",vx);return}!Hn&&G&&G(D),An=D,Ue.tween&&!je&&(Ue.tween.kill(),Ue.tween=0),O&&O.pause(),g&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren&&r.getChildren(!0,!0,!1).forEach(function(st){return st.vars.immediateRender&&st.render(0,!0,!0)})),D.isReverted||D.revert(!0,!0),D._subPinOffset=!1;var It=J(),rt=Te(),Ke=R?R.duration():Qi(W,P),Qt=le<=.01||!le,Ot=0,y=et||0,_=Os(je)?je.end:n.end,b=n.endTrigger||h,L=Os(je)?je.start:n.start||(n.start===0||!h?0:d?"0 0":"0 100%"),U=D.pinnedContainer=n.pinnedContainer&&Jn(n.pinnedContainer,D),N=h&&Math.max(0,ut.indexOf(D))||0,K=N,ne,ae,re,he,pe,me,Ce,Ve,Fe,ze,He,We,Et;for(j&&Os(je)&&(We=Xe.getProperty(F,P.p),Et=Xe.getProperty(de,P.p));K-- >0;)me=ut[K],me.end||me.refresh(0,1)||(An=D),Ce=me.pin,Ce&&(Ce===h||Ce===d||Ce===U)&&!me.isReverted&&(ze||(ze=[]),ze.unshift(me),me.revert(!0,!0)),me!==ut[K]&&(N--,K--);for(Ln(L)&&(L=L(D)),L=Gg(L,"start",D),B=Zg(L,h,It,P,Ie(),ie,F,D,rt,$,q,Ke,R,D._startClamp&&"_startClamp")||(d?-.001:0),Ln(_)&&(_=_(D)),ci(_)&&!_.indexOf("+=")&&(~_.indexOf(" ")?_=(ci(L)?L.split(" ")[0]:"")+_:(Ot=Bc(_.substr(2),It),_=ci(L)?L:(R?Xe.utils.mapRange(0,R.duration(),R.scrollTrigger.start,R.scrollTrigger.end,B):B)+Ot,b=h)),_=Gg(_,"end",D),V=Math.max(B,Zg(_||(b?"100% 0":Ke),b,It,P,Ie()+Ot,ee,de,D,rt,$,q,Ke,R,D._endClamp&&"_endClamp"))||-.001,Ot=0,K=N;K--;)me=ut[K],Ce=me.pin,Ce&&me.start-me._pinPush<=B&&!R&&me.end>0&&(ne=me.end-(D._startClamp?Math.max(0,me.start):me.start),(Ce===h&&me.start-me._pinPush<B||Ce===U)&&isNaN(L)&&(Ot+=ne*(1-me.progress)),Ce===d&&(y+=ne));if(B+=Ot,V+=Ot,D._startClamp&&(D._startClamp+=Ot),D._endClamp&&!Hn&&(D._endClamp=V||-.001,V=Math.min(V,Qi(W,P))),le=V-B||(B-=.01)&&.001,Qt&&(Me=Xe.utils.clamp(0,1,Xe.utils.normalize(B,V,we))),D._pinPush=y,ie&&Ot&&(ne={},ne[P.a]="+="+Ot,U&&(ne[P.p]="-="+Ie()),Xe.set([ie,ee],ne)),d&&!(Hh&&D.end>=Qi(W,P)))ne=wi(d),he=P===ln,re=Ie(),be=parseFloat(oe(P.a))+y,!Ke&&V>1&&(He=(k?Ft.scrollingElement||fi:W).style,He={style:He,value:He["overflow"+P.a.toUpperCase()]},k&&wi(At)["overflow"+P.a.toUpperCase()]!=="scroll"&&(He.style["overflow"+P.a.toUpperCase()]="scroll")),Gf(d,H,ne),A=Tc(d),ae=Er(d,!0),Ve=q&&gs(W,he?qn:ln)(),v?(Pe=[v+P.os2,le+y+an],Pe.t=H,K=v===rn?uu(d,P)+le+y:0,K&&(Pe.push(P.d,K+an),H.style.flexBasis!=="auto"&&(H.style.flexBasis=K+an)),Qo(Pe),U&&ut.forEach(function(st){st.pin===U&&st.vars.pinSpacing!==!1&&(st._subPinOffset=!0)}),q&&Ie(we)):(K=uu(d,P),K&&H.style.flexBasis!=="auto"&&(H.style.flexBasis=K+an)),q&&(pe={top:ae.top+(he?re-B:Ve)+an,left:ae.left+(he?Ve:re-B)+an,boxSizing:"border-box",position:"fixed"},pe[$s]=pe["max"+va]=Math.ceil(ae.width)+an,pe[Zs]=pe["max"+Qd]=Math.ceil(ae.height)+an,pe[Ai]=pe[Ai+dl]=pe[Ai+fl]=pe[Ai+pl]=pe[Ai+hl]="0",pe[rn]=ne[rn],pe[rn+dl]=ne[rn+dl],pe[rn+fl]=ne[rn+fl],pe[rn+pl]=ne[rn+pl],pe[rn+hl]=ne[rn+hl],C=SP(Re,pe,w),Hn&&Ie(0)),r?(Fe=r._initted,Ff(1),r.render(r.duration(),!0,!0),ve=oe(P.a)-be+le+y,_e=Math.abs(le-ve)>1,q&&_e&&C.splice(C.length-2,2),r.render(0,!0,!0),Fe||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),Ff(0)):ve=le,He&&(He.value?He.style["overflow"+P.a.toUpperCase()]=He.value:He.style.removeProperty("overflow-"+P.a));else if(h&&Ie()&&!R)for(ae=h.parentNode;ae&&ae!==At;)ae._pinOffset&&(B-=ae._pinOffset,V-=ae._pinOffset),ae=ae.parentNode;ze&&ze.forEach(function(st){return st.revert(!1,!0)}),D.start=B,D.end=V,$e=E=Hn?we:Ie(),!R&&!Hn&&($e<we&&Ie(we),D.scroll.rec=0),D.revert(!1,!0),Ee=wn(),Le&&(ye=-1,Le.restart(!0)),An=0,r&&Q&&(r._initted||xe)&&r.progress()!==xe&&r.progress(xe||0,!0).render(r.time(),!0,!0),(Qt||Me!==D.progress||R||g||r&&!r._initted)&&(r&&!Q&&(r._initted||Me||r.vars.immediateRender!==!1)&&r.totalProgress(R&&B<-.001&&!Me?Xe.utils.normalize(B,V,0):Me,!0),D.progress=Qt||($e-B)/le===Me?0:Me),d&&v&&(H._pinOffset=Math.round(D.progress*ve)),O&&O.invalidate(),isNaN(We)||(We-=Xe.getProperty(F,P.p),Et-=Xe.getProperty(de,P.p),Ec(F,P,We),Ec(ie,P,We-(et||0)),Ec(de,P,Et),Ec(ee,P,Et-(et||0))),Qt&&!Hn&&D.update(),u&&!Hn&&!ge&&(ge=!0,u(D),ge=!1)}},D.getVelocity=function(){return(Ie()-E)/(wn()-Ha)*1e3||0},D.endAnimation=function(){Oa(D.callbackAnimation),r&&(O?O.progress(1):r.paused()?Q||Oa(r,D.direction<0,1):Oa(r,r.reversed()))},D.labelToScroll=function(De){return r&&r.labels&&(B||D.refresh()||B)+r.labels[De]/r.duration()*le||0},D.getTrailing=function(De){var it=ut.indexOf(D),je=D.direction>0?ut.slice(0,it).reverse():ut.slice(it+1);return(ci(De)?je.filter(function(et){return et.vars.preventOverlaps===De}):je).filter(function(et){return D.direction>0?et.end<=B:et.start>=V})},D.update=function(De,it,je){if(!(R&&!je&&!De)){var et=Hn===!0?we:D.scroll(),It=De?0:(et-B)/le,rt=It<0?0:It>1?1:It||0,Ke=D.progress,Qt,Ot,y,_,b,L,U,N;if(it&&(E=$e,$e=R?Ie():et,x&&(Oe=Be,Be=r&&!Q?r.totalProgress():rt)),p&&d&&!An&&!_c&&Di&&(!rt&&B<et+(et-E)/(wn()-Ha)*p?rt=1e-4:rt===1&&V>et+(et-E)/(wn()-Ha)*p&&(rt=.9999)),rt!==Ke&&D.enabled){if(Qt=D.isActive=!!rt&&rt<1,Ot=!!Ke&&Ke<1,L=Qt!==Ot,b=L||!!rt!=!!Ke,D.direction=rt>Ke?1:-1,D.progress=rt,b&&!An&&(y=rt&&!Ke?0:rt===1?1:Ke===1?2:3,Q&&(_=!L&&X[y+1]!=="none"&&X[y+1]||X[y],N=r&&(_==="complete"||_==="reset"||_ in r))),M&&(L||N)&&(N||f||!r)&&(Ln(M)?M(D):D.getTrailing(M).forEach(function(re){return re.endAnimation()})),Q||(O&&!An&&!_c?(O._dp._time-O._start!==O._time&&O.render(O._dp._time-O._start),O.resetTo?O.resetTo("totalProgress",rt,r._tTime/r._tDur):(O.vars.totalProgress=rt,O.invalidate().restart())):r&&r.totalProgress(rt,!!(An&&(Ee||De)))),d){if(De&&v&&(H.style[v+P.os2]=Ae),!q)fe(Va(be+ve*rt));else if(b){if(U=!De&&rt>Ke&&V+1>et&&et+1>=Qi(W,P),w)if(!De&&(Qt||U)){var K=Er(d,!0),ne=et-B;Jg(d,At,K.top+(P===ln?ne:0)+an,K.left+(P===ln?0:ne)+an)}else Jg(d,H);Qo(Qt||U?C:A),_e&&rt<1&&Qt||fe(be+(rt===1&&!U?ve:0))}}x&&!Ue.tween&&!An&&!_c&&Le.restart(!0),a&&(L||S&&rt&&(rt<1||!Bf))&&Pl(a.targets).forEach(function(re){return re.classList[Qt||S?"add":"remove"](a.className)}),o&&!Q&&!De&&o(D),b&&!An?(Q&&(N&&(_==="complete"?r.pause().totalProgress(1):_==="reset"?r.restart(!0).pause():_==="restart"?r.restart(!0):r[_]()),o&&o(D)),(L||!Bf)&&(c&&L&&zf(D,c),Z[y]&&zf(D,Z[y]),S&&(rt===1?D.kill(!1,1):Z[y]=0),L||(y=rt===1?1:3,Z[y]&&zf(D,Z[y]))),z&&!Qt&&Math.abs(D.getVelocity())>(Wa(z)?z:2500)&&(Oa(D.callbackAnimation),O?O.progress(1):Oa(r,_==="reverse"?1:!rt,1))):Q&&o&&!An&&o(D)}if(Qe){var ae=R?et/R.duration()*(R._caScrollDist||0):et;nt(ae+(F._isFlipped?1:0)),Qe(ae)}Ye&&Ye(-et/R.duration()*(R._caScrollDist||0))}},D.enable=function(De,it){D.enabled||(D.enabled=!0,gn(W,"resize",Xa),k||gn(W,"scroll",Lo),G&&gn(i,"refreshInit",G),De!==!1&&(D.progress=Me=0,$e=E=ye=Ie()),it!==!1&&D.refresh())},D.getTween=function(De){return De&&Ue?Ue.tween:O},D.setPositions=function(De,it,je,et){if(R){var It=R.scrollTrigger,rt=R.duration(),Ke=It.end-It.start;De=It.start+Ke*De/rt,it=It.start+Ke*it/rt}D.refresh(!1,!1,{start:Vg(De,je&&!!D._startClamp),end:Vg(it,je&&!!D._endClamp)},et),D.update()},D.adjustPinSpacing=function(De){if(Pe&&De){var it=Pe.indexOf(P.d)+1;Pe[it]=parseFloat(Pe[it])+De+an,Pe[1]=parseFloat(Pe[1])+De+an,Qo(Pe)}},D.disable=function(De,it){if(D.enabled&&(De!==!1&&D.revert(!0,!0),D.enabled=D.isActive=!1,it||O&&O.pause(),we=0,Je&&(Je.uncache=1),G&&mn(i,"refreshInit",G),Le&&(Le.pause(),Ue.tween&&Ue.tween.kill()&&(Ue.tween=0)),!k)){for(var je=ut.length;je--;)if(ut[je].scroller===W&&ut[je]!==D)return;mn(W,"resize",Xa),k||mn(W,"scroll",Lo)}},D.kill=function(De,it){D.disable(De,it),O&&!it&&O.kill(),l&&delete Gh[l];var je=ut.indexOf(D);je>=0&&ut.splice(je,1),je===zn&&zc>0&&zn--,je=0,ut.forEach(function(et){return et.scroller===D.scroller&&(je=1)}),je||Hn||(D.scroll.rec=0),r&&(r.scrollTrigger=null,De&&r.revert({kill:!1}),it||r.kill()),ie&&[ie,ee,F,de].forEach(function(et){return et.parentNode&&et.parentNode.removeChild(et)}),ml===D&&(ml=0),d&&(Je&&(Je.uncache=1),je=0,ut.forEach(function(et){return et.pin===d&&je++}),je||(Je.spacer=0)),n.onKill&&n.onKill(D)},ut.push(D),D.enable(!1,!1),Ze&&Ze(D),r&&r.add&&!le){var tt=D.update;D.update=function(){D.update=tt,dt.cache++,B||V||D.refresh()},Xe.delayedCall(.01,D.update),le=.01,B=V=0}else D.refresh();d&&vP()},i.register=function(n){return Uo||(Xe=n||hx(),fx()&&window.document&&i.enable(),Uo=Ga),Uo},i.defaults=function(n){if(n)for(var r in n)Sc[r]=n[r];return Sc},i.disable=function(n,r){Ga=0,ut.forEach(function(o){return o[r?"kill":"disable"](n)}),mn(ft,"wheel",Lo),mn(Ft,"scroll",Lo),clearInterval(gc),mn(Ft,"touchcancel",Xi),mn(At,"touchstart",Xi),xc(mn,Ft,"pointerdown,touchstart,mousedown",Wg),xc(mn,Ft,"pointerup,touchend,mouseup",Xg),lu.kill(),vc(mn);for(var s=0;s<dt.length;s+=3)yc(mn,dt[s],dt[s+1]),yc(mn,dt[s],dt[s+2])},i.enable=function(){if(ft=window,Ft=document,fi=Ft.documentElement,At=Ft.body,Xe&&(Pl=Xe.utils.toArray,ul=Xe.utils.clamp,zh=Xe.core.context||Xi,Ff=Xe.core.suppressOverwrites||Xi,jd=ft.history.scrollRestoration||"auto",Vh=ft.pageYOffset||0,Xe.core.globals("ScrollTrigger",i),At)){Ga=1,Jo=document.createElement("div"),Jo.style.height="100vh",Jo.style.position="absolute",Sx(),fP(),tn.register(Xe),i.isTouch=tn.isTouch,qr=tn.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),kh=tn.isTouch===1,gn(ft,"wheel",Lo),Kd=[ft,Ft,fi,At],Xe.matchMedia?(i.matchMedia=function(c){var u=Xe.matchMedia(),f;for(f in c)u.add(f,c[f]);return u},Xe.addEventListener("matchMediaInit",function(){return tp()}),Xe.addEventListener("matchMediaRevert",function(){return xx()}),Xe.addEventListener("matchMedia",function(){Hs(0,1),so("matchMedia")}),Xe.matchMedia().add("(orientation: portrait)",function(){return Hf(),Hf})):console.warn("Requires GSAP 3.11.0 or later"),Hf(),gn(Ft,"scroll",Lo);var n=At.hasAttribute("style"),r=At.style,s=r.borderTopStyle,o=Xe.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=Er(At),ln.m=Math.round(a.top+ln.sc())||0,qn.m=Math.round(a.left+qn.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),n||(At.setAttribute("style",""),At.removeAttribute("style")),gc=setInterval(Kg,250),Xe.delayedCall(.5,function(){return _c=0}),gn(Ft,"touchcancel",Xi),gn(At,"touchstart",Xi),xc(gn,Ft,"pointerdown,touchstart,mousedown",Wg),xc(gn,Ft,"pointerup,touchend,mouseup",Xg),Bh=Xe.utils.checkPrefix("transform"),Hc.push(Bh),Uo=wn(),lu=Xe.delayedCall(.2,Hs).pause(),No=[Ft,"visibilitychange",function(){var c=ft.innerWidth,u=ft.innerHeight;Ft.hidden?(zg=c,Hg=u):(zg!==c||Hg!==u)&&Xa()},Ft,"DOMContentLoaded",Hs,ft,"load",Hs,ft,"resize",Xa],vc(gn),ut.forEach(function(c){return c.enable(0,1)}),l=0;l<dt.length;l+=3)yc(mn,dt[l],dt[l+1]),yc(mn,dt[l],dt[l+2])}},i.config=function(n){"limitCallbacks"in n&&(Bf=!!n.limitCallbacks);var r=n.syncInterval;r&&clearInterval(gc)||(gc=r)&&setInterval(Kg,r),"ignoreMobileResize"in n&&(kh=i.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(vc(mn)||vc(gn,n.autoRefreshEvents||"none"),lx=(n.autoRefreshEvents+"").indexOf("resize")===-1)},i.scrollerProxy=function(n,r){var s=Jn(n),o=dt.indexOf(s),a=io(s);~o&&dt.splice(o,a?6:2),r&&(a?nr.unshift(ft,r,At,r,fi,r):nr.unshift(s,r))},i.clearMatchMedia=function(n){ut.forEach(function(r){return r._ctx&&r._ctx.query===n&&r._ctx.kill(!0,!0)})},i.isInViewport=function(n,r,s){var o=(ci(n)?Jn(n):n).getBoundingClientRect(),a=o[s?$s:Zs]*r||0;return s?o.right-a>0&&o.left+a<ft.innerWidth:o.bottom-a>0&&o.top+a<ft.innerHeight},i.positionInViewport=function(n,r,s){ci(n)&&(n=Jn(n));var o=n.getBoundingClientRect(),a=o[s?$s:Zs],l=r==null?a/2:r in fu?fu[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/ft.innerWidth:(o.top+l)/ft.innerHeight},i.killAll=function(n){if(ut.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var r=ro.killAll||[];ro={},r.forEach(function(s){return s()})}},i}();gt.version="3.13.0";gt.saveStyles=function(i){return i?Pl(i).forEach(function(e){if(e&&e.style){var t=li.indexOf(e);t>=0&&li.splice(t,5),li.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Xe.core.getCache(e),zh())}}):li};gt.revert=function(i,e){return tp(!i,e)};gt.create=function(i,e){return new gt(i,e)};gt.refresh=function(i){return i?Xa(!0):(Uo||gt.register())&&Hs(!0)};gt.update=function(i){return++dt.cache&&Pr(i===!0?2:0)};gt.clearScrollMemory=yx;gt.maxScroll=function(i,e){return Qi(i,e?qn:ln)};gt.getScrollFunc=function(i,e){return gs(Jn(i),e?qn:ln)};gt.getById=function(i){return Gh[i]};gt.getAll=function(){return ut.filter(function(i){return i.vars.id!=="ScrollSmoother"})};gt.isScrolling=function(){return!!Di};gt.snapDirectional=ep;gt.addEventListener=function(i,e){var t=ro[i]||(ro[i]=[]);~t.indexOf(e)||t.push(e)};gt.removeEventListener=function(i,e){var t=ro[i],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};gt.batch=function(i,e){var t=[],n={},r=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var f=[],h=[],d=Xe.delayedCall(r,function(){u(f,h),f=[],h=[]}).pause();return function(v){f.length||d.restart(!0),f.push(v.trigger),h.push(v),s<=f.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&Ln(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Ln(s)&&(s=s(),gn(gt,"refresh",function(){return s=e.batchMax()})),Pl(i).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(gt.create(c))}),t};var e_=function(e,t,n,r){return t>r?e(r):t<0&&e(0),n>r?(r-t)/(n-t):n<0?t/(t-n):1},Vf=function i(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(tn.isTouch?" pinch-zoom":""):"none",e===fi&&i(At,t)},bc={auto:1,scroll:1},TP=function(e){var t=e.event,n=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Xe.core.getCache(s),a=wn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==At&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(bc[(l=wi(s)).overflowY]||bc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!io(s)&&(bc[(l=wi(s)).overflowY]||bc[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Tx=function(e,t,n,r){return tn.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&TP,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&gn(Ft,tn.eventTypes[0],n_,!1,!0)},onDisable:function(){return mn(Ft,tn.eventTypes[0],n_,!0)}})},EP=/(input|label|select|textarea)/i,t_,n_=function(e){var t=EP.test(e.target.tagName);(t||t_)&&(e._gsapAllow=!0,t_=t)},bP=function(e){Os(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=Jn(e.target)||fi,u=Xe.core.globals().ScrollSmoother,f=u&&u.get(),h=qr&&(e.content&&Jn(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),d=gs(c,ln),v=gs(c,qn),g=1,p=(tn.isTouch&&ft.visualViewport?ft.visualViewport.scale*ft.visualViewport.width:ft.outerWidth)/ft.innerWidth,m=0,T=Ln(r)?function(){return r(a)}:function(){return r||2.8},S,x,w=Tx(c,e.type,!0,s),I=function(){return x=!1},R=Xi,z=Xi,M=function(){l=Qi(c,ln),z=ul(qr?1:0,l),n&&(R=ul(0,Qi(c,qn))),S=Js},P=function(){h._gsap.y=Va(parseFloat(h._gsap.y)+d.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},Q=function(){if(x){requestAnimationFrame(I);var j=Va(a.deltaY/2),$=z(d.v-j);if(h&&$!==d.v+d.offset){d.offset=$-d.v;var D=Va((parseFloat(h&&h._gsap.y)||0)-d.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+D+", 0, 1)",h._gsap.y=D+"px",d.cacheID=dt.cache,Pr()}return!0}d.offset&&P(),x=!0},W,se,k,q,Z=function(){M(),W.isActive()&&W.vars.scrollY>l&&(d()>l?W.progress(1)&&d(l):W.resetTo("scrollY",l))};return h&&Xe.set(h,{y:"+=0"}),e.ignoreCheck=function(X){return qr&&X.type==="touchmove"&&Q()||g>1.05&&X.type!=="touchstart"||a.isGesturing||X.touches&&X.touches.length>1},e.onPress=function(){x=!1;var X=g;g=Va((ft.visualViewport&&ft.visualViewport.scale||1)/p),W.pause(),X!==g&&Vf(c,g>1.01?!0:n?!1:"x"),se=v(),k=d(),M(),S=Js},e.onRelease=e.onGestureStart=function(X,j){if(d.offset&&P(),!j)q.restart(!0);else{dt.cache++;var $=T(),D,G;n&&(D=v(),G=D+$*.05*-X.velocityX/.227,$*=e_(v,D,G,Qi(c,qn)),W.vars.scrollX=R(G)),D=d(),G=D+$*.05*-X.velocityY/.227,$*=e_(d,D,G,Qi(c,ln)),W.vars.scrollY=z(G),W.invalidate().duration($).play(.01),(qr&&W.vars.scrollY>=l||D>=l-1)&&Xe.to({},{onUpdate:Z,duration:$})}o&&o(X)},e.onWheel=function(){W._ts&&W.pause(),wn()-m>1e3&&(S=0,m=wn())},e.onChange=function(X,j,$,D,G){if(Js!==S&&M(),j&&n&&v(R(D[2]===j?se+(X.startX-X.x):v()+j-D[1])),$){d.offset&&P();var J=G[2]===$,Te=J?k+X.startY-X.y:d()+$-G[1],ye=z(Te);J&&Te!==ye&&(k+=ye-Te),d(ye)}($||j)&&Pr()},e.onEnable=function(){Vf(c,n?!1:"x"),gt.addEventListener("refresh",Z),gn(ft,"resize",Z),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=v.smooth=!1),w.enable()},e.onDisable=function(){Vf(c,!0),mn(ft,"resize",Z),gt.removeEventListener("refresh",Z),w.kill()},e.lockAxis=e.lockAxis!==!1,a=new tn(e),a.iOS=qr,qr&&!d()&&d(1),qr&&Xe.ticker.add(Xi),q=a._dc,W=Xe.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Mx(d,d(),function(){return W.pause()})},onUpdate:Pr,onComplete:q.vars.onComplete}),a};gt.sort=function(i){if(Ln(i))return ut.sort(i);var e=ft.pageYOffset||0;return gt.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+ft.innerHeight}),ut.sort(i||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};gt.observe=function(i){return new tn(i)};gt.normalizeScroll=function(i){if(typeof i>"u")return kn;if(i===!0&&kn)return kn.enable();if(i===!1){kn&&kn.kill(),kn=i;return}var e=i instanceof tn?i:bP(i);return kn&&kn.target===e.target&&kn.kill(),io(e.target)&&(kn=e),e};gt.core={_getVelocityProp:Fh,_inputObserver:Tx,_scrollers:dt,_proxies:nr,bridge:{ss:function(){Di||so("scrollStart"),Di=wn()},ref:function(){return An}}};hx()&&Xe.registerPlugin(gt);const AP={class:"ui-overlay flex flex-col items-center pt-8 w-screen h-screen absolute inset-0 z-10 pointer-events-none"},wP=["src"],RP=["src","alt"],CP={ref:"sunControlPanel",class:"sun-control-panel absolute bottom-8 right-8 text-white text-sm bg-black bg-opacity-70 p-4 rounded-lg backdrop-blur-sm pointer-events-auto"},PP={class:"mb-3 flex items-center"},LP={class:"flex items-center cursor-pointer"},IP=["checked"],DP={class:"mb-3"},UP={class:"block mb-1 text-xs"},NP={class:"font-mono"},OP=["value","disabled"],FP={class:"mb-3"},BP={class:"block mb-1 text-xs"},kP={class:"font-mono"},zP=["value","disabled"],HP={class:"mb-3"},GP={class:"block mb-1 text-xs"},VP={class:"font-mono"},WP=["value"],XP={__name:"UILayer",props:{currentPresetName:{type:String,default:""},textCount:{type:Number,default:5},textPrefix:{type:String,default:"Text"},textExt:{type:String,default:".png"},titleSrc:{type:String,default:"Title.png"},fadeDuration:{type:Number,default:600},sunElevation:{type:Number,default:-20},sunAzimuth:{type:Number,default:120},isManualSunControl:{type:Boolean,default:!1},hdriIntensity:{type:Number,default:1}},emits:["next-preset","prev-preset","sun-elevation-change","sun-azimuth-change","sun-control-mode-change","reset-sun-to-preset","hdri-intensity-change"],setup(i,{emit:e}){Yr.registerPlugin(gt);const t=i,n=e,r=Gn(null),s=Gn(null),o=Gn(null),a=Gn(null),l=Gn(0),c=Gn(!1),u=Gn(!1),f=Gn(!1),h="/DW_3dTest/assets/",d=th(()=>h+t.titleSrc),v=th(()=>h+`${t.textPrefix}${String(l.value+1).padStart(2,"0")}${t.textExt}`);let g=null,p=null;const m=()=>{r.value&&(g=Yr.timeline(),Yr.set(r.value,{y:-100,opacity:0,scale:.8,rotationX:-15}),g.to(r.value,{y:0,opacity:1,scale:1,rotationX:0,duration:1.5,ease:"back.out(1.7)",delay:.3}).to(r.value,{y:-5,duration:2,ease:"sine.inOut",yoyo:!0,repeat:-1})),setTimeout(()=>{f.value=!0,a.value&&Yr.fromTo(a.value,{x:50,opacity:0,scale:.9},{x:0,opacity:1,scale:1,duration:1,ease:"elastic.out(1, 0.8)"})},2500)},T=k=>{s.value&&(p&&p.kill(),p=Yr.timeline(),c.value?p.to(s.value,{opacity:0,y:20,duration:.3,ease:"power2.in",onComplete:()=>{l.value=k,wc(()=>{S()})}}):(l.value=k,wc(()=>{S()})))},S=()=>{s.value&&Yr.fromTo(s.value,{opacity:0,y:50,scale:.9,rotationY:15,filter:"blur(10px)"},{opacity:1,y:0,scale:1,rotationY:0,filter:"blur(0px)",duration:.8,ease:"power3.out",onStart:()=>{c.value=!0}})},x=()=>{o.value&&Yr.fromTo(o.value,{x:-30,opacity:0},{x:0,opacity:1,duration:.5,ease:"power2.out"})};Wo(()=>t.currentPresetName,(k,q)=>{if(k&&k!==q){u.value=!0,wc(()=>{x()});const Z=w(k);Z!==-1&&Z!==l.value&&T(Z)}});const w=k=>{const q=k.match(/(\d+)/);if(q){const Z=parseInt(q[1])-1;return Math.max(0,Math.min(Z,t.textCount-1))}return 0},I=()=>{console.log("Title image loaded")},R=()=>{console.log("Text image loaded")},z=k=>{n("sun-control-mode-change",k.target.checked)},M=k=>{n("sun-elevation-change",parseFloat(k.target.value))},P=k=>{n("sun-azimuth-change",parseFloat(k.target.value))},Q=()=>{n("reset-sun-to-preset")},W=k=>{n("hdri-intensity-change",parseFloat(k.target.value))},se=k=>{switch(k.code){case"ArrowRight":case"KeyD":n("next-preset");break;case"ArrowLeft":case"KeyA":n("prev-preset");break}};return xu(()=>{m(),setTimeout(()=>{T(0)},1500),window.addEventListener("keydown",se)}),yu(()=>{g&&g.kill(),p&&p.kill(),window.removeEventListener("keydown",se)}),(k,q)=>(cd(),ud("div",AP,[Vt("img",{src:d.value,alt:"Title",onLoad:I,class:"max-w-[60vw] h-auto"},null,40,wP),Vt("div",{ref_key:"textContainer",ref:s,class:gu(["text-image",{visible:c.value}])},[Vt("img",{src:v.value,alt:`Text ${l.value+1}`,onLoad:R,class:"w-full h-auto"},null,40,RP)],2),Vt("div",CP,[q[4]||(q[4]=Vt("div",{class:"mb-3 font-medium"},"Lighting Control",-1)),Vt("div",PP,[Vt("label",LP,[Vt("input",{type:"checkbox",checked:i.isManualSunControl,onChange:z,class:"mr-2"},null,40,IP),q[0]||(q[0]=Vt("span",null,"Manual Sun Control",-1))])]),Vt("div",DP,[Vt("label",UP,[q[1]||(q[1]=Pc("Sun Elevation: ")),Vt("span",NP,Ac(i.sunElevation.toFixed(1))+"°",1)]),Vt("input",{type:"range",min:"-90",max:"90",step:"0.1",value:i.sunElevation,disabled:!i.isManualSunControl,onInput:M,class:"w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"},null,40,OP)]),Vt("div",FP,[Vt("label",BP,[q[2]||(q[2]=Pc("Sun Azimuth: ")),Vt("span",kP,Ac(i.sunAzimuth.toFixed(1))+"°",1)]),Vt("input",{type:"range",min:"0",max:"360",step:"0.1",value:i.sunAzimuth,disabled:!i.isManualSunControl,onInput:P,class:"w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"},null,40,zP)]),Vt("div",HP,[Vt("label",GP,[q[3]||(q[3]=Pc("Environment Intensity: ")),Vt("span",VP,Ac(i.hdriIntensity.toFixed(2)),1)]),Vt("input",{type:"range",min:"0",max:"3",step:"0.01",value:i.hdriIntensity,onInput:W,class:"w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"},null,40,WP)]),Vt("button",{onClick:Q,class:"w-full px-3 py-1 text-xs bg-gray-700 hover:bg-gray-600 rounded transition-colors"}," Reset to Preset ")],512)]))}},YP=ev(XP,[["__scopeId","data-v-afbd2aca"]]),qP={id:"app",class:"w-screen h-screen relative"},KP={__name:"App",setup(i){const e=Gn(null),t=Gn(""),n=Gn(-20),r=Gn(120),s=Gn(!1),o=Gn(1),a=p=>{o.value=p},l=()=>{e.value&&(e.value.nextPreset(),u(),f())},c=()=>{e.value&&(e.value.prevPreset(),u(),f())},u=()=>{e.value&&(t.value=e.value.getCurrentPresetName())},f=()=>{if(!s.value&&e.value){const p=e.value.getCurrentPreset();p&&p.sunElevation!==void 0&&p.sunAzimuth!==void 0&&(n.value=p.sunElevation,r.value=p.sunAzimuth)}},h=p=>{n.value=p,s.value||(s.value=!0)},d=p=>{r.value=p,s.value||(s.value=!0)},v=p=>{s.value=p,p||f()},g=()=>{if(e.value){const p=e.value.getCurrentPreset();p&&p.sunElevation!==void 0&&p.sunAzimuth!==void 0&&(n.value=p.sunElevation,r.value=p.sunAzimuth)}};return xu(()=>{setTimeout(()=>{u(),f()},1e3)}),(p,m)=>(cd(),ud("div",qP,[Rr(YR,{ref_key:"threeScene",ref:e,"sun-elevation":n.value,"sun-azimuth":r.value,"is-manual-sun-control":s.value,"hdri-intensity":o.value,onPresetChanged:u},null,8,["sun-elevation","sun-azimuth","is-manual-sun-control","hdri-intensity"]),Rr(YP,{"current-preset-name":t.value,"text-count":5,"sun-elevation":n.value,"sun-azimuth":r.value,"is-manual-sun-control":s.value,"hdri-intensity":o.value,onNextPreset:l,onPrevPreset:c,onSunElevationChange:h,onSunAzimuthChange:d,onSunControlModeChange:v,onResetSunToPreset:g,onHdriIntensityChange:a},null,8,["current-preset-name","sun-elevation","sun-azimuth","is-manual-sun-control","hdri-intensity"])]))}};HS(KP).mount("#app");
