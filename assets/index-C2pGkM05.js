(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Yh(i){const e=Object.create(null);for(const t of i.split(","))e[t]=1;return t=>t in e}const kt={},Go=[],tr=()=>{},bx=()=>!1,du=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&(i.charCodeAt(2)>122||i.charCodeAt(2)<97),qh=i=>i.startsWith("onUpdate:"),$n=Object.assign,Kh=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},Ax=Object.prototype.hasOwnProperty,Rt=(i,e)=>Ax.call(i,e),ot=Array.isArray,Vo=i=>pu(i)==="[object Map]",r_=i=>pu(i)==="[object Set]",lt=i=>typeof i=="function",un=i=>typeof i=="string",vs=i=>typeof i=="symbol",Jt=i=>i!==null&&typeof i=="object",s_=i=>(Jt(i)||lt(i))&&lt(i.then)&&lt(i.catch),o_=Object.prototype.toString,pu=i=>o_.call(i),wx=i=>pu(i).slice(8,-1),a_=i=>pu(i)==="[object Object]",jh=i=>un(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,qa=Yh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),mu=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},Rx=/-(\w)/g,ds=mu(i=>i.replace(Rx,(e,t)=>t?t.toUpperCase():"")),Cx=/\B([A-Z])/g,lo=mu(i=>i.replace(Cx,"-$1").toLowerCase()),l_=mu(i=>i.charAt(0).toUpperCase()+i.slice(1)),Uu=mu(i=>i?`on${l_(i)}`:""),os=(i,e)=>!Object.is(i,e),Nu=(i,...e)=>{for(let t=0;t<i.length;t++)i[t](...e)},Xf=(i,e,t,n=!1)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,writable:n,value:t})},Px=i=>{const e=parseFloat(i);return isNaN(e)?i:e};let ip;const gu=()=>ip||(ip=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function $h(i){if(ot(i)){const e={};for(let t=0;t<i.length;t++){const n=i[t],r=un(n)?Ux(n):$h(n);if(r)for(const s in r)e[s]=r[s]}return e}else if(un(i)||Jt(i))return i}const Lx=/;(?![^(]*\))/g,Ix=/:([^]+)/,Dx=/\/\*[^]*?\*\//g;function Ux(i){const e={};return i.replace(Dx,"").split(Lx).forEach(t=>{if(t){const n=t.split(Ix);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function _u(i){let e="";if(un(i))e=i;else if(ot(i))for(let t=0;t<i.length;t++){const n=_u(i[t]);n&&(e+=n+" ")}else if(Jt(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}const Nx="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ox=Yh(Nx);function c_(i){return!!i||i===""}const u_=i=>!!(i&&i.__v_isRef===!0),wc=i=>un(i)?i:i==null?"":ot(i)||Jt(i)&&(i.toString===o_||!lt(i.toString))?u_(i)?wc(i.value):JSON.stringify(i,f_,2):String(i),f_=(i,e)=>u_(e)?f_(i,e.value):Vo(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[n,r],s)=>(t[Ou(n,s)+" =>"]=r,t),{})}:r_(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Ou(t))}:vs(e)?Ou(e):Jt(e)&&!ot(e)&&!a_(e)?String(e):e,Ou=(i,e="")=>{var t;return vs(i)?`Symbol(${(t=i.description)!=null?t:e})`:i};/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Zn;class Fx{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Zn,!e&&Zn&&(this.index=(Zn.scopes||(Zn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Zn;try{return Zn=this,e()}finally{Zn=t}}}on(){++this._on===1&&(this.prevScope=Zn,Zn=this)}off(){this._on>0&&--this._on===0&&(Zn=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Bx(){return Zn}let Bt;const Fu=new WeakSet;class h_{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Zn&&Zn.active&&Zn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Fu.has(this)&&(Fu.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||p_(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,rp(this),m_(this);const e=Bt,t=zi;Bt=this,zi=!0;try{return this.fn()}finally{g_(this),Bt=e,zi=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Qh(e);this.deps=this.depsTail=void 0,rp(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Fu.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Yf(this)&&this.run()}get dirty(){return Yf(this)}}let d_=0,Ka,ja;function p_(i,e=!1){if(i.flags|=8,e){i.next=ja,ja=i;return}i.next=Ka,Ka=i}function Zh(){d_++}function Jh(){if(--d_>0)return;if(ja){let e=ja;for(ja=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let i;for(;Ka;){let e=Ka;for(Ka=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(n){i||(i=n)}e=t}}if(i)throw i}function m_(i){for(let e=i.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function g_(i){let e,t=i.depsTail,n=t;for(;n;){const r=n.prevDep;n.version===-1?(n===t&&(t=r),Qh(n),kx(n)):e=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=r}i.deps=e,i.depsTail=t}function Yf(i){for(let e=i.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(__(e.dep.computed)||e.dep.version!==e.version))return!0;return!!i._dirty}function __(i){if(i.flags&4&&!(i.flags&16)||(i.flags&=-17,i.globalVersion===_l)||(i.globalVersion=_l,!i.isSSR&&i.flags&128&&(!i.deps&&!i._dirty||!Yf(i))))return;i.flags|=2;const e=i.dep,t=Bt,n=zi;Bt=i,zi=!0;try{m_(i);const r=i.fn(i._value);(e.version===0||os(r,i._value))&&(i.flags|=128,i._value=r,e.version++)}catch(r){throw e.version++,r}finally{Bt=t,zi=n,g_(i),i.flags&=-3}}function Qh(i,e=!1){const{dep:t,prevSub:n,nextSub:r}=i;if(n&&(n.nextSub=r,i.prevSub=void 0),r&&(r.prevSub=n,i.nextSub=void 0),t.subs===i&&(t.subs=n,!n&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Qh(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function kx(i){const{prevDep:e,nextDep:t}=i;e&&(e.nextDep=t,i.prevDep=void 0),t&&(t.prevDep=e,i.nextDep=void 0)}let zi=!0;const v_=[];function Ir(){v_.push(zi),zi=!1}function Dr(){const i=v_.pop();zi=i===void 0?!0:i}function rp(i){const{cleanup:e}=i;if(i.cleanup=void 0,e){const t=Bt;Bt=void 0;try{e()}finally{Bt=t}}}let _l=0;class zx{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ed{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Bt||!zi||Bt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Bt)t=this.activeLink=new zx(Bt,this),Bt.deps?(t.prevDep=Bt.depsTail,Bt.depsTail.nextDep=t,Bt.depsTail=t):Bt.deps=Bt.depsTail=t,x_(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const n=t.nextDep;n.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=n),t.prevDep=Bt.depsTail,t.nextDep=void 0,Bt.depsTail.nextDep=t,Bt.depsTail=t,Bt.deps===t&&(Bt.deps=n)}return t}trigger(e){this.version++,_l++,this.notify(e)}notify(e){Zh();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Jh()}}}function x_(i){if(i.dep.sc++,i.sub.flags&4){const e=i.dep.computed;if(e&&!i.dep.subs){e.flags|=20;for(let n=e.deps;n;n=n.nextDep)x_(n)}const t=i.dep.subs;t!==i&&(i.prevSub=t,t&&(t.nextSub=i)),i.dep.subs=i}}const qf=new WeakMap,Vs=Symbol(""),Kf=Symbol(""),vl=Symbol("");function Rn(i,e,t){if(zi&&Bt){let n=qf.get(i);n||qf.set(i,n=new Map);let r=n.get(t);r||(n.set(t,r=new ed),r.map=n,r.key=t),r.track()}}function Tr(i,e,t,n,r,s){const o=qf.get(i);if(!o){_l++;return}const a=l=>{l&&l.trigger()};if(Zh(),e==="clear")o.forEach(a);else{const l=ot(i),c=l&&jh(t);if(l&&t==="length"){const u=Number(n);o.forEach((f,h)=>{(h==="length"||h===vl||!vs(h)&&h>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(vl)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Vs)),Vo(i)&&a(o.get(Kf)));break;case"delete":l||(a(o.get(Vs)),Vo(i)&&a(o.get(Kf)));break;case"set":Vo(i)&&a(o.get(Vs));break}}Jh()}function fo(i){const e=wt(i);return e===i?e:(Rn(e,"iterate",vl),Hi(i)?e:e.map(Vn))}function td(i){return Rn(i=wt(i),"iterate",vl),i}const Hx={__proto__:null,[Symbol.iterator](){return Bu(this,Symbol.iterator,Vn)},concat(...i){return fo(this).concat(...i.map(e=>ot(e)?fo(e):e))},entries(){return Bu(this,"entries",i=>(i[1]=Vn(i[1]),i))},every(i,e){return ur(this,"every",i,e,void 0,arguments)},filter(i,e){return ur(this,"filter",i,e,t=>t.map(Vn),arguments)},find(i,e){return ur(this,"find",i,e,Vn,arguments)},findIndex(i,e){return ur(this,"findIndex",i,e,void 0,arguments)},findLast(i,e){return ur(this,"findLast",i,e,Vn,arguments)},findLastIndex(i,e){return ur(this,"findLastIndex",i,e,void 0,arguments)},forEach(i,e){return ur(this,"forEach",i,e,void 0,arguments)},includes(...i){return ku(this,"includes",i)},indexOf(...i){return ku(this,"indexOf",i)},join(i){return fo(this).join(i)},lastIndexOf(...i){return ku(this,"lastIndexOf",i)},map(i,e){return ur(this,"map",i,e,void 0,arguments)},pop(){return ba(this,"pop")},push(...i){return ba(this,"push",i)},reduce(i,...e){return sp(this,"reduce",i,e)},reduceRight(i,...e){return sp(this,"reduceRight",i,e)},shift(){return ba(this,"shift")},some(i,e){return ur(this,"some",i,e,void 0,arguments)},splice(...i){return ba(this,"splice",i)},toReversed(){return fo(this).toReversed()},toSorted(i){return fo(this).toSorted(i)},toSpliced(...i){return fo(this).toSpliced(...i)},unshift(...i){return ba(this,"unshift",i)},values(){return Bu(this,"values",Vn)}};function Bu(i,e,t){const n=td(i),r=n[e]();return n!==i&&!Hi(i)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=t(s.value)),s}),r}const Gx=Array.prototype;function ur(i,e,t,n,r,s){const o=td(i),a=o!==i&&!Hi(i),l=o[e];if(l!==Gx[e]){const f=l.apply(i,s);return a?Vn(f):f}let c=t;o!==i&&(a?c=function(f,h){return t.call(this,Vn(f),h,i)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,i)}));const u=l.call(o,c,n);return a&&r?r(u):u}function sp(i,e,t,n){const r=td(i);let s=t;return r!==i&&(Hi(i)?t.length>3&&(s=function(o,a,l){return t.call(this,o,a,l,i)}):s=function(o,a,l){return t.call(this,o,Vn(a),l,i)}),r[e](s,...n)}function ku(i,e,t){const n=wt(i);Rn(n,"iterate",vl);const r=n[e](...t);return(r===-1||r===!1)&&sd(t[0])?(t[0]=wt(t[0]),n[e](...t)):r}function ba(i,e,t=[]){Ir(),Zh();const n=wt(i)[e].apply(i,t);return Jh(),Dr(),n}const Vx=Yh("__proto__,__v_isRef,__isVue"),y_=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(vs));function Wx(i){vs(i)||(i=String(i));const e=wt(this);return Rn(e,"has",i),e.hasOwnProperty(i)}class S_{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return n===(r?s?ey:b_:s?E_:T_).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const o=ot(e);if(!r){let l;if(o&&(l=Hx[t]))return l;if(t==="hasOwnProperty")return Wx}const a=Reflect.get(e,t,In(e)?e:n);return(vs(t)?y_.has(t):Vx(t))||(r||Rn(e,"get",t),s)?a:In(a)?o&&jh(t)?a:a.value:Jt(a)?r?A_(a):id(a):a}}class M_ extends S_{constructor(e=!1){super(!1,e)}set(e,t,n,r){let s=e[t];if(!this._isShallow){const l=to(s);if(!Hi(n)&&!to(n)&&(s=wt(s),n=wt(n)),!ot(e)&&In(s)&&!In(n))return l?!1:(s.value=n,!0)}const o=ot(e)&&jh(t)?Number(t)<e.length:Rt(e,t),a=Reflect.set(e,t,n,In(e)?e:r);return e===wt(r)&&(o?os(n,s)&&Tr(e,"set",t,n):Tr(e,"add",t,n)),a}deleteProperty(e,t){const n=Rt(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Tr(e,"delete",t,void 0),r}has(e,t){const n=Reflect.has(e,t);return(!vs(t)||!y_.has(t))&&Rn(e,"has",t),n}ownKeys(e){return Rn(e,"iterate",ot(e)?"length":Vs),Reflect.ownKeys(e)}}class Xx extends S_{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Yx=new M_,qx=new Xx,Kx=new M_(!0);const jf=i=>i,Bl=i=>Reflect.getPrototypeOf(i);function jx(i,e,t){return function(...n){const r=this.__v_raw,s=wt(r),o=Vo(s),a=i==="entries"||i===Symbol.iterator&&o,l=i==="keys"&&o,c=r[i](...n),u=t?jf:e?$f:Vn;return!e&&Rn(s,"iterate",l?Kf:Vs),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function kl(i){return function(...e){return i==="delete"?!1:i==="clear"?void 0:this}}function $x(i,e){const t={get(r){const s=this.__v_raw,o=wt(s),a=wt(r);i||(os(r,a)&&Rn(o,"get",r),Rn(o,"get",a));const{has:l}=Bl(o),c=e?jf:i?$f:Vn;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!i&&Rn(wt(r),"iterate",Vs),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,o=wt(s),a=wt(r);return i||(os(r,a)&&Rn(o,"has",r),Rn(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=wt(a),c=e?jf:i?$f:Vn;return!i&&Rn(l,"iterate",Vs),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return $n(t,i?{add:kl("add"),set:kl("set"),delete:kl("delete"),clear:kl("clear")}:{add(r){!e&&!Hi(r)&&!to(r)&&(r=wt(r));const s=wt(this);return Bl(s).has.call(s,r)||(s.add(r),Tr(s,"add",r,r)),this},set(r,s){!e&&!Hi(s)&&!to(s)&&(s=wt(s));const o=wt(this),{has:a,get:l}=Bl(o);let c=a.call(o,r);c||(r=wt(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?os(s,u)&&Tr(o,"set",r,s):Tr(o,"add",r,s),this},delete(r){const s=wt(this),{has:o,get:a}=Bl(s);let l=o.call(s,r);l||(r=wt(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&Tr(s,"delete",r,void 0),c},clear(){const r=wt(this),s=r.size!==0,o=r.clear();return s&&Tr(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=jx(r,i,e)}),t}function nd(i,e){const t=$x(i,e);return(n,r,s)=>r==="__v_isReactive"?!i:r==="__v_isReadonly"?i:r==="__v_raw"?n:Reflect.get(Rt(t,r)&&r in n?t:n,r,s)}const Zx={get:nd(!1,!1)},Jx={get:nd(!1,!0)},Qx={get:nd(!0,!1)};const T_=new WeakMap,E_=new WeakMap,b_=new WeakMap,ey=new WeakMap;function ty(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ny(i){return i.__v_skip||!Object.isExtensible(i)?0:ty(wx(i))}function id(i){return to(i)?i:rd(i,!1,Yx,Zx,T_)}function iy(i){return rd(i,!1,Kx,Jx,E_)}function A_(i){return rd(i,!0,qx,Qx,b_)}function rd(i,e,t,n,r){if(!Jt(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const s=ny(i);if(s===0)return i;const o=r.get(i);if(o)return o;const a=new Proxy(i,s===2?n:t);return r.set(i,a),a}function $a(i){return to(i)?$a(i.__v_raw):!!(i&&i.__v_isReactive)}function to(i){return!!(i&&i.__v_isReadonly)}function Hi(i){return!!(i&&i.__v_isShallow)}function sd(i){return i?!!i.__v_raw:!1}function wt(i){const e=i&&i.__v_raw;return e?wt(e):i}function ry(i){return!Rt(i,"__v_skip")&&Object.isExtensible(i)&&Xf(i,"__v_skip",!0),i}const Vn=i=>Jt(i)?id(i):i,$f=i=>Jt(i)?A_(i):i;function In(i){return i?i.__v_isRef===!0:!1}function Gn(i){return sy(i,!1)}function sy(i,e){return In(i)?i:new oy(i,e)}class oy{constructor(e,t){this.dep=new ed,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:wt(e),this._value=t?e:Vn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,n=this.__v_isShallow||Hi(e)||to(e);e=n?e:wt(e),os(e,t)&&(this._rawValue=e,this._value=n?e:Vn(e),this.dep.trigger())}}function ay(i){return In(i)?i.value:i}const ly={get:(i,e,t)=>e==="__v_raw"?i:ay(Reflect.get(i,e,t)),set:(i,e,t,n)=>{const r=i[e];return In(r)&&!In(t)?(r.value=t,!0):Reflect.set(i,e,t,n)}};function w_(i){return $a(i)?i:new Proxy(i,ly)}class cy{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new ed(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=_l-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&Bt!==this)return p_(this,!0),!0}get value(){const e=this.dep.track();return __(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function uy(i,e,t=!1){let n,r;return lt(i)?n=i:(n=i.get,r=i.set),new cy(n,r,t)}const zl={},Wc=new WeakMap;let Is;function fy(i,e=!1,t=Is){if(t){let n=Wc.get(t);n||Wc.set(t,n=[]),n.push(i)}}function hy(i,e,t=kt){const{immediate:n,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=x=>r?x:Hi(x)||r===!1||r===0?Jr(x,1):Jr(x);let u,f,h,d,v=!1,g=!1;if(In(i)?(f=()=>i.value,v=Hi(i)):$a(i)?(f=()=>c(i),v=!0):ot(i)?(g=!0,v=i.some(x=>$a(x)||Hi(x)),f=()=>i.map(x=>{if(In(x))return x.value;if($a(x))return c(x);if(lt(x))return l?l(x,2):x()})):lt(i)?e?f=l?()=>l(i,2):i:f=()=>{if(h){Ir();try{h()}finally{Dr()}}const x=Is;Is=u;try{return l?l(i,3,[d]):i(d)}finally{Is=x}}:f=tr,e&&r){const x=f,w=r===!0?1/0:r;f=()=>Jr(x(),w)}const p=Bx(),m=()=>{u.stop(),p&&p.active&&Kh(p.effects,u)};if(s&&e){const x=e;e=(...w)=>{x(...w),m()}}let M=g?new Array(i.length).fill(zl):zl;const S=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(e){const w=u.run();if(r||v||(g?w.some((L,R)=>os(L,M[R])):os(w,M))){h&&h();const L=Is;Is=u;try{const R=[w,M===zl?void 0:g&&M[0]===zl?[]:M,d];M=w,l?l(e,3,R):e(...R)}finally{Is=L}}}else u.run()};return a&&a(S),u=new h_(f),u.scheduler=o?()=>o(S,!1):S,d=x=>fy(x,!1,u),h=u.onStop=()=>{const x=Wc.get(u);if(x){if(l)l(x,4);else for(const w of x)w();Wc.delete(u)}},e?n?S(!0):M=u.run():o?o(S.bind(null,!0),!0):u.run(),m.pause=u.pause.bind(u),m.resume=u.resume.bind(u),m.stop=m,m}function Jr(i,e=1/0,t){if(e<=0||!Jt(i)||i.__v_skip||(t=t||new Set,t.has(i)))return i;if(t.add(i),e--,In(i))Jr(i.value,e,t);else if(ot(i))for(let n=0;n<i.length;n++)Jr(i[n],e,t);else if(r_(i)||Vo(i))i.forEach(n=>{Jr(n,e,t)});else if(a_(i)){for(const n in i)Jr(i[n],e,t);for(const n of Object.getOwnPropertySymbols(i))Object.prototype.propertyIsEnumerable.call(i,n)&&Jr(i[n],e,t)}return i}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Dl(i,e,t,n){try{return n?i(...n):i()}catch(r){vu(r,e,t)}}function rr(i,e,t,n){if(lt(i)){const r=Dl(i,e,t,n);return r&&s_(r)&&r.catch(s=>{vu(s,e,t)}),r}if(ot(i)){const r=[];for(let s=0;s<i.length;s++)r.push(rr(i[s],e,t,n));return r}}function vu(i,e,t,n=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||kt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](i,l,c)===!1)return}a=a.parent}if(s){Ir(),Dl(s,null,10,[i,l,c]),Dr();return}}dy(i,t,r,n,o)}function dy(i,e,t,n=!0,r=!1){if(r)throw i;console.error(i)}const Wn=[];let Wi=-1;const Wo=[];let jr=null,Uo=0;const R_=Promise.resolve();let Xc=null;function Rc(i){const e=Xc||R_;return i?e.then(this?i.bind(this):i):e}function py(i){let e=Wi+1,t=Wn.length;for(;e<t;){const n=e+t>>>1,r=Wn[n],s=xl(r);s<i||s===i&&r.flags&2?e=n+1:t=n}return e}function od(i){if(!(i.flags&1)){const e=xl(i),t=Wn[Wn.length-1];!t||!(i.flags&2)&&e>=xl(t)?Wn.push(i):Wn.splice(py(e),0,i),i.flags|=1,C_()}}function C_(){Xc||(Xc=R_.then(L_))}function my(i){ot(i)?Wo.push(...i):jr&&i.id===-1?jr.splice(Uo+1,0,i):i.flags&1||(Wo.push(i),i.flags|=1),C_()}function op(i,e,t=Wi+1){for(;t<Wn.length;t++){const n=Wn[t];if(n&&n.flags&2){if(i&&n.id!==i.uid)continue;Wn.splice(t,1),t--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function P_(i){if(Wo.length){const e=[...new Set(Wo)].sort((t,n)=>xl(t)-xl(n));if(Wo.length=0,jr){jr.push(...e);return}for(jr=e,Uo=0;Uo<jr.length;Uo++){const t=jr[Uo];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}jr=null,Uo=0}}const xl=i=>i.id==null?i.flags&2?-1:1/0:i.id;function L_(i){try{for(Wi=0;Wi<Wn.length;Wi++){const e=Wn[Wi];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Dl(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Wi<Wn.length;Wi++){const e=Wn[Wi];e&&(e.flags&=-2)}Wi=-1,Wn.length=0,P_(),Xc=null,(Wn.length||Wo.length)&&L_()}}let Ji=null,I_=null;function Yc(i){const e=Ji;return Ji=i,I_=i&&i.type.__scopeId||null,e}function gy(i,e=Ji,t){if(!e||i._n)return i;const n=(...r)=>{n._d&&mp(-1);const s=Yc(e);let o;try{o=i(...r)}finally{Yc(s),n._d&&mp(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function Ts(i,e,t,n){const r=i.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[n];l&&(Ir(),rr(l,t,8,[i.el,a,i,e]),Dr())}}const _y=Symbol("_vte"),vy=i=>i.__isTeleport;function ad(i,e){i.shapeFlag&6&&i.component?(i.transition=e,ad(i.component.subTree,e)):i.shapeFlag&128?(i.ssContent.transition=e.clone(i.ssContent),i.ssFallback.transition=e.clone(i.ssFallback)):i.transition=e}function D_(i){i.ids=[i.ids[0]+i.ids[2]+++"-",0,0]}function Za(i,e,t,n,r=!1){if(ot(i)){i.forEach((v,g)=>Za(v,e&&(ot(e)?e[g]:e),t,n,r));return}if(Ja(n)&&!r){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&Za(i,e,t,n.component.subTree);return}const s=n.shapeFlag&4?dd(n.component):n.el,o=r?null:s,{i:a,r:l}=i,c=e&&e.r,u=a.refs===kt?a.refs={}:a.refs,f=a.setupState,h=wt(f),d=f===kt?()=>!1:v=>Rt(h,v);if(c!=null&&c!==l&&(un(c)?(u[c]=null,d(c)&&(f[c]=null)):In(c)&&(c.value=null)),lt(l))Dl(l,a,12,[o,u]);else{const v=un(l),g=In(l);if(v||g){const p=()=>{if(i.f){const m=v?d(l)?f[l]:u[l]:l.value;r?ot(m)&&Kh(m,s):ot(m)?m.includes(s)||m.push(s):v?(u[l]=[s],d(l)&&(f[l]=u[l])):(l.value=[s],i.k&&(u[i.k]=l.value))}else v?(u[l]=o,d(l)&&(f[l]=o)):g&&(l.value=o,i.k&&(u[i.k]=o))};o?(p.id=-1,ai(p,t)):p()}}}gu().requestIdleCallback;gu().cancelIdleCallback;const Ja=i=>!!i.type.__asyncLoader,U_=i=>i.type.__isKeepAlive;function xy(i,e){N_(i,"a",e)}function yy(i,e){N_(i,"da",e)}function N_(i,e,t=Xn){const n=i.__wdc||(i.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return i()});if(xu(e,n,t),t){let r=t.parent;for(;r&&r.parent;)U_(r.parent.vnode)&&Sy(n,e,t,r),r=r.parent}}function Sy(i,e,t,n){const r=xu(e,i,n,!0);Su(()=>{Kh(n[e],r)},t)}function xu(i,e,t=Xn,n=!1){if(t){const r=t[i]||(t[i]=[]),s=e.__weh||(e.__weh=(...o)=>{Ir();const a=Ul(t),l=rr(e,t,i,o);return a(),Dr(),l});return n?r.unshift(s):r.push(s),s}}const Br=i=>(e,t=Xn)=>{(!Sl||i==="sp")&&xu(i,(...n)=>e(...n),t)},My=Br("bm"),yu=Br("m"),Ty=Br("bu"),Ey=Br("u"),by=Br("bum"),Su=Br("um"),Ay=Br("sp"),wy=Br("rtg"),Ry=Br("rtc");function Cy(i,e=Xn){xu("ec",i,e)}const Py=Symbol.for("v-ndc"),Zf=i=>i?t0(i)?dd(i):Zf(i.parent):null,Qa=$n(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>Zf(i.parent),$root:i=>Zf(i.root),$host:i=>i.ce,$emit:i=>i.emit,$options:i=>F_(i),$forceUpdate:i=>i.f||(i.f=()=>{od(i.update)}),$nextTick:i=>i.n||(i.n=Rc.bind(i.proxy)),$watch:i=>Jy.bind(i)}),zu=(i,e)=>i!==kt&&!i.__isScriptSetup&&Rt(i,e),Ly={get({_:i},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:n,data:r,props:s,accessCache:o,type:a,appContext:l}=i;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return n[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(zu(n,e))return o[e]=1,n[e];if(r!==kt&&Rt(r,e))return o[e]=2,r[e];if((c=i.propsOptions[0])&&Rt(c,e))return o[e]=3,s[e];if(t!==kt&&Rt(t,e))return o[e]=4,t[e];Jf&&(o[e]=0)}}const u=Qa[e];let f,h;if(u)return e==="$attrs"&&Rn(i.attrs,"get",""),u(i);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==kt&&Rt(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,Rt(h,e))return h[e]},set({_:i},e,t){const{data:n,setupState:r,ctx:s}=i;return zu(r,e)?(r[e]=t,!0):n!==kt&&Rt(n,e)?(n[e]=t,!0):Rt(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(s[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:n,appContext:r,propsOptions:s}},o){let a;return!!t[o]||i!==kt&&Rt(i,o)||zu(e,o)||(a=s[0])&&Rt(a,o)||Rt(n,o)||Rt(Qa,o)||Rt(r.config.globalProperties,o)},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:Rt(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}};function ap(i){return ot(i)?i.reduce((e,t)=>(e[t]=null,e),{}):i}let Jf=!0;function Iy(i){const e=F_(i),t=i.proxy,n=i.ctx;Jf=!1,e.beforeCreate&&lp(e.beforeCreate,i,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:v,activated:g,deactivated:p,beforeDestroy:m,beforeUnmount:M,destroyed:S,unmounted:x,render:w,renderTracked:L,renderTriggered:R,errorCaptured:z,serverPrefetch:T,expose:P,inheritAttrs:J,components:W,directives:re,filters:k}=e;if(c&&Dy(c,n,null),o)for(const X in o){const Z=o[X];lt(Z)&&(n[X]=Z.bind(t))}if(r){const X=r.call(t,t);Jt(X)&&(i.data=id(X))}if(Jf=!0,s)for(const X in s){const Z=s[X],se=lt(Z)?Z.bind(t,t):lt(Z.get)?Z.get.bind(t,t):tr,D=!lt(Z)&&lt(Z.set)?Z.set.bind(t):tr,G=nh({get:se,set:D});Object.defineProperty(n,X,{enumerable:!0,configurable:!0,get:()=>G.value,set:q=>G.value=q})}if(a)for(const X in a)O_(a[X],n,t,X);if(l){const X=lt(l)?l.call(t):l;Reflect.ownKeys(X).forEach(Z=>{ky(Z,X[Z])})}u&&lp(u,i,"c");function $(X,Z){ot(Z)?Z.forEach(se=>X(se.bind(t))):Z&&X(Z.bind(t))}if($(My,f),$(yu,h),$(Ty,d),$(Ey,v),$(xy,g),$(yy,p),$(Cy,z),$(Ry,L),$(wy,R),$(by,M),$(Su,x),$(Ay,T),ot(P))if(P.length){const X=i.exposed||(i.exposed={});P.forEach(Z=>{Object.defineProperty(X,Z,{get:()=>t[Z],set:se=>t[Z]=se})})}else i.exposed||(i.exposed={});w&&i.render===tr&&(i.render=w),J!=null&&(i.inheritAttrs=J),W&&(i.components=W),re&&(i.directives=re),T&&D_(i)}function Dy(i,e,t=tr){ot(i)&&(i=Qf(i));for(const n in i){const r=i[n];let s;Jt(r)?"default"in r?s=Cc(r.from||n,r.default,!0):s=Cc(r.from||n):s=Cc(r),In(s)?Object.defineProperty(e,n,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[n]=s}}function lp(i,e,t){rr(ot(i)?i.map(n=>n.bind(e.proxy)):i.bind(e.proxy),e,t)}function O_(i,e,t,n){let r=n.includes(".")?$_(t,n):()=>t[n];if(un(i)){const s=e[i];lt(s)&&Ws(r,s)}else if(lt(i))Ws(r,i.bind(t));else if(Jt(i))if(ot(i))i.forEach(s=>O_(s,e,t,n));else{const s=lt(i.handler)?i.handler.bind(t):e[i.handler];lt(s)&&Ws(r,s,i)}}function F_(i){const e=i.type,{mixins:t,extends:n}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=i.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!n?l=e:(l={},r.length&&r.forEach(c=>qc(l,c,o,!0)),qc(l,e,o)),Jt(e)&&s.set(e,l),l}function qc(i,e,t,n=!1){const{mixins:r,extends:s}=e;s&&qc(i,s,t,!0),r&&r.forEach(o=>qc(i,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=Uy[o]||t&&t[o];i[o]=a?a(i[o],e[o]):e[o]}return i}const Uy={data:cp,props:up,emits:up,methods:Ba,computed:Ba,beforeCreate:On,created:On,beforeMount:On,mounted:On,beforeUpdate:On,updated:On,beforeDestroy:On,beforeUnmount:On,destroyed:On,unmounted:On,activated:On,deactivated:On,errorCaptured:On,serverPrefetch:On,components:Ba,directives:Ba,watch:Oy,provide:cp,inject:Ny};function cp(i,e){return e?i?function(){return $n(lt(i)?i.call(this,this):i,lt(e)?e.call(this,this):e)}:e:i}function Ny(i,e){return Ba(Qf(i),Qf(e))}function Qf(i){if(ot(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function On(i,e){return i?[...new Set([].concat(i,e))]:e}function Ba(i,e){return i?$n(Object.create(null),i,e):e}function up(i,e){return i?ot(i)&&ot(e)?[...new Set([...i,...e])]:$n(Object.create(null),ap(i),ap(e??{})):e}function Oy(i,e){if(!i)return e;if(!e)return i;const t=$n(Object.create(null),i);for(const n in e)t[n]=On(i[n],e[n]);return t}function B_(){return{app:null,config:{isNativeTag:bx,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Fy=0;function By(i,e){return function(n,r=null){lt(n)||(n=$n({},n)),r!=null&&!Jt(r)&&(r=null);const s=B_(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:Fy++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:xS,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&lt(u.install)?(o.add(u),u.install(c,...f)):lt(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const d=c._ceVNode||Cr(n,r);return d.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),i(d,u,h),l=!0,c._container=u,u.__vue_app__=c,dd(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(rr(a,c._instance,16),i(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=Xo;Xo=c;try{return u()}finally{Xo=f}}};return c}}let Xo=null;function ky(i,e){if(Xn){let t=Xn.provides;const n=Xn.parent&&Xn.parent.provides;n===t&&(t=Xn.provides=Object.create(n)),t[i]=e}}function Cc(i,e,t=!1){const n=Xn||Ji;if(n||Xo){let r=Xo?Xo._context.provides:n?n.parent==null||n.ce?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(r&&i in r)return r[i];if(arguments.length>1)return t&&lt(e)?e.call(n&&n.proxy):e}}const k_={},z_=()=>Object.create(k_),H_=i=>Object.getPrototypeOf(i)===k_;function zy(i,e,t,n=!1){const r={},s=z_();i.propsDefaults=Object.create(null),G_(i,e,r,s);for(const o in i.propsOptions[0])o in r||(r[o]=void 0);t?i.props=n?r:iy(r):i.type.props?i.props=r:i.props=s,i.attrs=s}function Hy(i,e,t,n){const{props:r,attrs:s,vnode:{patchFlag:o}}=i,a=wt(r),[l]=i.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=i.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Mu(i.emitsOptions,h))continue;const d=e[h];if(l)if(Rt(s,h))d!==s[h]&&(s[h]=d,c=!0);else{const v=ds(h);r[v]=eh(l,a,v,d,i,!1)}else d!==s[h]&&(s[h]=d,c=!0)}}}else{G_(i,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!Rt(e,f)&&((u=lo(f))===f||!Rt(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=eh(l,a,f,void 0,i,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!Rt(e,f))&&(delete s[f],c=!0)}c&&Tr(i.attrs,"set","")}function G_(i,e,t,n){const[r,s]=i.propsOptions;let o=!1,a;if(e)for(let l in e){if(qa(l))continue;const c=e[l];let u;r&&Rt(r,u=ds(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:Mu(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(s){const l=wt(t),c=a||kt;for(let u=0;u<s.length;u++){const f=s[u];t[f]=eh(r,l,f,c[f],i,!Rt(c,f))}}return o}function eh(i,e,t,n,r,s){const o=i[t];if(o!=null){const a=Rt(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&lt(l)){const{propsDefaults:c}=r;if(t in c)n=c[t];else{const u=Ul(r);n=c[t]=l.call(null,e),u()}}else n=l;r.ce&&r.ce._setProp(t,n)}o[0]&&(s&&!a?n=!1:o[1]&&(n===""||n===lo(t))&&(n=!0))}return n}const Gy=new WeakMap;function V_(i,e,t=!1){const n=t?Gy:e.propsCache,r=n.get(i);if(r)return r;const s=i.props,o={},a=[];let l=!1;if(!lt(i)){const u=f=>{l=!0;const[h,d]=V_(f,e,!0);$n(o,h),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!s&&!l)return Jt(i)&&n.set(i,Go),Go;if(ot(s))for(let u=0;u<s.length;u++){const f=ds(s[u]);fp(f)&&(o[f]=kt)}else if(s)for(const u in s){const f=ds(u);if(fp(f)){const h=s[u],d=o[f]=ot(h)||lt(h)?{type:h}:$n({},h),v=d.type;let g=!1,p=!0;if(ot(v))for(let m=0;m<v.length;++m){const M=v[m],S=lt(M)&&M.name;if(S==="Boolean"){g=!0;break}else S==="String"&&(p=!1)}else g=lt(v)&&v.name==="Boolean";d[0]=g,d[1]=p,(g||Rt(d,"default"))&&a.push(f)}}const c=[o,a];return Jt(i)&&n.set(i,c),c}function fp(i){return i[0]!=="$"&&!qa(i)}const ld=i=>i[0]==="_"||i==="$stable",cd=i=>ot(i)?i.map(qi):[qi(i)],Vy=(i,e,t)=>{if(e._n)return e;const n=gy((...r)=>cd(e(...r)),t);return n._c=!1,n},W_=(i,e,t)=>{const n=i._ctx;for(const r in i){if(ld(r))continue;const s=i[r];if(lt(s))e[r]=Vy(r,s,n);else if(s!=null){const o=cd(s);e[r]=()=>o}}},X_=(i,e)=>{const t=cd(e);i.slots.default=()=>t},Y_=(i,e,t)=>{for(const n in e)(t||!ld(n))&&(i[n]=e[n])},Wy=(i,e,t)=>{const n=i.slots=z_();if(i.vnode.shapeFlag&32){const r=e.__;r&&Xf(n,"__",r,!0);const s=e._;s?(Y_(n,e,t),t&&Xf(n,"_",s,!0)):W_(e,n)}else e&&X_(i,e)},Xy=(i,e,t)=>{const{vnode:n,slots:r}=i;let s=!0,o=kt;if(n.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:Y_(r,e,t):(s=!e.$stable,W_(e,r)),o=e}else e&&(X_(i,e),o={default:1});if(s)for(const a in r)!ld(a)&&o[a]==null&&delete r[a]},ai=sS;function Yy(i){return qy(i)}function qy(i,e){const t=gu();t.__VUE__=!0;const{insert:n,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=tr,insertStaticContent:v}=i,g=(E,B,V,ne=null,Q=null,F=null,de=void 0,ue=null,ge=!!B.dynamicChildren)=>{if(E===B)return;E&&!Aa(E,B)&&(ne=Ie(E),q(E,Q,F,!0),E=null),B.patchFlag===-2&&(ge=!1,B.dynamicChildren=null);const{type:le,ref:Re,shapeFlag:C}=B;switch(le){case Tu:p(E,B,V,ne);break;case ta:m(E,B,V,ne);break;case Gu:E==null&&M(B,V,ne,de);break;case Sr:W(E,B,V,ne,Q,F,de,ue,ge);break;default:C&1?w(E,B,V,ne,Q,F,de,ue,ge):C&6?re(E,B,V,ne,Q,F,de,ue,ge):(C&64||C&128)&&le.process(E,B,V,ne,Q,F,de,ue,ge,Tt)}Re!=null&&Q?Za(Re,E&&E.ref,F,B||E,!B):Re==null&&E&&E.ref!=null&&Za(E.ref,null,F,E,!0)},p=(E,B,V,ne)=>{if(E==null)n(B.el=a(B.children),V,ne);else{const Q=B.el=E.el;B.children!==E.children&&c(Q,B.children)}},m=(E,B,V,ne)=>{E==null?n(B.el=l(B.children||""),V,ne):B.el=E.el},M=(E,B,V,ne)=>{[E.el,E.anchor]=v(E.children,B,V,ne,E.el,E.anchor)},S=({el:E,anchor:B},V,ne)=>{let Q;for(;E&&E!==B;)Q=h(E),n(E,V,ne),E=Q;n(B,V,ne)},x=({el:E,anchor:B})=>{let V;for(;E&&E!==B;)V=h(E),r(E),E=V;r(B)},w=(E,B,V,ne,Q,F,de,ue,ge)=>{B.type==="svg"?de="svg":B.type==="math"&&(de="mathml"),E==null?L(B,V,ne,Q,F,de,ue,ge):T(E,B,Q,F,de,ue,ge)},L=(E,B,V,ne,Q,F,de,ue)=>{let ge,le;const{props:Re,shapeFlag:C,transition:A,dirs:H}=E;if(ge=E.el=o(E.type,F,Re&&Re.is,Re),C&8?u(ge,E.children):C&16&&z(E.children,ge,null,ne,Q,Hu(E,F),de,ue),H&&Ts(E,null,ne,"created"),R(ge,E,E.scopeId,de,ne),Re){for(const oe in Re)oe!=="value"&&!qa(oe)&&s(ge,oe,null,Re[oe],F,ne);"value"in Re&&s(ge,"value",null,Re.value,F),(le=Re.onVnodeBeforeMount)&&Vi(le,ne,E)}H&&Ts(E,null,ne,"beforeMount");const ce=Ky(Q,A);ce&&A.beforeEnter(ge),n(ge,B,V),((le=Re&&Re.onVnodeMounted)||ce||H)&&ai(()=>{le&&Vi(le,ne,E),ce&&A.enter(ge),H&&Ts(E,null,ne,"mounted")},Q)},R=(E,B,V,ne,Q)=>{if(V&&d(E,V),ne)for(let F=0;F<ne.length;F++)d(E,ne[F]);if(Q){let F=Q.subTree;if(B===F||J_(F.type)&&(F.ssContent===B||F.ssFallback===B)){const de=Q.vnode;R(E,de,de.scopeId,de.slotScopeIds,Q.parent)}}},z=(E,B,V,ne,Q,F,de,ue,ge=0)=>{for(let le=ge;le<E.length;le++){const Re=E[le]=ue?$r(E[le]):qi(E[le]);g(null,Re,B,V,ne,Q,F,de,ue)}},T=(E,B,V,ne,Q,F,de)=>{const ue=B.el=E.el;let{patchFlag:ge,dynamicChildren:le,dirs:Re}=B;ge|=E.patchFlag&16;const C=E.props||kt,A=B.props||kt;let H;if(V&&Es(V,!1),(H=A.onVnodeBeforeUpdate)&&Vi(H,V,B,E),Re&&Ts(B,E,V,"beforeUpdate"),V&&Es(V,!0),(C.innerHTML&&A.innerHTML==null||C.textContent&&A.textContent==null)&&u(ue,""),le?P(E.dynamicChildren,le,ue,V,ne,Hu(B,Q),F):de||Z(E,B,ue,null,V,ne,Hu(B,Q),F,!1),ge>0){if(ge&16)J(ue,C,A,V,Q);else if(ge&2&&C.class!==A.class&&s(ue,"class",null,A.class,Q),ge&4&&s(ue,"style",C.style,A.style,Q),ge&8){const ce=B.dynamicProps;for(let oe=0;oe<ce.length;oe++){const fe=ce[oe],be=C[fe],xe=A[fe];(xe!==be||fe==="value")&&s(ue,fe,be,xe,Q,V)}}ge&1&&E.children!==B.children&&u(ue,B.children)}else!de&&le==null&&J(ue,C,A,V,Q);((H=A.onVnodeUpdated)||Re)&&ai(()=>{H&&Vi(H,V,B,E),Re&&Ts(B,E,V,"updated")},ne)},P=(E,B,V,ne,Q,F,de)=>{for(let ue=0;ue<B.length;ue++){const ge=E[ue],le=B[ue],Re=ge.el&&(ge.type===Sr||!Aa(ge,le)||ge.shapeFlag&198)?f(ge.el):V;g(ge,le,Re,null,ne,Q,F,de,!0)}},J=(E,B,V,ne,Q)=>{if(B!==V){if(B!==kt)for(const F in B)!qa(F)&&!(F in V)&&s(E,F,B[F],null,Q,ne);for(const F in V){if(qa(F))continue;const de=V[F],ue=B[F];de!==ue&&F!=="value"&&s(E,F,ue,de,Q,ne)}"value"in V&&s(E,"value",B.value,V.value,Q)}},W=(E,B,V,ne,Q,F,de,ue,ge)=>{const le=B.el=E?E.el:a(""),Re=B.anchor=E?E.anchor:a("");let{patchFlag:C,dynamicChildren:A,slotScopeIds:H}=B;H&&(ue=ue?ue.concat(H):H),E==null?(n(le,V,ne),n(Re,V,ne),z(B.children||[],V,Re,Q,F,de,ue,ge)):C>0&&C&64&&A&&E.dynamicChildren?(P(E.dynamicChildren,A,V,Q,F,de,ue),(B.key!=null||Q&&B===Q.subTree)&&q_(E,B,!0)):Z(E,B,V,Re,Q,F,de,ue,ge)},re=(E,B,V,ne,Q,F,de,ue,ge)=>{B.slotScopeIds=ue,E==null?B.shapeFlag&512?Q.ctx.activate(B,V,ne,de,ge):k(B,V,ne,Q,F,de,ge):K(E,B,ge)},k=(E,B,V,ne,Q,F,de)=>{const ue=E.component=dS(E,ne,Q);if(U_(E)&&(ue.ctx.renderer=Tt),pS(ue,!1,de),ue.asyncDep){if(Q&&Q.registerDep(ue,$,de),!E.el){const ge=ue.subTree=Cr(ta);m(null,ge,B,V)}}else $(ue,E,B,V,Q,F,de)},K=(E,B,V)=>{const ne=B.component=E.component;if(iS(E,B,V))if(ne.asyncDep&&!ne.asyncResolved){X(ne,B,V);return}else ne.next=B,ne.update();else B.el=E.el,ne.vnode=B},$=(E,B,V,ne,Q,F,de)=>{const ue=()=>{if(E.isMounted){let{next:C,bu:A,u:H,parent:ce,vnode:oe}=E;{const Pe=K_(E);if(Pe){C&&(C.el=oe.el,X(E,C,de)),Pe.asyncDep.then(()=>{E.isUnmounted||ue()});return}}let fe=C,be;Es(E,!1),C?(C.el=oe.el,X(E,C,de)):C=oe,A&&Nu(A),(be=C.props&&C.props.onVnodeBeforeUpdate)&&Vi(be,ce,C,oe),Es(E,!0);const xe=dp(E),Ae=E.subTree;E.subTree=xe,g(Ae,xe,f(Ae.el),Ie(Ae),E,Q,F),C.el=xe.el,fe===null&&rS(E,xe.el),H&&ai(H,Q),(be=C.props&&C.props.onVnodeUpdated)&&ai(()=>Vi(be,ce,C,oe),Q)}else{let C;const{el:A,props:H}=B,{bm:ce,m:oe,parent:fe,root:be,type:xe}=E,Ae=Ja(B);Es(E,!1),ce&&Nu(ce),!Ae&&(C=H&&H.onVnodeBeforeMount)&&Vi(C,fe,B),Es(E,!0);{be.ce&&be.ce._def.shadowRoot!==!1&&be.ce._injectChildStyle(xe);const Pe=E.subTree=dp(E);g(null,Pe,V,ne,E,Q,F),B.el=Pe.el}if(oe&&ai(oe,Q),!Ae&&(C=H&&H.onVnodeMounted)){const Pe=B;ai(()=>Vi(C,fe,Pe),Q)}(B.shapeFlag&256||fe&&Ja(fe.vnode)&&fe.vnode.shapeFlag&256)&&E.a&&ai(E.a,Q),E.isMounted=!0,B=V=ne=null}};E.scope.on();const ge=E.effect=new h_(ue);E.scope.off();const le=E.update=ge.run.bind(ge),Re=E.job=ge.runIfDirty.bind(ge);Re.i=E,Re.id=E.uid,ge.scheduler=()=>od(Re),Es(E,!0),le()},X=(E,B,V)=>{B.component=E;const ne=E.vnode.props;E.vnode=B,E.next=null,Hy(E,B.props,ne,V),Xy(E,B.children,V),Ir(),op(E),Dr()},Z=(E,B,V,ne,Q,F,de,ue,ge=!1)=>{const le=E&&E.children,Re=E?E.shapeFlag:0,C=B.children,{patchFlag:A,shapeFlag:H}=B;if(A>0){if(A&128){D(le,C,V,ne,Q,F,de,ue,ge);return}else if(A&256){se(le,C,V,ne,Q,F,de,ue,ge);return}}H&8?(Re&16&&Me(le,Q,F),C!==le&&u(V,C)):Re&16?H&16?D(le,C,V,ne,Q,F,de,ue,ge):Me(le,Q,F,!0):(Re&8&&u(V,""),H&16&&z(C,V,ne,Q,F,de,ue,ge))},se=(E,B,V,ne,Q,F,de,ue,ge)=>{E=E||Go,B=B||Go;const le=E.length,Re=B.length,C=Math.min(le,Re);let A;for(A=0;A<C;A++){const H=B[A]=ge?$r(B[A]):qi(B[A]);g(E[A],H,V,null,Q,F,de,ue,ge)}le>Re?Me(E,Q,F,!0,!1,C):z(B,V,ne,Q,F,de,ue,ge,C)},D=(E,B,V,ne,Q,F,de,ue,ge)=>{let le=0;const Re=B.length;let C=E.length-1,A=Re-1;for(;le<=C&&le<=A;){const H=E[le],ce=B[le]=ge?$r(B[le]):qi(B[le]);if(Aa(H,ce))g(H,ce,V,null,Q,F,de,ue,ge);else break;le++}for(;le<=C&&le<=A;){const H=E[C],ce=B[A]=ge?$r(B[A]):qi(B[A]);if(Aa(H,ce))g(H,ce,V,null,Q,F,de,ue,ge);else break;C--,A--}if(le>C){if(le<=A){const H=A+1,ce=H<Re?B[H].el:ne;for(;le<=A;)g(null,B[le]=ge?$r(B[le]):qi(B[le]),V,ce,Q,F,de,ue,ge),le++}}else if(le>A)for(;le<=C;)q(E[le],Q,F,!0),le++;else{const H=le,ce=le,oe=new Map;for(le=ce;le<=A;le++){const Qe=B[le]=ge?$r(B[le]):qi(B[le]);Qe.key!=null&&oe.set(Qe.key,le)}let fe,be=0;const xe=A-ce+1;let Ae=!1,Pe=0;const nt=new Array(xe);for(le=0;le<xe;le++)nt[le]=0;for(le=H;le<=C;le++){const Qe=E[le];if(be>=xe){q(Qe,Q,F,!0);continue}let Ge;if(Qe.key!=null)Ge=oe.get(Qe.key);else for(fe=ce;fe<=A;fe++)if(nt[fe-ce]===0&&Aa(Qe,B[fe])){Ge=fe;break}Ge===void 0?q(Qe,Q,F,!0):(nt[Ge-ce]=le+1,Ge>=Pe?Pe=Ge:Ae=!0,g(Qe,B[Ge],V,null,Q,F,de,ue,ge),be++)}const _e=Ae?jy(nt):Go;for(fe=_e.length-1,le=xe-1;le>=0;le--){const Qe=ce+le,Ge=B[Qe],Be=Qe+1<Re?B[Qe+1].el:ne;nt[le]===0?g(null,Ge,V,Be,Q,F,de,ue,ge):Ae&&(fe<0||le!==_e[fe]?G(Ge,V,Be,2):fe--)}}},G=(E,B,V,ne,Q=null)=>{const{el:F,type:de,transition:ue,children:ge,shapeFlag:le}=E;if(le&6){G(E.component.subTree,B,V,ne);return}if(le&128){E.suspense.move(B,V,ne);return}if(le&64){de.move(E,B,V,Tt);return}if(de===Sr){n(F,B,V);for(let C=0;C<ge.length;C++)G(ge[C],B,V,ne);n(E.anchor,B,V);return}if(de===Gu){S(E,B,V);return}if(ne!==2&&le&1&&ue)if(ne===0)ue.beforeEnter(F),n(F,B,V),ai(()=>ue.enter(F),Q);else{const{leave:C,delayLeave:A,afterLeave:H}=ue,ce=()=>{E.ctx.isUnmounted?r(F):n(F,B,V)},oe=()=>{C(F,()=>{ce(),H&&H()})};A?A(F,ce,oe):oe()}else n(F,B,V)},q=(E,B,V,ne=!1,Q=!1)=>{const{type:F,props:de,ref:ue,children:ge,dynamicChildren:le,shapeFlag:Re,patchFlag:C,dirs:A,cacheIndex:H}=E;if(C===-2&&(Q=!1),ue!=null&&(Ir(),Za(ue,null,V,E,!0),Dr()),H!=null&&(B.renderCache[H]=void 0),Re&256){B.ctx.deactivate(E);return}const ce=Re&1&&A,oe=!Ja(E);let fe;if(oe&&(fe=de&&de.onVnodeBeforeUnmount)&&Vi(fe,B,E),Re&6)Ee(E.component,V,ne);else{if(Re&128){E.suspense.unmount(V,ne);return}ce&&Ts(E,null,B,"beforeUnmount"),Re&64?E.type.remove(E,B,V,Tt,ne):le&&!le.hasOnce&&(F!==Sr||C>0&&C&64)?Me(le,B,V,!1,!0):(F===Sr&&C&384||!Q&&Re&16)&&Me(ge,B,V),ne&&Te(E)}(oe&&(fe=de&&de.onVnodeUnmounted)||ce)&&ai(()=>{fe&&Vi(fe,B,E),ce&&Ts(E,null,B,"unmounted")},V)},Te=E=>{const{type:B,el:V,anchor:ne,transition:Q}=E;if(B===Sr){ve(V,ne);return}if(B===Gu){x(E);return}const F=()=>{r(V),Q&&!Q.persisted&&Q.afterLeave&&Q.afterLeave()};if(E.shapeFlag&1&&Q&&!Q.persisted){const{leave:de,delayLeave:ue}=Q,ge=()=>de(V,F);ue?ue(E.el,F,ge):ge()}else F()},ve=(E,B)=>{let V;for(;E!==B;)V=h(E),r(E),E=V;r(B)},Ee=(E,B,V)=>{const{bum:ne,scope:Q,job:F,subTree:de,um:ue,m:ge,a:le,parent:Re,slots:{__:C}}=E;hp(ge),hp(le),ne&&Nu(ne),Re&&ot(C)&&C.forEach(A=>{Re.renderCache[A]=void 0}),Q.stop(),F&&(F.flags|=8,q(de,E,B,V)),ue&&ai(ue,B),ai(()=>{E.isUnmounted=!0},B),B&&B.pendingBranch&&!B.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===B.pendingId&&(B.deps--,B.deps===0&&B.resolve())},Me=(E,B,V,ne=!1,Q=!1,F=0)=>{for(let de=F;de<E.length;de++)q(E[de],B,V,ne,Q)},Ie=E=>{if(E.shapeFlag&6)return Ie(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const B=h(E.anchor||E.el),V=B&&B[_y];return V?h(V):B};let Ue=!1;const Je=(E,B,V)=>{E==null?B._vnode&&q(B._vnode,null,null,!0):g(B._vnode||null,E,B,null,null,null,V),B._vnode=E,Ue||(Ue=!0,op(),P_(),Ue=!1)},Tt={p:g,um:q,m:G,r:Te,mt:k,mc:z,pc:Z,pbc:P,n:Ie,o:i};return{render:Je,hydrate:void 0,createApp:By(Je)}}function Hu({type:i,props:e},t){return t==="svg"&&i==="foreignObject"||t==="mathml"&&i==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Es({effect:i,job:e},t){t?(i.flags|=32,e.flags|=4):(i.flags&=-33,e.flags&=-5)}function Ky(i,e){return(!i||i&&!i.pendingBranch)&&e&&!e.persisted}function q_(i,e,t=!1){const n=i.children,r=e.children;if(ot(n)&&ot(r))for(let s=0;s<n.length;s++){const o=n[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=$r(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&q_(o,a)),a.type===Tu&&(a.el=o.el),a.type===ta&&!a.el&&(a.el=o.el)}}function jy(i){const e=i.slice(),t=[0];let n,r,s,o,a;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(r=t[t.length-1],i[r]<c){e[n]=r,t.push(n);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,i[t[a]]<c?s=a+1:o=a;c<i[t[s]]&&(s>0&&(e[n]=t[s-1]),t[s]=n)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function K_(i){const e=i.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:K_(e)}function hp(i){if(i)for(let e=0;e<i.length;e++)i[e].flags|=8}const $y=Symbol.for("v-scx"),Zy=()=>Cc($y);function Ws(i,e,t){return j_(i,e,t)}function j_(i,e,t=kt){const{immediate:n,deep:r,flush:s,once:o}=t,a=$n({},t),l=e&&n||!e&&s!=="post";let c;if(Sl){if(s==="sync"){const d=Zy();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=tr,d.resume=tr,d.pause=tr,d}}const u=Xn;a.call=(d,v,g)=>rr(d,u,v,g);let f=!1;s==="post"?a.scheduler=d=>{ai(d,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(d,v)=>{v?d():od(d)}),a.augmentJob=d=>{e&&(d.flags|=4),f&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const h=hy(i,e,a);return Sl&&(c?c.push(h):l&&h()),h}function Jy(i,e,t){const n=this.proxy,r=un(i)?i.includes(".")?$_(n,i):()=>n[i]:i.bind(n,n);let s;lt(e)?s=e:(s=e.handler,t=e);const o=Ul(this),a=j_(r,s.bind(n),t);return o(),a}function $_(i,e){const t=e.split(".");return()=>{let n=i;for(let r=0;r<t.length&&n;r++)n=n[t[r]];return n}}const Qy=(i,e)=>e==="modelValue"||e==="model-value"?i.modelModifiers:i[`${e}Modifiers`]||i[`${ds(e)}Modifiers`]||i[`${lo(e)}Modifiers`];function eS(i,e,...t){if(i.isUnmounted)return;const n=i.vnode.props||kt;let r=t;const s=e.startsWith("update:"),o=s&&Qy(n,e.slice(7));o&&(o.trim&&(r=t.map(u=>un(u)?u.trim():u)),o.number&&(r=t.map(Px)));let a,l=n[a=Uu(e)]||n[a=Uu(ds(e))];!l&&s&&(l=n[a=Uu(lo(e))]),l&&rr(l,i,6,r);const c=n[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,rr(c,i,6,r)}}function Z_(i,e,t=!1){const n=e.emitsCache,r=n.get(i);if(r!==void 0)return r;const s=i.emits;let o={},a=!1;if(!lt(i)){const l=c=>{const u=Z_(c,e,!0);u&&(a=!0,$n(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!s&&!a?(Jt(i)&&n.set(i,null),null):(ot(s)?s.forEach(l=>o[l]=null):$n(o,s),Jt(i)&&n.set(i,o),o)}function Mu(i,e){return!i||!du(e)?!1:(e=e.slice(2).replace(/Once$/,""),Rt(i,e[0].toLowerCase()+e.slice(1))||Rt(i,lo(e))||Rt(i,e))}function dp(i){const{type:e,vnode:t,proxy:n,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:v,inheritAttrs:g}=i,p=Yc(i);let m,M;try{if(t.shapeFlag&4){const x=r||n,w=x;m=qi(c.call(w,x,u,f,d,h,v)),M=a}else{const x=e;m=qi(x.length>1?x(f,{attrs:a,slots:o,emit:l}):x(f,null)),M=e.props?a:tS(a)}}catch(x){el.length=0,vu(x,i,1),m=Cr(ta)}let S=m;if(M&&g!==!1){const x=Object.keys(M),{shapeFlag:w}=S;x.length&&w&7&&(s&&x.some(qh)&&(M=nS(M,s)),S=na(S,M,!1,!0))}return t.dirs&&(S=na(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(t.dirs):t.dirs),t.transition&&ad(S,t.transition),m=S,Yc(p),m}const tS=i=>{let e;for(const t in i)(t==="class"||t==="style"||du(t))&&((e||(e={}))[t]=i[t]);return e},nS=(i,e)=>{const t={};for(const n in i)(!qh(n)||!(n.slice(9)in e))&&(t[n]=i[n]);return t};function iS(i,e,t){const{props:n,children:r,component:s}=i,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?pp(n,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==n[h]&&!Mu(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?pp(n,o,c):!0:!!o;return!1}function pp(i,e,t){const n=Object.keys(e);if(n.length!==Object.keys(i).length)return!0;for(let r=0;r<n.length;r++){const s=n[r];if(e[s]!==i[s]&&!Mu(t,s))return!0}return!1}function rS({vnode:i,parent:e},t){for(;e;){const n=e.subTree;if(n.suspense&&n.suspense.activeBranch===i&&(n.el=i.el),n===i)(i=e.vnode).el=t,e=e.parent;else break}}const J_=i=>i.__isSuspense;function sS(i,e){e&&e.pendingBranch?ot(i)?e.effects.push(...i):e.effects.push(i):my(i)}const Sr=Symbol.for("v-fgt"),Tu=Symbol.for("v-txt"),ta=Symbol.for("v-cmt"),Gu=Symbol.for("v-stc"),el=[];let _i=null;function ud(i=!1){el.push(_i=i?null:[])}function oS(){el.pop(),_i=el[el.length-1]||null}let yl=1;function mp(i,e=!1){yl+=i,i<0&&_i&&e&&(_i.hasOnce=!0)}function aS(i){return i.dynamicChildren=yl>0?_i||Go:null,oS(),yl>0&&_i&&_i.push(i),i}function fd(i,e,t,n,r,s){return aS(Vt(i,e,t,n,r,s,!0))}function Q_(i){return i?i.__v_isVNode===!0:!1}function Aa(i,e){return i.type===e.type&&i.key===e.key}const e0=({key:i})=>i??null,Pc=({ref:i,ref_key:e,ref_for:t})=>(typeof i=="number"&&(i=""+i),i!=null?un(i)||In(i)||lt(i)?{i:Ji,r:i,k:e,f:!!t}:i:null);function Vt(i,e=null,t=null,n=0,r=null,s=i===Sr?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&e0(e),ref:e&&Pc(e),scopeId:I_,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ji};return a?(hd(l,t),s&128&&i.normalize(l)):t&&(l.shapeFlag|=un(t)?8:16),yl>0&&!o&&_i&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&_i.push(l),l}const Cr=lS;function lS(i,e=null,t=null,n=0,r=null,s=!1){if((!i||i===Py)&&(i=ta),Q_(i)){const a=na(i,e,!0);return t&&hd(a,t),yl>0&&!s&&_i&&(a.shapeFlag&6?_i[_i.indexOf(i)]=a:_i.push(a)),a.patchFlag=-2,a}if(vS(i)&&(i=i.__vccOpts),e){e=cS(e);let{class:a,style:l}=e;a&&!un(a)&&(e.class=_u(a)),Jt(l)&&(sd(l)&&!ot(l)&&(l=$n({},l)),e.style=$h(l))}const o=un(i)?1:J_(i)?128:vy(i)?64:Jt(i)?4:lt(i)?2:0;return Vt(i,e,t,n,r,o,s,!0)}function cS(i){return i?sd(i)||H_(i)?$n({},i):i:null}function na(i,e,t=!1,n=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=i,c=e?uS(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:i.type,props:c,key:c&&e0(c),ref:e&&e.ref?t&&s?ot(s)?s.concat(Pc(e)):[s,Pc(e)]:Pc(e):s,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:a,target:i.target,targetStart:i.targetStart,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==Sr?o===-1?16:o|16:o,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:l,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&na(i.ssContent),ssFallback:i.ssFallback&&na(i.ssFallback),el:i.el,anchor:i.anchor,ctx:i.ctx,ce:i.ce};return l&&n&&ad(u,l.clone(u)),u}function Lc(i=" ",e=0){return Cr(Tu,null,i,e)}function qi(i){return i==null||typeof i=="boolean"?Cr(ta):ot(i)?Cr(Sr,null,i.slice()):Q_(i)?$r(i):Cr(Tu,null,String(i))}function $r(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:na(i)}function hd(i,e){let t=0;const{shapeFlag:n}=i;if(e==null)e=null;else if(ot(e))t=16;else if(typeof e=="object")if(n&65){const r=e.default;r&&(r._c&&(r._d=!1),hd(i,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!H_(e)?e._ctx=Ji:r===3&&Ji&&(Ji.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else lt(e)?(e={default:e,_ctx:Ji},t=32):(e=String(e),n&64?(t=16,e=[Lc(e)]):t=8);i.children=e,i.shapeFlag|=t}function uS(...i){const e={};for(let t=0;t<i.length;t++){const n=i[t];for(const r in n)if(r==="class")e.class!==n.class&&(e.class=_u([e.class,n.class]));else if(r==="style")e.style=$h([e.style,n.style]);else if(du(r)){const s=e[r],o=n[r];o&&s!==o&&!(ot(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=n[r])}return e}function Vi(i,e,t,n=null){rr(i,e,7,[t,n])}const fS=B_();let hS=0;function dS(i,e,t){const n=i.type,r=(e?e.appContext:i.appContext)||fS,s={uid:hS++,vnode:i,type:n,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Fx(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:V_(n,r),emitsOptions:Z_(n,r),emit:null,emitted:null,propsDefaults:kt,inheritAttrs:n.inheritAttrs,ctx:kt,data:kt,props:kt,attrs:kt,slots:kt,refs:kt,setupState:kt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=eS.bind(null,s),i.ce&&i.ce(s),s}let Xn=null,Kc,th;{const i=gu(),e=(t,n)=>{let r;return(r=i[t])||(r=i[t]=[]),r.push(n),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Kc=e("__VUE_INSTANCE_SETTERS__",t=>Xn=t),th=e("__VUE_SSR_SETTERS__",t=>Sl=t)}const Ul=i=>{const e=Xn;return Kc(i),i.scope.on(),()=>{i.scope.off(),Kc(e)}},gp=()=>{Xn&&Xn.scope.off(),Kc(null)};function t0(i){return i.vnode.shapeFlag&4}let Sl=!1;function pS(i,e=!1,t=!1){e&&th(e);const{props:n,children:r}=i.vnode,s=t0(i);zy(i,n,s,e),Wy(i,r,t||e);const o=s?mS(i,e):void 0;return e&&th(!1),o}function mS(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=new Proxy(i.ctx,Ly);const{setup:n}=t;if(n){Ir();const r=i.setupContext=n.length>1?_S(i):null,s=Ul(i),o=Dl(n,i,0,[i.props,r]),a=s_(o);if(Dr(),s(),(a||i.sp)&&!Ja(i)&&D_(i),a){if(o.then(gp,gp),e)return o.then(l=>{_p(i,l)}).catch(l=>{vu(l,i,0)});i.asyncDep=o}else _p(i,o)}else n0(i)}function _p(i,e,t){lt(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:Jt(e)&&(i.setupState=w_(e)),n0(i)}function n0(i,e,t){const n=i.type;i.render||(i.render=n.render||tr);{const r=Ul(i);Ir();try{Iy(i)}finally{Dr(),r()}}}const gS={get(i,e){return Rn(i,"get",""),i[e]}};function _S(i){const e=t=>{i.exposed=t||{}};return{attrs:new Proxy(i.attrs,gS),slots:i.slots,emit:i.emit,expose:e}}function dd(i){return i.exposed?i.exposeProxy||(i.exposeProxy=new Proxy(w_(ry(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in Qa)return Qa[t](i)},has(e,t){return t in e||t in Qa}})):i.proxy}function vS(i){return lt(i)&&"__vccOpts"in i}const nh=(i,e)=>uy(i,e,Sl),xS="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ih;const vp=typeof window<"u"&&window.trustedTypes;if(vp)try{ih=vp.createPolicy("vue",{createHTML:i=>i})}catch{}const i0=ih?i=>ih.createHTML(i):i=>i,yS="http://www.w3.org/2000/svg",SS="http://www.w3.org/1998/Math/MathML",xr=typeof document<"u"?document:null,xp=xr&&xr.createElement("template"),MS={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,n)=>{const r=e==="svg"?xr.createElementNS(yS,i):e==="mathml"?xr.createElementNS(SS,i):t?xr.createElement(i,{is:t}):xr.createElement(i);return i==="select"&&n&&n.multiple!=null&&r.setAttribute("multiple",n.multiple),r},createText:i=>xr.createTextNode(i),createComment:i=>xr.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>xr.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},insertStaticContent(i,e,t,n,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{xp.innerHTML=i0(n==="svg"?`<svg>${i}</svg>`:n==="mathml"?`<math>${i}</math>`:i);const a=xp.content;if(n==="svg"||n==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},TS=Symbol("_vtc");function ES(i,e,t){const n=i[TS];n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}const yp=Symbol("_vod"),bS=Symbol("_vsh"),AS=Symbol(""),wS=/(^|;)\s*display\s*:/;function RS(i,e,t){const n=i.style,r=un(t);let s=!1;if(t&&!r){if(e)if(un(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Ic(n,a,"")}else for(const o in e)t[o]==null&&Ic(n,o,"");for(const o in t)o==="display"&&(s=!0),Ic(n,o,t[o])}else if(r){if(e!==t){const o=n[AS];o&&(t+=";"+o),n.cssText=t,s=wS.test(t)}}else e&&i.removeAttribute("style");yp in i&&(i[yp]=s?n.display:"",i[bS]&&(n.display="none"))}const Sp=/\s*!important$/;function Ic(i,e,t){if(ot(t))t.forEach(n=>Ic(i,e,n));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const n=CS(i,e);Sp.test(t)?i.setProperty(lo(n),t.replace(Sp,""),"important"):i[n]=t}}const Mp=["Webkit","Moz","ms"],Vu={};function CS(i,e){const t=Vu[e];if(t)return t;let n=ds(e);if(n!=="filter"&&n in i)return Vu[e]=n;n=l_(n);for(let r=0;r<Mp.length;r++){const s=Mp[r]+n;if(s in i)return Vu[e]=s}return e}const Tp="http://www.w3.org/1999/xlink";function Ep(i,e,t,n,r,s=Ox(e)){n&&e.startsWith("xlink:")?t==null?i.removeAttributeNS(Tp,e.slice(6,e.length)):i.setAttributeNS(Tp,e,t):t==null||s&&!c_(t)?i.removeAttribute(e):i.setAttribute(e,s?"":vs(t)?String(t):t)}function bp(i,e,t,n,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(i[e]=e==="innerHTML"?i0(t):t);return}const s=i.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?i.getAttribute("value")||"":i.value,l=t==null?i.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in i))&&(i.value=l),t==null&&i.removeAttribute(e),i._value=t;return}let o=!1;if(t===""||t==null){const a=typeof i[e];a==="boolean"?t=c_(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{i[e]=t}catch{}o&&i.removeAttribute(r||e)}function PS(i,e,t,n){i.addEventListener(e,t,n)}function LS(i,e,t,n){i.removeEventListener(e,t,n)}const Ap=Symbol("_vei");function IS(i,e,t,n,r=null){const s=i[Ap]||(i[Ap]={}),o=s[e];if(n&&o)o.value=n;else{const[a,l]=DS(e);if(n){const c=s[e]=OS(n,r);PS(i,a,c,l)}else o&&(LS(i,a,o,l),s[e]=void 0)}}const wp=/(?:Once|Passive|Capture)$/;function DS(i){let e;if(wp.test(i)){e={};let n;for(;n=i.match(wp);)i=i.slice(0,i.length-n[0].length),e[n[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):lo(i.slice(2)),e]}let Wu=0;const US=Promise.resolve(),NS=()=>Wu||(US.then(()=>Wu=0),Wu=Date.now());function OS(i,e){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;rr(FS(n,t.value),e,5,[n])};return t.value=i,t.attached=NS(),t}function FS(i,e){if(ot(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(n=>r=>!r._stopped&&n&&n(r))}else return e}const Rp=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&i.charCodeAt(2)>96&&i.charCodeAt(2)<123,BS=(i,e,t,n,r,s)=>{const o=r==="svg";e==="class"?ES(i,n,o):e==="style"?RS(i,t,n):du(e)?qh(e)||IS(i,e,t,n,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):kS(i,e,n,o))?(bp(i,e,n),!i.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ep(i,e,n,o,s,e!=="value")):i._isVueCE&&(/[A-Z]/.test(e)||!un(n))?bp(i,ds(e),n,s,e):(e==="true-value"?i._trueValue=n:e==="false-value"&&(i._falseValue=n),Ep(i,e,n,o))};function kS(i,e,t,n){if(n)return!!(e==="innerHTML"||e==="textContent"||e in i&&Rp(e)&&lt(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=i.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Rp(e)&&un(t)?!1:e in i}const zS=$n({patchProp:BS},MS);let Cp;function HS(){return Cp||(Cp=Yy(zS))}const GS=(...i)=>{const e=HS().createApp(...i),{mount:t}=e;return e.mount=n=>{const r=WS(n);if(!r)return;const s=e._component;!lt(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,VS(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function VS(i){if(i instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&i instanceof MathMLElement)return"mathml"}function WS(i){return un(i)?document.querySelector(i):i}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pd="157",XS=0,Pp=1,YS=2,r0=1,qS=2,vr=3,Ur=0,Kn=1,ji=2,as=0,Yo=1,Lp=2,Ip=3,Dp=4,KS=5,No=100,jS=101,$S=102,Up=103,Np=104,ZS=200,JS=201,QS=202,eM=203,s0=204,o0=205,tM=206,nM=207,iM=208,rM=209,sM=210,oM=0,aM=1,lM=2,rh=3,cM=4,uM=5,fM=6,hM=7,a0=0,dM=1,pM=2,ls=0,mM=1,gM=2,_M=3,l0=4,vM=5,c0=300,ia=301,ra=302,sh=303,oh=304,Eu=306,sa=1e3,Qn=1001,jc=1002,_n=1003,ah=1004,Dc=1005,cn=1006,u0=1007,ps=1008,cs=1009,xM=1010,yM=1011,md=1012,f0=1013,Qr=1014,Pi=1015,Ar=1016,h0=1017,d0=1018,Xs=1020,SM=1021,di=1023,MM=1024,TM=1025,Ys=1026,oa=1027,p0=1028,m0=1029,EM=1030,g0=1031,_0=1033,Xu=33776,Yu=33777,qu=33778,Ku=33779,Op=35840,Fp=35841,Bp=35842,kp=35843,bM=36196,zp=37492,Hp=37496,Gp=37808,Vp=37809,Wp=37810,Xp=37811,Yp=37812,qp=37813,Kp=37814,jp=37815,$p=37816,Zp=37817,Jp=37818,Qp=37819,em=37820,tm=37821,ju=36492,nm=36494,im=36495,AM=36283,rm=36284,sm=36285,om=36286,Ml=2300,aa=2301,$u=2302,am=2400,lm=2401,cm=2402,wM=2500,RM=0,v0=1,lh=2,x0=3e3,qs=3001,CM=3200,PM=3201,y0=0,LM=1,pi="",$t="srgb",fn="srgb-linear",gd="display-p3",bu="display-p3-linear",$c="linear",Ht="srgb",Zc="rec709",Jc="p3",Zu=7680,IM=519,DM=512,UM=513,NM=514,OM=515,FM=516,BM=517,kM=518,zM=519,ch=35044,um="300 es",uh=1035,wr=2e3,Qc=2001;class ya{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let fm=1234567;const tl=Math.PI/180,la=180/Math.PI;function Gi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(En[i&255]+En[i>>8&255]+En[i>>16&255]+En[i>>24&255]+"-"+En[e&255]+En[e>>8&255]+"-"+En[e>>16&15|64]+En[e>>24&255]+"-"+En[t&63|128]+En[t>>8&255]+"-"+En[t>>16&255]+En[t>>24&255]+En[n&255]+En[n>>8&255]+En[n>>16&255]+En[n>>24&255]).toLowerCase()}function xn(i,e,t){return Math.max(e,Math.min(t,i))}function _d(i,e){return(i%e+e)%e}function HM(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function GM(i,e,t){return i!==e?(t-i)/(e-i):0}function nl(i,e,t){return(1-t)*i+t*e}function VM(i,e,t,n){return nl(i,e,1-Math.exp(-t*n))}function WM(i,e=1){return e-Math.abs(_d(i,e*2)-e)}function XM(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function YM(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function qM(i,e){return i+Math.floor(Math.random()*(e-i+1))}function KM(i,e){return i+Math.random()*(e-i)}function jM(i){return i*(.5-Math.random())}function $M(i){i!==void 0&&(fm=i);let e=fm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ZM(i){return i*tl}function JM(i){return i*la}function fh(i){return(i&i-1)===0&&i!==0}function S0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function eu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function QM(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),f=s((e-n)/2),h=o((e-n)/2),d=s((n-e)/2),v=o((n-e)/2);switch(r){case"XYX":i.set(a*u,l*f,l*h,a*c);break;case"YZY":i.set(l*h,a*u,l*f,a*c);break;case"ZXZ":i.set(l*f,l*h,a*u,a*c);break;case"XZX":i.set(a*u,l*v,l*d,a*c);break;case"YXY":i.set(l*d,a*u,l*v,a*c);break;case"ZYZ":i.set(l*v,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function $i(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Lt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const hh={DEG2RAD:tl,RAD2DEG:la,generateUUID:Gi,clamp:xn,euclideanModulo:_d,mapLinear:HM,inverseLerp:GM,lerp:nl,damp:VM,pingpong:WM,smoothstep:XM,smootherstep:YM,randInt:qM,randFloat:KM,randFloatSpread:jM,seededRandom:$M,degToRad:ZM,radToDeg:JM,isPowerOfTwo:fh,ceilPowerOfTwo:S0,floorPowerOfTwo:eu,setQuaternionFromProperEuler:QM,normalize:Lt,denormalize:$i};class vt{constructor(e=0,t=0){vt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(xn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ht{constructor(e,t,n,r,s,o,a,l,c){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],v=n[8],g=r[0],p=r[3],m=r[6],M=r[1],S=r[4],x=r[7],w=r[2],L=r[5],R=r[8];return s[0]=o*g+a*M+l*w,s[3]=o*p+a*S+l*L,s[6]=o*m+a*x+l*R,s[1]=c*g+u*M+f*w,s[4]=c*p+u*S+f*L,s[7]=c*m+u*x+f*R,s[2]=h*g+d*M+v*w,s[5]=h*p+d*S+v*L,s[8]=h*m+d*x+v*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,v=t*f+n*h+r*d;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=f*g,e[1]=(r*c-u*n)*g,e[2]=(a*n-r*o)*g,e[3]=h*g,e[4]=(u*t-r*l)*g,e[5]=(r*s-a*t)*g,e[6]=d*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ju.makeScale(e,t)),this}rotate(e){return this.premultiply(Ju.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ju.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ju=new ht;function M0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Tl(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function eT(){const i=Tl("canvas");return i.style.display="block",i}const hm={};function il(i){i in hm||(hm[i]=!0,console.warn(i))}const dm=new ht().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),pm=new ht().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Hl={[fn]:{transfer:$c,primaries:Zc,toReference:i=>i,fromReference:i=>i},[$t]:{transfer:Ht,primaries:Zc,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[bu]:{transfer:$c,primaries:Jc,toReference:i=>i.applyMatrix3(pm),fromReference:i=>i.applyMatrix3(dm)},[gd]:{transfer:Ht,primaries:Jc,toReference:i=>i.convertSRGBToLinear().applyMatrix3(pm),fromReference:i=>i.applyMatrix3(dm).convertLinearToSRGB()}},tT=new Set([fn,bu]),Ct={enabled:!0,_workingColorSpace:fn,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!tT.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Hl[e].toReference,r=Hl[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Hl[i].primaries},getTransfer:function(i){return i===pi?$c:Hl[i].transfer}};function qo(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Qu(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ho;class T0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ho===void 0&&(ho=Tl("canvas")),ho.width=e.width,ho.height=e.height;const n=ho.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ho}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Tl("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=qo(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(qo(t[n]/255)*255):t[n]=qo(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let nT=0;class E0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nT++}),this.uuid=Gi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ef(r[o].image)):s.push(ef(r[o]))}else s=ef(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function ef(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?T0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let iT=0;class Sn extends ya{constructor(e=Sn.DEFAULT_IMAGE,t=Sn.DEFAULT_MAPPING,n=Qn,r=Qn,s=cn,o=ps,a=di,l=cs,c=Sn.DEFAULT_ANISOTROPY,u=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:iT++}),this.uuid=Gi(),this.name="",this.source=new E0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(il("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===qs?$t:pi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==c0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sa:e.x=e.x-Math.floor(e.x);break;case Qn:e.x=e.x<0?0:1;break;case jc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case sa:e.y=e.y-Math.floor(e.y);break;case Qn:e.y=e.y<0?0:1;break;case jc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return il("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===$t?qs:x0}set encoding(e){il("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===qs?$t:pi}}Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=c0;Sn.DEFAULT_ANISOTROPY=1;class Nt{constructor(e=0,t=0,n=0,r=1){Nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],v=l[9],g=l[2],p=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-g)<.01&&Math.abs(v-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+g)<.1&&Math.abs(v+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,x=(d+1)/2,w=(m+1)/2,L=(u+h)/4,R=(f+g)/4,z=(v+p)/4;return S>x&&S>w?S<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(S),r=L/n,s=R/n):x>w?x<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),n=L/r,s=z/r):w<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),n=R/s,r=z/s),this.set(n,r,s,t),this}let M=Math.sqrt((p-v)*(p-v)+(f-g)*(f-g)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(p-v)/M,this.y=(f-g)/M,this.z=(h-u)/M,this.w=Math.acos((c+d+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rT extends ya{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(il("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===qs?$t:pi),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Sn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new E0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class no extends rT{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class b0 extends Sn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=_n,this.minFilter=_n,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sT extends Sn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=_n,this.minFilter=_n,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xs{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],f=n[r+3];const h=s[o+0],d=s[o+1],v=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=d,e[t+2]=v,e[t+3]=g;return}if(f!==g||l!==h||c!==d||u!==v){let p=1-a;const m=l*h+c*d+u*v+f*g,M=m>=0?1:-1,S=1-m*m;if(S>Number.EPSILON){const w=Math.sqrt(S),L=Math.atan2(w,m*M);p=Math.sin(p*L)/w,a=Math.sin(a*L)/w}const x=a*M;if(l=l*p+h*x,c=c*p+d*x,u=u*p+v*x,f=f*p+g*x,p===1-a){const w=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=w,c*=w,u*=w,f*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],f=s[o],h=s[o+1],d=s[o+2],v=s[o+3];return e[t]=a*v+u*f+l*d-c*h,e[t+1]=l*v+u*h+c*f-a*d,e[t+2]=c*v+u*d+a*h-l*f,e[t+3]=u*v-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),f=a(s/2),h=l(n/2),d=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*v,this._y=c*d*f-h*u*v,this._z=c*u*v+h*d*f,this._w=c*u*f-h*d*v;break;case"YXZ":this._x=h*u*f+c*d*v,this._y=c*d*f-h*u*v,this._z=c*u*v-h*d*f,this._w=c*u*f+h*d*v;break;case"ZXY":this._x=h*u*f-c*d*v,this._y=c*d*f+h*u*v,this._z=c*u*v+h*d*f,this._w=c*u*f-h*d*v;break;case"ZYX":this._x=h*u*f-c*d*v,this._y=c*d*f+h*u*v,this._z=c*u*v-h*d*f,this._w=c*u*f+h*d*v;break;case"YZX":this._x=h*u*f+c*d*v,this._y=c*d*f+h*u*v,this._z=c*u*v-h*d*f,this._w=c*u*f-h*d*v;break;case"XZY":this._x=h*u*f-c*d*v,this._y=c*d*f-h*u*v,this._z=c*u*v+h*d*f,this._w=c*u*f+h*d*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,t=0,n=0){Y.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(mm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*r-a*n,u=l*n+a*t-s*r,f=l*r+s*n-o*t,h=-s*t-o*n-a*r;return this.x=c*l+h*-s+u*-a-f*-o,this.y=u*l+h*-o+f*-s-c*-a,this.z=f*l+h*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return tf.copy(this).projectOnVector(e),this.sub(tf)}reflect(e){return this.sub(tf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(xn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const tf=new Y,mm=new xs;class kr{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(hr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(hr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=hr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),po.copy(e.boundingBox),po.applyMatrix4(e.matrixWorld),this.union(po);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)hr.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(hr)}else r.boundingBox===null&&r.computeBoundingBox(),po.copy(r.boundingBox),po.applyMatrix4(e.matrixWorld),this.union(po)}const n=e.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,hr),hr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wa),Gl.subVectors(this.max,wa),mo.subVectors(e.a,wa),go.subVectors(e.b,wa),_o.subVectors(e.c,wa),zr.subVectors(go,mo),Hr.subVectors(_o,go),bs.subVectors(mo,_o);let t=[0,-zr.z,zr.y,0,-Hr.z,Hr.y,0,-bs.z,bs.y,zr.z,0,-zr.x,Hr.z,0,-Hr.x,bs.z,0,-bs.x,-zr.y,zr.x,0,-Hr.y,Hr.x,0,-bs.y,bs.x,0];return!nf(t,mo,go,_o,Gl)||(t=[1,0,0,0,1,0,0,0,1],!nf(t,mo,go,_o,Gl))?!1:(Vl.crossVectors(zr,Hr),t=[Vl.x,Vl.y,Vl.z],nf(t,mo,go,_o,Gl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const fr=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],hr=new Y,po=new kr,mo=new Y,go=new Y,_o=new Y,zr=new Y,Hr=new Y,bs=new Y,wa=new Y,Gl=new Y,Vl=new Y,As=new Y;function nf(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){As.fromArray(i,s);const a=r.x*Math.abs(As.x)+r.y*Math.abs(As.y)+r.z*Math.abs(As.z),l=e.dot(As),c=t.dot(As),u=n.dot(As);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const oT=new kr,Ra=new Y,rf=new Y;class or{constructor(e=new Y,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):oT.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ra.subVectors(e,this.center);const t=Ra.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ra,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ra.copy(e.center).add(rf)),this.expandByPoint(Ra.copy(e.center).sub(rf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const dr=new Y,sf=new Y,Wl=new Y,Gr=new Y,of=new Y,Xl=new Y,af=new Y;class Au{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,dr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=dr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(dr.copy(this.origin).addScaledVector(this.direction,t),dr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){sf.copy(e).add(t).multiplyScalar(.5),Wl.copy(t).sub(e).normalize(),Gr.copy(this.origin).sub(sf);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Wl),a=Gr.dot(this.direction),l=-Gr.dot(Wl),c=Gr.lengthSq(),u=Math.abs(1-o*o);let f,h,d,v;if(u>0)if(f=o*l-a,h=o*a-l,v=s*u,f>=0)if(h>=-v)if(h<=v){const g=1/u;f*=g,h*=g,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-v?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=v?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(sf).addScaledVector(Wl,h),d}intersectSphere(e,t){dr.subVectors(e.center,this.origin);const n=dr.dot(this.direction),r=dr.dot(dr)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,dr)!==null}intersectTriangle(e,t,n,r,s){of.subVectors(t,e),Xl.subVectors(n,e),af.crossVectors(of,Xl);let o=this.direction.dot(af),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Gr.subVectors(this.origin,e);const l=a*this.direction.dot(Xl.crossVectors(Gr,Xl));if(l<0)return null;const c=a*this.direction.dot(of.cross(Gr));if(c<0||l+c>o)return null;const u=-a*Gr.dot(af);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(e,t,n,r,s,o,a,l,c,u,f,h,d,v,g,p){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,f,h,d,v,g,p)}set(e,t,n,r,s,o,a,l,c,u,f,h,d,v,g,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=f,m[14]=h,m[3]=d,m[7]=v,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/vo.setFromMatrixColumn(e,0).length(),s=1/vo.setFromMatrixColumn(e,1).length(),o=1/vo.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,d=o*f,v=a*u,g=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+v*c,t[5]=h-g*c,t[9]=-a*l,t[2]=g-h*c,t[6]=v+d*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,v=c*u,g=c*f;t[0]=h+g*a,t[4]=v*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-v,t[6]=g+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,v=c*u,g=c*f;t[0]=h-g*a,t[4]=-o*f,t[8]=v+d*a,t[1]=d+v*a,t[5]=o*u,t[9]=g-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*f,v=a*u,g=a*f;t[0]=l*u,t[4]=v*c-d,t[8]=h*c+g,t[1]=l*f,t[5]=g*c+h,t[9]=d*c-v,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,v=a*l,g=a*c;t[0]=l*u,t[4]=g-h*f,t[8]=v*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+v,t[10]=h-g*f}else if(e.order==="XZY"){const h=o*l,d=o*c,v=a*l,g=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+g,t[5]=o*u,t[9]=d*f-v,t[2]=v*f-d,t[6]=a*u,t[10]=g*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(aT,e,lT)}lookAt(e,t,n){const r=this.elements;return si.subVectors(e,t),si.lengthSq()===0&&(si.z=1),si.normalize(),Vr.crossVectors(n,si),Vr.lengthSq()===0&&(Math.abs(n.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),Vr.crossVectors(n,si)),Vr.normalize(),Yl.crossVectors(si,Vr),r[0]=Vr.x,r[4]=Yl.x,r[8]=si.x,r[1]=Vr.y,r[5]=Yl.y,r[9]=si.y,r[2]=Vr.z,r[6]=Yl.z,r[10]=si.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],v=n[2],g=n[6],p=n[10],m=n[14],M=n[3],S=n[7],x=n[11],w=n[15],L=r[0],R=r[4],z=r[8],T=r[12],P=r[1],J=r[5],W=r[9],re=r[13],k=r[2],K=r[6],$=r[10],X=r[14],Z=r[3],se=r[7],D=r[11],G=r[15];return s[0]=o*L+a*P+l*k+c*Z,s[4]=o*R+a*J+l*K+c*se,s[8]=o*z+a*W+l*$+c*D,s[12]=o*T+a*re+l*X+c*G,s[1]=u*L+f*P+h*k+d*Z,s[5]=u*R+f*J+h*K+d*se,s[9]=u*z+f*W+h*$+d*D,s[13]=u*T+f*re+h*X+d*G,s[2]=v*L+g*P+p*k+m*Z,s[6]=v*R+g*J+p*K+m*se,s[10]=v*z+g*W+p*$+m*D,s[14]=v*T+g*re+p*X+m*G,s[3]=M*L+S*P+x*k+w*Z,s[7]=M*R+S*J+x*K+w*se,s[11]=M*z+S*W+x*$+w*D,s[15]=M*T+S*re+x*X+w*G,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],v=e[3],g=e[7],p=e[11],m=e[15];return v*(+s*l*f-r*c*f-s*a*h+n*c*h+r*a*d-n*l*d)+g*(+t*l*d-t*c*h+s*o*h-r*o*d+r*c*u-s*l*u)+p*(+t*c*f-t*a*d-s*o*f+n*o*d+s*a*u-n*c*u)+m*(-r*a*u-t*l*f+t*a*h+r*o*f-n*o*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],v=e[12],g=e[13],p=e[14],m=e[15],M=f*p*c-g*h*c+g*l*d-a*p*d-f*l*m+a*h*m,S=v*h*c-u*p*c-v*l*d+o*p*d+u*l*m-o*h*m,x=u*g*c-v*f*c+v*a*d-o*g*d-u*a*m+o*f*m,w=v*f*l-u*g*l-v*a*h+o*g*h+u*a*p-o*f*p,L=t*M+n*S+r*x+s*w;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/L;return e[0]=M*R,e[1]=(g*h*s-f*p*s-g*r*d+n*p*d+f*r*m-n*h*m)*R,e[2]=(a*p*s-g*l*s+g*r*c-n*p*c-a*r*m+n*l*m)*R,e[3]=(f*l*s-a*h*s-f*r*c+n*h*c+a*r*d-n*l*d)*R,e[4]=S*R,e[5]=(u*p*s-v*h*s+v*r*d-t*p*d-u*r*m+t*h*m)*R,e[6]=(v*l*s-o*p*s-v*r*c+t*p*c+o*r*m-t*l*m)*R,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*d+t*l*d)*R,e[8]=x*R,e[9]=(v*f*s-u*g*s-v*n*d+t*g*d+u*n*m-t*f*m)*R,e[10]=(o*g*s-v*a*s+v*n*c-t*g*c-o*n*m+t*a*m)*R,e[11]=(u*a*s-o*f*s-u*n*c+t*f*c+o*n*d-t*a*d)*R,e[12]=w*R,e[13]=(u*g*r-v*f*r+v*n*h-t*g*h-u*n*p+t*f*p)*R,e[14]=(v*a*r-o*g*r-v*n*l+t*g*l+o*n*p-t*a*p)*R,e[15]=(o*f*r-u*a*r+u*n*l-t*f*l-o*n*h+t*a*h)*R,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,v=s*f,g=o*u,p=o*f,m=a*f,M=l*c,S=l*u,x=l*f,w=n.x,L=n.y,R=n.z;return r[0]=(1-(g+m))*w,r[1]=(d+x)*w,r[2]=(v-S)*w,r[3]=0,r[4]=(d-x)*L,r[5]=(1-(h+m))*L,r[6]=(p+M)*L,r[7]=0,r[8]=(v+S)*R,r[9]=(p-M)*R,r[10]=(1-(h+g))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=vo.set(r[0],r[1],r[2]).length();const o=vo.set(r[4],r[5],r[6]).length(),a=vo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ni.copy(this);const c=1/s,u=1/o,f=1/a;return Ni.elements[0]*=c,Ni.elements[1]*=c,Ni.elements[2]*=c,Ni.elements[4]*=u,Ni.elements[5]*=u,Ni.elements[6]*=u,Ni.elements[8]*=f,Ni.elements[9]*=f,Ni.elements[10]*=f,t.setFromRotationMatrix(Ni),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=wr){const l=this.elements,c=2*s/(t-e),u=2*s/(n-r),f=(t+e)/(t-e),h=(n+r)/(n-r);let d,v;if(a===wr)d=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Qc)d=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=wr){const l=this.elements,c=1/(t-e),u=1/(n-r),f=1/(o-s),h=(t+e)*c,d=(n+r)*u;let v,g;if(a===wr)v=(o+s)*f,g=-2*f;else if(a===Qc)v=s*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const vo=new Y,Ni=new pt,aT=new Y(0,0,0),lT=new Y(1,1,1),Vr=new Y,Yl=new Y,si=new Y,gm=new pt,_m=new xs;class wu{constructor(e=0,t=0,n=0,r=wu.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(xn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(xn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-xn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(xn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-xn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return gm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gm,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _m.setFromEuler(this),this.setFromQuaternion(_m,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wu.DEFAULT_ORDER="XYZ";class A0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let cT=0;const vm=new Y,xo=new xs,pr=new pt,ql=new Y,Ca=new Y,uT=new Y,fT=new xs,xm=new Y(1,0,0),ym=new Y(0,1,0),Sm=new Y(0,0,1),hT={type:"added"},dT={type:"removed"};class jt extends ya{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cT++}),this.uuid=Gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jt.DEFAULT_UP.clone();const e=new Y,t=new wu,n=new xs,r=new Y(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pt},normalMatrix:{value:new ht}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new A0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xo.setFromAxisAngle(e,t),this.quaternion.multiply(xo),this}rotateOnWorldAxis(e,t){return xo.setFromAxisAngle(e,t),this.quaternion.premultiply(xo),this}rotateX(e){return this.rotateOnAxis(xm,e)}rotateY(e){return this.rotateOnAxis(ym,e)}rotateZ(e){return this.rotateOnAxis(Sm,e)}translateOnAxis(e,t){return vm.copy(e).applyQuaternion(this.quaternion),this.position.add(vm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xm,e)}translateY(e){return this.translateOnAxis(ym,e)}translateZ(e){return this.translateOnAxis(Sm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ql.copy(e):ql.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ca.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pr.lookAt(Ca,ql,this.up):pr.lookAt(ql,Ca,this.up),this.quaternion.setFromRotationMatrix(pr),r&&(pr.extractRotation(r.matrixWorld),xo.setFromRotationMatrix(pr),this.quaternion.premultiply(xo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(hT)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(dT)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pr.multiply(e.parent.matrixWorld)),e.applyMatrix4(pr),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ca,e,uT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ca,fT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),v=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),v.length>0&&(n.nodes=v)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}jt.DEFAULT_UP=new Y(0,1,0);jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Oi=new Y,mr=new Y,lf=new Y,gr=new Y,yo=new Y,So=new Y,Mm=new Y,cf=new Y,uf=new Y,ff=new Y;let Kl=!1;class ki{constructor(e=new Y,t=new Y,n=new Y){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Oi.subVectors(e,t),r.cross(Oi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Oi.subVectors(r,t),mr.subVectors(n,t),lf.subVectors(e,t);const o=Oi.dot(Oi),a=Oi.dot(mr),l=Oi.dot(lf),c=mr.dot(mr),u=mr.dot(lf),f=o*c-a*a;if(f===0)return s.set(-2,-1,-1);const h=1/f,d=(c*l-a*u)*h,v=(o*u-a*l)*h;return s.set(1-d-v,v,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,gr),gr.x>=0&&gr.y>=0&&gr.x+gr.y<=1}static getUV(e,t,n,r,s,o,a,l){return Kl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Kl=!0),this.getInterpolation(e,t,n,r,s,o,a,l)}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,gr),l.setScalar(0),l.addScaledVector(s,gr.x),l.addScaledVector(o,gr.y),l.addScaledVector(a,gr.z),l}static isFrontFacing(e,t,n,r){return Oi.subVectors(n,t),mr.subVectors(e,t),Oi.cross(mr).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Oi.subVectors(this.c,this.b),mr.subVectors(this.a,this.b),Oi.cross(mr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ki.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ki.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return Kl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Kl=!0),ki.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}getInterpolation(e,t,n,r,s){return ki.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return ki.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ki.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;yo.subVectors(r,n),So.subVectors(s,n),cf.subVectors(e,n);const l=yo.dot(cf),c=So.dot(cf);if(l<=0&&c<=0)return t.copy(n);uf.subVectors(e,r);const u=yo.dot(uf),f=So.dot(uf);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(yo,o);ff.subVectors(e,s);const d=yo.dot(ff),v=So.dot(ff);if(v>=0&&d<=v)return t.copy(s);const g=d*c-l*v;if(g<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(n).addScaledVector(So,a);const p=u*v-d*f;if(p<=0&&f-u>=0&&d-v>=0)return Mm.subVectors(s,r),a=(f-u)/(f-u+(d-v)),t.copy(r).addScaledVector(Mm,a);const m=1/(p+g+h);return o=g*m,a=h*m,t.copy(n).addScaledVector(yo,o).addScaledVector(So,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let pT=0;class nr extends ya{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pT++}),this.uuid=Gi(),this.name="",this.type="Material",this.blending=Yo,this.side=Ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=s0,this.blendDst=o0,this.blendEquation=No,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=rh,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=IM,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zu,this.stencilZFail=Zu,this.stencilZPass=Zu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Yo&&(n.blending=this.blending),this.side!==Ur&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const w0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wr={h:0,s:0,l:0},jl={h:0,s:0,l:0};function hf(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ct{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ct.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Ct.workingColorSpace){if(e=_d(e,1),t=xn(t,0,1),n=xn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=hf(o,s,e+1/3),this.g=hf(o,s,e),this.b=hf(o,s,e-1/3)}return Ct.toWorkingColorSpace(this,r),this}setStyle(e,t=$t){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$t){const n=w0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qo(e.r),this.g=qo(e.g),this.b=qo(e.b),this}copyLinearToSRGB(e){return this.r=Qu(e.r),this.g=Qu(e.g),this.b=Qu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$t){return Ct.fromWorkingColorSpace(bn.copy(this),e),Math.round(xn(bn.r*255,0,255))*65536+Math.round(xn(bn.g*255,0,255))*256+Math.round(xn(bn.b*255,0,255))}getHexString(e=$t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ct.workingColorSpace){Ct.fromWorkingColorSpace(bn.copy(this),t);const n=bn.r,r=bn.g,s=bn.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ct.workingColorSpace){return Ct.fromWorkingColorSpace(bn.copy(this),t),e.r=bn.r,e.g=bn.g,e.b=bn.b,e}getStyle(e=$t){Ct.fromWorkingColorSpace(bn.copy(this),e);const t=bn.r,n=bn.g,r=bn.b;return e!==$t?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Wr),this.setHSL(Wr.h+e,Wr.s+t,Wr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Wr),e.getHSL(jl);const n=nl(Wr.h,jl.h,t),r=nl(Wr.s,jl.s,t),s=nl(Wr.l,jl.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bn=new ct;ct.NAMES=w0;class ks extends nr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=a0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Er=mT();function mT(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,r[l]=24,r[l|256]=24):(n[l]=31744,n[l|256]=64512,r[l]=13,r[l|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:o,offsetTable:a}}function gT(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=xn(i,-65504,65504),Er.floatView[0]=i;const e=Er.uint32View[0],t=e>>23&511;return Er.baseTable[t]+((e&8388607)>>Er.shiftTable[t])}function _T(i){const e=i>>10;return Er.uint32View[0]=Er.mantissaTable[Er.offsetTable[e]+(i&1023)]+Er.exponentTable[e],Er.floatView[0]}const Tm={toHalfFloat:gT,fromHalfFloat:_T},nn=new Y,$l=new vt;class jn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ch,this.updateRange={offset:0,count:-1},this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)$l.fromBufferAttribute(this,t),$l.applyMatrix3(e),this.setXY(t,$l.x,$l.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix3(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=$i(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=$i(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=$i(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=$i(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=$i(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),r=Lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),r=Lt(r,this.array),s=Lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ch&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class R0 extends jn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class C0 extends jn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Pr extends jn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let vT=0;const Ei=new pt,df=new jt,Mo=new Y,oi=new kr,Pa=new kr,pn=new Y;class ar extends ya{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vT++}),this.uuid=Gi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(M0(e)?C0:R0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ht().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ei.makeRotationFromQuaternion(e),this.applyMatrix4(Ei),this}rotateX(e){return Ei.makeRotationX(e),this.applyMatrix4(Ei),this}rotateY(e){return Ei.makeRotationY(e),this.applyMatrix4(Ei),this}rotateZ(e){return Ei.makeRotationZ(e),this.applyMatrix4(Ei),this}translate(e,t,n){return Ei.makeTranslation(e,t,n),this.applyMatrix4(Ei),this}scale(e,t,n){return Ei.makeScale(e,t,n),this.applyMatrix4(Ei),this}lookAt(e){return df.lookAt(e),df.updateMatrix(),this.applyMatrix4(df.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mo).negate(),this.translate(Mo.x,Mo.y,Mo.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Pr(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];oi.setFromBufferAttribute(s),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new or);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Y,1/0);return}if(e){const n=this.boundingSphere.center;if(oi.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Pa.setFromBufferAttribute(a),this.morphTargetsRelative?(pn.addVectors(oi.min,Pa.min),oi.expandByPoint(pn),pn.addVectors(oi.max,Pa.max),oi.expandByPoint(pn)):(oi.expandByPoint(Pa.min),oi.expandByPoint(Pa.max))}oi.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)pn.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(pn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)pn.fromBufferAttribute(a,c),l&&(Mo.fromBufferAttribute(e,c),pn.add(Mo)),r=Math.max(r,n.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let P=0;P<a;P++)c[P]=new Y,u[P]=new Y;const f=new Y,h=new Y,d=new Y,v=new vt,g=new vt,p=new vt,m=new Y,M=new Y;function S(P,J,W){f.fromArray(r,P*3),h.fromArray(r,J*3),d.fromArray(r,W*3),v.fromArray(o,P*2),g.fromArray(o,J*2),p.fromArray(o,W*2),h.sub(f),d.sub(f),g.sub(v),p.sub(v);const re=1/(g.x*p.y-p.x*g.y);isFinite(re)&&(m.copy(h).multiplyScalar(p.y).addScaledVector(d,-g.y).multiplyScalar(re),M.copy(d).multiplyScalar(g.x).addScaledVector(h,-p.x).multiplyScalar(re),c[P].add(m),c[J].add(m),c[W].add(m),u[P].add(M),u[J].add(M),u[W].add(M))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let P=0,J=x.length;P<J;++P){const W=x[P],re=W.start,k=W.count;for(let K=re,$=re+k;K<$;K+=3)S(n[K+0],n[K+1],n[K+2])}const w=new Y,L=new Y,R=new Y,z=new Y;function T(P){R.fromArray(s,P*3),z.copy(R);const J=c[P];w.copy(J),w.sub(R.multiplyScalar(R.dot(J))).normalize(),L.crossVectors(z,J);const re=L.dot(u[P])<0?-1:1;l[P*4]=w.x,l[P*4+1]=w.y,l[P*4+2]=w.z,l[P*4+3]=re}for(let P=0,J=x.length;P<J;++P){const W=x[P],re=W.start,k=W.count;for(let K=re,$=re+k;K<$;K+=3)T(n[K+0]),T(n[K+1]),T(n[K+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new jn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const r=new Y,s=new Y,o=new Y,a=new Y,l=new Y,c=new Y,u=new Y,f=new Y;if(e)for(let h=0,d=e.count;h<d;h+=3){const v=e.getX(h+0),g=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,p),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)pn.fromBufferAttribute(e,t),pn.normalize(),e.setXYZ(t,pn.x,pn.y,pn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,v=0;for(let g=0,p=l.length;g<p;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*u;for(let m=0;m<u;m++)h[v++]=c[d++]}return new jn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ar,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Em=new pt,ws=new Au,Zl=new or,bm=new Y,To=new Y,Eo=new Y,bo=new Y,pf=new Y,Jl=new Y,Ql=new vt,ec=new vt,tc=new vt,Am=new Y,wm=new Y,Rm=new Y,nc=new Y,ic=new Y;class vi extends jt{constructor(e=new ar,t=new ks){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Jl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(pf.fromBufferAttribute(f,e),o?Jl.addScaledVector(pf,u):Jl.addScaledVector(pf.sub(t),u))}t.add(Jl)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zl.copy(n.boundingSphere),Zl.applyMatrix4(s),ws.copy(e.ray).recast(e.near),!(Zl.containsPoint(ws.origin)===!1&&(ws.intersectSphere(Zl,bm)===null||ws.origin.distanceToSquared(bm)>(e.far-e.near)**2))&&(Em.copy(s).invert(),ws.copy(e.ray).applyMatrix4(Em),!(n.boundingBox!==null&&ws.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ws)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,g=h.length;v<g;v++){const p=h[v],m=o[p.materialIndex],M=Math.max(p.start,d.start),S=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let x=M,w=S;x<w;x+=3){const L=a.getX(x),R=a.getX(x+1),z=a.getX(x+2);r=rc(this,m,e,n,c,u,f,L,R,z),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let p=v,m=g;p<m;p+=3){const M=a.getX(p),S=a.getX(p+1),x=a.getX(p+2);r=rc(this,o,e,n,c,u,f,M,S,x),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,g=h.length;v<g;v++){const p=h[v],m=o[p.materialIndex],M=Math.max(p.start,d.start),S=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let x=M,w=S;x<w;x+=3){const L=x,R=x+1,z=x+2;r=rc(this,m,e,n,c,u,f,L,R,z),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let p=v,m=g;p<m;p+=3){const M=p,S=p+1,x=p+2;r=rc(this,o,e,n,c,u,f,M,S,x),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function xT(i,e,t,n,r,s,o,a){let l;if(e.side===Kn?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===Ur,a),l===null)return null;ic.copy(a),ic.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ic);return c<t.near||c>t.far?null:{distance:c,point:ic.clone(),object:i}}function rc(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,To),i.getVertexPosition(l,Eo),i.getVertexPosition(c,bo);const u=xT(i,e,t,n,To,Eo,bo,nc);if(u){r&&(Ql.fromBufferAttribute(r,a),ec.fromBufferAttribute(r,l),tc.fromBufferAttribute(r,c),u.uv=ki.getInterpolation(nc,To,Eo,bo,Ql,ec,tc,new vt)),s&&(Ql.fromBufferAttribute(s,a),ec.fromBufferAttribute(s,l),tc.fromBufferAttribute(s,c),u.uv1=ki.getInterpolation(nc,To,Eo,bo,Ql,ec,tc,new vt),u.uv2=u.uv1),o&&(Am.fromBufferAttribute(o,a),wm.fromBufferAttribute(o,l),Rm.fromBufferAttribute(o,c),u.normal=ki.getInterpolation(nc,To,Eo,bo,Am,wm,Rm,new Y),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new Y,materialIndex:0};ki.getNormal(To,Eo,bo,f.normal),u.face=f}return u}class Sa extends ar{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;v("z","y","x",-1,-1,n,t,e,o,s,0),v("z","y","x",1,-1,n,t,-e,o,s,1),v("x","z","y",1,1,e,n,t,r,o,2),v("x","z","y",1,-1,e,n,-t,r,o,3),v("x","y","z",1,-1,e,t,n,r,s,4),v("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Pr(c,3)),this.setAttribute("normal",new Pr(u,3)),this.setAttribute("uv",new Pr(f,2));function v(g,p,m,M,S,x,w,L,R,z,T){const P=x/R,J=w/z,W=x/2,re=w/2,k=L/2,K=R+1,$=z+1;let X=0,Z=0;const se=new Y;for(let D=0;D<$;D++){const G=D*J-re;for(let q=0;q<K;q++){const Te=q*P-W;se[g]=Te*M,se[p]=G*S,se[m]=k,c.push(se.x,se.y,se.z),se[g]=0,se[p]=0,se[m]=L>0?1:-1,u.push(se.x,se.y,se.z),f.push(q/R),f.push(1-D/z),X+=1}}for(let D=0;D<z;D++)for(let G=0;G<R;G++){const q=h+G+K*D,Te=h+G+K*(D+1),ve=h+(G+1)+K*(D+1),Ee=h+(G+1)+K*D;l.push(q,Te,Ee),l.push(Te,ve,Ee),Z+=6}a.addGroup(d,Z,T),d+=Z,h+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ca(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Bn(i){const e={};for(let t=0;t<i.length;t++){const n=ca(i[t]);for(const r in n)e[r]=n[r]}return e}function yT(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function P0(i){return i.getRenderTarget()===null?i.outputColorSpace:Ct.workingColorSpace}const L0={clone:ca,merge:Bn};var ST=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,MT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nr extends nr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ST,this.fragmentShader=MT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ca(e.uniforms),this.uniformsGroups=yT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class I0 extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=wr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Cn extends I0{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=la*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(tl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return la*2*Math.atan(Math.tan(tl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(tl*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ao=-90,wo=1;class TT extends jt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Cn(Ao,wo,e,t);r.layers=this.layers,this.add(r);const s=new Cn(Ao,wo,e,t);s.layers=this.layers,this.add(s);const o=new Cn(Ao,wo,e,t);o.layers=this.layers,this.add(o);const a=new Cn(Ao,wo,e,t);a.layers=this.layers,this.add(a);const l=new Cn(Ao,wo,e,t);l.layers=this.layers,this.add(l);const c=new Cn(Ao,wo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===wr)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Qc)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class D0 extends Sn{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ia,super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ET extends no{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(il("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===qs?$t:pi),this.texture=new D0(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:cn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Sa(5,5,5),s=new Nr({name:"CubemapFromEquirect",uniforms:ca(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kn,blending:as});s.uniforms.tEquirect.value=t;const o=new vi(r,s),a=t.minFilter;return t.minFilter===ps&&(t.minFilter=cn),new TT(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const mf=new Y,bT=new Y,AT=new ht;class Ds{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=mf.subVectors(n,t).cross(bT.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(mf),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||AT.getNormalMatrix(e),r=this.coplanarPoint(mf).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rs=new or,sc=new Y;class vd{constructor(e=new Ds,t=new Ds,n=new Ds,r=new Ds,s=new Ds,o=new Ds){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=wr){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],d=r[8],v=r[9],g=r[10],p=r[11],m=r[12],M=r[13],S=r[14],x=r[15];if(n[0].setComponents(l-s,h-c,p-d,x-m).normalize(),n[1].setComponents(l+s,h+c,p+d,x+m).normalize(),n[2].setComponents(l+o,h+u,p+v,x+M).normalize(),n[3].setComponents(l-o,h-u,p-v,x-M).normalize(),n[4].setComponents(l-a,h-f,p-g,x-S).normalize(),t===wr)n[5].setComponents(l+a,h+f,p+g,x+S).normalize();else if(t===Qc)n[5].setComponents(a,f,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Rs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rs)}intersectsSprite(e){return Rs.center.set(0,0,0),Rs.radius=.7071067811865476,Rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rs)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(sc.x=r.normal.x>0?e.max.x:e.min.x,sc.y=r.normal.y>0?e.max.y:e.min.y,sc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(sc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function U0(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function wT(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,u){const f=c.array,h=c.usage,d=i.createBuffer();i.bindBuffer(u,d),i.bufferData(u,f,h),c.onUploadCallback();let v;if(f instanceof Float32Array)v=i.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)v=i.SHORT;else if(f instanceof Uint32Array)v=i.UNSIGNED_INT;else if(f instanceof Int32Array)v=i.INT;else if(f instanceof Int8Array)v=i.BYTE;else if(f instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:d,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const h=u.array,d=u.updateRange;i.bindBuffer(f,c),d.count===-1?i.bufferSubData(f,0,h):(t?i.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):i.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);f===void 0?n.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:o,remove:a,update:l}}class xd extends ar{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,d=[],v=[],g=[],p=[];for(let m=0;m<u;m++){const M=m*h-o;for(let S=0;S<c;S++){const x=S*f-s;v.push(x,-M,0),g.push(0,0,1),p.push(S/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<a;M++){const S=M+c*m,x=M+c*(m+1),w=M+1+c*(m+1),L=M+1+c*m;d.push(S,x,L),d.push(x,w,L)}this.setIndex(d),this.setAttribute("position",new Pr(v,3)),this.setAttribute("normal",new Pr(g,3)),this.setAttribute("uv",new Pr(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xd(e.width,e.height,e.widthSegments,e.heightSegments)}}var RT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,CT=`#ifdef USE_ALPHAHASH
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
#endif`,PT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,LT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,IT=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,DT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,UT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,NT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,OT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,FT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,BT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kT=`#ifdef USE_IRIDESCENCE
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
#endif`,zT=`#ifdef USE_BUMPMAP
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
#endif`,HT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,GT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,VT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,WT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,XT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,YT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,KT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,jT=`#define PI 3.141592653589793
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
} // validated`,$T=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ZT=`vec3 transformedNormal = objectNormal;
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
#endif`,JT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,QT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,eE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nE="gl_FragColor = linearToOutputTexel( gl_FragColor );",iE=`
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
}`,rE=`#ifdef USE_ENVMAP
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
#endif`,sE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,oE=`#ifdef USE_ENVMAP
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
#endif`,aE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lE=`#ifdef USE_ENVMAP
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
#endif`,cE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dE=`#ifdef USE_GRADIENTMAP
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
}`,pE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,mE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_E=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vE=`uniform bool receiveShadow;
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
#endif`,xE=`#ifdef USE_ENVMAP
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
#endif`,yE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,SE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ME=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,TE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,EE=`PhysicalMaterial material;
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
#endif`,bE=`struct PhysicalMaterial {
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
}`,AE=`
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
#endif`,wE=`#if defined( RE_IndirectDiffuse )
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
#endif`,RE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,CE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,PE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,LE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,IE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,DE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,UE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,NE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,OE=`#if defined( USE_POINTS_UV )
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
#endif`,FE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,BE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zE=`#ifdef USE_MORPHNORMALS
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
#endif`,HE=`#ifdef USE_MORPHTARGETS
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
#endif`,GE=`#ifdef USE_MORPHTARGETS
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
#endif`,VE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,WE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,XE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,KE=`#ifdef USE_NORMALMAP
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
#endif`,jE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$E=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ZE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,JE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,QE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,eb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,tb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ib=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ob=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ab=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ub=`float getShadowMask() {
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
}`,fb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hb=`#ifdef USE_SKINNING
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
#endif`,db=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pb=`#ifdef USE_SKINNING
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
#endif`,mb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_b=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xb=`#ifdef USE_TRANSMISSION
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
#endif`,yb=`#ifdef USE_TRANSMISSION
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
#endif`,Sb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Eb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ab=`uniform sampler2D t2D;
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
}`,wb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Cb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lb=`#include <common>
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
}`,Ib=`#if DEPTH_PACKING == 3200
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
}`,Db=`#define DISTANCE
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
}`,Ub=`#define DISTANCE
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
}`,Nb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ob=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fb=`uniform float scale;
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
}`,Bb=`uniform vec3 diffuse;
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
}`,kb=`#include <common>
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
}`,zb=`uniform vec3 diffuse;
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
}`,Hb=`#define LAMBERT
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
}`,Gb=`#define LAMBERT
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
}`,Vb=`#define MATCAP
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
}`,Wb=`#define MATCAP
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
}`,Xb=`#define NORMAL
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
}`,Yb=`#define NORMAL
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
}`,qb=`#define PHONG
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
}`,Kb=`#define PHONG
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
}`,jb=`#define STANDARD
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
}`,$b=`#define STANDARD
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
}`,Zb=`#define TOON
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
}`,Jb=`#define TOON
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
}`,Qb=`uniform float size;
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
}`,eA=`uniform vec3 diffuse;
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
}`,tA=`#include <common>
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
}`,nA=`uniform vec3 color;
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
}`,iA=`uniform float rotation;
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
}`,rA=`uniform vec3 diffuse;
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
}`,at={alphahash_fragment:RT,alphahash_pars_fragment:CT,alphamap_fragment:PT,alphamap_pars_fragment:LT,alphatest_fragment:IT,alphatest_pars_fragment:DT,aomap_fragment:UT,aomap_pars_fragment:NT,begin_vertex:OT,beginnormal_vertex:FT,bsdfs:BT,iridescence_fragment:kT,bumpmap_pars_fragment:zT,clipping_planes_fragment:HT,clipping_planes_pars_fragment:GT,clipping_planes_pars_vertex:VT,clipping_planes_vertex:WT,color_fragment:XT,color_pars_fragment:YT,color_pars_vertex:qT,color_vertex:KT,common:jT,cube_uv_reflection_fragment:$T,defaultnormal_vertex:ZT,displacementmap_pars_vertex:JT,displacementmap_vertex:QT,emissivemap_fragment:eE,emissivemap_pars_fragment:tE,colorspace_fragment:nE,colorspace_pars_fragment:iE,envmap_fragment:rE,envmap_common_pars_fragment:sE,envmap_pars_fragment:oE,envmap_pars_vertex:aE,envmap_physical_pars_fragment:xE,envmap_vertex:lE,fog_vertex:cE,fog_pars_vertex:uE,fog_fragment:fE,fog_pars_fragment:hE,gradientmap_pars_fragment:dE,lightmap_fragment:pE,lightmap_pars_fragment:mE,lights_lambert_fragment:gE,lights_lambert_pars_fragment:_E,lights_pars_begin:vE,lights_toon_fragment:yE,lights_toon_pars_fragment:SE,lights_phong_fragment:ME,lights_phong_pars_fragment:TE,lights_physical_fragment:EE,lights_physical_pars_fragment:bE,lights_fragment_begin:AE,lights_fragment_maps:wE,lights_fragment_end:RE,logdepthbuf_fragment:CE,logdepthbuf_pars_fragment:PE,logdepthbuf_pars_vertex:LE,logdepthbuf_vertex:IE,map_fragment:DE,map_pars_fragment:UE,map_particle_fragment:NE,map_particle_pars_fragment:OE,metalnessmap_fragment:FE,metalnessmap_pars_fragment:BE,morphcolor_vertex:kE,morphnormal_vertex:zE,morphtarget_pars_vertex:HE,morphtarget_vertex:GE,normal_fragment_begin:VE,normal_fragment_maps:WE,normal_pars_fragment:XE,normal_pars_vertex:YE,normal_vertex:qE,normalmap_pars_fragment:KE,clearcoat_normal_fragment_begin:jE,clearcoat_normal_fragment_maps:$E,clearcoat_pars_fragment:ZE,iridescence_pars_fragment:JE,opaque_fragment:QE,packing:eb,premultiplied_alpha_fragment:tb,project_vertex:nb,dithering_fragment:ib,dithering_pars_fragment:rb,roughnessmap_fragment:sb,roughnessmap_pars_fragment:ob,shadowmap_pars_fragment:ab,shadowmap_pars_vertex:lb,shadowmap_vertex:cb,shadowmask_pars_fragment:ub,skinbase_vertex:fb,skinning_pars_vertex:hb,skinning_vertex:db,skinnormal_vertex:pb,specularmap_fragment:mb,specularmap_pars_fragment:gb,tonemapping_fragment:_b,tonemapping_pars_fragment:vb,transmission_fragment:xb,transmission_pars_fragment:yb,uv_pars_fragment:Sb,uv_pars_vertex:Mb,uv_vertex:Tb,worldpos_vertex:Eb,background_vert:bb,background_frag:Ab,backgroundCube_vert:wb,backgroundCube_frag:Rb,cube_vert:Cb,cube_frag:Pb,depth_vert:Lb,depth_frag:Ib,distanceRGBA_vert:Db,distanceRGBA_frag:Ub,equirect_vert:Nb,equirect_frag:Ob,linedashed_vert:Fb,linedashed_frag:Bb,meshbasic_vert:kb,meshbasic_frag:zb,meshlambert_vert:Hb,meshlambert_frag:Gb,meshmatcap_vert:Vb,meshmatcap_frag:Wb,meshnormal_vert:Xb,meshnormal_frag:Yb,meshphong_vert:qb,meshphong_frag:Kb,meshphysical_vert:jb,meshphysical_frag:$b,meshtoon_vert:Zb,meshtoon_frag:Jb,points_vert:Qb,points_frag:eA,shadow_vert:tA,shadow_frag:nA,sprite_vert:iA,sprite_frag:rA},Ne={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Ki={basic:{uniforms:Bn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:Bn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new ct(0)}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:Bn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:Bn([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:Bn([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new ct(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:Bn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:Bn([Ne.points,Ne.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:Bn([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:Bn([Ne.common,Ne.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:Bn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:Bn([Ne.sprite,Ne.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distanceRGBA:{uniforms:Bn([Ne.common,Ne.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distanceRGBA_vert,fragmentShader:at.distanceRGBA_frag},shadow:{uniforms:Bn([Ne.lights,Ne.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};Ki.physical={uniforms:Bn([Ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const oc={r:0,b:0,g:0};function sA(i,e,t,n,r,s,o){const a=new ct(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function v(p,m){let M=!1,S=m.isScene===!0?m.background:null;S&&S.isTexture&&(S=(m.backgroundBlurriness>0?t:e).get(S)),S===null?g(a,l):S&&S.isColor&&(g(S,1),M=!0);const x=i.xr.getEnvironmentBlendMode();x==="additive"?n.buffers.color.setClear(0,0,0,1,o):x==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),S&&(S.isCubeTexture||S.mapping===Eu)?(u===void 0&&(u=new vi(new Sa(1,1,1),new Nr({name:"BackgroundCubeMaterial",uniforms:ca(Ki.backgroundCube.uniforms),vertexShader:Ki.backgroundCube.vertexShader,fragmentShader:Ki.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,L,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=Ct.getTransfer(S.colorSpace)!==Ht,(f!==S||h!==S.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,f=S,h=S.version,d=i.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new vi(new xd(2,2),new Nr({name:"BackgroundMaterial",uniforms:ca(Ki.background.uniforms),vertexShader:Ki.background.vertexShader,fragmentShader:Ki.background.fragmentShader,side:Ur,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=Ct.getTransfer(S.colorSpace)!==Ht,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||h!==S.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,f=S,h=S.version,d=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function g(p,m){p.getRGB(oc,P0(i)),n.buffers.color.setClear(oc.r,oc.g,oc.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),l=m,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,g(a,l)},render:v}}function oA(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=p(null);let c=l,u=!1;function f(k,K,$,X,Z){let se=!1;if(o){const D=g(X,$,K);c!==D&&(c=D,d(c.object)),se=m(k,X,$,Z),se&&M(k,X,$,Z)}else{const D=K.wireframe===!0;(c.geometry!==X.id||c.program!==$.id||c.wireframe!==D)&&(c.geometry=X.id,c.program=$.id,c.wireframe=D,se=!0)}Z!==null&&t.update(Z,i.ELEMENT_ARRAY_BUFFER),(se||u)&&(u=!1,z(k,K,$,X),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function h(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function d(k){return n.isWebGL2?i.bindVertexArray(k):s.bindVertexArrayOES(k)}function v(k){return n.isWebGL2?i.deleteVertexArray(k):s.deleteVertexArrayOES(k)}function g(k,K,$){const X=$.wireframe===!0;let Z=a[k.id];Z===void 0&&(Z={},a[k.id]=Z);let se=Z[K.id];se===void 0&&(se={},Z[K.id]=se);let D=se[X];return D===void 0&&(D=p(h()),se[X]=D),D}function p(k){const K=[],$=[],X=[];for(let Z=0;Z<r;Z++)K[Z]=0,$[Z]=0,X[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:$,attributeDivisors:X,object:k,attributes:{},index:null}}function m(k,K,$,X){const Z=c.attributes,se=K.attributes;let D=0;const G=$.getAttributes();for(const q in G)if(G[q].location>=0){const ve=Z[q];let Ee=se[q];if(Ee===void 0&&(q==="instanceMatrix"&&k.instanceMatrix&&(Ee=k.instanceMatrix),q==="instanceColor"&&k.instanceColor&&(Ee=k.instanceColor)),ve===void 0||ve.attribute!==Ee||Ee&&ve.data!==Ee.data)return!0;D++}return c.attributesNum!==D||c.index!==X}function M(k,K,$,X){const Z={},se=K.attributes;let D=0;const G=$.getAttributes();for(const q in G)if(G[q].location>=0){let ve=se[q];ve===void 0&&(q==="instanceMatrix"&&k.instanceMatrix&&(ve=k.instanceMatrix),q==="instanceColor"&&k.instanceColor&&(ve=k.instanceColor));const Ee={};Ee.attribute=ve,ve&&ve.data&&(Ee.data=ve.data),Z[q]=Ee,D++}c.attributes=Z,c.attributesNum=D,c.index=X}function S(){const k=c.newAttributes;for(let K=0,$=k.length;K<$;K++)k[K]=0}function x(k){w(k,0)}function w(k,K){const $=c.newAttributes,X=c.enabledAttributes,Z=c.attributeDivisors;$[k]=1,X[k]===0&&(i.enableVertexAttribArray(k),X[k]=1),Z[k]!==K&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](k,K),Z[k]=K)}function L(){const k=c.newAttributes,K=c.enabledAttributes;for(let $=0,X=K.length;$<X;$++)K[$]!==k[$]&&(i.disableVertexAttribArray($),K[$]=0)}function R(k,K,$,X,Z,se,D){D===!0?i.vertexAttribIPointer(k,K,$,Z,se):i.vertexAttribPointer(k,K,$,X,Z,se)}function z(k,K,$,X){if(n.isWebGL2===!1&&(k.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;S();const Z=X.attributes,se=$.getAttributes(),D=K.defaultAttributeValues;for(const G in se){const q=se[G];if(q.location>=0){let Te=Z[G];if(Te===void 0&&(G==="instanceMatrix"&&k.instanceMatrix&&(Te=k.instanceMatrix),G==="instanceColor"&&k.instanceColor&&(Te=k.instanceColor)),Te!==void 0){const ve=Te.normalized,Ee=Te.itemSize,Me=t.get(Te);if(Me===void 0)continue;const Ie=Me.buffer,Ue=Me.type,Je=Me.bytesPerElement,Tt=n.isWebGL2===!0&&(Ue===i.INT||Ue===i.UNSIGNED_INT||Te.gpuType===f0);if(Te.isInterleavedBufferAttribute){const $e=Te.data,E=$e.stride,B=Te.offset;if($e.isInstancedInterleavedBuffer){for(let V=0;V<q.locationSize;V++)w(q.location+V,$e.meshPerAttribute);k.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=$e.meshPerAttribute*$e.count)}else for(let V=0;V<q.locationSize;V++)x(q.location+V);i.bindBuffer(i.ARRAY_BUFFER,Ie);for(let V=0;V<q.locationSize;V++)R(q.location+V,Ee/q.locationSize,Ue,ve,E*Je,(B+Ee/q.locationSize*V)*Je,Tt)}else{if(Te.isInstancedBufferAttribute){for(let $e=0;$e<q.locationSize;$e++)w(q.location+$e,Te.meshPerAttribute);k.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let $e=0;$e<q.locationSize;$e++)x(q.location+$e);i.bindBuffer(i.ARRAY_BUFFER,Ie);for(let $e=0;$e<q.locationSize;$e++)R(q.location+$e,Ee/q.locationSize,Ue,ve,Ee*Je,Ee/q.locationSize*$e*Je,Tt)}}else if(D!==void 0){const ve=D[G];if(ve!==void 0)switch(ve.length){case 2:i.vertexAttrib2fv(q.location,ve);break;case 3:i.vertexAttrib3fv(q.location,ve);break;case 4:i.vertexAttrib4fv(q.location,ve);break;default:i.vertexAttrib1fv(q.location,ve)}}}}L()}function T(){W();for(const k in a){const K=a[k];for(const $ in K){const X=K[$];for(const Z in X)v(X[Z].object),delete X[Z];delete K[$]}delete a[k]}}function P(k){if(a[k.id]===void 0)return;const K=a[k.id];for(const $ in K){const X=K[$];for(const Z in X)v(X[Z].object),delete X[Z];delete K[$]}delete a[k.id]}function J(k){for(const K in a){const $=a[K];if($[k.id]===void 0)continue;const X=$[k.id];for(const Z in X)v(X[Z].object),delete X[Z];delete $[k.id]}}function W(){re(),u=!0,c!==l&&(c=l,d(c.object))}function re(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:W,resetDefaultState:re,dispose:T,releaseStatesOfGeometry:P,releaseStatesOfProgram:J,initAttributes:S,enableAttribute:x,disableUnusedAttributes:L}}function aA(i,e,t,n){const r=n.isWebGL2;let s;function o(c){s=c}function a(c,u){i.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,d;if(r)h=i,d="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[d](s,c,u,f),t.update(u,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function lA(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),h=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),m=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=h>0,x=o||e.has("OES_texture_float"),w=S&&x,L=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:M,vertexTextures:S,floatFragmentTextures:x,floatVertexTextures:w,maxSamples:L}}function cA(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Ds,a=new ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||r;return r=h,n=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const v=f.clippingPlanes,g=f.clipIntersection,p=f.clipShadows,m=i.get(f);if(!r||v===null||v.length===0||s&&!p)s?u(null):c();else{const M=s?0:n,S=M*4;let x=m.clippingState||null;l.value=x,x=u(v,h,S,d);for(let w=0;w!==S;++w)x[w]=t[w];m.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,v){const g=f!==null?f.length:0;let p=null;if(g!==0){if(p=l.value,v!==!0||p===null){const m=d+g*4,M=h.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let S=0,x=d;S!==g;++S,x+=4)o.copy(f[S]).applyMatrix4(M,a),o.normal.toArray(p,x),p[x+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function uA(i){let e=new WeakMap;function t(o,a){return a===sh?o.mapping=ia:a===oh&&(o.mapping=ra),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===sh||a===oh)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new ET(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class yd extends I0{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Bo=4,Cm=[.125,.215,.35,.446,.526,.582],Bs=20,gf=new yd,Pm=new ct;let _f=null;const Us=(1+Math.sqrt(5))/2,Ro=1/Us,Lm=[new Y(1,1,1),new Y(-1,1,1),new Y(1,1,-1),new Y(-1,1,-1),new Y(0,Us,Ro),new Y(0,Us,-Ro),new Y(Ro,0,Us),new Y(-Ro,0,Us),new Y(Us,Ro,0),new Y(-Us,Ro,0)];class dh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){_f=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Um(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_f),e.scissorTest=!1,ac(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ia||e.mapping===ra?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_f=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:Ar,format:di,colorSpace:fn,depthBuffer:!1},r=Im(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Im(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fA(s)),this._blurMaterial=hA(s,e,t)}return r}_compileMaterial(e){const t=new vi(this._lodPlanes[0],e);this._renderer.compile(t,gf)}_sceneToCubeUV(e,t,n,r){const a=new Cn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Pm),u.toneMapping=ls,u.autoClear=!1;const d=new ks({name:"PMREM.Background",side:Kn,depthWrite:!1,depthTest:!1}),v=new vi(new Sa,d);let g=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,g=!0):(d.color.copy(Pm),g=!0);for(let m=0;m<6;m++){const M=m%3;M===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):M===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const S=this._cubeSize;ac(r,M*S,m>2?S:0,S,S),u.setRenderTarget(r),g&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===ia||e.mapping===ra;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Um()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new vi(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ac(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,gf)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Lm[(r-1)%Lm.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new vi(this._lodPlanes[r],c),h=c.uniforms,d=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Bs-1),g=s/v,p=isFinite(s)?1+Math.floor(u*g):Bs;p>Bs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Bs}`);const m=[];let M=0;for(let R=0;R<Bs;++R){const z=R/g,T=Math.exp(-z*z/2);m.push(T),R===0?M+=T:R<p&&(M+=2*T)}for(let R=0;R<m.length;R++)m[R]=m[R]/M;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=m,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:S}=this;h.dTheta.value=v,h.mipInt.value=S-n;const x=this._sizeLods[r],w=3*x*(r>S-Bo?r-S+Bo:0),L=4*(this._cubeSize-x);ac(t,w,L,3*x,2*x),l.setRenderTarget(t),l.render(f,gf)}}function fA(i){const e=[],t=[],n=[];let r=i;const s=i-Bo+1+Cm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-Bo?l=Cm[o-i+Bo-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,v=6,g=3,p=2,m=1,M=new Float32Array(g*v*d),S=new Float32Array(p*v*d),x=new Float32Array(m*v*d);for(let L=0;L<d;L++){const R=L%3*2/3-1,z=L>2?0:-1,T=[R,z,0,R+2/3,z,0,R+2/3,z+1,0,R,z,0,R+2/3,z+1,0,R,z+1,0];M.set(T,g*v*L),S.set(h,p*v*L);const P=[L,L,L,L,L,L];x.set(P,m*v*L)}const w=new ar;w.setAttribute("position",new jn(M,g)),w.setAttribute("uv",new jn(S,p)),w.setAttribute("faceIndex",new jn(x,m)),e.push(w),r>Bo&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Im(i,e,t){const n=new no(i,e,t);return n.texture.mapping=Eu,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ac(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function hA(i,e,t){const n=new Float32Array(Bs),r=new Y(0,1,0);return new Nr({name:"SphericalGaussianBlur",defines:{n:Bs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Sd(),fragmentShader:`

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
		`,blending:as,depthTest:!1,depthWrite:!1})}function Dm(){return new Nr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sd(),fragmentShader:`

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
		`,blending:as,depthTest:!1,depthWrite:!1})}function Um(){return new Nr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:as,depthTest:!1,depthWrite:!1})}function Sd(){return`

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
	`}function dA(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===sh||l===oh,u=l===ia||l===ra;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new dh(i)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new dh(i));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function pA(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function mA(i,e,t,n){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);for(const v in h.morphAttributes){const g=h.morphAttributes[v];for(let p=0,m=g.length;p<m;p++)e.remove(g[p])}h.removeEventListener("dispose",o),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const v in h)e.update(h[v],i.ARRAY_BUFFER);const d=f.morphAttributes;for(const v in d){const g=d[v];for(let p=0,m=g.length;p<m;p++)e.update(g[p],i.ARRAY_BUFFER)}}function c(f){const h=[],d=f.index,v=f.attributes.position;let g=0;if(d!==null){const M=d.array;g=d.version;for(let S=0,x=M.length;S<x;S+=3){const w=M[S+0],L=M[S+1],R=M[S+2];h.push(w,L,L,R,R,w)}}else if(v!==void 0){const M=v.array;g=v.version;for(let S=0,x=M.length/3-1;S<x;S+=3){const w=S+0,L=S+1,R=S+2;h.push(w,L,L,R,R,w)}}else return;const p=new(M0(h)?C0:R0)(h,1);p.version=g;const m=s.get(f);m&&e.remove(m),s.set(f,p)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function gA(i,e,t,n){const r=n.isWebGL2;let s;function o(h){s=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,d){i.drawElements(s,d,a,h*l),t.update(d,s,1)}function f(h,d,v){if(v===0)return;let g,p;if(r)g=i,p="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[p](s,d,a,h*l,v),t.update(d,s,v)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function _A(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function vA(i,e){return i[0]-e[0]}function xA(i,e){return Math.abs(e[1])-Math.abs(i[1])}function yA(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new Nt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const v=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=v!==void 0?v.length:0;let p=s.get(u);if(p===void 0||p.count!==g){let K=function(){re.dispose(),s.delete(u),u.removeEventListener("dispose",K)};var d=K;p!==void 0&&p.texture.dispose();const S=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,L=u.morphAttributes.position||[],R=u.morphAttributes.normal||[],z=u.morphAttributes.color||[];let T=0;S===!0&&(T=1),x===!0&&(T=2),w===!0&&(T=3);let P=u.attributes.position.count*T,J=1;P>e.maxTextureSize&&(J=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const W=new Float32Array(P*J*4*g),re=new b0(W,P,J,g);re.type=Pi,re.needsUpdate=!0;const k=T*4;for(let $=0;$<g;$++){const X=L[$],Z=R[$],se=z[$],D=P*J*4*$;for(let G=0;G<X.count;G++){const q=G*k;S===!0&&(o.fromBufferAttribute(X,G),W[D+q+0]=o.x,W[D+q+1]=o.y,W[D+q+2]=o.z,W[D+q+3]=0),x===!0&&(o.fromBufferAttribute(Z,G),W[D+q+4]=o.x,W[D+q+5]=o.y,W[D+q+6]=o.z,W[D+q+7]=0),w===!0&&(o.fromBufferAttribute(se,G),W[D+q+8]=o.x,W[D+q+9]=o.y,W[D+q+10]=o.z,W[D+q+11]=se.itemSize===4?o.w:1)}}p={count:g,texture:re,size:new vt(P,J)},s.set(u,p),u.addEventListener("dispose",K)}let m=0;for(let S=0;S<h.length;S++)m+=h[S];const M=u.morphTargetsRelative?1:1-m;f.getUniforms().setValue(i,"morphTargetBaseInfluence",M),f.getUniforms().setValue(i,"morphTargetInfluences",h),f.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}else{const v=h===void 0?0:h.length;let g=n[u.id];if(g===void 0||g.length!==v){g=[];for(let x=0;x<v;x++)g[x]=[x,0];n[u.id]=g}for(let x=0;x<v;x++){const w=g[x];w[0]=x,w[1]=h[x]}g.sort(xA);for(let x=0;x<8;x++)x<v&&g[x][1]?(a[x][0]=g[x][0],a[x][1]=g[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(vA);const p=u.morphAttributes.position,m=u.morphAttributes.normal;let M=0;for(let x=0;x<8;x++){const w=a[x],L=w[0],R=w[1];L!==Number.MAX_SAFE_INTEGER&&R?(p&&u.getAttribute("morphTarget"+x)!==p[L]&&u.setAttribute("morphTarget"+x,p[L]),m&&u.getAttribute("morphNormal"+x)!==m[L]&&u.setAttribute("morphNormal"+x,m[L]),r[x]=R,M+=R):(p&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),m&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),r[x]=0)}const S=u.morphTargetsRelative?1:1-M;f.getUniforms().setValue(i,"morphTargetBaseInfluence",S),f.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function SA(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const N0=new Sn,O0=new b0,F0=new sT,B0=new D0,Nm=[],Om=[],Fm=new Float32Array(16),Bm=new Float32Array(9),km=new Float32Array(4);function Ma(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Nm[r];if(s===void 0&&(s=new Float32Array(r),Nm[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function hn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function dn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ru(i,e){let t=Om[e];t===void 0&&(t=new Int32Array(e),Om[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function MA(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function TA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;i.uniform2fv(this.addr,e),dn(t,e)}}function EA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(hn(t,e))return;i.uniform3fv(this.addr,e),dn(t,e)}}function bA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;i.uniform4fv(this.addr,e),dn(t,e)}}function AA(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),dn(t,e)}else{if(hn(t,n))return;km.set(n),i.uniformMatrix2fv(this.addr,!1,km),dn(t,n)}}function wA(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),dn(t,e)}else{if(hn(t,n))return;Bm.set(n),i.uniformMatrix3fv(this.addr,!1,Bm),dn(t,n)}}function RA(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),dn(t,e)}else{if(hn(t,n))return;Fm.set(n),i.uniformMatrix4fv(this.addr,!1,Fm),dn(t,n)}}function CA(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function PA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;i.uniform2iv(this.addr,e),dn(t,e)}}function LA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;i.uniform3iv(this.addr,e),dn(t,e)}}function IA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;i.uniform4iv(this.addr,e),dn(t,e)}}function DA(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function UA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;i.uniform2uiv(this.addr,e),dn(t,e)}}function NA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;i.uniform3uiv(this.addr,e),dn(t,e)}}function OA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;i.uniform4uiv(this.addr,e),dn(t,e)}}function FA(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||N0,r)}function BA(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||F0,r)}function kA(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||B0,r)}function zA(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||O0,r)}function HA(i){switch(i){case 5126:return MA;case 35664:return TA;case 35665:return EA;case 35666:return bA;case 35674:return AA;case 35675:return wA;case 35676:return RA;case 5124:case 35670:return CA;case 35667:case 35671:return PA;case 35668:case 35672:return LA;case 35669:case 35673:return IA;case 5125:return DA;case 36294:return UA;case 36295:return NA;case 36296:return OA;case 35678:case 36198:case 36298:case 36306:case 35682:return FA;case 35679:case 36299:case 36307:return BA;case 35680:case 36300:case 36308:case 36293:return kA;case 36289:case 36303:case 36311:case 36292:return zA}}function GA(i,e){i.uniform1fv(this.addr,e)}function VA(i,e){const t=Ma(e,this.size,2);i.uniform2fv(this.addr,t)}function WA(i,e){const t=Ma(e,this.size,3);i.uniform3fv(this.addr,t)}function XA(i,e){const t=Ma(e,this.size,4);i.uniform4fv(this.addr,t)}function YA(i,e){const t=Ma(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function qA(i,e){const t=Ma(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function KA(i,e){const t=Ma(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function jA(i,e){i.uniform1iv(this.addr,e)}function $A(i,e){i.uniform2iv(this.addr,e)}function ZA(i,e){i.uniform3iv(this.addr,e)}function JA(i,e){i.uniform4iv(this.addr,e)}function QA(i,e){i.uniform1uiv(this.addr,e)}function ew(i,e){i.uniform2uiv(this.addr,e)}function tw(i,e){i.uniform3uiv(this.addr,e)}function nw(i,e){i.uniform4uiv(this.addr,e)}function iw(i,e,t){const n=this.cache,r=e.length,s=Ru(t,r);hn(n,s)||(i.uniform1iv(this.addr,s),dn(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||N0,s[o])}function rw(i,e,t){const n=this.cache,r=e.length,s=Ru(t,r);hn(n,s)||(i.uniform1iv(this.addr,s),dn(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||F0,s[o])}function sw(i,e,t){const n=this.cache,r=e.length,s=Ru(t,r);hn(n,s)||(i.uniform1iv(this.addr,s),dn(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||B0,s[o])}function ow(i,e,t){const n=this.cache,r=e.length,s=Ru(t,r);hn(n,s)||(i.uniform1iv(this.addr,s),dn(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||O0,s[o])}function aw(i){switch(i){case 5126:return GA;case 35664:return VA;case 35665:return WA;case 35666:return XA;case 35674:return YA;case 35675:return qA;case 35676:return KA;case 5124:case 35670:return jA;case 35667:case 35671:return $A;case 35668:case 35672:return ZA;case 35669:case 35673:return JA;case 5125:return QA;case 36294:return ew;case 36295:return tw;case 36296:return nw;case 35678:case 36198:case 36298:case 36306:case 35682:return iw;case 35679:case 36299:case 36307:return rw;case 35680:case 36300:case 36308:case 36293:return sw;case 36289:case 36303:case 36311:case 36292:return ow}}class lw{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=HA(t.type)}}class cw{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=aw(t.type)}}class uw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const vf=/(\w+)(\])?(\[|\.)?/g;function zm(i,e){i.seq.push(e),i.map[e.id]=e}function fw(i,e,t){const n=i.name,r=n.length;for(vf.lastIndex=0;;){const s=vf.exec(n),o=vf.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){zm(t,c===void 0?new lw(a,i,e):new cw(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new uw(a),zm(t,f)),t=f}}}class Uc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);fw(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Hm(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let hw=0;function dw(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function pw(i){const e=Ct.getPrimaries(Ct.workingColorSpace),t=Ct.getPrimaries(i);let n;switch(e===t?n="":e===Jc&&t===Zc?n="LinearDisplayP3ToLinearSRGB":e===Zc&&t===Jc&&(n="LinearSRGBToLinearDisplayP3"),i){case fn:case bu:return[n,"LinearTransferOETF"];case $t:case gd:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Gm(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+dw(i.getShaderSource(e),o)}else return r}function mw(i,e){const t=pw(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function gw(i,e){let t;switch(e){case mM:t="Linear";break;case gM:t="Reinhard";break;case _M:t="OptimizedCineon";break;case l0:t="ACESFilmic";break;case vM:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function _w(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ka).join(`
`)}function vw(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function xw(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ka(i){return i!==""}function Vm(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wm(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const yw=/^[ \t]*#include +<([\w\d./]+)>/gm;function ph(i){return i.replace(yw,Mw)}const Sw=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Mw(i,e){let t=at[e];if(t===void 0){const n=Sw.get(e);if(n!==void 0)t=at[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ph(t)}const Tw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xm(i){return i.replace(Tw,Ew)}function Ew(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ym(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function bw(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===r0?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===qS?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===vr&&(e="SHADOWMAP_TYPE_VSM"),e}function Aw(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ia:case ra:e="ENVMAP_TYPE_CUBE";break;case Eu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ww(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ra:e="ENVMAP_MODE_REFRACTION";break}return e}function Rw(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case a0:e="ENVMAP_BLENDING_MULTIPLY";break;case dM:e="ENVMAP_BLENDING_MIX";break;case pM:e="ENVMAP_BLENDING_ADD";break}return e}function Cw(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Pw(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=bw(t),c=Aw(t),u=ww(t),f=Rw(t),h=Cw(t),d=t.isWebGL2?"":_w(t),v=vw(s),g=r.createProgram();let p,m,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ka).join(`
`),p.length>0&&(p+=`
`),m=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ka).join(`
`),m.length>0&&(m+=`
`)):(p=[Ym(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ka).join(`
`),m=[d,Ym(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ls?"#define TONE_MAPPING":"",t.toneMapping!==ls?at.tonemapping_pars_fragment:"",t.toneMapping!==ls?gw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,mw("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ka).join(`
`)),o=ph(o),o=Vm(o,t),o=Wm(o,t),a=ph(a),a=Vm(a,t),a=Wm(a,t),o=Xm(o),a=Xm(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===um?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===um?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const S=M+p+o,x=M+m+a,w=Hm(r,r.VERTEX_SHADER,S),L=Hm(r,r.FRAGMENT_SHADER,x);if(r.attachShader(g,w),r.attachShader(g,L),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g),i.debug.checkShaderErrors){const T=r.getProgramInfoLog(g).trim(),P=r.getShaderInfoLog(w).trim(),J=r.getShaderInfoLog(L).trim();let W=!0,re=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,w,L);else{const k=Gm(r,w,"vertex"),K=Gm(r,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Program Info Log: `+T+`
`+k+`
`+K)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(P===""||J==="")&&(re=!1);re&&(this.diagnostics={runnable:W,programLog:T,vertexShader:{log:P,prefix:p},fragmentShader:{log:J,prefix:m}})}r.deleteShader(w),r.deleteShader(L);let R;this.getUniforms=function(){return R===void 0&&(R=new Uc(r,g)),R};let z;return this.getAttributes=function(){return z===void 0&&(z=xw(r,g)),z},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=hw++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=L,this}let Lw=0;class Iw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Dw(e),t.set(e,n)),n}}class Dw{constructor(e){this.id=Lw++,this.code=e,this.usedTimes=0}}function Uw(i,e,t,n,r,s,o){const a=new A0,l=new Iw,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let d=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(T){return T===0?"uv":`uv${T}`}function p(T,P,J,W,re){const k=W.fog,K=re.geometry,$=T.isMeshStandardMaterial?W.environment:null,X=(T.isMeshStandardMaterial?t:e).get(T.envMap||$),Z=X&&X.mapping===Eu?X.image.height:null,se=v[T.type];T.precision!==null&&(d=r.getMaxPrecision(T.precision),d!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",d,"instead."));const D=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,G=D!==void 0?D.length:0;let q=0;K.morphAttributes.position!==void 0&&(q=1),K.morphAttributes.normal!==void 0&&(q=2),K.morphAttributes.color!==void 0&&(q=3);let Te,ve,Ee,Me;if(se){const ke=Ki[se];Te=ke.vertexShader,ve=ke.fragmentShader}else Te=T.vertexShader,ve=T.fragmentShader,l.update(T),Ee=l.getVertexShaderID(T),Me=l.getFragmentShaderID(T);const Ie=i.getRenderTarget(),Ue=re.isInstancedMesh===!0,Je=!!T.map,Tt=!!T.matcap,$e=!!X,E=!!T.aoMap,B=!!T.lightMap,V=!!T.bumpMap,ne=!!T.normalMap,Q=!!T.displacementMap,F=!!T.emissiveMap,de=!!T.metalnessMap,ue=!!T.roughnessMap,ge=T.anisotropy>0,le=T.clearcoat>0,Re=T.iridescence>0,C=T.sheen>0,A=T.transmission>0,H=ge&&!!T.anisotropyMap,ce=le&&!!T.clearcoatMap,oe=le&&!!T.clearcoatNormalMap,fe=le&&!!T.clearcoatRoughnessMap,be=Re&&!!T.iridescenceMap,xe=Re&&!!T.iridescenceThicknessMap,Ae=C&&!!T.sheenColorMap,Pe=C&&!!T.sheenRoughnessMap,nt=!!T.specularMap,_e=!!T.specularColorMap,Qe=!!T.specularIntensityMap,Ge=A&&!!T.transmissionMap,Be=A&&!!T.thicknessMap,Oe=!!T.gradientMap,O=!!T.alphaMap,ee=T.alphaTest>0,Se=!!T.alphaHash,Le=!!T.extensions,we=!!K.attributes.uv1,ye=!!K.attributes.uv2,Ye=!!K.attributes.uv3;let Ze=ls;return T.toneMapped&&(Ie===null||Ie.isXRRenderTarget===!0)&&(Ze=i.toneMapping),{isWebGL2:u,shaderID:se,shaderType:T.type,shaderName:T.name,vertexShader:Te,fragmentShader:ve,defines:T.defines,customVertexShaderID:Ee,customFragmentShaderID:Me,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:d,instancing:Ue,instancingColor:Ue&&re.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:Ie===null?i.outputColorSpace:Ie.isXRRenderTarget===!0?Ie.texture.colorSpace:fn,map:Je,matcap:Tt,envMap:$e,envMapMode:$e&&X.mapping,envMapCubeUVHeight:Z,aoMap:E,lightMap:B,bumpMap:V,normalMap:ne,displacementMap:h&&Q,emissiveMap:F,normalMapObjectSpace:ne&&T.normalMapType===LM,normalMapTangentSpace:ne&&T.normalMapType===y0,metalnessMap:de,roughnessMap:ue,anisotropy:ge,anisotropyMap:H,clearcoat:le,clearcoatMap:ce,clearcoatNormalMap:oe,clearcoatRoughnessMap:fe,iridescence:Re,iridescenceMap:be,iridescenceThicknessMap:xe,sheen:C,sheenColorMap:Ae,sheenRoughnessMap:Pe,specularMap:nt,specularColorMap:_e,specularIntensityMap:Qe,transmission:A,transmissionMap:Ge,thicknessMap:Be,gradientMap:Oe,opaque:T.transparent===!1&&T.blending===Yo,alphaMap:O,alphaTest:ee,alphaHash:Se,combine:T.combine,mapUv:Je&&g(T.map.channel),aoMapUv:E&&g(T.aoMap.channel),lightMapUv:B&&g(T.lightMap.channel),bumpMapUv:V&&g(T.bumpMap.channel),normalMapUv:ne&&g(T.normalMap.channel),displacementMapUv:Q&&g(T.displacementMap.channel),emissiveMapUv:F&&g(T.emissiveMap.channel),metalnessMapUv:de&&g(T.metalnessMap.channel),roughnessMapUv:ue&&g(T.roughnessMap.channel),anisotropyMapUv:H&&g(T.anisotropyMap.channel),clearcoatMapUv:ce&&g(T.clearcoatMap.channel),clearcoatNormalMapUv:oe&&g(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&g(T.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&g(T.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&g(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&g(T.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&g(T.sheenRoughnessMap.channel),specularMapUv:nt&&g(T.specularMap.channel),specularColorMapUv:_e&&g(T.specularColorMap.channel),specularIntensityMapUv:Qe&&g(T.specularIntensityMap.channel),transmissionMapUv:Ge&&g(T.transmissionMap.channel),thicknessMapUv:Be&&g(T.thicknessMap.channel),alphaMapUv:O&&g(T.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(ne||ge),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,vertexUv1s:we,vertexUv2s:ye,vertexUv3s:Ye,pointsUvs:re.isPoints===!0&&!!K.attributes.uv&&(Je||O),fog:!!k,useFog:T.fog===!0,fogExp2:k&&k.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:re.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:q,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&J.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ze,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Je&&T.map.isVideoTexture===!0&&Ct.getTransfer(T.map.colorSpace)===Ht,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ji,flipSided:T.side===Kn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:Le&&T.extensions.derivatives===!0,extensionFragDepth:Le&&T.extensions.fragDepth===!0,extensionDrawBuffers:Le&&T.extensions.drawBuffers===!0,extensionShaderTextureLOD:Le&&T.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:T.customProgramCacheKey()}}function m(T){const P=[];if(T.shaderID?P.push(T.shaderID):(P.push(T.customVertexShaderID),P.push(T.customFragmentShaderID)),T.defines!==void 0)for(const J in T.defines)P.push(J),P.push(T.defines[J]);return T.isRawShaderMaterial===!1&&(M(P,T),S(P,T),P.push(i.outputColorSpace)),P.push(T.customProgramCacheKey),P.join()}function M(T,P){T.push(P.precision),T.push(P.outputColorSpace),T.push(P.envMapMode),T.push(P.envMapCubeUVHeight),T.push(P.mapUv),T.push(P.alphaMapUv),T.push(P.lightMapUv),T.push(P.aoMapUv),T.push(P.bumpMapUv),T.push(P.normalMapUv),T.push(P.displacementMapUv),T.push(P.emissiveMapUv),T.push(P.metalnessMapUv),T.push(P.roughnessMapUv),T.push(P.anisotropyMapUv),T.push(P.clearcoatMapUv),T.push(P.clearcoatNormalMapUv),T.push(P.clearcoatRoughnessMapUv),T.push(P.iridescenceMapUv),T.push(P.iridescenceThicknessMapUv),T.push(P.sheenColorMapUv),T.push(P.sheenRoughnessMapUv),T.push(P.specularMapUv),T.push(P.specularColorMapUv),T.push(P.specularIntensityMapUv),T.push(P.transmissionMapUv),T.push(P.thicknessMapUv),T.push(P.combine),T.push(P.fogExp2),T.push(P.sizeAttenuation),T.push(P.morphTargetsCount),T.push(P.morphAttributeCount),T.push(P.numDirLights),T.push(P.numPointLights),T.push(P.numSpotLights),T.push(P.numSpotLightMaps),T.push(P.numHemiLights),T.push(P.numRectAreaLights),T.push(P.numDirLightShadows),T.push(P.numPointLightShadows),T.push(P.numSpotLightShadows),T.push(P.numSpotLightShadowsWithMaps),T.push(P.numLightProbes),T.push(P.shadowMapType),T.push(P.toneMapping),T.push(P.numClippingPlanes),T.push(P.numClipIntersection),T.push(P.depthPacking)}function S(T,P){a.disableAll(),P.isWebGL2&&a.enable(0),P.supportsVertexTextures&&a.enable(1),P.instancing&&a.enable(2),P.instancingColor&&a.enable(3),P.matcap&&a.enable(4),P.envMap&&a.enable(5),P.normalMapObjectSpace&&a.enable(6),P.normalMapTangentSpace&&a.enable(7),P.clearcoat&&a.enable(8),P.iridescence&&a.enable(9),P.alphaTest&&a.enable(10),P.vertexColors&&a.enable(11),P.vertexAlphas&&a.enable(12),P.vertexUv1s&&a.enable(13),P.vertexUv2s&&a.enable(14),P.vertexUv3s&&a.enable(15),P.vertexTangents&&a.enable(16),P.anisotropy&&a.enable(17),T.push(a.mask),a.disableAll(),P.fog&&a.enable(0),P.useFog&&a.enable(1),P.flatShading&&a.enable(2),P.logarithmicDepthBuffer&&a.enable(3),P.skinning&&a.enable(4),P.morphTargets&&a.enable(5),P.morphNormals&&a.enable(6),P.morphColors&&a.enable(7),P.premultipliedAlpha&&a.enable(8),P.shadowMapEnabled&&a.enable(9),P.useLegacyLights&&a.enable(10),P.doubleSided&&a.enable(11),P.flipSided&&a.enable(12),P.useDepthPacking&&a.enable(13),P.dithering&&a.enable(14),P.transmission&&a.enable(15),P.sheen&&a.enable(16),P.opaque&&a.enable(17),P.pointsUvs&&a.enable(18),P.decodeVideoTexture&&a.enable(19),T.push(a.mask)}function x(T){const P=v[T.type];let J;if(P){const W=Ki[P];J=L0.clone(W.uniforms)}else J=T.uniforms;return J}function w(T,P){let J;for(let W=0,re=c.length;W<re;W++){const k=c[W];if(k.cacheKey===P){J=k,++J.usedTimes;break}}return J===void 0&&(J=new Pw(i,P,T,s),c.push(J)),J}function L(T){if(--T.usedTimes===0){const P=c.indexOf(T);c[P]=c[c.length-1],c.pop(),T.destroy()}}function R(T){l.remove(T)}function z(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:x,acquireProgram:w,releaseProgram:L,releaseShaderCache:R,programs:c,dispose:z}}function Nw(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function Ow(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function qm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Km(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(f,h,d,v,g,p){let m=i[e];return m===void 0?(m={id:f.id,object:f,geometry:h,material:d,groupOrder:v,renderOrder:f.renderOrder,z:g,group:p},i[e]=m):(m.id=f.id,m.object=f,m.geometry=h,m.material=d,m.groupOrder=v,m.renderOrder=f.renderOrder,m.z=g,m.group=p),e++,m}function a(f,h,d,v,g,p){const m=o(f,h,d,v,g,p);d.transmission>0?n.push(m):d.transparent===!0?r.push(m):t.push(m)}function l(f,h,d,v,g,p){const m=o(f,h,d,v,g,p);d.transmission>0?n.unshift(m):d.transparent===!0?r.unshift(m):t.unshift(m)}function c(f,h){t.length>1&&t.sort(f||Ow),n.length>1&&n.sort(h||qm),r.length>1&&r.sort(h||qm)}function u(){for(let f=e,h=i.length;f<h;f++){const d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function Fw(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new Km,i.set(n,[o])):r>=s.length?(o=new Km,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Bw(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new ct};break;case"SpotLight":t={position:new Y,direction:new Y,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":t={color:new ct,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return i[e.id]=t,t}}}function kw(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let zw=0;function Hw(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Gw(i,e){const t=new Bw,n=kw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new Y);const s=new Y,o=new pt,a=new pt;function l(u,f){let h=0,d=0,v=0;for(let W=0;W<9;W++)r.probe[W].set(0,0,0);let g=0,p=0,m=0,M=0,S=0,x=0,w=0,L=0,R=0,z=0,T=0;u.sort(Hw);const P=f===!0?Math.PI:1;for(let W=0,re=u.length;W<re;W++){const k=u[W],K=k.color,$=k.intensity,X=k.distance,Z=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)h+=K.r*$*P,d+=K.g*$*P,v+=K.b*$*P;else if(k.isLightProbe){for(let se=0;se<9;se++)r.probe[se].addScaledVector(k.sh.coefficients[se],$);T++}else if(k.isDirectionalLight){const se=t.get(k);if(se.color.copy(k.color).multiplyScalar(k.intensity*P),k.castShadow){const D=k.shadow,G=n.get(k);G.shadowBias=D.bias,G.shadowNormalBias=D.normalBias,G.shadowRadius=D.radius,G.shadowMapSize=D.mapSize,r.directionalShadow[g]=G,r.directionalShadowMap[g]=Z,r.directionalShadowMatrix[g]=k.shadow.matrix,x++}r.directional[g]=se,g++}else if(k.isSpotLight){const se=t.get(k);se.position.setFromMatrixPosition(k.matrixWorld),se.color.copy(K).multiplyScalar($*P),se.distance=X,se.coneCos=Math.cos(k.angle),se.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),se.decay=k.decay,r.spot[m]=se;const D=k.shadow;if(k.map&&(r.spotLightMap[R]=k.map,R++,D.updateMatrices(k),k.castShadow&&z++),r.spotLightMatrix[m]=D.matrix,k.castShadow){const G=n.get(k);G.shadowBias=D.bias,G.shadowNormalBias=D.normalBias,G.shadowRadius=D.radius,G.shadowMapSize=D.mapSize,r.spotShadow[m]=G,r.spotShadowMap[m]=Z,L++}m++}else if(k.isRectAreaLight){const se=t.get(k);se.color.copy(K).multiplyScalar($),se.halfWidth.set(k.width*.5,0,0),se.halfHeight.set(0,k.height*.5,0),r.rectArea[M]=se,M++}else if(k.isPointLight){const se=t.get(k);if(se.color.copy(k.color).multiplyScalar(k.intensity*P),se.distance=k.distance,se.decay=k.decay,k.castShadow){const D=k.shadow,G=n.get(k);G.shadowBias=D.bias,G.shadowNormalBias=D.normalBias,G.shadowRadius=D.radius,G.shadowMapSize=D.mapSize,G.shadowCameraNear=D.camera.near,G.shadowCameraFar=D.camera.far,r.pointShadow[p]=G,r.pointShadowMap[p]=Z,r.pointShadowMatrix[p]=k.shadow.matrix,w++}r.point[p]=se,p++}else if(k.isHemisphereLight){const se=t.get(k);se.skyColor.copy(k.color).multiplyScalar($*P),se.groundColor.copy(k.groundColor).multiplyScalar($*P),r.hemi[S]=se,S++}}M>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ne.LTC_FLOAT_1,r.rectAreaLTC2=Ne.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Ne.LTC_HALF_1,r.rectAreaLTC2=Ne.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=d,r.ambient[2]=v;const J=r.hash;(J.directionalLength!==g||J.pointLength!==p||J.spotLength!==m||J.rectAreaLength!==M||J.hemiLength!==S||J.numDirectionalShadows!==x||J.numPointShadows!==w||J.numSpotShadows!==L||J.numSpotMaps!==R||J.numLightProbes!==T)&&(r.directional.length=g,r.spot.length=m,r.rectArea.length=M,r.point.length=p,r.hemi.length=S,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=L+R-z,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=z,r.numLightProbes=T,J.directionalLength=g,J.pointLength=p,J.spotLength=m,J.rectAreaLength=M,J.hemiLength=S,J.numDirectionalShadows=x,J.numPointShadows=w,J.numSpotShadows=L,J.numSpotMaps=R,J.numLightProbes=T,r.version=zw++)}function c(u,f){let h=0,d=0,v=0,g=0,p=0;const m=f.matrixWorldInverse;for(let M=0,S=u.length;M<S;M++){const x=u[M];if(x.isDirectionalLight){const w=r.directional[h];w.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),h++}else if(x.isSpotLight){const w=r.spot[v];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),v++}else if(x.isRectAreaLight){const w=r.rectArea[g];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(m),a.identity(),o.copy(x.matrixWorld),o.premultiply(m),a.extractRotation(o),w.halfWidth.set(x.width*.5,0,0),w.halfHeight.set(0,x.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const w=r.point[d];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const w=r.hemi[p];w.direction.setFromMatrixPosition(x.matrixWorld),w.direction.transformDirection(m),p++}}}return{setup:l,setupView:c,state:r}}function jm(i,e){const t=new Gw(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(f){n.push(f)}function a(f){r.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Vw(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new jm(i,e),t.set(s,[l])):o>=a.length?(l=new jm(i,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class Ww extends nr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=CM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Xw extends nr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Yw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qw=`uniform sampler2D shadow_pass;
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
}`;function Kw(i,e,t){let n=new vd;const r=new vt,s=new vt,o=new Nt,a=new Ww({depthPacking:PM}),l=new Xw,c={},u=t.maxTextureSize,f={[Ur]:Kn,[Kn]:Ur,[ji]:ji},h=new Nr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:Yw,fragmentShader:qw}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const v=new ar;v.setAttribute("position",new jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new vi(v,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=r0;let m=this.type;this.render=function(w,L,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const z=i.getRenderTarget(),T=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),J=i.state;J.setBlending(as),J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const W=m!==vr&&this.type===vr,re=m===vr&&this.type!==vr;for(let k=0,K=w.length;k<K;k++){const $=w[k],X=$.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const Z=X.getFrameExtents();if(r.multiply(Z),s.copy(X.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Z.x),r.x=s.x*Z.x,X.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Z.y),r.y=s.y*Z.y,X.mapSize.y=s.y)),X.map===null||W===!0||re===!0){const D=this.type!==vr?{minFilter:_n,magFilter:_n}:{};X.map!==null&&X.map.dispose(),X.map=new no(r.x,r.y,D),X.map.texture.name=$.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const se=X.getViewportCount();for(let D=0;D<se;D++){const G=X.getViewport(D);o.set(s.x*G.x,s.y*G.y,s.x*G.z,s.y*G.w),J.viewport(o),X.updateMatrices($,D),n=X.getFrustum(),x(L,R,X.camera,$,this.type)}X.isPointLightShadow!==!0&&this.type===vr&&M(X,R),X.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(z,T,P)};function M(w,L){const R=e.update(g);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new no(r.x,r.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(L,null,R,h,g,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(L,null,R,d,g,null)}function S(w,L,R,z){let T=null;const P=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)T=P;else if(T=R.isPointLight===!0?l:a,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const J=T.uuid,W=L.uuid;let re=c[J];re===void 0&&(re={},c[J]=re);let k=re[W];k===void 0&&(k=T.clone(),re[W]=k),T=k}if(T.visible=L.visible,T.wireframe=L.wireframe,z===vr?T.side=L.shadowSide!==null?L.shadowSide:L.side:T.side=L.shadowSide!==null?L.shadowSide:f[L.side],T.alphaMap=L.alphaMap,T.alphaTest=L.alphaTest,T.map=L.map,T.clipShadows=L.clipShadows,T.clippingPlanes=L.clippingPlanes,T.clipIntersection=L.clipIntersection,T.displacementMap=L.displacementMap,T.displacementScale=L.displacementScale,T.displacementBias=L.displacementBias,T.wireframeLinewidth=L.wireframeLinewidth,T.linewidth=L.linewidth,R.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const J=i.properties.get(T);J.light=R}return T}function x(w,L,R,z,T){if(w.visible===!1)return;if(w.layers.test(L.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&T===vr)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);const W=e.update(w),re=w.material;if(Array.isArray(re)){const k=W.groups;for(let K=0,$=k.length;K<$;K++){const X=k[K],Z=re[X.materialIndex];if(Z&&Z.visible){const se=S(w,Z,z,T);i.renderBufferDirect(R,null,W,se,w,X)}}}else if(re.visible){const k=S(w,re,z,T);i.renderBufferDirect(R,null,W,k,w,null)}}const J=w.children;for(let W=0,re=J.length;W<re;W++)x(J[W],L,R,z,T)}}function jw(i,e,t){const n=t.isWebGL2;function r(){let O=!1;const ee=new Nt;let Se=null;const Le=new Nt(0,0,0,0);return{setMask:function(we){Se!==we&&!O&&(i.colorMask(we,we,we,we),Se=we)},setLocked:function(we){O=we},setClear:function(we,ye,Ye,Ze,Xt){Xt===!0&&(we*=Ze,ye*=Ze,Ye*=Ze),ee.set(we,ye,Ye,Ze),Le.equals(ee)===!1&&(i.clearColor(we,ye,Ye,Ze),Le.copy(ee))},reset:function(){O=!1,Se=null,Le.set(-1,0,0,0)}}}function s(){let O=!1,ee=null,Se=null,Le=null;return{setTest:function(we){we?Ie(i.DEPTH_TEST):Ue(i.DEPTH_TEST)},setMask:function(we){ee!==we&&!O&&(i.depthMask(we),ee=we)},setFunc:function(we){if(Se!==we){switch(we){case oM:i.depthFunc(i.NEVER);break;case aM:i.depthFunc(i.ALWAYS);break;case lM:i.depthFunc(i.LESS);break;case rh:i.depthFunc(i.LEQUAL);break;case cM:i.depthFunc(i.EQUAL);break;case uM:i.depthFunc(i.GEQUAL);break;case fM:i.depthFunc(i.GREATER);break;case hM:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Se=we}},setLocked:function(we){O=we},setClear:function(we){Le!==we&&(i.clearDepth(we),Le=we)},reset:function(){O=!1,ee=null,Se=null,Le=null}}}function o(){let O=!1,ee=null,Se=null,Le=null,we=null,ye=null,Ye=null,Ze=null,Xt=null;return{setTest:function(ke){O||(ke?Ie(i.STENCIL_TEST):Ue(i.STENCIL_TEST))},setMask:function(ke){ee!==ke&&!O&&(i.stencilMask(ke),ee=ke)},setFunc:function(ke,qe,tt){(Se!==ke||Le!==qe||we!==tt)&&(i.stencilFunc(ke,qe,tt),Se=ke,Le=qe,we=tt)},setOp:function(ke,qe,tt){(ye!==ke||Ye!==qe||Ze!==tt)&&(i.stencilOp(ke,qe,tt),ye=ke,Ye=qe,Ze=tt)},setLocked:function(ke){O=ke},setClear:function(ke){Xt!==ke&&(i.clearStencil(ke),Xt=ke)},reset:function(){O=!1,ee=null,Se=null,Le=null,we=null,ye=null,Ye=null,Ze=null,Xt=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,f=new WeakMap;let h={},d={},v=new WeakMap,g=[],p=null,m=!1,M=null,S=null,x=null,w=null,L=null,R=null,z=null,T=!1,P=null,J=null,W=null,re=null,k=null;const K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,X=0;const Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(Z)[1]),$=X>=1):Z.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),$=X>=2);let se=null,D={};const G=i.getParameter(i.SCISSOR_BOX),q=i.getParameter(i.VIEWPORT),Te=new Nt().fromArray(G),ve=new Nt().fromArray(q);function Ee(O,ee,Se,Le){const we=new Uint8Array(4),ye=i.createTexture();i.bindTexture(O,ye),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ye=0;Ye<Se;Ye++)n&&(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)?i.texImage3D(ee,0,i.RGBA,1,1,Le,0,i.RGBA,i.UNSIGNED_BYTE,we):i.texImage2D(ee+Ye,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,we);return ye}const Me={};Me[i.TEXTURE_2D]=Ee(i.TEXTURE_2D,i.TEXTURE_2D,1),Me[i.TEXTURE_CUBE_MAP]=Ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Me[i.TEXTURE_2D_ARRAY]=Ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Me[i.TEXTURE_3D]=Ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ie(i.DEPTH_TEST),l.setFunc(rh),Q(!1),F(Pp),Ie(i.CULL_FACE),V(as);function Ie(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function Ue(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function Je(O,ee){return d[O]!==ee?(i.bindFramebuffer(O,ee),d[O]=ee,n&&(O===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ee),O===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ee)),!0):!1}function Tt(O,ee){let Se=g,Le=!1;if(O)if(Se=v.get(ee),Se===void 0&&(Se=[],v.set(ee,Se)),O.isWebGLMultipleRenderTargets){const we=O.texture;if(Se.length!==we.length||Se[0]!==i.COLOR_ATTACHMENT0){for(let ye=0,Ye=we.length;ye<Ye;ye++)Se[ye]=i.COLOR_ATTACHMENT0+ye;Se.length=we.length,Le=!0}}else Se[0]!==i.COLOR_ATTACHMENT0&&(Se[0]=i.COLOR_ATTACHMENT0,Le=!0);else Se[0]!==i.BACK&&(Se[0]=i.BACK,Le=!0);Le&&(t.isWebGL2?i.drawBuffers(Se):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Se))}function $e(O){return p!==O?(i.useProgram(O),p=O,!0):!1}const E={[No]:i.FUNC_ADD,[jS]:i.FUNC_SUBTRACT,[$S]:i.FUNC_REVERSE_SUBTRACT};if(n)E[Up]=i.MIN,E[Np]=i.MAX;else{const O=e.get("EXT_blend_minmax");O!==null&&(E[Up]=O.MIN_EXT,E[Np]=O.MAX_EXT)}const B={[ZS]:i.ZERO,[JS]:i.ONE,[QS]:i.SRC_COLOR,[s0]:i.SRC_ALPHA,[sM]:i.SRC_ALPHA_SATURATE,[iM]:i.DST_COLOR,[tM]:i.DST_ALPHA,[eM]:i.ONE_MINUS_SRC_COLOR,[o0]:i.ONE_MINUS_SRC_ALPHA,[rM]:i.ONE_MINUS_DST_COLOR,[nM]:i.ONE_MINUS_DST_ALPHA};function V(O,ee,Se,Le,we,ye,Ye,Ze){if(O===as){m===!0&&(Ue(i.BLEND),m=!1);return}if(m===!1&&(Ie(i.BLEND),m=!0),O!==KS){if(O!==M||Ze!==T){if((S!==No||L!==No)&&(i.blendEquation(i.FUNC_ADD),S=No,L=No),Ze)switch(O){case Yo:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Lp:i.blendFunc(i.ONE,i.ONE);break;case Ip:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Dp:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Yo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Lp:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ip:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Dp:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}x=null,w=null,R=null,z=null,M=O,T=Ze}return}we=we||ee,ye=ye||Se,Ye=Ye||Le,(ee!==S||we!==L)&&(i.blendEquationSeparate(E[ee],E[we]),S=ee,L=we),(Se!==x||Le!==w||ye!==R||Ye!==z)&&(i.blendFuncSeparate(B[Se],B[Le],B[ye],B[Ye]),x=Se,w=Le,R=ye,z=Ye),M=O,T=!1}function ne(O,ee){O.side===ji?Ue(i.CULL_FACE):Ie(i.CULL_FACE);let Se=O.side===Kn;ee&&(Se=!Se),Q(Se),O.blending===Yo&&O.transparent===!1?V(as):V(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),a.setMask(O.colorWrite);const Le=O.stencilWrite;c.setTest(Le),Le&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ue(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Ie(i.SAMPLE_ALPHA_TO_COVERAGE):Ue(i.SAMPLE_ALPHA_TO_COVERAGE)}function Q(O){P!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),P=O)}function F(O){O!==XS?(Ie(i.CULL_FACE),O!==J&&(O===Pp?i.cullFace(i.BACK):O===YS?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ue(i.CULL_FACE),J=O}function de(O){O!==W&&($&&i.lineWidth(O),W=O)}function ue(O,ee,Se){O?(Ie(i.POLYGON_OFFSET_FILL),(re!==ee||k!==Se)&&(i.polygonOffset(ee,Se),re=ee,k=Se)):Ue(i.POLYGON_OFFSET_FILL)}function ge(O){O?Ie(i.SCISSOR_TEST):Ue(i.SCISSOR_TEST)}function le(O){O===void 0&&(O=i.TEXTURE0+K-1),se!==O&&(i.activeTexture(O),se=O)}function Re(O,ee,Se){Se===void 0&&(se===null?Se=i.TEXTURE0+K-1:Se=se);let Le=D[Se];Le===void 0&&(Le={type:void 0,texture:void 0},D[Se]=Le),(Le.type!==O||Le.texture!==ee)&&(se!==Se&&(i.activeTexture(Se),se=Se),i.bindTexture(O,ee||Me[O]),Le.type=O,Le.texture=ee)}function C(){const O=D[se];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function A(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function H(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ce(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function oe(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function fe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function be(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xe(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ae(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Pe(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function nt(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _e(O){Te.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),Te.copy(O))}function Qe(O){ve.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),ve.copy(O))}function Ge(O,ee){let Se=f.get(ee);Se===void 0&&(Se=new WeakMap,f.set(ee,Se));let Le=Se.get(O);Le===void 0&&(Le=i.getUniformBlockIndex(ee,O.name),Se.set(O,Le))}function Be(O,ee){const Le=f.get(ee).get(O);u.get(ee)!==Le&&(i.uniformBlockBinding(ee,Le,O.__bindingPointIndex),u.set(ee,Le))}function Oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},se=null,D={},d={},v=new WeakMap,g=[],p=null,m=!1,M=null,S=null,x=null,w=null,L=null,R=null,z=null,T=!1,P=null,J=null,W=null,re=null,k=null,Te.set(0,0,i.canvas.width,i.canvas.height),ve.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ie,disable:Ue,bindFramebuffer:Je,drawBuffers:Tt,useProgram:$e,setBlending:V,setMaterial:ne,setFlipSided:Q,setCullFace:F,setLineWidth:de,setPolygonOffset:ue,setScissorTest:ge,activeTexture:le,bindTexture:Re,unbindTexture:C,compressedTexImage2D:A,compressedTexImage3D:H,texImage2D:Pe,texImage3D:nt,updateUBOMapping:Ge,uniformBlockBinding:Be,texStorage2D:xe,texStorage3D:Ae,texSubImage2D:ce,texSubImage3D:oe,compressedTexSubImage2D:fe,compressedTexSubImage3D:be,scissor:_e,viewport:Qe,reset:Oe}}function $w(i,e,t,n,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let g;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(C,A){return m?new OffscreenCanvas(C,A):Tl("canvas")}function S(C,A,H,ce){let oe=1;if((C.width>ce||C.height>ce)&&(oe=ce/Math.max(C.width,C.height)),oe<1||A===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const fe=A?eu:Math.floor,be=fe(oe*C.width),xe=fe(oe*C.height);g===void 0&&(g=M(be,xe));const Ae=H?M(be,xe):g;return Ae.width=be,Ae.height=xe,Ae.getContext("2d").drawImage(C,0,0,be,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+be+"x"+xe+")."),Ae}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function x(C){return fh(C.width)&&fh(C.height)}function w(C){return a?!1:C.wrapS!==Qn||C.wrapT!==Qn||C.minFilter!==_n&&C.minFilter!==cn}function L(C,A){return C.generateMipmaps&&A&&C.minFilter!==_n&&C.minFilter!==cn}function R(C){i.generateMipmap(C)}function z(C,A,H,ce,oe=!1){if(a===!1)return A;if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let fe=A;if(A===i.RED&&(H===i.FLOAT&&(fe=i.R32F),H===i.HALF_FLOAT&&(fe=i.R16F),H===i.UNSIGNED_BYTE&&(fe=i.R8)),A===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(fe=i.R8UI),H===i.UNSIGNED_SHORT&&(fe=i.R16UI),H===i.UNSIGNED_INT&&(fe=i.R32UI),H===i.BYTE&&(fe=i.R8I),H===i.SHORT&&(fe=i.R16I),H===i.INT&&(fe=i.R32I)),A===i.RG&&(H===i.FLOAT&&(fe=i.RG32F),H===i.HALF_FLOAT&&(fe=i.RG16F),H===i.UNSIGNED_BYTE&&(fe=i.RG8)),A===i.RGBA){const be=oe?$c:Ct.getTransfer(ce);H===i.FLOAT&&(fe=i.RGBA32F),H===i.HALF_FLOAT&&(fe=i.RGBA16F),H===i.UNSIGNED_BYTE&&(fe=be===Ht?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(fe=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(fe=i.RGB5_A1)}return(fe===i.R16F||fe===i.R32F||fe===i.RG16F||fe===i.RG32F||fe===i.RGBA16F||fe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function T(C,A,H){return L(C,H)===!0||C.isFramebufferTexture&&C.minFilter!==_n&&C.minFilter!==cn?Math.log2(Math.max(A.width,A.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?A.mipmaps.length:1}function P(C){return C===_n||C===ah||C===Dc?i.NEAREST:i.LINEAR}function J(C){const A=C.target;A.removeEventListener("dispose",J),re(A),A.isVideoTexture&&v.delete(A)}function W(C){const A=C.target;A.removeEventListener("dispose",W),K(A)}function re(C){const A=n.get(C);if(A.__webglInit===void 0)return;const H=C.source,ce=p.get(H);if(ce){const oe=ce[A.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&k(C),Object.keys(ce).length===0&&p.delete(H)}n.remove(C)}function k(C){const A=n.get(C);i.deleteTexture(A.__webglTexture);const H=C.source,ce=p.get(H);delete ce[A.__cacheKey],o.memory.textures--}function K(C){const A=C.texture,H=n.get(C),ce=n.get(A);if(ce.__webglTexture!==void 0&&(i.deleteTexture(ce.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(H.__webglFramebuffer[oe]))for(let fe=0;fe<H.__webglFramebuffer[oe].length;fe++)i.deleteFramebuffer(H.__webglFramebuffer[oe][fe]);else i.deleteFramebuffer(H.__webglFramebuffer[oe]);H.__webglDepthbuffer&&i.deleteRenderbuffer(H.__webglDepthbuffer[oe])}else{if(Array.isArray(H.__webglFramebuffer))for(let oe=0;oe<H.__webglFramebuffer.length;oe++)i.deleteFramebuffer(H.__webglFramebuffer[oe]);else i.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&i.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&i.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let oe=0;oe<H.__webglColorRenderbuffer.length;oe++)H.__webglColorRenderbuffer[oe]&&i.deleteRenderbuffer(H.__webglColorRenderbuffer[oe]);H.__webglDepthRenderbuffer&&i.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let oe=0,fe=A.length;oe<fe;oe++){const be=n.get(A[oe]);be.__webglTexture&&(i.deleteTexture(be.__webglTexture),o.memory.textures--),n.remove(A[oe])}n.remove(A),n.remove(C)}let $=0;function X(){$=0}function Z(){const C=$;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),$+=1,C}function se(C){const A=[];return A.push(C.wrapS),A.push(C.wrapT),A.push(C.wrapR||0),A.push(C.magFilter),A.push(C.minFilter),A.push(C.anisotropy),A.push(C.internalFormat),A.push(C.format),A.push(C.type),A.push(C.generateMipmaps),A.push(C.premultiplyAlpha),A.push(C.flipY),A.push(C.unpackAlignment),A.push(C.colorSpace),A.join()}function D(C,A){const H=n.get(C);if(C.isVideoTexture&&le(C),C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){const ce=C.image;if(ce===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Je(H,C,A);return}}t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+A)}function G(C,A){const H=n.get(C);if(C.version>0&&H.__version!==C.version){Je(H,C,A);return}t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+A)}function q(C,A){const H=n.get(C);if(C.version>0&&H.__version!==C.version){Je(H,C,A);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+A)}function Te(C,A){const H=n.get(C);if(C.version>0&&H.__version!==C.version){Tt(H,C,A);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+A)}const ve={[sa]:i.REPEAT,[Qn]:i.CLAMP_TO_EDGE,[jc]:i.MIRRORED_REPEAT},Ee={[_n]:i.NEAREST,[ah]:i.NEAREST_MIPMAP_NEAREST,[Dc]:i.NEAREST_MIPMAP_LINEAR,[cn]:i.LINEAR,[u0]:i.LINEAR_MIPMAP_NEAREST,[ps]:i.LINEAR_MIPMAP_LINEAR},Me={[DM]:i.NEVER,[zM]:i.ALWAYS,[UM]:i.LESS,[OM]:i.LEQUAL,[NM]:i.EQUAL,[kM]:i.GEQUAL,[FM]:i.GREATER,[BM]:i.NOTEQUAL};function Ie(C,A,H){if(H?(i.texParameteri(C,i.TEXTURE_WRAP_S,ve[A.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,ve[A.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,ve[A.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,Ee[A.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,Ee[A.minFilter])):(i.texParameteri(C,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(C,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(A.wrapS!==Qn||A.wrapT!==Qn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(C,i.TEXTURE_MAG_FILTER,P(A.magFilter)),i.texParameteri(C,i.TEXTURE_MIN_FILTER,P(A.minFilter)),A.minFilter!==_n&&A.minFilter!==cn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Me[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ce=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===_n||A.minFilter!==Dc&&A.minFilter!==ps||A.type===Pi&&e.has("OES_texture_float_linear")===!1||a===!1&&A.type===Ar&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||n.get(A).__currentAnisotropy)&&(i.texParameterf(C,ce.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy)}}function Ue(C,A){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,A.addEventListener("dispose",J));const ce=A.source;let oe=p.get(ce);oe===void 0&&(oe={},p.set(ce,oe));const fe=se(A);if(fe!==C.__cacheKey){oe[fe]===void 0&&(oe[fe]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),oe[fe].usedTimes++;const be=oe[C.__cacheKey];be!==void 0&&(oe[C.__cacheKey].usedTimes--,be.usedTimes===0&&k(A)),C.__cacheKey=fe,C.__webglTexture=oe[fe].texture}return H}function Je(C,A,H){let ce=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ce=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ce=i.TEXTURE_3D);const oe=Ue(C,A),fe=A.source;t.bindTexture(ce,C.__webglTexture,i.TEXTURE0+H);const be=n.get(fe);if(fe.version!==be.__version||oe===!0){t.activeTexture(i.TEXTURE0+H);const xe=Ct.getPrimaries(Ct.workingColorSpace),Ae=A.colorSpace===pi?null:Ct.getPrimaries(A.colorSpace),Pe=A.colorSpace===pi||xe===Ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const nt=w(A)&&x(A.image)===!1;let _e=S(A.image,nt,!1,u);_e=Re(A,_e);const Qe=x(_e)||a,Ge=s.convert(A.format,A.colorSpace);let Be=s.convert(A.type),Oe=z(A.internalFormat,Ge,Be,A.colorSpace,A.isVideoTexture);Ie(ce,A,Qe);let O;const ee=A.mipmaps,Se=a&&A.isVideoTexture!==!0,Le=be.__version===void 0||oe===!0,we=T(A,_e,Qe);if(A.isDepthTexture)Oe=i.DEPTH_COMPONENT,a?A.type===Pi?Oe=i.DEPTH_COMPONENT32F:A.type===Qr?Oe=i.DEPTH_COMPONENT24:A.type===Xs?Oe=i.DEPTH24_STENCIL8:Oe=i.DEPTH_COMPONENT16:A.type===Pi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===Ys&&Oe===i.DEPTH_COMPONENT&&A.type!==md&&A.type!==Qr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=Qr,Be=s.convert(A.type)),A.format===oa&&Oe===i.DEPTH_COMPONENT&&(Oe=i.DEPTH_STENCIL,A.type!==Xs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=Xs,Be=s.convert(A.type))),Le&&(Se?t.texStorage2D(i.TEXTURE_2D,1,Oe,_e.width,_e.height):t.texImage2D(i.TEXTURE_2D,0,Oe,_e.width,_e.height,0,Ge,Be,null));else if(A.isDataTexture)if(ee.length>0&&Qe){Se&&Le&&t.texStorage2D(i.TEXTURE_2D,we,Oe,ee[0].width,ee[0].height);for(let ye=0,Ye=ee.length;ye<Ye;ye++)O=ee[ye],Se?t.texSubImage2D(i.TEXTURE_2D,ye,0,0,O.width,O.height,Ge,Be,O.data):t.texImage2D(i.TEXTURE_2D,ye,Oe,O.width,O.height,0,Ge,Be,O.data);A.generateMipmaps=!1}else Se?(Le&&t.texStorage2D(i.TEXTURE_2D,we,Oe,_e.width,_e.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,_e.width,_e.height,Ge,Be,_e.data)):t.texImage2D(i.TEXTURE_2D,0,Oe,_e.width,_e.height,0,Ge,Be,_e.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Se&&Le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,Oe,ee[0].width,ee[0].height,_e.depth);for(let ye=0,Ye=ee.length;ye<Ye;ye++)O=ee[ye],A.format!==di?Ge!==null?Se?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ye,0,0,0,O.width,O.height,_e.depth,Ge,O.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ye,Oe,O.width,O.height,_e.depth,0,O.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Se?t.texSubImage3D(i.TEXTURE_2D_ARRAY,ye,0,0,0,O.width,O.height,_e.depth,Ge,Be,O.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ye,Oe,O.width,O.height,_e.depth,0,Ge,Be,O.data)}else{Se&&Le&&t.texStorage2D(i.TEXTURE_2D,we,Oe,ee[0].width,ee[0].height);for(let ye=0,Ye=ee.length;ye<Ye;ye++)O=ee[ye],A.format!==di?Ge!==null?Se?t.compressedTexSubImage2D(i.TEXTURE_2D,ye,0,0,O.width,O.height,Ge,O.data):t.compressedTexImage2D(i.TEXTURE_2D,ye,Oe,O.width,O.height,0,O.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Se?t.texSubImage2D(i.TEXTURE_2D,ye,0,0,O.width,O.height,Ge,Be,O.data):t.texImage2D(i.TEXTURE_2D,ye,Oe,O.width,O.height,0,Ge,Be,O.data)}else if(A.isDataArrayTexture)Se?(Le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,Oe,_e.width,_e.height,_e.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Ge,Be,_e.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Oe,_e.width,_e.height,_e.depth,0,Ge,Be,_e.data);else if(A.isData3DTexture)Se?(Le&&t.texStorage3D(i.TEXTURE_3D,we,Oe,_e.width,_e.height,_e.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Ge,Be,_e.data)):t.texImage3D(i.TEXTURE_3D,0,Oe,_e.width,_e.height,_e.depth,0,Ge,Be,_e.data);else if(A.isFramebufferTexture){if(Le)if(Se)t.texStorage2D(i.TEXTURE_2D,we,Oe,_e.width,_e.height);else{let ye=_e.width,Ye=_e.height;for(let Ze=0;Ze<we;Ze++)t.texImage2D(i.TEXTURE_2D,Ze,Oe,ye,Ye,0,Ge,Be,null),ye>>=1,Ye>>=1}}else if(ee.length>0&&Qe){Se&&Le&&t.texStorage2D(i.TEXTURE_2D,we,Oe,ee[0].width,ee[0].height);for(let ye=0,Ye=ee.length;ye<Ye;ye++)O=ee[ye],Se?t.texSubImage2D(i.TEXTURE_2D,ye,0,0,Ge,Be,O):t.texImage2D(i.TEXTURE_2D,ye,Oe,Ge,Be,O);A.generateMipmaps=!1}else Se?(Le&&t.texStorage2D(i.TEXTURE_2D,we,Oe,_e.width,_e.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ge,Be,_e)):t.texImage2D(i.TEXTURE_2D,0,Oe,Ge,Be,_e);L(A,Qe)&&R(ce),be.__version=fe.version,A.onUpdate&&A.onUpdate(A)}C.__version=A.version}function Tt(C,A,H){if(A.image.length!==6)return;const ce=Ue(C,A),oe=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+H);const fe=n.get(oe);if(oe.version!==fe.__version||ce===!0){t.activeTexture(i.TEXTURE0+H);const be=Ct.getPrimaries(Ct.workingColorSpace),xe=A.colorSpace===pi?null:Ct.getPrimaries(A.colorSpace),Ae=A.colorSpace===pi||be===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const Pe=A.isCompressedTexture||A.image[0].isCompressedTexture,nt=A.image[0]&&A.image[0].isDataTexture,_e=[];for(let ye=0;ye<6;ye++)!Pe&&!nt?_e[ye]=S(A.image[ye],!1,!0,c):_e[ye]=nt?A.image[ye].image:A.image[ye],_e[ye]=Re(A,_e[ye]);const Qe=_e[0],Ge=x(Qe)||a,Be=s.convert(A.format,A.colorSpace),Oe=s.convert(A.type),O=z(A.internalFormat,Be,Oe,A.colorSpace),ee=a&&A.isVideoTexture!==!0,Se=fe.__version===void 0||ce===!0;let Le=T(A,Qe,Ge);Ie(i.TEXTURE_CUBE_MAP,A,Ge);let we;if(Pe){ee&&Se&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Le,O,Qe.width,Qe.height);for(let ye=0;ye<6;ye++){we=_e[ye].mipmaps;for(let Ye=0;Ye<we.length;Ye++){const Ze=we[Ye];A.format!==di?Be!==null?ee?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ye,0,0,Ze.width,Ze.height,Be,Ze.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ye,O,Ze.width,Ze.height,0,Ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ee?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ye,0,0,Ze.width,Ze.height,Be,Oe,Ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ye,O,Ze.width,Ze.height,0,Be,Oe,Ze.data)}}}else{we=A.mipmaps,ee&&Se&&(we.length>0&&Le++,t.texStorage2D(i.TEXTURE_CUBE_MAP,Le,O,_e[0].width,_e[0].height));for(let ye=0;ye<6;ye++)if(nt){ee?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,_e[ye].width,_e[ye].height,Be,Oe,_e[ye].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,O,_e[ye].width,_e[ye].height,0,Be,Oe,_e[ye].data);for(let Ye=0;Ye<we.length;Ye++){const Xt=we[Ye].image[ye].image;ee?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ye+1,0,0,Xt.width,Xt.height,Be,Oe,Xt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ye+1,O,Xt.width,Xt.height,0,Be,Oe,Xt.data)}}else{ee?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Be,Oe,_e[ye]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,O,Be,Oe,_e[ye]);for(let Ye=0;Ye<we.length;Ye++){const Ze=we[Ye];ee?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ye+1,0,0,Be,Oe,Ze.image[ye]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ye+1,O,Be,Oe,Ze.image[ye])}}}L(A,Ge)&&R(i.TEXTURE_CUBE_MAP),fe.__version=oe.version,A.onUpdate&&A.onUpdate(A)}C.__version=A.version}function $e(C,A,H,ce,oe,fe){const be=s.convert(H.format,H.colorSpace),xe=s.convert(H.type),Ae=z(H.internalFormat,be,xe,H.colorSpace);if(!n.get(A).__hasExternalTextures){const nt=Math.max(1,A.width>>fe),_e=Math.max(1,A.height>>fe);oe===i.TEXTURE_3D||oe===i.TEXTURE_2D_ARRAY?t.texImage3D(oe,fe,Ae,nt,_e,A.depth,0,be,xe,null):t.texImage2D(oe,fe,Ae,nt,_e,0,be,xe,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),ge(A)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ce,oe,n.get(H).__webglTexture,0,ue(A)):(oe===i.TEXTURE_2D||oe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ce,oe,n.get(H).__webglTexture,fe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function E(C,A,H){if(i.bindRenderbuffer(i.RENDERBUFFER,C),A.depthBuffer&&!A.stencilBuffer){let ce=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(H||ge(A)){const oe=A.depthTexture;oe&&oe.isDepthTexture&&(oe.type===Pi?ce=i.DEPTH_COMPONENT32F:oe.type===Qr&&(ce=i.DEPTH_COMPONENT24));const fe=ue(A);ge(A)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe,ce,A.width,A.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,ce,A.width,A.height)}else i.renderbufferStorage(i.RENDERBUFFER,ce,A.width,A.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,C)}else if(A.depthBuffer&&A.stencilBuffer){const ce=ue(A);H&&ge(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,i.DEPTH24_STENCIL8,A.width,A.height):ge(A)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,i.DEPTH24_STENCIL8,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,C)}else{const ce=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let oe=0;oe<ce.length;oe++){const fe=ce[oe],be=s.convert(fe.format,fe.colorSpace),xe=s.convert(fe.type),Ae=z(fe.internalFormat,be,xe,fe.colorSpace),Pe=ue(A);H&&ge(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe,Ae,A.width,A.height):ge(A)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pe,Ae,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,Ae,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function B(C,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),D(A.depthTexture,0);const ce=n.get(A.depthTexture).__webglTexture,oe=ue(A);if(A.depthTexture.format===Ys)ge(A)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ce,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ce,0);else if(A.depthTexture.format===oa)ge(A)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ce,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function V(C){const A=n.get(C),H=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!A.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");B(A.__webglFramebuffer,C)}else if(H){A.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[ce]),A.__webglDepthbuffer[ce]=i.createRenderbuffer(),E(A.__webglDepthbuffer[ce],C,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=i.createRenderbuffer(),E(A.__webglDepthbuffer,C,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function ne(C,A,H){const ce=n.get(C);A!==void 0&&$e(ce.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&V(C)}function Q(C){const A=C.texture,H=n.get(C),ce=n.get(A);C.addEventListener("dispose",W),C.isWebGLMultipleRenderTargets!==!0&&(ce.__webglTexture===void 0&&(ce.__webglTexture=i.createTexture()),ce.__version=A.version,o.memory.textures++);const oe=C.isWebGLCubeRenderTarget===!0,fe=C.isWebGLMultipleRenderTargets===!0,be=x(C)||a;if(oe){H.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(a&&A.mipmaps&&A.mipmaps.length>0){H.__webglFramebuffer[xe]=[];for(let Ae=0;Ae<A.mipmaps.length;Ae++)H.__webglFramebuffer[xe][Ae]=i.createFramebuffer()}else H.__webglFramebuffer[xe]=i.createFramebuffer()}else{if(a&&A.mipmaps&&A.mipmaps.length>0){H.__webglFramebuffer=[];for(let xe=0;xe<A.mipmaps.length;xe++)H.__webglFramebuffer[xe]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(fe)if(r.drawBuffers){const xe=C.texture;for(let Ae=0,Pe=xe.length;Ae<Pe;Ae++){const nt=n.get(xe[Ae]);nt.__webglTexture===void 0&&(nt.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&ge(C)===!1){const xe=fe?A:[A];H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Ae=0;Ae<xe.length;Ae++){const Pe=xe[Ae];H.__webglColorRenderbuffer[Ae]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[Ae]);const nt=s.convert(Pe.format,Pe.colorSpace),_e=s.convert(Pe.type),Qe=z(Pe.internalFormat,nt,_e,Pe.colorSpace,C.isXRRenderTarget===!0),Ge=ue(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ge,Qe,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,H.__webglColorRenderbuffer[Ae])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),E(H.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(oe){t.bindTexture(i.TEXTURE_CUBE_MAP,ce.__webglTexture),Ie(i.TEXTURE_CUBE_MAP,A,be);for(let xe=0;xe<6;xe++)if(a&&A.mipmaps&&A.mipmaps.length>0)for(let Ae=0;Ae<A.mipmaps.length;Ae++)$e(H.__webglFramebuffer[xe][Ae],C,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ae);else $e(H.__webglFramebuffer[xe],C,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);L(A,be)&&R(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){const xe=C.texture;for(let Ae=0,Pe=xe.length;Ae<Pe;Ae++){const nt=xe[Ae],_e=n.get(nt);t.bindTexture(i.TEXTURE_2D,_e.__webglTexture),Ie(i.TEXTURE_2D,nt,be),$e(H.__webglFramebuffer,C,nt,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,0),L(nt,be)&&R(i.TEXTURE_2D)}t.unbindTexture()}else{let xe=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?xe=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(xe,ce.__webglTexture),Ie(xe,A,be),a&&A.mipmaps&&A.mipmaps.length>0)for(let Ae=0;Ae<A.mipmaps.length;Ae++)$e(H.__webglFramebuffer[Ae],C,A,i.COLOR_ATTACHMENT0,xe,Ae);else $e(H.__webglFramebuffer,C,A,i.COLOR_ATTACHMENT0,xe,0);L(A,be)&&R(xe),t.unbindTexture()}C.depthBuffer&&V(C)}function F(C){const A=x(C)||a,H=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ce=0,oe=H.length;ce<oe;ce++){const fe=H[ce];if(L(fe,A)){const be=C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,xe=n.get(fe).__webglTexture;t.bindTexture(be,xe),R(be),t.unbindTexture()}}}function de(C){if(a&&C.samples>0&&ge(C)===!1){const A=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],H=C.width,ce=C.height;let oe=i.COLOR_BUFFER_BIT;const fe=[],be=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=n.get(C),Ae=C.isWebGLMultipleRenderTargets===!0;if(Ae)for(let Pe=0;Pe<A.length;Pe++)t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Pe=0;Pe<A.length;Pe++){fe.push(i.COLOR_ATTACHMENT0+Pe),C.depthBuffer&&fe.push(be);const nt=xe.__ignoreDepthValues!==void 0?xe.__ignoreDepthValues:!1;if(nt===!1&&(C.depthBuffer&&(oe|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&(oe|=i.STENCIL_BUFFER_BIT)),Ae&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xe.__webglColorRenderbuffer[Pe]),nt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[be]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[be])),Ae){const _e=n.get(A[Pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,_e,0)}i.blitFramebuffer(0,0,H,ce,0,0,H,ce,oe,i.NEAREST),d&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,fe)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ae)for(let Pe=0;Pe<A.length;Pe++){t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,xe.__webglColorRenderbuffer[Pe]);const nt=n.get(A[Pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,nt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}}function ue(C){return Math.min(f,C.samples)}function ge(C){const A=n.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function le(C){const A=o.render.frame;v.get(C)!==A&&(v.set(C,A),C.update())}function Re(C,A){const H=C.colorSpace,ce=C.format,oe=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===uh||H!==fn&&H!==pi&&(Ct.getTransfer(H)===Ht?a===!1?e.has("EXT_sRGB")===!0&&ce===di?(C.format=uh,C.minFilter=cn,C.generateMipmaps=!1):A=T0.sRGBToLinear(A):(ce!==di||oe!==cs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),A}this.allocateTextureUnit=Z,this.resetTextureUnits=X,this.setTexture2D=D,this.setTexture2DArray=G,this.setTexture3D=q,this.setTextureCube=Te,this.rebindTextures=ne,this.setupRenderTarget=Q,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=V,this.setupFrameBufferTexture=$e,this.useMultisampledRTT=ge}function Zw(i,e,t){const n=t.isWebGL2;function r(s,o=pi){let a;const l=Ct.getTransfer(o);if(s===cs)return i.UNSIGNED_BYTE;if(s===h0)return i.UNSIGNED_SHORT_4_4_4_4;if(s===d0)return i.UNSIGNED_SHORT_5_5_5_1;if(s===xM)return i.BYTE;if(s===yM)return i.SHORT;if(s===md)return i.UNSIGNED_SHORT;if(s===f0)return i.INT;if(s===Qr)return i.UNSIGNED_INT;if(s===Pi)return i.FLOAT;if(s===Ar)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===SM)return i.ALPHA;if(s===di)return i.RGBA;if(s===MM)return i.LUMINANCE;if(s===TM)return i.LUMINANCE_ALPHA;if(s===Ys)return i.DEPTH_COMPONENT;if(s===oa)return i.DEPTH_STENCIL;if(s===uh)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===p0)return i.RED;if(s===m0)return i.RED_INTEGER;if(s===EM)return i.RG;if(s===g0)return i.RG_INTEGER;if(s===_0)return i.RGBA_INTEGER;if(s===Xu||s===Yu||s===qu||s===Ku)if(l===Ht)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Xu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Yu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===qu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ku)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Xu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Yu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===qu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ku)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Op||s===Fp||s===Bp||s===kp)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Op)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Fp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Bp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===kp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===bM)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===zp||s===Hp)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===zp)return l===Ht?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Hp)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Gp||s===Vp||s===Wp||s===Xp||s===Yp||s===qp||s===Kp||s===jp||s===$p||s===Zp||s===Jp||s===Qp||s===em||s===tm)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Gp)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Vp)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Wp)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Xp)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Yp)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===qp)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Kp)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===jp)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===$p)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Zp)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Jp)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Qp)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===em)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===tm)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ju||s===nm||s===im)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===ju)return l===Ht?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===nm)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===im)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===AM||s===rm||s===sm||s===om)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===ju)return a.COMPRESSED_RED_RGTC1_EXT;if(s===rm)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===sm)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===om)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Xs?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class Jw extends Cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class zs extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qw={type:"move"};class xf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,n),m=this._getHandJoint(c,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,v=.005;c.inputState.pinching&&h>d+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Qw)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new zs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class e1 extends Sn{constructor(e,t,n,r,s,o,a,l,c,u){if(u=u!==void 0?u:Ys,u!==Ys&&u!==oa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ys&&(n=Qr),n===void 0&&u===oa&&(n=Xs),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:_n,this.minFilter=l!==void 0?l:_n,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class t1 extends ya{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,v=null;const g=t.getContextAttributes();let p=null,m=null;const M=[],S=[],x=new Cn;x.layers.enable(1),x.viewport=new Nt;const w=new Cn;w.layers.enable(2),w.viewport=new Nt;const L=[x,w],R=new Jw;R.layers.enable(1),R.layers.enable(2);let z=null,T=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let q=M[G];return q===void 0&&(q=new xf,M[G]=q),q.getTargetRaySpace()},this.getControllerGrip=function(G){let q=M[G];return q===void 0&&(q=new xf,M[G]=q),q.getGripSpace()},this.getHand=function(G){let q=M[G];return q===void 0&&(q=new xf,M[G]=q),q.getHandSpace()};function P(G){const q=S.indexOf(G.inputSource);if(q===-1)return;const Te=M[q];Te!==void 0&&(Te.update(G.inputSource,G.frame,c||o),Te.dispatchEvent({type:G.type,data:G.inputSource}))}function J(){r.removeEventListener("select",P),r.removeEventListener("selectstart",P),r.removeEventListener("selectend",P),r.removeEventListener("squeeze",P),r.removeEventListener("squeezestart",P),r.removeEventListener("squeezeend",P),r.removeEventListener("end",J),r.removeEventListener("inputsourceschange",W);for(let G=0;G<M.length;G++){const q=S[G];q!==null&&(S[G]=null,M[G].disconnect(q))}z=null,T=null,e.setRenderTarget(p),d=null,h=null,f=null,r=null,m=null,D.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",P),r.addEventListener("selectstart",P),r.addEventListener("selectend",P),r.addEventListener("squeeze",P),r.addEventListener("squeezestart",P),r.addEventListener("squeezeend",P),r.addEventListener("end",J),r.addEventListener("inputsourceschange",W),g.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const q={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,q),r.updateRenderState({baseLayer:d}),m=new no(d.framebufferWidth,d.framebufferHeight,{format:di,type:cs,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let q=null,Te=null,ve=null;g.depth&&(ve=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,q=g.stencil?oa:Ys,Te=g.stencil?Xs:Qr);const Ee={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(Ee),r.updateRenderState({layers:[h]}),m=new no(h.textureWidth,h.textureHeight,{format:di,type:cs,depthTexture:new e1(h.textureWidth,h.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const Me=e.properties.get(m);Me.__ignoreDepthValues=h.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),D.setContext(r),D.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function W(G){for(let q=0;q<G.removed.length;q++){const Te=G.removed[q],ve=S.indexOf(Te);ve>=0&&(S[ve]=null,M[ve].disconnect(Te))}for(let q=0;q<G.added.length;q++){const Te=G.added[q];let ve=S.indexOf(Te);if(ve===-1){for(let Me=0;Me<M.length;Me++)if(Me>=S.length){S.push(Te),ve=Me;break}else if(S[Me]===null){S[Me]=Te,ve=Me;break}if(ve===-1)break}const Ee=M[ve];Ee&&Ee.connect(Te)}}const re=new Y,k=new Y;function K(G,q,Te){re.setFromMatrixPosition(q.matrixWorld),k.setFromMatrixPosition(Te.matrixWorld);const ve=re.distanceTo(k),Ee=q.projectionMatrix.elements,Me=Te.projectionMatrix.elements,Ie=Ee[14]/(Ee[10]-1),Ue=Ee[14]/(Ee[10]+1),Je=(Ee[9]+1)/Ee[5],Tt=(Ee[9]-1)/Ee[5],$e=(Ee[8]-1)/Ee[0],E=(Me[8]+1)/Me[0],B=Ie*$e,V=Ie*E,ne=ve/(-$e+E),Q=ne*-$e;q.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Q),G.translateZ(ne),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const F=Ie+ne,de=Ue+ne,ue=B-Q,ge=V+(ve-Q),le=Je*Ue/de*F,Re=Tt*Ue/de*F;G.projectionMatrix.makePerspective(ue,ge,le,Re,F,de),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function $(G,q){q===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(q.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;R.near=w.near=x.near=G.near,R.far=w.far=x.far=G.far,(z!==R.near||T!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),z=R.near,T=R.far);const q=G.parent,Te=R.cameras;$(R,q);for(let ve=0;ve<Te.length;ve++)$(Te[ve],q);Te.length===2?K(R,x,w):R.projectionMatrix.copy(x.projectionMatrix),X(G,R,q)};function X(G,q,Te){Te===null?G.matrix.copy(q.matrixWorld):(G.matrix.copy(Te.matrixWorld),G.matrix.invert(),G.matrix.multiply(q.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(q.projectionMatrix),G.projectionMatrixInverse.copy(q.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=la*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(G){l=G,h!==null&&(h.fixedFoveation=G),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=G)};let Z=null;function se(G,q){if(u=q.getViewerPose(c||o),v=q,u!==null){const Te=u.views;d!==null&&(e.setRenderTargetFramebuffer(m,d.framebuffer),e.setRenderTarget(m));let ve=!1;Te.length!==R.cameras.length&&(R.cameras.length=0,ve=!0);for(let Ee=0;Ee<Te.length;Ee++){const Me=Te[Ee];let Ie=null;if(d!==null)Ie=d.getViewport(Me);else{const Je=f.getViewSubImage(h,Me);Ie=Je.viewport,Ee===0&&(e.setRenderTargetTextures(m,Je.colorTexture,h.ignoreDepthValues?void 0:Je.depthStencilTexture),e.setRenderTarget(m))}let Ue=L[Ee];Ue===void 0&&(Ue=new Cn,Ue.layers.enable(Ee),Ue.viewport=new Nt,L[Ee]=Ue),Ue.matrix.fromArray(Me.transform.matrix),Ue.matrix.decompose(Ue.position,Ue.quaternion,Ue.scale),Ue.projectionMatrix.fromArray(Me.projectionMatrix),Ue.projectionMatrixInverse.copy(Ue.projectionMatrix).invert(),Ue.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),Ee===0&&(R.matrix.copy(Ue.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),ve===!0&&R.cameras.push(Ue)}}for(let Te=0;Te<M.length;Te++){const ve=S[Te],Ee=M[Te];ve!==null&&Ee!==void 0&&Ee.update(ve,q,c||o)}Z&&Z(G,q),q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:q}),v=null}const D=new U0;D.setAnimationLoop(se),this.setAnimationLoop=function(G){Z=G},this.dispose=function(){}}}function n1(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,P0(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function r(p,m,M,S,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),f(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),h(p,m),m.isMeshPhysicalMaterial&&d(p,m,x)):m.isMeshMatcapMaterial?(s(p,m),v(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),g(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,M,S):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Kn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Kn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const M=e.get(m).envMap;if(M&&(p.envMap.value=M,p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const S=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*S,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,M,S){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=S*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,M){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Kn&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){const M=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function i1(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,S){const x=S.program;n.uniformBlockBinding(M,x)}function c(M,S){let x=r[M.id];x===void 0&&(v(M),x=u(M),r[M.id]=x,M.addEventListener("dispose",p));const w=S.program;n.updateUBOMapping(M,w);const L=e.render.frame;s[M.id]!==L&&(h(M),s[M.id]=L)}function u(M){const S=f();M.__bindingPointIndex=S;const x=i.createBuffer(),w=M.__size,L=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,w,L),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,x),x}function f(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const S=r[M.id],x=M.uniforms,w=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let L=0,R=x.length;L<R;L++){const z=x[L];if(d(z,L,w)===!0){const T=z.__offset,P=Array.isArray(z.value)?z.value:[z.value];let J=0;for(let W=0;W<P.length;W++){const re=P[W],k=g(re);typeof re=="number"?(z.__data[0]=re,i.bufferSubData(i.UNIFORM_BUFFER,T+J,z.__data)):re.isMatrix3?(z.__data[0]=re.elements[0],z.__data[1]=re.elements[1],z.__data[2]=re.elements[2],z.__data[3]=re.elements[0],z.__data[4]=re.elements[3],z.__data[5]=re.elements[4],z.__data[6]=re.elements[5],z.__data[7]=re.elements[0],z.__data[8]=re.elements[6],z.__data[9]=re.elements[7],z.__data[10]=re.elements[8],z.__data[11]=re.elements[0]):(re.toArray(z.__data,J),J+=k.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,T,z.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,S,x){const w=M.value;if(x[S]===void 0){if(typeof w=="number")x[S]=w;else{const L=Array.isArray(w)?w:[w],R=[];for(let z=0;z<L.length;z++)R.push(L[z].clone());x[S]=R}return!0}else if(typeof w=="number"){if(x[S]!==w)return x[S]=w,!0}else{const L=Array.isArray(x[S])?x[S]:[x[S]],R=Array.isArray(w)?w:[w];for(let z=0;z<L.length;z++){const T=L[z];if(T.equals(R[z])===!1)return T.copy(R[z]),!0}}return!1}function v(M){const S=M.uniforms;let x=0;const w=16;let L=0;for(let R=0,z=S.length;R<z;R++){const T=S[R],P={boundary:0,storage:0},J=Array.isArray(T.value)?T.value:[T.value];for(let W=0,re=J.length;W<re;W++){const k=J[W],K=g(k);P.boundary+=K.boundary,P.storage+=K.storage}if(T.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=x,R>0){L=x%w;const W=w-L;L!==0&&W-P.boundary<0&&(x+=w-L,T.__offset=x)}x+=P.storage}return L=x%w,L>0&&(x+=w-L),M.__size=x,M.__cache={},this}function g(M){const S={boundary:0,storage:0};return typeof M=="number"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=48,S.storage=48):M.isMatrix4?(S.boundary=64,S.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),S}function p(M){const S=M.target;S.removeEventListener("dispose",p);const x=o.indexOf(S.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function m(){for(const M in r)i.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:l,update:c,dispose:m}}class k0{constructor(e={}){const{canvas:t=eT(),context:n=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=o;const d=new Uint32Array(4),v=new Int32Array(4);let g=null,p=null;const m=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$t,this._useLegacyLights=!1,this.toneMapping=ls,this.toneMappingExposure=1;const S=this;let x=!1,w=0,L=0,R=null,z=-1,T=null;const P=new Nt,J=new Nt;let W=null;const re=new ct(0);let k=0,K=t.width,$=t.height,X=1,Z=null,se=null;const D=new Nt(0,0,K,$),G=new Nt(0,0,K,$);let q=!1;const Te=new vd;let ve=!1,Ee=!1,Me=null;const Ie=new pt,Ue=new vt,Je=new Y,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function $e(){return R===null?X:1}let E=n;function B(_,b){for(let I=0;I<_.length;I++){const U=_[I],N=t.getContext(U,b);if(N!==null)return N}return null}try{const _={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${pd}`),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",Se,!1),t.addEventListener("webglcontextcreationerror",Le,!1),E===null){const b=["webgl2","webgl","experimental-webgl"];if(S.isWebGL1Renderer===!0&&b.shift(),E=B(b,_),E===null)throw B(b)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&E instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),E.getShaderPrecisionFormat===void 0&&(E.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let V,ne,Q,F,de,ue,ge,le,Re,C,A,H,ce,oe,fe,be,xe,Ae,Pe,nt,_e,Qe,Ge,Be;function Oe(){V=new pA(E),ne=new lA(E,V,e),V.init(ne),Qe=new Zw(E,V,ne),Q=new jw(E,V,ne),F=new _A(E),de=new Nw,ue=new $w(E,V,Q,de,ne,Qe,F),ge=new uA(S),le=new dA(S),Re=new wT(E,ne),Ge=new oA(E,V,Re,ne),C=new mA(E,Re,F,Ge),A=new SA(E,C,Re,F),Pe=new yA(E,ne,ue),be=new cA(de),H=new Uw(S,ge,le,V,ne,Ge,be),ce=new n1(S,de),oe=new Fw,fe=new Vw(V,ne),Ae=new sA(S,ge,le,Q,A,h,l),xe=new Kw(S,A,ne),Be=new i1(E,F,ne,Q),nt=new aA(E,V,F,ne),_e=new gA(E,V,F,ne),F.programs=H.programs,S.capabilities=ne,S.extensions=V,S.properties=de,S.renderLists=oe,S.shadowMap=xe,S.state=Q,S.info=F}Oe();const O=new t1(S,E);this.xr=O,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){const _=V.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){const _=V.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(_){_!==void 0&&(X=_,this.setSize(K,$,!1))},this.getSize=function(_){return _.set(K,$)},this.setSize=function(_,b,I=!0){if(O.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=_,$=b,t.width=Math.floor(_*X),t.height=Math.floor(b*X),I===!0&&(t.style.width=_+"px",t.style.height=b+"px"),this.setViewport(0,0,_,b)},this.getDrawingBufferSize=function(_){return _.set(K*X,$*X).floor()},this.setDrawingBufferSize=function(_,b,I){K=_,$=b,X=I,t.width=Math.floor(_*I),t.height=Math.floor(b*I),this.setViewport(0,0,_,b)},this.getCurrentViewport=function(_){return _.copy(P)},this.getViewport=function(_){return _.copy(D)},this.setViewport=function(_,b,I,U){_.isVector4?D.set(_.x,_.y,_.z,_.w):D.set(_,b,I,U),Q.viewport(P.copy(D).multiplyScalar(X).floor())},this.getScissor=function(_){return _.copy(G)},this.setScissor=function(_,b,I,U){_.isVector4?G.set(_.x,_.y,_.z,_.w):G.set(_,b,I,U),Q.scissor(J.copy(G).multiplyScalar(X).floor())},this.getScissorTest=function(){return q},this.setScissorTest=function(_){Q.setScissorTest(q=_)},this.setOpaqueSort=function(_){Z=_},this.setTransparentSort=function(_){se=_},this.getClearColor=function(_){return _.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor.apply(Ae,arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha.apply(Ae,arguments)},this.clear=function(_=!0,b=!0,I=!0){let U=0;if(_){let N=!1;if(R!==null){const j=R.texture.format;N=j===_0||j===g0||j===m0}if(N){const j=R.texture.type,te=j===cs||j===Qr||j===md||j===Xs||j===h0||j===d0,ae=Ae.getClearColor(),ie=Ae.getClearAlpha(),he=ae.r,pe=ae.g,me=ae.b;te?(d[0]=he,d[1]=pe,d[2]=me,d[3]=ie,E.clearBufferuiv(E.COLOR,0,d)):(v[0]=he,v[1]=pe,v[2]=me,v[3]=ie,E.clearBufferiv(E.COLOR,0,v))}else U|=E.COLOR_BUFFER_BIT}b&&(U|=E.DEPTH_BUFFER_BIT),I&&(U|=E.STENCIL_BUFFER_BIT),E.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",Se,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),oe.dispose(),fe.dispose(),de.dispose(),ge.dispose(),le.dispose(),A.dispose(),Ge.dispose(),Be.dispose(),H.dispose(),O.dispose(),O.removeEventListener("sessionstart",ke),O.removeEventListener("sessionend",qe),Me&&(Me.dispose(),Me=null),tt.stop()};function ee(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function Se(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const _=F.autoReset,b=xe.enabled,I=xe.autoUpdate,U=xe.needsUpdate,N=xe.type;Oe(),F.autoReset=_,xe.enabled=b,xe.autoUpdate=I,xe.needsUpdate=U,xe.type=N}function Le(_){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function we(_){const b=_.target;b.removeEventListener("dispose",we),ye(b)}function ye(_){Ye(_),de.remove(_)}function Ye(_){const b=de.get(_).programs;b!==void 0&&(b.forEach(function(I){H.releaseProgram(I)}),_.isShaderMaterial&&H.releaseShaderCache(_))}this.renderBufferDirect=function(_,b,I,U,N,j){b===null&&(b=Tt);const te=N.isMesh&&N.matrixWorld.determinant()<0,ae=Qt(_,b,I,U,N);Q.setMaterial(U,te);let ie=I.index,he=1;if(U.wireframe===!0){if(ie=C.getWireframeAttribute(I),ie===void 0)return;he=2}const pe=I.drawRange,me=I.attributes.position;let Ce=pe.start*he,Ve=(pe.start+pe.count)*he;j!==null&&(Ce=Math.max(Ce,j.start*he),Ve=Math.min(Ve,(j.start+j.count)*he)),ie!==null?(Ce=Math.max(Ce,0),Ve=Math.min(Ve,ie.count)):me!=null&&(Ce=Math.max(Ce,0),Ve=Math.min(Ve,me.count));const Fe=Ve-Ce;if(Fe<0||Fe===1/0)return;Ge.setup(N,U,ae,I,ie);let ze,He=nt;if(ie!==null&&(ze=Re.get(ie),He=_e,He.setIndex(ze)),N.isMesh)U.wireframe===!0?(Q.setLineWidth(U.wireframeLinewidth*$e()),He.setMode(E.LINES)):He.setMode(E.TRIANGLES);else if(N.isLine){let We=U.linewidth;We===void 0&&(We=1),Q.setLineWidth(We*$e()),N.isLineSegments?He.setMode(E.LINES):N.isLineLoop?He.setMode(E.LINE_LOOP):He.setMode(E.LINE_STRIP)}else N.isPoints?He.setMode(E.POINTS):N.isSprite&&He.setMode(E.TRIANGLES);if(N.isInstancedMesh)He.renderInstances(Ce,Fe,N.count);else if(I.isInstancedBufferGeometry){const We=I._maxInstanceCount!==void 0?I._maxInstanceCount:1/0,Et=Math.min(I.instanceCount,We);He.renderInstances(Ce,Fe,Et)}else He.render(Ce,Fe)},this.compile=function(_,b){function I(U,N,j){U.transparent===!0&&U.side===ji&&U.forceSinglePass===!1?(U.side=Kn,U.needsUpdate=!0,rt(U,N,j),U.side=Ur,U.needsUpdate=!0,rt(U,N,j),U.side=ji):rt(U,N,j)}p=fe.get(_),p.init(),M.push(p),_.traverseVisible(function(U){U.isLight&&U.layers.test(b.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights(S._useLegacyLights),_.traverse(function(U){const N=U.material;if(N)if(Array.isArray(N))for(let j=0;j<N.length;j++){const te=N[j];I(te,_,U)}else I(N,_,U)}),M.pop(),p=null};let Ze=null;function Xt(_){Ze&&Ze(_)}function ke(){tt.stop()}function qe(){tt.start()}const tt=new U0;tt.setAnimationLoop(Xt),typeof self<"u"&&tt.setContext(self),this.setAnimationLoop=function(_){Ze=_,O.setAnimationLoop(_),_===null?tt.stop():tt.start()},O.addEventListener("sessionstart",ke),O.addEventListener("sessionend",qe),this.render=function(_,b){if(b!==void 0&&b.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),b.parent===null&&b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.enabled===!0&&O.isPresenting===!0&&(O.cameraAutoUpdate===!0&&O.updateCamera(b),b=O.getCamera()),_.isScene===!0&&_.onBeforeRender(S,_,b,R),p=fe.get(_,M.length),p.init(),M.push(p),Ie.multiplyMatrices(b.projectionMatrix,b.matrixWorldInverse),Te.setFromProjectionMatrix(Ie),Ee=this.localClippingEnabled,ve=be.init(this.clippingPlanes,Ee),g=oe.get(_,m.length),g.init(),m.push(g),De(_,b,0,S.sortObjects),g.finish(),S.sortObjects===!0&&g.sort(Z,se),this.info.render.frame++,ve===!0&&be.beginShadows();const I=p.state.shadowsArray;if(xe.render(I,_,b),ve===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ae.render(g,_),p.setupLights(S._useLegacyLights),b.isArrayCamera){const U=b.cameras;for(let N=0,j=U.length;N<j;N++){const te=U[N];it(g,_,te,te.viewport)}}else it(g,_,b);R!==null&&(ue.updateMultisampleRenderTarget(R),ue.updateRenderTargetMipmap(R)),_.isScene===!0&&_.onAfterRender(S,_,b),Ge.resetDefaultState(),z=-1,T=null,M.pop(),M.length>0?p=M[M.length-1]:p=null,m.pop(),m.length>0?g=m[m.length-1]:g=null};function De(_,b,I,U){if(_.visible===!1)return;if(_.layers.test(b.layers)){if(_.isGroup)I=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(b);else if(_.isLight)p.pushLight(_),_.castShadow&&p.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||Te.intersectsSprite(_)){U&&Je.setFromMatrixPosition(_.matrixWorld).applyMatrix4(Ie);const te=A.update(_),ae=_.material;ae.visible&&g.push(_,te,ae,I,Je.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||Te.intersectsObject(_))){const te=A.update(_),ae=_.material;if(U&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),Je.copy(_.boundingSphere.center)):(te.boundingSphere===null&&te.computeBoundingSphere(),Je.copy(te.boundingSphere.center)),Je.applyMatrix4(_.matrixWorld).applyMatrix4(Ie)),Array.isArray(ae)){const ie=te.groups;for(let he=0,pe=ie.length;he<pe;he++){const me=ie[he],Ce=ae[me.materialIndex];Ce&&Ce.visible&&g.push(_,te,Ce,I,Je.z,me)}}else ae.visible&&g.push(_,te,ae,I,Je.z,null)}}const j=_.children;for(let te=0,ae=j.length;te<ae;te++)De(j[te],b,I,U)}function it(_,b,I,U){const N=_.opaque,j=_.transmissive,te=_.transparent;p.setupLightsView(I),ve===!0&&be.setGlobalState(S.clippingPlanes,I),j.length>0&&je(N,j,b,I),U&&Q.viewport(P.copy(U)),N.length>0&&et(N,b,I),j.length>0&&et(j,b,I),te.length>0&&et(te,b,I),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function je(_,b,I,U){const N=ne.isWebGL2;Me===null&&(Me=new no(1,1,{generateMipmaps:!0,type:V.has("EXT_color_buffer_half_float")?Ar:cs,minFilter:ps,samples:N?4:0})),S.getDrawingBufferSize(Ue),N?Me.setSize(Ue.x,Ue.y):Me.setSize(eu(Ue.x),eu(Ue.y));const j=S.getRenderTarget();S.setRenderTarget(Me),S.getClearColor(re),k=S.getClearAlpha(),k<1&&S.setClearColor(16777215,.5),S.clear();const te=S.toneMapping;S.toneMapping=ls,et(_,I,U),ue.updateMultisampleRenderTarget(Me),ue.updateRenderTargetMipmap(Me);let ae=!1;for(let ie=0,he=b.length;ie<he;ie++){const pe=b[ie],me=pe.object,Ce=pe.geometry,Ve=pe.material,Fe=pe.group;if(Ve.side===ji&&me.layers.test(U.layers)){const ze=Ve.side;Ve.side=Kn,Ve.needsUpdate=!0,It(me,I,U,Ce,Ve,Fe),Ve.side=ze,Ve.needsUpdate=!0,ae=!0}}ae===!0&&(ue.updateMultisampleRenderTarget(Me),ue.updateRenderTargetMipmap(Me)),S.setRenderTarget(j),S.setClearColor(re,k),S.toneMapping=te}function et(_,b,I){const U=b.isScene===!0?b.overrideMaterial:null;for(let N=0,j=_.length;N<j;N++){const te=_[N],ae=te.object,ie=te.geometry,he=U===null?te.material:U,pe=te.group;ae.layers.test(I.layers)&&It(ae,b,I,ie,he,pe)}}function It(_,b,I,U,N,j){_.onBeforeRender(S,b,I,U,N,j),_.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),N.onBeforeRender(S,b,I,U,_,j),N.transparent===!0&&N.side===ji&&N.forceSinglePass===!1?(N.side=Kn,N.needsUpdate=!0,S.renderBufferDirect(I,b,U,N,_,j),N.side=Ur,N.needsUpdate=!0,S.renderBufferDirect(I,b,U,N,_,j),N.side=ji):S.renderBufferDirect(I,b,U,N,_,j),_.onAfterRender(S,b,I,U,N,j)}function rt(_,b,I){b.isScene!==!0&&(b=Tt);const U=de.get(_),N=p.state.lights,j=p.state.shadowsArray,te=N.state.version,ae=H.getParameters(_,N.state,j,b,I),ie=H.getProgramCacheKey(ae);let he=U.programs;U.environment=_.isMeshStandardMaterial?b.environment:null,U.fog=b.fog,U.envMap=(_.isMeshStandardMaterial?le:ge).get(_.envMap||U.environment),he===void 0&&(_.addEventListener("dispose",we),he=new Map,U.programs=he);let pe=he.get(ie);if(pe!==void 0){if(U.currentProgram===pe&&U.lightsStateVersion===te)return Ke(_,ae),pe}else ae.uniforms=H.getUniforms(_),_.onBuild(I,ae,S),_.onBeforeCompile(ae,S),pe=H.acquireProgram(ae,ie),he.set(ie,pe),U.uniforms=ae.uniforms;const me=U.uniforms;(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(me.clippingPlanes=be.uniform),Ke(_,ae),U.needsLights=y(_),U.lightsStateVersion=te,U.needsLights&&(me.ambientLightColor.value=N.state.ambient,me.lightProbe.value=N.state.probe,me.directionalLights.value=N.state.directional,me.directionalLightShadows.value=N.state.directionalShadow,me.spotLights.value=N.state.spot,me.spotLightShadows.value=N.state.spotShadow,me.rectAreaLights.value=N.state.rectArea,me.ltc_1.value=N.state.rectAreaLTC1,me.ltc_2.value=N.state.rectAreaLTC2,me.pointLights.value=N.state.point,me.pointLightShadows.value=N.state.pointShadow,me.hemisphereLights.value=N.state.hemi,me.directionalShadowMap.value=N.state.directionalShadowMap,me.directionalShadowMatrix.value=N.state.directionalShadowMatrix,me.spotShadowMap.value=N.state.spotShadowMap,me.spotLightMatrix.value=N.state.spotLightMatrix,me.spotLightMap.value=N.state.spotLightMap,me.pointShadowMap.value=N.state.pointShadowMap,me.pointShadowMatrix.value=N.state.pointShadowMatrix);const Ce=pe.getUniforms(),Ve=Uc.seqWithValue(Ce.seq,me);return U.currentProgram=pe,U.uniformsList=Ve,pe}function Ke(_,b){const I=de.get(_);I.outputColorSpace=b.outputColorSpace,I.instancing=b.instancing,I.instancingColor=b.instancingColor,I.skinning=b.skinning,I.morphTargets=b.morphTargets,I.morphNormals=b.morphNormals,I.morphColors=b.morphColors,I.morphTargetsCount=b.morphTargetsCount,I.numClippingPlanes=b.numClippingPlanes,I.numIntersection=b.numClipIntersection,I.vertexAlphas=b.vertexAlphas,I.vertexTangents=b.vertexTangents,I.toneMapping=b.toneMapping}function Qt(_,b,I,U,N){b.isScene!==!0&&(b=Tt),ue.resetTextureUnits();const j=b.fog,te=U.isMeshStandardMaterial?b.environment:null,ae=R===null?S.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:fn,ie=(U.isMeshStandardMaterial?le:ge).get(U.envMap||te),he=U.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pe=!!I.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),me=!!I.morphAttributes.position,Ce=!!I.morphAttributes.normal,Ve=!!I.morphAttributes.color;let Fe=ls;U.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Fe=S.toneMapping);const ze=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,He=ze!==void 0?ze.length:0,We=de.get(U),Et=p.state.lights;if(ve===!0&&(Ee===!0||_!==T)){const Yt=_===T&&U.id===z;be.setState(U,_,Yt)}let st=!1;U.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Et.state.version||We.outputColorSpace!==ae||N.isInstancedMesh&&We.instancing===!1||!N.isInstancedMesh&&We.instancing===!0||N.isSkinnedMesh&&We.skinning===!1||!N.isSkinnedMesh&&We.skinning===!0||N.isInstancedMesh&&We.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&We.instancingColor===!1&&N.instanceColor!==null||We.envMap!==ie||U.fog===!0&&We.fog!==j||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==be.numPlanes||We.numIntersection!==be.numIntersection)||We.vertexAlphas!==he||We.vertexTangents!==pe||We.morphTargets!==me||We.morphNormals!==Ce||We.morphColors!==Ve||We.toneMapping!==Fe||ne.isWebGL2===!0&&We.morphTargetsCount!==He)&&(st=!0):(st=!0,We.__version=U.version);let Mt=We.currentProgram;st===!0&&(Mt=rt(U,b,N));let _t=!1,zt=!1,Tn=!1;const St=Mt.getUniforms(),mt=We.uniforms;if(Q.useProgram(Mt.program)&&(_t=!0,zt=!0,Tn=!0),U.id!==z&&(z=U.id,zt=!0),_t||T!==_){St.setValue(E,"projectionMatrix",_.projectionMatrix),St.setValue(E,"viewMatrix",_.matrixWorldInverse);const Yt=St.map.cameraPosition;Yt!==void 0&&Yt.setValue(E,Je.setFromMatrixPosition(_.matrixWorld)),ne.logarithmicDepthBuffer&&St.setValue(E,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&St.setValue(E,"isOrthographic",_.isOrthographicCamera===!0),T!==_&&(T=_,zt=!0,Tn=!0)}if(N.isSkinnedMesh){St.setOptional(E,N,"bindMatrix"),St.setOptional(E,N,"bindMatrixInverse");const Yt=N.skeleton;Yt&&(ne.floatVertexTextures?(Yt.boneTexture===null&&Yt.computeBoneTexture(),St.setValue(E,"boneTexture",Yt.boneTexture,ue),St.setValue(E,"boneTextureSize",Yt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const bt=I.morphAttributes;if((bt.position!==void 0||bt.normal!==void 0||bt.color!==void 0&&ne.isWebGL2===!0)&&Pe.update(N,I,Mt),(zt||We.receiveShadow!==N.receiveShadow)&&(We.receiveShadow=N.receiveShadow,St.setValue(E,"receiveShadow",N.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(mt.envMap.value=ie,mt.flipEnvMap.value=ie.isCubeTexture&&ie.isRenderTargetTexture===!1?-1:1),zt&&(St.setValue(E,"toneMappingExposure",S.toneMappingExposure),We.needsLights&&Ot(mt,Tn),j&&U.fog===!0&&ce.refreshFogUniforms(mt,j),ce.refreshMaterialUniforms(mt,U,X,$,Me),Uc.upload(E,We.uniformsList,mt,ue)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(Uc.upload(E,We.uniformsList,mt,ue),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&St.setValue(E,"center",N.center),St.setValue(E,"modelViewMatrix",N.modelViewMatrix),St.setValue(E,"normalMatrix",N.normalMatrix),St.setValue(E,"modelMatrix",N.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){const Yt=U.uniformsGroups;for(let cr=0,Ti=Yt.length;cr<Ti;cr++)if(ne.isWebGL2){const Ms=Yt[cr];Be.update(Ms,Mt),Be.bind(Ms,Mt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Mt}function Ot(_,b){_.ambientLightColor.needsUpdate=b,_.lightProbe.needsUpdate=b,_.directionalLights.needsUpdate=b,_.directionalLightShadows.needsUpdate=b,_.pointLights.needsUpdate=b,_.pointLightShadows.needsUpdate=b,_.spotLights.needsUpdate=b,_.spotLightShadows.needsUpdate=b,_.rectAreaLights.needsUpdate=b,_.hemisphereLights.needsUpdate=b}function y(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(_,b,I){de.get(_.texture).__webglTexture=b,de.get(_.depthTexture).__webglTexture=I;const U=de.get(_);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=I===void 0,U.__autoAllocateDepthBuffer||V.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(_,b){const I=de.get(_);I.__webglFramebuffer=b,I.__useDefaultFramebuffer=b===void 0},this.setRenderTarget=function(_,b=0,I=0){R=_,w=b,L=I;let U=!0,N=null,j=!1,te=!1;if(_){const ie=de.get(_);ie.__useDefaultFramebuffer!==void 0?(Q.bindFramebuffer(E.FRAMEBUFFER,null),U=!1):ie.__webglFramebuffer===void 0?ue.setupRenderTarget(_):ie.__hasExternalTextures&&ue.rebindTextures(_,de.get(_.texture).__webglTexture,de.get(_.depthTexture).__webglTexture);const he=_.texture;(he.isData3DTexture||he.isDataArrayTexture||he.isCompressedArrayTexture)&&(te=!0);const pe=de.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(pe[b])?N=pe[b][I]:N=pe[b],j=!0):ne.isWebGL2&&_.samples>0&&ue.useMultisampledRTT(_)===!1?N=de.get(_).__webglMultisampledFramebuffer:Array.isArray(pe)?N=pe[I]:N=pe,P.copy(_.viewport),J.copy(_.scissor),W=_.scissorTest}else P.copy(D).multiplyScalar(X).floor(),J.copy(G).multiplyScalar(X).floor(),W=q;if(Q.bindFramebuffer(E.FRAMEBUFFER,N)&&ne.drawBuffers&&U&&Q.drawBuffers(_,N),Q.viewport(P),Q.scissor(J),Q.setScissorTest(W),j){const ie=de.get(_.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+b,ie.__webglTexture,I)}else if(te){const ie=de.get(_.texture),he=b||0;E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,ie.__webglTexture,I||0,he)}z=-1},this.readRenderTargetPixels=function(_,b,I,U,N,j,te){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ae=de.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&te!==void 0&&(ae=ae[te]),ae){Q.bindFramebuffer(E.FRAMEBUFFER,ae);try{const ie=_.texture,he=ie.format,pe=ie.type;if(he!==di&&Qe.convert(he)!==E.getParameter(E.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const me=pe===Ar&&(V.has("EXT_color_buffer_half_float")||ne.isWebGL2&&V.has("EXT_color_buffer_float"));if(pe!==cs&&Qe.convert(pe)!==E.getParameter(E.IMPLEMENTATION_COLOR_READ_TYPE)&&!(pe===Pi&&(ne.isWebGL2||V.has("OES_texture_float")||V.has("WEBGL_color_buffer_float")))&&!me){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}b>=0&&b<=_.width-U&&I>=0&&I<=_.height-N&&E.readPixels(b,I,U,N,Qe.convert(he),Qe.convert(pe),j)}finally{const ie=R!==null?de.get(R).__webglFramebuffer:null;Q.bindFramebuffer(E.FRAMEBUFFER,ie)}}},this.copyFramebufferToTexture=function(_,b,I=0){const U=Math.pow(2,-I),N=Math.floor(b.image.width*U),j=Math.floor(b.image.height*U);ue.setTexture2D(b,0),E.copyTexSubImage2D(E.TEXTURE_2D,I,0,0,_.x,_.y,N,j),Q.unbindTexture()},this.copyTextureToTexture=function(_,b,I,U=0){const N=b.image.width,j=b.image.height,te=Qe.convert(I.format),ae=Qe.convert(I.type);ue.setTexture2D(I,0),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,I.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,I.unpackAlignment),b.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,U,_.x,_.y,N,j,te,ae,b.image.data):b.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,U,_.x,_.y,b.mipmaps[0].width,b.mipmaps[0].height,te,b.mipmaps[0].data):E.texSubImage2D(E.TEXTURE_2D,U,_.x,_.y,te,ae,b.image),U===0&&I.generateMipmaps&&E.generateMipmap(E.TEXTURE_2D),Q.unbindTexture()},this.copyTextureToTexture3D=function(_,b,I,U,N=0){if(S.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const j=_.max.x-_.min.x+1,te=_.max.y-_.min.y+1,ae=_.max.z-_.min.z+1,ie=Qe.convert(U.format),he=Qe.convert(U.type);let pe;if(U.isData3DTexture)ue.setTexture3D(U,0),pe=E.TEXTURE_3D;else if(U.isDataArrayTexture)ue.setTexture2DArray(U,0),pe=E.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,U.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,U.unpackAlignment);const me=E.getParameter(E.UNPACK_ROW_LENGTH),Ce=E.getParameter(E.UNPACK_IMAGE_HEIGHT),Ve=E.getParameter(E.UNPACK_SKIP_PIXELS),Fe=E.getParameter(E.UNPACK_SKIP_ROWS),ze=E.getParameter(E.UNPACK_SKIP_IMAGES),He=I.isCompressedTexture?I.mipmaps[0]:I.image;E.pixelStorei(E.UNPACK_ROW_LENGTH,He.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,He.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,_.min.x),E.pixelStorei(E.UNPACK_SKIP_ROWS,_.min.y),E.pixelStorei(E.UNPACK_SKIP_IMAGES,_.min.z),I.isDataTexture||I.isData3DTexture?E.texSubImage3D(pe,N,b.x,b.y,b.z,j,te,ae,ie,he,He.data):I.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),E.compressedTexSubImage3D(pe,N,b.x,b.y,b.z,j,te,ae,ie,He.data)):E.texSubImage3D(pe,N,b.x,b.y,b.z,j,te,ae,ie,he,He),E.pixelStorei(E.UNPACK_ROW_LENGTH,me),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Ce),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Ve),E.pixelStorei(E.UNPACK_SKIP_ROWS,Fe),E.pixelStorei(E.UNPACK_SKIP_IMAGES,ze),N===0&&U.generateMipmaps&&E.generateMipmap(pe),Q.unbindTexture()},this.initTexture=function(_){_.isCubeTexture?ue.setTextureCube(_,0):_.isData3DTexture?ue.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?ue.setTexture2DArray(_,0):ue.setTexture2D(_,0),Q.unbindTexture()},this.resetState=function(){w=0,L=0,R=null,Q.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===gd?"display-p3":"srgb",t.unpackColorSpace=Ct.workingColorSpace===bu?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===$t?qs:x0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===qs?$t:fn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class r1 extends k0{}r1.prototype.isWebGL1Renderer=!0;class s1 extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class o1{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ch,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Gi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Un=new Y;class Md{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Un.fromBufferAttribute(this,t),Un.applyMatrix4(e),this.setXYZ(t,Un.x,Un.y,Un.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Un.fromBufferAttribute(this,t),Un.applyNormalMatrix(e),this.setXYZ(t,Un.x,Un.y,Un.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Un.fromBufferAttribute(this,t),Un.transformDirection(e),this.setXYZ(t,Un.x,Un.y,Un.z);return this}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=$i(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=$i(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=$i(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=$i(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),r=Lt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),r=Lt(r,this.array),s=Lt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new jn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Md(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const $m=new Y,Zm=new Nt,Jm=new Nt,a1=new Y,Qm=new pt,Co=new Y,yf=new or,eg=new pt,Sf=new Au;class l1 extends vi{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new pt,this.bindMatrixInverse=new pt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new kr),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)Co.fromBufferAttribute(t,n),this.applyBoneTransform(n,Co),this.boundingBox.expandByPoint(Co)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new or),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)Co.fromBufferAttribute(t,n),this.applyBoneTransform(n,Co),this.boundingSphere.expandByPoint(Co)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yf.copy(this.boundingSphere),yf.applyMatrix4(r),e.ray.intersectsSphere(yf)!==!1&&(eg.copy(r).invert(),Sf.copy(e.ray).applyMatrix4(eg),!(this.boundingBox!==null&&Sf.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Sf)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Nt,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,r=this.geometry;Zm.fromBufferAttribute(r.attributes.skinIndex,e),Jm.fromBufferAttribute(r.attributes.skinWeight,e),$m.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Jm.getComponent(s);if(o!==0){const a=Zm.getComponent(s);Qm.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(a1.copy($m).applyMatrix4(Qm),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class z0 extends jt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class H0 extends Sn{constructor(e=null,t=1,n=1,r,s,o,a,l,c=_n,u=_n,f,h){super(null,o,a,l,c,u,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const tg=new pt,c1=new pt;class Td{constructor(e=[],t=[]){this.uuid=Gi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new pt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new pt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:c1;tg.multiplyMatrices(a,t[s]),tg.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Td(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=S0(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new H0(t,e,e,di,Pi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new z0),this.bones.push(o),this.boneInverses.push(new pt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=n[r];e.boneInverses.push(a.toArray())}return e}}class ng extends jn{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Po=new pt,ig=new pt,lc=[],rg=new kr,u1=new pt,La=new vi,Ia=new or;class f1 extends vi{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ng(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,u1)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new kr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Po),rg.copy(e.boundingBox).applyMatrix4(Po),this.boundingBox.union(rg)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new or),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Po),Ia.copy(e.boundingSphere).applyMatrix4(Po),this.boundingSphere.union(Ia)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,r=this.count;if(La.geometry=this.geometry,La.material=this.material,La.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ia.copy(this.boundingSphere),Ia.applyMatrix4(n),e.ray.intersectsSphere(Ia)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Po),ig.multiplyMatrices(n,Po),La.matrixWorld=ig,La.raycast(e,lc);for(let o=0,a=lc.length;o<a;o++){const l=lc[o];l.instanceId=s,l.object=this,t.push(l)}lc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ng(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class G0 extends nr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const sg=new Y,og=new Y,ag=new pt,Mf=new Au,cc=new or;class Ed extends jt{constructor(e=new ar,t=new G0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)sg.fromBufferAttribute(t,r-1),og.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=sg.distanceTo(og);e.setAttribute("lineDistance",new Pr(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cc.copy(n.boundingSphere),cc.applyMatrix4(r),cc.radius+=s,e.ray.intersectsSphere(cc)===!1)return;ag.copy(r).invert(),Mf.copy(e.ray).applyMatrix4(ag);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new Y,u=new Y,f=new Y,h=new Y,d=this.isLineSegments?2:1,v=n.index,p=n.attributes.position;if(v!==null){const m=Math.max(0,o.start),M=Math.min(v.count,o.start+o.count);for(let S=m,x=M-1;S<x;S+=d){const w=v.getX(S),L=v.getX(S+1);if(c.fromBufferAttribute(p,w),u.fromBufferAttribute(p,L),Mf.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const z=e.ray.origin.distanceTo(h);z<e.near||z>e.far||t.push({distance:z,point:f.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,o.start),M=Math.min(p.count,o.start+o.count);for(let S=m,x=M-1;S<x;S+=d){if(c.fromBufferAttribute(p,S),u.fromBufferAttribute(p,S+1),Mf.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(h);L<e.near||L>e.far||t.push({distance:L,point:f.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const lg=new Y,cg=new Y;class h1 extends Ed{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)lg.fromBufferAttribute(t,r),cg.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+lg.distanceTo(cg);e.setAttribute("lineDistance",new Pr(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class d1 extends Ed{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class V0 extends nr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ug=new pt,mh=new Au,uc=new or,fc=new Y;class p1 extends jt{constructor(e=new ar,t=new V0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),uc.copy(n.boundingSphere),uc.applyMatrix4(r),uc.radius+=s,e.ray.intersectsSphere(uc)===!1)return;ug.copy(r).invert(),mh.copy(e.ray).applyMatrix4(ug);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){const h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let v=h,g=d;v<g;v++){const p=c.getX(v);fc.fromBufferAttribute(f,p),fg(fc,p,l,r,e,t,this)}}else{const h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let v=h,g=d;v<g;v++)fc.fromBufferAttribute(f,v),fg(fc,v,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function fg(i,e,t,n,r,s,o){const a=mh.distanceSqToPoint(i);if(a<t){const l=new Y;mh.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class bd extends nr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=y0,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ys extends bd{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new vt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return xn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ct(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ct(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ct(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function hc(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function m1(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function g1(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function hg(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=i[a+l]}return r}function W0(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=i[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=i[r++];while(s!==void 0)}class Nl{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class _1 extends Nl{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:am,endingEnd:am}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case lm:s=e,a=2*t-n;break;case cm:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case lm:o=e,l=2*n-t;break;case cm:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,v=(n-t)/(r-t),g=v*v,p=g*v,m=-h*p+2*h*g-h*v,M=(1+h)*p+(-1.5-2*h)*g+(-.5+h)*v+1,S=(-1-d)*p+(1.5+d)*g+.5*v,x=d*p-d*g;for(let w=0;w!==a;++w)s[w]=m*o[u+w]+M*o[c+w]+S*o[l+w]+x*o[f+w];return s}}class v1 extends Nl{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(r-t),f=1-u;for(let h=0;h!==a;++h)s[h]=o[c+h]*f+o[l+h]*u;return s}}class x1 extends Nl{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class lr{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=hc(t,this.TimeBufferType),this.values=hc(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:hc(e.times,Array),values:hc(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new x1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new v1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new _1(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ml:t=this.InterpolantFactoryMethodDiscrete;break;case aa:t=this.InterpolantFactoryMethodLinear;break;case $u:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ml;case this.InterpolantFactoryMethodLinear:return aa;case this.InterpolantFactoryMethodSmooth:return $u}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&m1(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===$u,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{const f=a*n,h=f-n,d=f+n;for(let v=0;v!==n;++v){const g=t[f+v];if(g!==t[h+v]||g!==t[d+v]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const f=a*n,h=o*n;for(let d=0;d!==n;++d)t[h+d]=t[f+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}lr.prototype.TimeBufferType=Float32Array;lr.prototype.ValueBufferType=Float32Array;lr.prototype.DefaultInterpolation=aa;class Ta extends lr{}Ta.prototype.ValueTypeName="bool";Ta.prototype.ValueBufferType=Array;Ta.prototype.DefaultInterpolation=Ml;Ta.prototype.InterpolantFactoryMethodLinear=void 0;Ta.prototype.InterpolantFactoryMethodSmooth=void 0;class X0 extends lr{}X0.prototype.ValueTypeName="color";class ua extends lr{}ua.prototype.ValueTypeName="number";class y1 extends Nl{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t);let c=e*a;for(let u=c+a;c!==u;c+=4)xs.slerpFlat(s,0,o,c-a,o,c,l);return s}}class io extends lr{InterpolantFactoryMethodLinear(e){return new y1(this.times,this.values,this.getValueSize(),e)}}io.prototype.ValueTypeName="quaternion";io.prototype.DefaultInterpolation=aa;io.prototype.InterpolantFactoryMethodSmooth=void 0;class Ea extends lr{}Ea.prototype.ValueTypeName="string";Ea.prototype.ValueBufferType=Array;Ea.prototype.DefaultInterpolation=Ml;Ea.prototype.InterpolantFactoryMethodLinear=void 0;Ea.prototype.InterpolantFactoryMethodSmooth=void 0;class fa extends lr{}fa.prototype.ValueTypeName="vector";class S1{constructor(e,t=-1,n,r=wM){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=Gi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(T1(n[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(lr.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=g1(l);l=hg(l,1,u),c=hg(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new ua(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const f=u[1];let h=r[f];h||(r[f]=h=[]),h.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(f,h,d,v,g){if(d.length!==0){const p=[],m=[];W0(d,p,m,v),p.length!==0&&g.push(new f(h,p,m))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let f=0;f<c.length;f++){const h=c[f].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const d={};let v;for(v=0;v<h.length;v++)if(h[v].morphTargets)for(let g=0;g<h[v].morphTargets.length;g++)d[h[v].morphTargets[g]]=-1;for(const g in d){const p=[],m=[];for(let M=0;M!==h[v].morphTargets.length;++M){const S=h[v];p.push(S.time),m.push(S.morphTarget===g?1:0)}r.push(new ua(".morphTargetInfluence["+g+"]",p,m))}l=d.length*o}else{const d=".bones["+t[f].name+"]";n(fa,d+".position",h,"pos",r),n(io,d+".quaternion",h,"rot",r),n(fa,d+".scale",h,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function M1(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ua;case"vector":case"vector2":case"vector3":case"vector4":return fa;case"color":return X0;case"quaternion":return io;case"bool":case"boolean":return Ta;case"string":return Ea}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function T1(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=M1(i.type);if(i.times===void 0){const t=[],n=[];W0(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const ha={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class E1{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],v=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return v}return null}}}const b1=new E1;class co{constructor(e){this.manager=e!==void 0?e:b1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}co.DEFAULT_MATERIAL_NAME="__DEFAULT";const _r={};class A1 extends Error{constructor(e,t){super(e),this.response=t}}class Ad extends co{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=ha.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(_r[e]!==void 0){_r[e].push({onLoad:t,onProgress:n,onError:r});return}_r[e]=[],_r[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=_r[e],f=c.body.getReader(),h=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),d=h?parseInt(h):0,v=d!==0;let g=0;const p=new ReadableStream({start(m){M();function M(){f.read().then(({done:S,value:x})=>{if(S)m.close();else{g+=x.byteLength;const w=new ProgressEvent("progress",{lengthComputable:v,loaded:g,total:d});for(let L=0,R=u.length;L<R;L++){const z=u[L];z.onProgress&&z.onProgress(w)}m.enqueue(x),M()}})}}});return new Response(p)}else throw new A1(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return c.arrayBuffer().then(v=>d.decode(v))}}}).then(c=>{ha.add(e,c);const u=_r[e];delete _r[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=_r[e];if(u===void 0)throw this.manager.itemError(e),c;delete _r[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class w1 extends co{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=ha.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Tl("img");function l(){u(),ha.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class R1 extends co{constructor(e){super(e)}load(e,t,n,r){const s=this,o=new H0,a=new Ad(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(l){let c;try{c=s.parse(l)}catch(u){if(r!==void 0)r(u);else{console.error(u);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:Qn,o.wrapT=c.wrapT!==void 0?c.wrapT:Qn,o.magFilter=c.magFilter!==void 0?c.magFilter:cn,o.minFilter=c.minFilter!==void 0?c.minFilter:cn,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0?o.colorSpace=c.colorSpace:c.encoding!==void 0&&(o.encoding=c.encoding),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=ps),c.mipmapCount===1&&(o.minFilter=cn),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},n,r),o}}class C1 extends co{constructor(e){super(e)}load(e,t,n,r){const s=new Sn,o=new w1(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class wd extends jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ct(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Tf=new pt,dg=new Y,pg=new Y;class Rd{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vd,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;dg.setFromMatrixPosition(e.matrixWorld),t.position.copy(dg),pg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(pg),t.updateMatrixWorld(),Tf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tf),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Tf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class P1 extends Rd{constructor(){super(new Cn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=la*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class L1 extends wd{constructor(e,t,n=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new P1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const mg=new pt,Da=new Y,Ef=new Y;class I1 extends Rd{constructor(){super(new Cn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new vt(4,2),this._viewportCount=6,this._viewports=[new Nt(2,1,1,1),new Nt(0,1,1,1),new Nt(3,1,1,1),new Nt(1,1,1,1),new Nt(3,0,1,1),new Nt(1,0,1,1)],this._cubeDirections=[new Y(1,0,0),new Y(-1,0,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,1,0),new Y(0,-1,0)],this._cubeUps=[new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,0,1),new Y(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Da.setFromMatrixPosition(e.matrixWorld),n.position.copy(Da),Ef.copy(n.position),Ef.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ef),n.updateMatrixWorld(),r.makeTranslation(-Da.x,-Da.y,-Da.z),mg.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mg)}}class D1 extends wd{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new I1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class U1 extends Rd{constructor(){super(new yd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Y0 extends wd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.shadow=new U1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class gh{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class N1 extends co{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=ha.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){ha.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){r&&r(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}const Cd="\\[\\]\\.:\\/",O1=new RegExp("["+Cd+"]","g"),Pd="[^"+Cd+"]",F1="[^"+Cd.replace("\\.","")+"]",B1=/((?:WC+[\/:])*)/.source.replace("WC",Pd),k1=/(WCOD+)?/.source.replace("WCOD",F1),z1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Pd),H1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Pd),G1=new RegExp("^"+B1+k1+z1+H1+"$"),V1=["material","materials","bones","map"];class W1{constructor(e,t,n){const r=n||Pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Pt{constructor(e,t,n){this.path=t,this.parsedPath=n||Pt.parseTrackName(t),this.node=Pt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Pt.Composite(e,t,n):new Pt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(O1,"")}static parseTrackName(e){const t=G1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);V1.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=Pt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Pt.Composite=W1;Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pd);class Cu extends vi{constructor(){const e=Cu.SkyShader,t=new Nr({name:"SkyShader",fragmentShader:e.fragmentShader,vertexShader:e.vertexShader,uniforms:L0.clone(e.uniforms),side:Kn,depthWrite:!1});super(new Sa(1,1,1),t),this.isSky=!0}}Cu.SkyShader={uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new Y},up:{value:new Y(0,1,0)}},vertexShader:`
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

		}`};class X1{constructor(e){this.scene=e,this.sky=new Cu,this.sky.scale.setScalar(45e4),this.scene.add(this.sky),this.sunParameters={elevation:2,azimuth:180},this.uniforms=this.sky.material.uniforms,this.setSunPosition(this.sunParameters.elevation,this.sunParameters.azimuth)}setSunPosition(e,t){const n=hh.degToRad(90-e),r=hh.degToRad(t),s=new Y;s.setFromSphericalCoords(1,n,r),this.uniforms.sunPosition.value.copy(s)}update(e){const t=2+86*Math.sin(Math.PI*e);this.setSunPosition(t,180)}}function gg(i,e){if(e===RM)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===lh||e===v0){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,r=[];if(e===lh)for(let o=1;o<=n;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=i.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class Y1 extends co{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Z1(t)}),this.register(function(t){return new sR(t)}),this.register(function(t){return new oR(t)}),this.register(function(t){return new aR(t)}),this.register(function(t){return new Q1(t)}),this.register(function(t){return new eR(t)}),this.register(function(t){return new tR(t)}),this.register(function(t){return new nR(t)}),this.register(function(t){return new $1(t)}),this.register(function(t){return new iR(t)}),this.register(function(t){return new J1(t)}),this.register(function(t){return new rR(t)}),this.register(function(t){return new K1(t)}),this.register(function(t){return new lR(t)}),this.register(function(t){return new cR(t)})}load(e,t,n,r){const s=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=gh.extractUrlBase(e),this.manager.itemStart(e);const a=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Ad(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===q0){try{o[xt.KHR_BINARY_GLTF]=new uR(e)}catch(f){r&&r(f);return}s=JSON.parse(o[xt.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new TR(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const f=this.pluginCallbacks[u](c);a[f.name]=f,o[f.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const f=s.extensionsUsed[u],h=s.extensionsRequired||[];switch(f){case xt.KHR_MATERIALS_UNLIT:o[f]=new j1;break;case xt.KHR_DRACO_MESH_COMPRESSION:o[f]=new fR(s,this.dracoLoader);break;case xt.KHR_TEXTURE_TRANSFORM:o[f]=new hR;break;case xt.KHR_MESH_QUANTIZATION:o[f]=new dR;break;default:h.indexOf(f)>=0&&a[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,r)}parseAsync(e,t){const n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}}function q1(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const xt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class K1{constructor(e){this.parser=e,this.name=xt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let r=t.cache.get(n);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new ct(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],fn);const f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Y0(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new D1(u),c.distance=f;break;case"spot":c=new L1(u),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Zr(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class j1{constructor(){this.name=xt.KHR_MATERIALS_UNLIT}getMaterialType(){return ks}extendParams(e,t,n){const r=[];e.color=new ct(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],fn),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,$t))}return Promise.all(r)}}class $1{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class Z1{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ys}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new vt(a,a)}return Promise.all(s)}}class J1{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ys}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class Q1{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ys}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new ct(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],fn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,$t)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class eR{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ys}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class tR{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ys}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new ct().setRGB(a[0],a[1],a[2],fn),Promise.all(s)}}class nR{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ys}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class iR{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ys}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new ct().setRGB(a[0],a[1],a[2],fn),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,$t)),Promise.all(s)}}class rR{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ys}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class sR{constructor(e){this.parser=e,this.name=xt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class oR{constructor(e){this.parser=e,this.name=xt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class aR{constructor(e){this.parser=e,this.name=xt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class lR{constructor(e){this.name=xt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=r.byteOffset||0,c=r.byteLength||0,u=r.count,f=r.byteStride,h=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,f,h,r.mode,r.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*f);return o.decodeGltfBuffer(new Uint8Array(d),u,f,h,r.mode,r.filter),d})})}else return null}}class cR{constructor(e){this.name=xt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const r=t.meshes[n.mesh];for(const c of r.primitives)if(c.mode!==Ai.TRIANGLES&&c.mode!==Ai.TRIANGLE_STRIP&&c.mode!==Ai.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),f=u.isGroup?u.children:[u],h=c[0].count,d=[];for(const v of f){const g=new pt,p=new Y,m=new xs,M=new Y(1,1,1),S=new f1(v.geometry,v.material,h);for(let x=0;x<h;x++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,x),l.SCALE&&M.fromBufferAttribute(l.SCALE,x),S.setMatrixAt(x,g.compose(p,m,M));for(const x in l)x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&v.geometry.setAttribute(x,l[x]);jt.prototype.copy.call(S,v),this.parser.assignFinalMaterial(S),d.push(S)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const q0="glTF",Ua=12,_g={JSON:1313821514,BIN:5130562};class uR{constructor(e){this.name=xt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ua),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==q0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-Ua,s=new DataView(e,Ua);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===_g.JSON){const c=new Uint8Array(e,Ua+o,a);this.content=n.decode(c)}else if(l===_g.BIN){const c=Ua+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class fR{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=xt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const f=_h[u]||u.toLowerCase();a[f]=o[u]}for(const u in e.attributes){const f=_h[u]||u.toLowerCase();if(o[u]!==void 0){const h=n.accessors[e.attributes[u]],d=Ko[h.componentType];c[f]=d.name,l[f]=h.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(f){r.decodeDracoFile(u,function(h){for(const d in h.attributes){const v=h.attributes[d],g=l[d];g!==void 0&&(v.normalized=g)}f(h)},a,c)})})}}class hR{constructor(){this.name=xt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class dR{constructor(){this.name=xt.KHR_MESH_QUANTIZATION}}class K0 extends Nl{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=r-t,f=(n-t)/u,h=f*f,d=h*f,v=e*c,g=v-c,p=-2*d+3*h,m=d-h,M=1-p,S=m-h+f;for(let x=0;x!==a;x++){const w=o[g+x+a],L=o[g+x+l]*u,R=o[v+x+a],z=o[v+x]*u;s[x]=M*w+S*L+p*R+m*z}return s}}const pR=new xs;class mR extends K0{interpolate_(e,t,n,r){const s=super.interpolate_(e,t,n,r);return pR.fromArray(s).normalize().toArray(s),s}}const Ai={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ko={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},vg={9728:_n,9729:cn,9984:ah,9985:u0,9986:Dc,9987:ps},xg={33071:Qn,33648:jc,10497:sa},bf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},_h={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Xr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},gR={CUBICSPLINE:void 0,LINEAR:aa,STEP:Ml},Af={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function _R(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new bd({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ur})),i.DefaultMaterial}function Cs(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Zr(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function vR(i,e,t){let n=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const f=e[c];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(r=!0),f.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const f=e[c];if(n){const h=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):i.attributes.position;o.push(h)}if(r){const h=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):i.attributes.normal;a.push(h)}if(s){const h=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):i.attributes.color;l.push(h)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],f=c[1],h=c[2];return n&&(i.morphAttributes.position=u),r&&(i.morphAttributes.normal=f),s&&(i.morphAttributes.color=h),i.morphTargetsRelative=!0,i})}function xR(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function yR(i){let e;const t=i.extensions&&i.extensions[xt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+wf(t.attributes):e=i.indices+":"+wf(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,r=i.targets.length;n<r;n++)e+=":"+wf(i.targets[n]);return e}function wf(i){let e="";const t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function vh(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function SR(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const MR=new pt;class TR{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new q1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,s=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||r&&s<98?this.textureLoader=new C1(this.options.manager):this.textureLoader=new N1(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ad(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:n,userData:{}};return Cs(s,a,r),Zr(a,r),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const r=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const r=e(t[n]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[xt.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){n.load(gh.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){const t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=bf[r.type],a=Ko[r.componentType],l=r.normalized===!0,c=new a(r.count*o);return Promise.resolve(new jn(c,o,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=bf[r.type],c=Ko[r.componentType],u=c.BYTES_PER_ELEMENT,f=u*l,h=r.byteOffset||0,d=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,v=r.normalized===!0;let g,p;if(d&&d!==f){const m=Math.floor(h/d),M="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+m+":"+r.count;let S=t.cache.get(M);S||(g=new c(a,m*d,r.count*d/u),S=new o1(g,d/u),t.cache.add(M,S)),p=new Md(S,l,h%d/u,v)}else a===null?g=new c(r.count*l):g=new c(a,h,r.count*l),p=new jn(g,l,v);if(r.sparse!==void 0){const m=bf.SCALAR,M=Ko[r.sparse.indices.componentType],S=r.sparse.indices.byteOffset||0,x=r.sparse.values.byteOffset||0,w=new M(o[1],S,r.sparse.count*m),L=new c(o[2],x,r.sparse.count*l);a!==null&&(p=new jn(p.array.slice(),p.itemSize,p.normalized));for(let R=0,z=w.length;R<z;R++){const T=w[R];if(p.setX(T,L[R*l]),l>=2&&p.setY(T,L[R*l+1]),l>=3&&p.setZ(T,L[R*l+2]),l>=4&&p.setW(T,L[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const r=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const h=(s.samplers||{})[o.sampler]||{};return u.magFilter=vg[h.magFilter]||cn,u.minFilter=vg[h.minFilter]||ps,u.wrapS=xg[h.wrapS]||sa,u.wrapT=xg[h.wrapT]||sa,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const o=r.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(f){c=!0;const h=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(h),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(f){return new Promise(function(h,d){let v=h;t.isImageBitmapLoader===!0&&(v=function(g){const p=new Sn(g);p.needsUpdate=!0,h(p)}),t.load(gh.resolveURL(f,s.path),v,void 0,d)})}).then(function(f){return c===!0&&a.revokeObjectURL(l),f.userData.mimeType=o.mimeType||SR(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=u,u}assignTexture(e,t,n,r){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[xt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[xt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[xt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new V0,nr.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new G0,nr.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(r||s||o){let a="ClonedMaterial:"+n.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return bd}loadMaterial(e){const t=this,n=this.json,r=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[xt.KHR_MATERIALS_UNLIT]){const f=r[xt.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),c.push(f.extendParams(a,s,t))}else{const f=s.pbrMetallicRoughness||{};if(a.color=new ct(1,1,1),a.opacity=1,Array.isArray(f.baseColorFactor)){const h=f.baseColorFactor;a.color.setRGB(h[0],h[1],h[2],fn),a.opacity=h[3]}f.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",f.baseColorTexture,$t)),a.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,a.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",f.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=ji);const u=s.alphaMode||Af.OPAQUE;if(u===Af.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Af.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==ks&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new vt(1,1),s.normalTexture.scale!==void 0)){const f=s.normalTexture.scale;a.normalScale.set(f,f)}if(s.occlusionTexture!==void 0&&o!==ks&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==ks){const f=s.emissiveFactor;a.emissive=new ct().setRGB(f[0],f[1],f[2],fn)}return s.emissiveTexture!==void 0&&o!==ks&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,$t)),Promise.all(c).then(function(){const f=new o(a);return s.name&&(f.name=s.name),Zr(f,s),t.associations.set(f,{materials:e}),s.extensions&&Cs(r,f,s),f})}createUniqueName(e){const t=Pt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,r=this.primitiveCache;function s(a){return n[xt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return yg(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=yR(c),f=r[u];if(f)o.push(f.promise);else{let h;c.extensions&&c.extensions[xt.KHR_DRACO_MESH_COMPRESSION]?h=s(c):h=yg(new ar,c,t),r[u]={primitive:c,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,r=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?_R(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],f=[];for(let d=0,v=u.length;d<v;d++){const g=u[d],p=o[d];let m;const M=c[d];if(p.mode===Ai.TRIANGLES||p.mode===Ai.TRIANGLE_STRIP||p.mode===Ai.TRIANGLE_FAN||p.mode===void 0)m=s.isSkinnedMesh===!0?new l1(g,M):new vi(g,M),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===Ai.TRIANGLE_STRIP?m.geometry=gg(m.geometry,v0):p.mode===Ai.TRIANGLE_FAN&&(m.geometry=gg(m.geometry,lh));else if(p.mode===Ai.LINES)m=new h1(g,M);else if(p.mode===Ai.LINE_STRIP)m=new Ed(g,M);else if(p.mode===Ai.LINE_LOOP)m=new d1(g,M);else if(p.mode===Ai.POINTS)m=new p1(g,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&xR(m,s),m.name=t.createUniqueName(s.name||"mesh_"+e),Zr(m,s),p.extensions&&Cs(r,m,p),t.assignFinalMaterial(m),f.push(m)}for(let d=0,v=f.length;d<v;d++)t.associations.set(f[d],{meshes:e,primitives:d});if(f.length===1)return s.extensions&&Cs(r,f[0],s),f[0];const h=new zs;s.extensions&&Cs(r,h,s),t.associations.set(h,{meshes:e});for(let d=0,v=f.length;d<v;d++)h.add(f[d]);return h})}loadCamera(e){let t;const n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Cn(hh.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new yd(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Zr(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let r=0,s=t.joints.length;r<s;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){const s=r.pop(),o=r,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const f=o[c];if(f){a.push(f);const h=new pt;s!==null&&h.fromArray(s.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Td(a,l)})}loadAnimation(e){const t=this.json,n=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let f=0,h=r.channels.length;f<h;f++){const d=r.channels[f],v=r.samplers[d.sampler],g=d.target,p=g.node,m=r.parameters!==void 0?r.parameters[v.input]:v.input,M=r.parameters!==void 0?r.parameters[v.output]:v.output;g.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",M)),c.push(v),u.push(g))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(f){const h=f[0],d=f[1],v=f[2],g=f[3],p=f[4],m=[];for(let M=0,S=h.length;M<S;M++){const x=h[M],w=d[M],L=v[M],R=g[M],z=p[M];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const T=n._createAnimationTracks(x,w,L,R,z);if(T)for(let P=0;P<T.length;P++)m.push(T[P])}return new S1(s,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=r.weights.length;l<c;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){const t=this.json,n=this,r=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=r.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],f=c[1],h=c[2];h!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(h,MR)});for(let d=0,v=f.length;d<v;d++)u.add(f[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new z0:c.length>1?u=new zs:c.length===1?u=c[0]:u=new jt,u!==c[0])for(let f=0,h=c.length;f<h;f++)u.add(c[f]);if(s.name&&(u.userData.name=s.name,u.name=o),Zr(u,s),s.extensions&&Cs(n,u,s),s.matrix!==void 0){const f=new pt;f.fromArray(s.matrix),u.applyMatrix4(f)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return r.associations.has(u)||r.associations.set(u,{}),r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],r=this,s=new zs;n.name&&(s.name=r.createUniqueName(n.name)),Zr(s,n),n.extensions&&Cs(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,f=l.length;u<f;u++)s.add(l[u]);const c=u=>{const f=new Map;for(const[h,d]of r.associations)(h instanceof nr||h instanceof Sn)&&f.set(h,d);return u.traverse(h=>{const d=r.associations.get(h);d!=null&&f.set(h,d)}),f};return r.associations=c(s),s})}_createAnimationTracks(e,t,n,r,s){const o=[],a=e.name?e.name:e.uuid,l=[];Xr[s.path]===Xr.weights?e.traverse(function(h){h.morphTargetInfluences&&l.push(h.name?h.name:h.uuid)}):l.push(a);let c;switch(Xr[s.path]){case Xr.weights:c=ua;break;case Xr.rotation:c=io;break;case Xr.position:case Xr.scale:c=fa;break;default:switch(n.itemSize){case 1:c=ua;break;case 2:case 3:default:c=fa;break}break}const u=r.interpolation!==void 0?gR[r.interpolation]:aa,f=this._getArrayFromAccessor(n);for(let h=0,d=l.length;h<d;h++){const v=new c(l[h]+"."+Xr[s.path],t.array,f,u);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),o.push(v)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=vh(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const r=this instanceof io?mR:K0;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function ER(i,e,t){const n=e.attributes,r=new kr;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(r.set(new Y(l[0],l[1],l[2]),new Y(c[0],c[1],c[2])),a.normalized){const u=vh(Ko[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new Y,l=new Y;for(let c=0,u=s.length;c<u;c++){const f=s[c];if(f.POSITION!==void 0){const h=t.json.accessors[f.POSITION],d=h.min,v=h.max;if(d!==void 0&&v!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(v[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(v[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(v[2]))),h.normalized){const g=vh(Ko[h.componentType]);l.multiplyScalar(g)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}i.boundingBox=r;const o=new or;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=o}function yg(i,e,t){const n=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=_h[o]||o.toLowerCase();a in i.attributes||r.push(s(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});r.push(o)}return Ct.workingColorSpace!==fn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ct.workingColorSpace}" not supported.`),Zr(i,e),ER(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?vR(i,e.targets,t):i})}const bR=`varying vec2 vUv;\r
void main() {\r
    vUv = uv;\r
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\r
} `,AR=`precision mediump float;

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
} `;async function wR(i){return new Promise((e,t)=>{new Y1().load(i,r=>{r.scene.traverse(s=>{s.isMesh&&console.log("[Mesh]",s.name,"Material:",s.material&&s.material.name,"Type:",s.material&&s.material.type),s.isMesh&&s.material&&s.material.name==="Lighting_Stripes"&&(s.material=new Nr({vertexShader:bR,fragmentShader:AR,uniforms:{u_time:{value:0},u_resolution:{value:new vt(1,1)},u_mouse:{value:new vt(.5,.5)}},transparent:!0}),s.material.needsUpdate=!0,console.log("[Shader Replace] Applied ShaderMaterial to mesh:",s.name,"Material type:",s.material.type))}),e(r)},r=>console.log("Loading progress:",r),r=>t(r))})}function Sg(i){return new Y(i.x,i.z,-i.y)}async function RR(i,e="assets/sun_presets.json"){const t=await fetch(i);if(!t.ok)throw new Error("Failed to load camera presets JSON");return(await t.json()).cameras.map(r=>{const s=Sg(new Y(...r.position)),o=Sg(new Y(...r.lookAtTarget));return{name:r.name,position:s,fov:r.fov,focalLength:r.focalLength,lookAtTarget:o,near:r.near,far:r.far}})}class CR{constructor(e,t,n=null){if(this.threeCamera=e,this.cameraPresets=t,this.currentIndex=0,this.onTransitionComplete=n,this.basePosition=new Y,this.baseTarget=new Y,this.cameraPresets.length>0){const r=this.cameraPresets[0];this.basePosition.copy(r.position),this.baseTarget.copy(r.lookAtTarget)}this.setFromPreset(0),this.targetOffset=new Y,this.currentOffset=new Y,this._setupMouse()}setFromPreset(e){e!==this.currentIndex&&this.cameraPresets[e]&&this._startTransition(e)}nextPreset(){this.setFromPreset((this.currentIndex+1)%this.cameraPresets.length)}prevPreset(){this.setFromPreset((this.currentIndex-1+this.cameraPresets.length)%this.cameraPresets.length)}_setupMouse(){window.addEventListener("mousemove",e=>{const t=e.clientX/window.innerWidth*2-1;let n=e.clientY/window.innerHeight*2-1;n=-n,this.targetOffset.set(t*.21,n*.105,0)})}_startTransition(e){const t=this.cameraPresets[e];if(!t)return;let n=t.position.clone(),r=t.lookAtTarget.clone();this._transition={fromPos:this.basePosition.clone(),fromTarget:this.baseTarget.clone(),toPos:n,toTarget:r,start:performance.now()/1e3,duration:1.5,active:!0,toIndex:e},this.onTransitionComplete&&this.onTransitionComplete(e)}_easeInOutCubic(e){return e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2}update(){if(this._transition&&this._transition.active){let t=(performance.now()/1e3-this._transition.start)/this._transition.duration;if(t>=1){t=1,this._transition.active=!1,this.basePosition.copy(this._transition.toPos),this.baseTarget.copy(this._transition.toTarget),this.currentIndex=this._transition.toIndex;const n=this.cameraPresets[this.currentIndex];n&&n.fov&&(this.threeCamera.fov=n.fov,this.threeCamera.updateProjectionMatrix())}else{const n=this._easeInOutCubic(t);this.basePosition.lerpVectors(this._transition.fromPos,this._transition.toPos,n),this.baseTarget.lerpVectors(this._transition.fromTarget,this._transition.toTarget,n);const r=this.cameraPresets[this.currentIndex],s=this.cameraPresets[this._transition.toIndex];r&&s&&r.fov&&s.fov&&(this.threeCamera.fov=r.fov+(s.fov-r.fov)*n,this.threeCamera.updateProjectionMatrix())}}this.currentOffset.lerp(this.targetOffset,.08),this.threeCamera.position.copy(this.basePosition).add(this.currentOffset),this.threeCamera.lookAt(this.baseTarget)}getCurrentPresetName(){var e;return((e=this.cameraPresets[this.currentIndex])==null?void 0:e.name)||""}getCurrentPreset(){return this.cameraPresets[this.currentIndex]||null}getCurrentIndex(){return this.currentIndex}}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/var Mg=function(i){return URL.createObjectURL(new Blob([i],{type:"text/javascript"}))};try{URL.revokeObjectURL(Mg(""))}catch{Mg=function(e){return"data:application/javascript;charset=UTF-8,"+encodeURI(e)}}var Ci=Uint8Array,es=Uint16Array,xh=Uint32Array,j0=new Ci([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),$0=new Ci([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),PR=new Ci([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Z0=function(i,e){for(var t=new es(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var r=new xh(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)r[s]=s-t[n]<<5|n;return[t,r]},J0=Z0(j0,2),Q0=J0[0],LR=J0[1];Q0[28]=258,LR[258]=28;var IR=Z0($0,0),DR=IR[0],yh=new es(32768);for(var Gt=0;Gt<32768;++Gt){var Yr=(Gt&43690)>>>1|(Gt&21845)<<1;Yr=(Yr&52428)>>>2|(Yr&13107)<<2,Yr=(Yr&61680)>>>4|(Yr&3855)<<4,yh[Gt]=((Yr&65280)>>>8|(Yr&255)<<8)>>>1}var rl=function(i,e,t){for(var n=i.length,r=0,s=new es(e);r<n;++r)++s[i[r]-1];var o=new es(e);for(r=0;r<e;++r)o[r]=o[r-1]+s[r-1]<<1;var a;if(t){a=new es(1<<e);var l=15-e;for(r=0;r<n;++r)if(i[r])for(var c=r<<4|i[r],u=e-i[r],f=o[i[r]-1]++<<u,h=f|(1<<u)-1;f<=h;++f)a[yh[f]>>>l]=c}else for(a=new es(n),r=0;r<n;++r)i[r]&&(a[r]=yh[o[i[r]-1]++]>>>15-i[r]);return a},Ol=new Ci(288);for(var Gt=0;Gt<144;++Gt)Ol[Gt]=8;for(var Gt=144;Gt<256;++Gt)Ol[Gt]=9;for(var Gt=256;Gt<280;++Gt)Ol[Gt]=7;for(var Gt=280;Gt<288;++Gt)Ol[Gt]=8;var ev=new Ci(32);for(var Gt=0;Gt<32;++Gt)ev[Gt]=5;var UR=rl(Ol,9,1),NR=rl(ev,5,1),Rf=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},Fi=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},Cf=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},OR=function(i){return(i/8|0)+(i&7&&1)},FR=function(i,e,t){(t==null||t>i.length)&&(t=i.length);var n=new(i instanceof es?es:i instanceof xh?xh:Ci)(t-e);return n.set(i.subarray(e,t)),n},BR=function(i,e,t){var n=i.length;if(!n||t&&!t.l&&n<5)return e||new Ci(0);var r=!e||t,s=!t||t.i;t||(t={}),e||(e=new Ci(n*3));var o=function(Me){var Ie=e.length;if(Me>Ie){var Ue=new Ci(Math.max(Ie*2,Me));Ue.set(e),e=Ue}},a=t.f||0,l=t.p||0,c=t.b||0,u=t.l,f=t.d,h=t.m,d=t.n,v=n*8;do{if(!u){t.f=a=Fi(i,l,1);var g=Fi(i,l+1,3);if(l+=3,g)if(g==1)u=UR,f=NR,h=9,d=5;else if(g==2){var S=Fi(i,l,31)+257,x=Fi(i,l+10,15)+4,w=S+Fi(i,l+5,31)+1;l+=14;for(var L=new Ci(w),R=new Ci(19),z=0;z<x;++z)R[PR[z]]=Fi(i,l+z*3,7);l+=x*3;for(var T=Rf(R),P=(1<<T)-1,J=rl(R,T,1),z=0;z<w;){var W=J[Fi(i,l,P)];l+=W&15;var p=W>>>4;if(p<16)L[z++]=p;else{var re=0,k=0;for(p==16?(k=3+Fi(i,l,3),l+=2,re=L[z-1]):p==17?(k=3+Fi(i,l,7),l+=3):p==18&&(k=11+Fi(i,l,127),l+=7);k--;)L[z++]=re}}var K=L.subarray(0,S),$=L.subarray(S);h=Rf(K),d=Rf($),u=rl(K,h,1),f=rl($,d,1)}else throw"invalid block type";else{var p=OR(l)+4,m=i[p-4]|i[p-3]<<8,M=p+m;if(M>n){if(s)throw"unexpected EOF";break}r&&o(c+m),e.set(i.subarray(p,M),c),t.b=c+=m,t.p=l=M*8;continue}if(l>v){if(s)throw"unexpected EOF";break}}r&&o(c+131072);for(var X=(1<<h)-1,Z=(1<<d)-1,se=l;;se=l){var re=u[Cf(i,l)&X],D=re>>>4;if(l+=re&15,l>v){if(s)throw"unexpected EOF";break}if(!re)throw"invalid length/literal";if(D<256)e[c++]=D;else if(D==256){se=l,u=null;break}else{var G=D-254;if(D>264){var z=D-257,q=j0[z];G=Fi(i,l,(1<<q)-1)+Q0[z],l+=q}var Te=f[Cf(i,l)&Z],ve=Te>>>4;if(!Te)throw"invalid distance";l+=Te&15;var $=DR[ve];if(ve>3){var q=$0[ve];$+=Cf(i,l)&(1<<q)-1,l+=q}if(l>v){if(s)throw"unexpected EOF";break}r&&o(c+131072);for(var Ee=c+G;c<Ee;c+=4)e[c]=e[c-$],e[c+1]=e[c+1-$],e[c+2]=e[c+2-$],e[c+3]=e[c+3-$];c=Ee}}t.l=u,t.p=se,t.b=c,u&&(a=1,t.m=h,t.d=f,t.n=d)}while(!a);return c==e.length?e:FR(e,0,c)},kR=new Ci(0),zR=function(i){if((i[0]&15)!=8||i[0]>>>4>7||(i[0]<<8|i[1])%31)throw"invalid zlib data";if(i[1]&32)throw"invalid zlib data: preset dictionaries not supported"};function dc(i,e){return BR((zR(i),i.subarray(2,-4)),e)}var HR=typeof TextDecoder<"u"&&new TextDecoder,GR=0;try{HR.decode(kR,{stream:!0}),GR=1}catch{}class VR extends R1{constructor(e){super(e),this.type=Ar}parse(e){const T=Math.pow(2.7182818,2.2);function P(y,_){let b=0;for(let U=0;U<65536;++U)(U==0||y[U>>3]&1<<(U&7))&&(_[b++]=U);const I=b-1;for(;b<65536;)_[b++]=0;return I}function J(y){for(let _=0;_<16384;_++)y[_]={},y[_].len=0,y[_].lit=0,y[_].p=null}const W={l:0,c:0,lc:0};function re(y,_,b,I,U){for(;b<y;)_=_<<8|Qe(I,U),b+=8;b-=y,W.l=_>>b&(1<<y)-1,W.c=_,W.lc=b}const k=new Array(59);function K(y){for(let b=0;b<=58;++b)k[b]=0;for(let b=0;b<65537;++b)k[y[b]]+=1;let _=0;for(let b=58;b>0;--b){const I=_+k[b]>>1;k[b]=_,_=I}for(let b=0;b<65537;++b){const I=y[b];I>0&&(y[b]=I|k[I]++<<6)}}function $(y,_,b,I,U,N){const j=_;let te=0,ae=0;for(;I<=U;I++){if(j.value-_.value>b)return!1;re(6,te,ae,y,j);const ie=W.l;if(te=W.c,ae=W.lc,N[I]=ie,ie==63){if(j.value-_.value>b)throw new Error("Something wrong with hufUnpackEncTable");re(8,te,ae,y,j);let he=W.l+6;if(te=W.c,ae=W.lc,I+he>U+1)throw new Error("Something wrong with hufUnpackEncTable");for(;he--;)N[I++]=0;I--}else if(ie>=59){let he=ie-59+2;if(I+he>U+1)throw new Error("Something wrong with hufUnpackEncTable");for(;he--;)N[I++]=0;I--}}K(N)}function X(y){return y&63}function Z(y){return y>>6}function se(y,_,b,I){for(;_<=b;_++){const U=Z(y[_]),N=X(y[_]);if(U>>N)throw new Error("Invalid table entry");if(N>14){const j=I[U>>N-14];if(j.len)throw new Error("Invalid table entry");if(j.lit++,j.p){const te=j.p;j.p=new Array(j.lit);for(let ae=0;ae<j.lit-1;++ae)j.p[ae]=te[ae]}else j.p=new Array(1);j.p[j.lit-1]=_}else if(N){let j=0;for(let te=1<<14-N;te>0;te--){const ae=I[(U<<14-N)+j];if(ae.len||ae.p)throw new Error("Invalid table entry");ae.len=N,ae.lit=_,j++}}}return!0}const D={c:0,lc:0};function G(y,_,b,I){y=y<<8|Qe(b,I),_+=8,D.c=y,D.lc=_}const q={c:0,lc:0};function Te(y,_,b,I,U,N,j,te,ae){if(y==_){I<8&&(G(b,I,U,N),b=D.c,I=D.lc),I-=8;let ie=b>>I;if(ie=new Uint8Array([ie])[0],te.value+ie>ae)return!1;const he=j[te.value-1];for(;ie-- >0;)j[te.value++]=he}else if(te.value<ae)j[te.value++]=y;else return!1;q.c=b,q.lc=I}function ve(y){return y&65535}function Ee(y){const _=ve(y);return _>32767?_-65536:_}const Me={a:0,b:0};function Ie(y,_){const b=Ee(y),U=Ee(_),N=b+(U&1)+(U>>1),j=N,te=N-U;Me.a=j,Me.b=te}function Ue(y,_){const b=ve(y),I=ve(_),U=b-(I>>1)&65535,N=I+U-32768&65535;Me.a=N,Me.b=U}function Je(y,_,b,I,U,N,j){const te=j<16384,ae=b>U?U:b;let ie=1,he,pe;for(;ie<=ae;)ie<<=1;for(ie>>=1,he=ie,ie>>=1;ie>=1;){pe=0;const me=pe+N*(U-he),Ce=N*ie,Ve=N*he,Fe=I*ie,ze=I*he;let He,We,Et,st;for(;pe<=me;pe+=Ve){let Mt=pe;const _t=pe+I*(b-he);for(;Mt<=_t;Mt+=ze){const zt=Mt+Fe,Tn=Mt+Ce,St=Tn+Fe;te?(Ie(y[Mt+_],y[Tn+_]),He=Me.a,Et=Me.b,Ie(y[zt+_],y[St+_]),We=Me.a,st=Me.b,Ie(He,We),y[Mt+_]=Me.a,y[zt+_]=Me.b,Ie(Et,st),y[Tn+_]=Me.a,y[St+_]=Me.b):(Ue(y[Mt+_],y[Tn+_]),He=Me.a,Et=Me.b,Ue(y[zt+_],y[St+_]),We=Me.a,st=Me.b,Ue(He,We),y[Mt+_]=Me.a,y[zt+_]=Me.b,Ue(Et,st),y[Tn+_]=Me.a,y[St+_]=Me.b)}if(b&ie){const zt=Mt+Ce;te?Ie(y[Mt+_],y[zt+_]):Ue(y[Mt+_],y[zt+_]),He=Me.a,y[zt+_]=Me.b,y[Mt+_]=He}}if(U&ie){let Mt=pe;const _t=pe+I*(b-he);for(;Mt<=_t;Mt+=ze){const zt=Mt+Fe;te?Ie(y[Mt+_],y[zt+_]):Ue(y[Mt+_],y[zt+_]),He=Me.a,y[zt+_]=Me.b,y[Mt+_]=He}}he=ie,ie>>=1}return pe}function Tt(y,_,b,I,U,N,j,te,ae){let ie=0,he=0;const pe=j,me=Math.trunc(I.value+(U+7)/8);for(;I.value<me;)for(G(ie,he,b,I),ie=D.c,he=D.lc;he>=14;){const Ve=ie>>he-14&16383,Fe=_[Ve];if(Fe.len)he-=Fe.len,Te(Fe.lit,N,ie,he,b,I,te,ae,pe),ie=q.c,he=q.lc;else{if(!Fe.p)throw new Error("hufDecode issues");let ze;for(ze=0;ze<Fe.lit;ze++){const He=X(y[Fe.p[ze]]);for(;he<He&&I.value<me;)G(ie,he,b,I),ie=D.c,he=D.lc;if(he>=He&&Z(y[Fe.p[ze]])==(ie>>he-He&(1<<He)-1)){he-=He,Te(Fe.p[ze],N,ie,he,b,I,te,ae,pe),ie=q.c,he=q.lc;break}}if(ze==Fe.lit)throw new Error("hufDecode issues")}}const Ce=8-U&7;for(ie>>=Ce,he-=Ce;he>0;){const Ve=_[ie<<14-he&16383];if(Ve.len)he-=Ve.len,Te(Ve.lit,N,ie,he,b,I,te,ae,pe),ie=q.c,he=q.lc;else throw new Error("hufDecode issues")}return!0}function $e(y,_,b,I,U,N){const j={value:0},te=b.value,ae=_e(_,b),ie=_e(_,b);b.value+=4;const he=_e(_,b);if(b.value+=4,ae<0||ae>=65537||ie<0||ie>=65537)throw new Error("Something wrong with HUF_ENCSIZE");const pe=new Array(65537),me=new Array(16384);J(me);const Ce=I-(b.value-te);if($(y,b,Ce,ae,ie,pe),he>8*(I-(b.value-te)))throw new Error("Something wrong with hufUncompress");se(pe,ae,ie,me),Tt(pe,me,y,b,he,ie,N,U,j)}function E(y,_,b){for(let I=0;I<b;++I)_[I]=y[_[I]]}function B(y){for(let _=1;_<y.length;_++){const b=y[_-1]+y[_]-128;y[_]=b}}function V(y,_){let b=0,I=Math.floor((y.length+1)/2),U=0;const N=y.length-1;for(;!(U>N||(_[U++]=y[b++],U>N));)_[U++]=y[I++]}function ne(y){let _=y.byteLength;const b=new Array;let I=0;const U=new DataView(y);for(;_>0;){const N=U.getInt8(I++);if(N<0){const j=-N;_-=j+1;for(let te=0;te<j;te++)b.push(U.getUint8(I++))}else{const j=N;_-=2;const te=U.getUint8(I++);for(let ae=0;ae<j+1;ae++)b.push(te)}}return b}function Q(y,_,b,I,U,N){let j=new DataView(N.buffer);const te=b[y.idx[0]].width,ae=b[y.idx[0]].height,ie=3,he=Math.floor(te/8),pe=Math.ceil(te/8),me=Math.ceil(ae/8),Ce=te-(pe-1)*8,Ve=ae-(me-1)*8,Fe={value:0},ze=new Array(ie),He=new Array(ie),We=new Array(ie),Et=new Array(ie),st=new Array(ie);for(let _t=0;_t<ie;++_t)st[_t]=_[y.idx[_t]],ze[_t]=_t<1?0:ze[_t-1]+pe*me,He[_t]=new Float32Array(64),We[_t]=new Uint16Array(64),Et[_t]=new Uint16Array(pe*64);for(let _t=0;_t<me;++_t){let zt=8;_t==me-1&&(zt=Ve);let Tn=8;for(let mt=0;mt<pe;++mt){mt==pe-1&&(Tn=Ce);for(let bt=0;bt<ie;++bt)We[bt].fill(0),We[bt][0]=U[ze[bt]++],F(Fe,I,We[bt]),de(We[bt],He[bt]),ue(He[bt]);ge(He);for(let bt=0;bt<ie;++bt)le(He[bt],Et[bt],mt*64)}let St=0;for(let mt=0;mt<ie;++mt){const bt=b[y.idx[mt]].type;for(let Yt=8*_t;Yt<8*_t+zt;++Yt){St=st[mt][Yt];for(let cr=0;cr<he;++cr){const Ti=cr*64+(Yt&7)*8;j.setUint16(St+0*2*bt,Et[mt][Ti+0],!0),j.setUint16(St+1*2*bt,Et[mt][Ti+1],!0),j.setUint16(St+2*2*bt,Et[mt][Ti+2],!0),j.setUint16(St+3*2*bt,Et[mt][Ti+3],!0),j.setUint16(St+4*2*bt,Et[mt][Ti+4],!0),j.setUint16(St+5*2*bt,Et[mt][Ti+5],!0),j.setUint16(St+6*2*bt,Et[mt][Ti+6],!0),j.setUint16(St+7*2*bt,Et[mt][Ti+7],!0),St+=8*2*bt}}if(he!=pe)for(let Yt=8*_t;Yt<8*_t+zt;++Yt){const cr=st[mt][Yt]+8*he*2*bt,Ti=he*64+(Yt&7)*8;for(let Ms=0;Ms<Tn;++Ms)j.setUint16(cr+Ms*2*bt,Et[mt][Ti+Ms],!0)}}}const Mt=new Uint16Array(te);j=new DataView(N.buffer);for(let _t=0;_t<ie;++_t){b[y.idx[_t]].decoded=!0;const zt=b[y.idx[_t]].type;if(b[_t].type==2)for(let Tn=0;Tn<ae;++Tn){const St=st[_t][Tn];for(let mt=0;mt<te;++mt)Mt[mt]=j.getUint16(St+mt*2*zt,!0);for(let mt=0;mt<te;++mt)j.setFloat32(St+mt*2*zt,ee(Mt[mt]),!0)}}}function F(y,_,b){let I,U=1;for(;U<64;)I=_[y.value],I==65280?U=64:I>>8==255?U+=I&255:(b[U]=I,U++),y.value++}function de(y,_){_[0]=ee(y[0]),_[1]=ee(y[1]),_[2]=ee(y[5]),_[3]=ee(y[6]),_[4]=ee(y[14]),_[5]=ee(y[15]),_[6]=ee(y[27]),_[7]=ee(y[28]),_[8]=ee(y[2]),_[9]=ee(y[4]),_[10]=ee(y[7]),_[11]=ee(y[13]),_[12]=ee(y[16]),_[13]=ee(y[26]),_[14]=ee(y[29]),_[15]=ee(y[42]),_[16]=ee(y[3]),_[17]=ee(y[8]),_[18]=ee(y[12]),_[19]=ee(y[17]),_[20]=ee(y[25]),_[21]=ee(y[30]),_[22]=ee(y[41]),_[23]=ee(y[43]),_[24]=ee(y[9]),_[25]=ee(y[11]),_[26]=ee(y[18]),_[27]=ee(y[24]),_[28]=ee(y[31]),_[29]=ee(y[40]),_[30]=ee(y[44]),_[31]=ee(y[53]),_[32]=ee(y[10]),_[33]=ee(y[19]),_[34]=ee(y[23]),_[35]=ee(y[32]),_[36]=ee(y[39]),_[37]=ee(y[45]),_[38]=ee(y[52]),_[39]=ee(y[54]),_[40]=ee(y[20]),_[41]=ee(y[22]),_[42]=ee(y[33]),_[43]=ee(y[38]),_[44]=ee(y[46]),_[45]=ee(y[51]),_[46]=ee(y[55]),_[47]=ee(y[60]),_[48]=ee(y[21]),_[49]=ee(y[34]),_[50]=ee(y[37]),_[51]=ee(y[47]),_[52]=ee(y[50]),_[53]=ee(y[56]),_[54]=ee(y[59]),_[55]=ee(y[61]),_[56]=ee(y[35]),_[57]=ee(y[36]),_[58]=ee(y[48]),_[59]=ee(y[49]),_[60]=ee(y[57]),_[61]=ee(y[58]),_[62]=ee(y[62]),_[63]=ee(y[63])}function ue(y){const _=.5*Math.cos(.7853975),b=.5*Math.cos(3.14159/16),I=.5*Math.cos(3.14159/8),U=.5*Math.cos(3*3.14159/16),N=.5*Math.cos(5*3.14159/16),j=.5*Math.cos(3*3.14159/8),te=.5*Math.cos(7*3.14159/16),ae=new Array(4),ie=new Array(4),he=new Array(4),pe=new Array(4);for(let me=0;me<8;++me){const Ce=me*8;ae[0]=I*y[Ce+2],ae[1]=j*y[Ce+2],ae[2]=I*y[Ce+6],ae[3]=j*y[Ce+6],ie[0]=b*y[Ce+1]+U*y[Ce+3]+N*y[Ce+5]+te*y[Ce+7],ie[1]=U*y[Ce+1]-te*y[Ce+3]-b*y[Ce+5]-N*y[Ce+7],ie[2]=N*y[Ce+1]-b*y[Ce+3]+te*y[Ce+5]+U*y[Ce+7],ie[3]=te*y[Ce+1]-N*y[Ce+3]+U*y[Ce+5]-b*y[Ce+7],he[0]=_*(y[Ce+0]+y[Ce+4]),he[3]=_*(y[Ce+0]-y[Ce+4]),he[1]=ae[0]+ae[3],he[2]=ae[1]-ae[2],pe[0]=he[0]+he[1],pe[1]=he[3]+he[2],pe[2]=he[3]-he[2],pe[3]=he[0]-he[1],y[Ce+0]=pe[0]+ie[0],y[Ce+1]=pe[1]+ie[1],y[Ce+2]=pe[2]+ie[2],y[Ce+3]=pe[3]+ie[3],y[Ce+4]=pe[3]-ie[3],y[Ce+5]=pe[2]-ie[2],y[Ce+6]=pe[1]-ie[1],y[Ce+7]=pe[0]-ie[0]}for(let me=0;me<8;++me)ae[0]=I*y[16+me],ae[1]=j*y[16+me],ae[2]=I*y[48+me],ae[3]=j*y[48+me],ie[0]=b*y[8+me]+U*y[24+me]+N*y[40+me]+te*y[56+me],ie[1]=U*y[8+me]-te*y[24+me]-b*y[40+me]-N*y[56+me],ie[2]=N*y[8+me]-b*y[24+me]+te*y[40+me]+U*y[56+me],ie[3]=te*y[8+me]-N*y[24+me]+U*y[40+me]-b*y[56+me],he[0]=_*(y[me]+y[32+me]),he[3]=_*(y[me]-y[32+me]),he[1]=ae[0]+ae[3],he[2]=ae[1]-ae[2],pe[0]=he[0]+he[1],pe[1]=he[3]+he[2],pe[2]=he[3]-he[2],pe[3]=he[0]-he[1],y[0+me]=pe[0]+ie[0],y[8+me]=pe[1]+ie[1],y[16+me]=pe[2]+ie[2],y[24+me]=pe[3]+ie[3],y[32+me]=pe[3]-ie[3],y[40+me]=pe[2]-ie[2],y[48+me]=pe[1]-ie[1],y[56+me]=pe[0]-ie[0]}function ge(y){for(let _=0;_<64;++_){const b=y[0][_],I=y[1][_],U=y[2][_];y[0][_]=b+1.5747*U,y[1][_]=b-.1873*I-.4682*U,y[2][_]=b+1.8556*I}}function le(y,_,b){for(let I=0;I<64;++I)_[b+I]=Tm.toHalfFloat(Re(y[I]))}function Re(y){return y<=1?Math.sign(y)*Math.pow(Math.abs(y),2.2):Math.sign(y)*Math.pow(T,Math.abs(y)-1)}function C(y){return new DataView(y.array.buffer,y.offset.value,y.size)}function A(y){const _=y.viewer.buffer.slice(y.offset.value,y.offset.value+y.size),b=new Uint8Array(ne(_)),I=new Uint8Array(b.length);return B(b),V(b,I),new DataView(I.buffer)}function H(y){const _=y.array.slice(y.offset.value,y.offset.value+y.size),b=dc(_),I=new Uint8Array(b.length);return B(b),V(b,I),new DataView(I.buffer)}function ce(y){const _=y.viewer,b={value:y.offset.value},I=new Uint16Array(y.width*y.scanlineBlockSize*(y.channels*y.type)),U=new Uint8Array(8192);let N=0;const j=new Array(y.channels);for(let Ve=0;Ve<y.channels;Ve++)j[Ve]={},j[Ve].start=N,j[Ve].end=j[Ve].start,j[Ve].nx=y.width,j[Ve].ny=y.lines,j[Ve].size=y.type,N+=j[Ve].nx*j[Ve].ny*j[Ve].size;const te=Se(_,b),ae=Se(_,b);if(ae>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(te<=ae)for(let Ve=0;Ve<ae-te+1;Ve++)U[Ve+te]=Ge(_,b);const ie=new Uint16Array(65536),he=P(U,ie),pe=_e(_,b);$e(y.array,_,b,pe,I,N);for(let Ve=0;Ve<y.channels;++Ve){const Fe=j[Ve];for(let ze=0;ze<j[Ve].size;++ze)Je(I,Fe.start+ze,Fe.nx,Fe.size,Fe.ny,Fe.nx*Fe.size,he)}E(ie,I,N);let me=0;const Ce=new Uint8Array(I.buffer.byteLength);for(let Ve=0;Ve<y.lines;Ve++)for(let Fe=0;Fe<y.channels;Fe++){const ze=j[Fe],He=ze.nx*ze.size,We=new Uint8Array(I.buffer,ze.end*2,He*2);Ce.set(We,me),me+=He*2,ze.end+=He}return new DataView(Ce.buffer)}function oe(y){const _=y.array.slice(y.offset.value,y.offset.value+y.size),b=dc(_),I=y.lines*y.channels*y.width,U=y.type==1?new Uint16Array(I):new Uint32Array(I);let N=0,j=0;const te=new Array(4);for(let ae=0;ae<y.lines;ae++)for(let ie=0;ie<y.channels;ie++){let he=0;switch(y.type){case 1:te[0]=N,te[1]=te[0]+y.width,N=te[1]+y.width;for(let pe=0;pe<y.width;++pe){const me=b[te[0]++]<<8|b[te[1]++];he+=me,U[j]=he,j++}break;case 2:te[0]=N,te[1]=te[0]+y.width,te[2]=te[1]+y.width,N=te[2]+y.width;for(let pe=0;pe<y.width;++pe){const me=b[te[0]++]<<24|b[te[1]++]<<16|b[te[2]++]<<8;he+=me,U[j]=he,j++}break}}return new DataView(U.buffer)}function fe(y){const _=y.viewer,b={value:y.offset.value},I=new Uint8Array(y.width*y.lines*(y.channels*y.type*2)),U={version:Be(_,b),unknownUncompressedSize:Be(_,b),unknownCompressedSize:Be(_,b),acCompressedSize:Be(_,b),dcCompressedSize:Be(_,b),rleCompressedSize:Be(_,b),rleUncompressedSize:Be(_,b),rleRawSize:Be(_,b),totalAcUncompressedCount:Be(_,b),totalDcUncompressedCount:Be(_,b),acCompression:Be(_,b)};if(U.version<2)throw new Error("EXRLoader.parse: "+rt.compression+" version "+U.version+" is unsupported");const N=new Array;let j=Se(_,b)-2;for(;j>0;){const Fe=be(_.buffer,b),ze=Ge(_,b),He=ze>>2&3,We=(ze>>4)-1,Et=new Int8Array([We])[0],st=Ge(_,b);N.push({name:Fe,index:Et,type:st,compression:He}),j-=Fe.length+3}const te=rt.channels,ae=new Array(y.channels);for(let Fe=0;Fe<y.channels;++Fe){const ze=ae[Fe]={},He=te[Fe];ze.name=He.name,ze.compression=0,ze.decoded=!1,ze.type=He.pixelType,ze.pLinear=He.pLinear,ze.width=y.width,ze.height=y.lines}const ie={idx:new Array(3)};for(let Fe=0;Fe<y.channels;++Fe){const ze=ae[Fe];for(let He=0;He<N.length;++He){const We=N[He];ze.name==We.name&&(ze.compression=We.compression,We.index>=0&&(ie.idx[We.index]=Fe),ze.offset=Fe)}}let he,pe,me;if(U.acCompressedSize>0)switch(U.acCompression){case 0:he=new Uint16Array(U.totalAcUncompressedCount),$e(y.array,_,b,U.acCompressedSize,he,U.totalAcUncompressedCount);break;case 1:const Fe=y.array.slice(b.value,b.value+U.totalAcUncompressedCount),ze=dc(Fe);he=new Uint16Array(ze.buffer),b.value+=U.totalAcUncompressedCount;break}if(U.dcCompressedSize>0){const Fe={array:y.array,offset:b,size:U.dcCompressedSize};pe=new Uint16Array(H(Fe).buffer),b.value+=U.dcCompressedSize}if(U.rleRawSize>0){const Fe=y.array.slice(b.value,b.value+U.rleCompressedSize),ze=dc(Fe);me=ne(ze.buffer),b.value+=U.rleCompressedSize}let Ce=0;const Ve=new Array(ae.length);for(let Fe=0;Fe<Ve.length;++Fe)Ve[Fe]=new Array;for(let Fe=0;Fe<y.lines;++Fe)for(let ze=0;ze<ae.length;++ze)Ve[ze].push(Ce),Ce+=ae[ze].width*y.type*2;Q(ie,Ve,ae,he,pe,I);for(let Fe=0;Fe<ae.length;++Fe){const ze=ae[Fe];if(!ze.decoded)switch(ze.compression){case 2:let He=0,We=0;for(let Et=0;Et<y.lines;++Et){let st=Ve[Fe][He];for(let Mt=0;Mt<ze.width;++Mt){for(let _t=0;_t<2*ze.type;++_t)I[st++]=me[We+_t*ze.width*ze.height];We++}He++}break;case 1:default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(I.buffer)}function be(y,_){const b=new Uint8Array(y);let I=0;for(;b[_.value+I]!=0;)I+=1;const U=new TextDecoder().decode(b.slice(_.value,_.value+I));return _.value=_.value+I+1,U}function xe(y,_,b){const I=new TextDecoder().decode(new Uint8Array(y).slice(_.value,_.value+b));return _.value=_.value+b,I}function Ae(y,_){const b=nt(y,_),I=_e(y,_);return[b,I]}function Pe(y,_){const b=_e(y,_),I=_e(y,_);return[b,I]}function nt(y,_){const b=y.getInt32(_.value,!0);return _.value=_.value+4,b}function _e(y,_){const b=y.getUint32(_.value,!0);return _.value=_.value+4,b}function Qe(y,_){const b=y[_.value];return _.value=_.value+1,b}function Ge(y,_){const b=y.getUint8(_.value);return _.value=_.value+1,b}const Be=function(y,_){let b;return"getBigInt64"in DataView.prototype?b=Number(y.getBigInt64(_.value,!0)):b=y.getUint32(_.value+4,!0)+Number(y.getUint32(_.value,!0)<<32),_.value+=8,b};function Oe(y,_){const b=y.getFloat32(_.value,!0);return _.value+=4,b}function O(y,_){return Tm.toHalfFloat(Oe(y,_))}function ee(y){const _=(y&31744)>>10,b=y&1023;return(y>>15?-1:1)*(_?_===31?b?NaN:1/0:Math.pow(2,_-15)*(1+b/1024):6103515625e-14*(b/1024))}function Se(y,_){const b=y.getUint16(_.value,!0);return _.value+=2,b}function Le(y,_){return ee(Se(y,_))}function we(y,_,b,I){const U=b.value,N=[];for(;b.value<U+I-1;){const j=be(_,b),te=nt(y,b),ae=Ge(y,b);b.value+=3;const ie=nt(y,b),he=nt(y,b);N.push({name:j,pixelType:te,pLinear:ae,xSampling:ie,ySampling:he})}return b.value+=1,N}function ye(y,_){const b=Oe(y,_),I=Oe(y,_),U=Oe(y,_),N=Oe(y,_),j=Oe(y,_),te=Oe(y,_),ae=Oe(y,_),ie=Oe(y,_);return{redX:b,redY:I,greenX:U,greenY:N,blueX:j,blueY:te,whiteX:ae,whiteY:ie}}function Ye(y,_){const b=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],I=Ge(y,_);return b[I]}function Ze(y,_){const b=_e(y,_),I=_e(y,_),U=_e(y,_),N=_e(y,_);return{xMin:b,yMin:I,xMax:U,yMax:N}}function Xt(y,_){const b=["INCREASING_Y"],I=Ge(y,_);return b[I]}function ke(y,_){const b=Oe(y,_),I=Oe(y,_);return[b,I]}function qe(y,_){const b=Oe(y,_),I=Oe(y,_),U=Oe(y,_);return[b,I,U]}function tt(y,_,b,I,U){if(I==="string"||I==="stringvector"||I==="iccProfile")return xe(_,b,U);if(I==="chlist")return we(y,_,b,U);if(I==="chromaticities")return ye(y,b);if(I==="compression")return Ye(y,b);if(I==="box2i")return Ze(y,b);if(I==="lineOrder")return Xt(y,b);if(I==="float")return Oe(y,b);if(I==="v2f")return ke(y,b);if(I==="v3f")return qe(y,b);if(I==="int")return nt(y,b);if(I==="rational")return Ae(y,b);if(I==="timecode")return Pe(y,b);if(I==="preview")return b.value+=U,"skipped";b.value+=U}function De(y,_,b){const I={};if(y.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");I.version=y.getUint8(4);const U=y.getUint8(5);I.spec={singleTile:!!(U&2),longName:!!(U&4),deepFormat:!!(U&8),multiPart:!!(U&16)},b.value=8;let N=!0;for(;N;){const j=be(_,b);if(j==0)N=!1;else{const te=be(_,b),ae=_e(y,b),ie=tt(y,_,b,te,ae);ie===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${te}'.`):I[j]=ie}}if((U&-5)!=0)throw console.error("THREE.EXRHeader:",I),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return I}function it(y,_,b,I,U){const N={size:0,viewer:_,array:b,offset:I,width:y.dataWindow.xMax-y.dataWindow.xMin+1,height:y.dataWindow.yMax-y.dataWindow.yMin+1,channels:y.channels.length,bytesPerLine:null,lines:null,inputSize:null,type:y.channels[0].pixelType,uncompress:null,getter:null,format:null,colorSpace:fn};switch(y.compression){case"NO_COMPRESSION":N.lines=1,N.uncompress=C;break;case"RLE_COMPRESSION":N.lines=1,N.uncompress=A;break;case"ZIPS_COMPRESSION":N.lines=1,N.uncompress=H;break;case"ZIP_COMPRESSION":N.lines=16,N.uncompress=H;break;case"PIZ_COMPRESSION":N.lines=32,N.uncompress=ce;break;case"PXR24_COMPRESSION":N.lines=16,N.uncompress=oe;break;case"DWAA_COMPRESSION":N.lines=32,N.uncompress=fe;break;case"DWAB_COMPRESSION":N.lines=256,N.uncompress=fe;break;default:throw new Error("EXRLoader.parse: "+y.compression+" is unsupported")}if(N.scanlineBlockSize=N.lines,N.type==1)switch(U){case Pi:N.getter=Le,N.inputSize=2;break;case Ar:N.getter=Se,N.inputSize=2;break}else if(N.type==2)switch(U){case Pi:N.getter=Oe,N.inputSize=4;break;case Ar:N.getter=O,N.inputSize=4}else throw new Error("EXRLoader.parse: unsupported pixelType "+N.type+" for "+y.compression+".");N.blockCount=(y.dataWindow.yMax+1)/N.scanlineBlockSize;for(let te=0;te<N.blockCount;te++)Be(_,I);N.outputChannels=N.channels==3?4:N.channels;const j=N.width*N.height*N.outputChannels;switch(U){case Pi:N.byteArray=new Float32Array(j),N.channels<N.outputChannels&&N.byteArray.fill(1,0,j);break;case Ar:N.byteArray=new Uint16Array(j),N.channels<N.outputChannels&&N.byteArray.fill(15360,0,j);break;default:console.error("THREE.EXRLoader: unsupported type: ",U);break}return N.bytesPerLine=N.width*N.inputSize*N.channels,N.outputChannels==4?(N.format=di,N.colorSpace=fn):(N.format=p0,N.colorSpace=pi),N}const je=new DataView(e),et=new Uint8Array(e),It={value:0},rt=De(je,e,It),Ke=it(rt,je,et,It,this.type),Qt={value:0},Ot={R:0,G:1,B:2,A:3,Y:0};for(let y=0;y<Ke.height/Ke.scanlineBlockSize;y++){const _=_e(je,It);Ke.size=_e(je,It),Ke.lines=_+Ke.scanlineBlockSize>Ke.height?Ke.height-_:Ke.scanlineBlockSize;const I=Ke.size<Ke.lines*Ke.bytesPerLine?Ke.uncompress(Ke):C(Ke);It.value+=Ke.size;for(let U=0;U<Ke.scanlineBlockSize;U++){const N=U+y*Ke.scanlineBlockSize;if(N>=Ke.height)break;for(let j=0;j<Ke.channels;j++){const te=Ot[rt.channels[j].name];for(let ae=0;ae<Ke.width;ae++){Qt.value=(U*(Ke.channels*Ke.width)+j*Ke.width+ae)*Ke.inputSize;const ie=(Ke.height-1-N)*(Ke.width*Ke.outputChannels)+ae*Ke.outputChannels+te;Ke.byteArray[ie]=Ke.getter(I,Qt)}}}}return{header:rt,width:Ke.width,height:Ke.height,data:Ke.byteArray,format:Ke.format,colorSpace:Ke.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}load(e,t,n,r){function s(o,a){o.colorSpace=a.colorSpace,o.minFilter=cn,o.magFilter=cn,o.generateMipmaps=!1,o.flipY=!1,t&&t(o,a)}return super.load(e,s,n,r)}}class WR{constructor(e,t=1){this.renderer=e,this.intensity=t,this.scene=null,this.pmremGenerator=new dh(e),this.pmremGenerator.compileEquirectangularShader()}setIntensity(e){this.intensity=Math.max(0,Math.min(2,e)),this.updateIntensity()}getIntensity(){return this.intensity}updateIntensity(){this.scene&&this.scene.traverse(e=>{e.material&&(e.material.envMapIntensity!==void 0?(e.material.envMapIntensity=this.intensity,e.material.needsUpdate=!0):Array.isArray(e.material)&&e.material.forEach(t=>{t.envMapIntensity!==void 0&&(t.envMapIntensity=this.intensity,t.needsUpdate=!0)}))})}async loadHDRI(e){return new Promise((t,n)=>{new VR().load(e,s=>{const o=this.pmremGenerator.fromEquirectangular(s).texture;s.dispose(),this.pmremGenerator.dispose(),t(o)},s=>{console.log("HDRI loading progress:",s)},s=>{console.error("Failed to load HDRI:",s),n(s)})})}setEnvironmentMap(e,t){this.scene=e,e.environment=t,e.background=t,this.updateIntensity()}}function XR(i={}){const{fov:e=60,aspect:t=window.innerWidth/window.innerHeight,near:n=1,far:r=1e5,cameraPosition:s=new Y(0,100,400)}=i,o=new s1,a=new Cn(e,t,n,r);a.position.copy(s);const l=new k0({antialias:!0});return l.setSize(window.innerWidth,window.innerHeight),l.toneMapping=l0,l.toneMappingExposure=.5,{scene:o,camera:a,renderer:l}}class li{constructor(e,t=1.2,n=li.easeInOutCubic){this.currentValue=li.clone(e),this.startValue=li.clone(e),this.targetValue=li.clone(e),this.duration=t,this.easing=n,this.startTime=0,this.progress=1,this.active=!1}start(e){this.startValue=li.clone(this.currentValue),this.targetValue=li.clone(e),this.startTime=performance.now()*.001,this.progress=0,this.active=!0}tick(){if(!this.active)return this.currentValue;let t=(performance.now()*.001-this.startTime)/this.duration;t>=1&&(t=1,this.active=!1);const n=this.easing(t);return this.currentValue=li.lerp(this.startValue,this.targetValue,n),this.progress=t,this.currentValue}isActive(){return this.active}static easeInOutCubic(e){return e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2}static clone(e){return Array.isArray(e)?e.slice():typeof e=="object"&&e!==null?{...e}:e}static lerp(e,t,n){if(typeof e=="number"&&typeof t=="number")return e+(t-e)*n;if(Array.isArray(e)&&Array.isArray(t))return e.map((r,s)=>li.lerp(r,t[s],n));if(typeof e=="object"&&typeof t=="object"){const r={};for(const s in e)t.hasOwnProperty(s)&&(r[s]=li.lerp(e[s],t[s],n));return r}return t}}class YR{constructor(e={}){this.callbacks=e,this._boundWheel=this._handleWheel.bind(this),this._boundKeyDown=this._handleKeyDown.bind(this),this._boundResize=this._handleResize.bind(this)}init(){window.addEventListener("wheel",this._boundWheel),window.addEventListener("keydown",this._boundKeyDown),window.addEventListener("resize",this._boundResize)}dispose(){window.removeEventListener("wheel",this._boundWheel),window.removeEventListener("keydown",this._boundKeyDown),window.removeEventListener("resize",this._boundResize)}setCallback(e,t){this.callbacks[e]=t}_handleWheel(e){typeof this.callbacks.onWheel=="function"&&this.callbacks.onWheel(e)}_handleKeyDown(e){typeof this.callbacks.onKeyDown=="function"&&this.callbacks.onKeyDown(e)}_handleResize(e){typeof this.callbacks.onResize=="function"&&this.callbacks.onResize(e)}}class qR{constructor(e){this.scene=e,this.shaderMeshes=new Set}registerShaderMesh(e){e&&e.material&&e.material.isShaderMaterial&&this.shaderMeshes.add(e)}autoRegisterAll(){this.scene&&this.scene.traverse(e=>{e.isMesh&&e.material&&e.material.isShaderMaterial&&this.registerShaderMesh(e)})}updateUniforms({now:e,renderer:t,mouse:n}){this.shaderMeshes.forEach(r=>{const s=r.material.uniforms;s&&(s.u_time&&(s.u_time.value=e),s.u_resolution&&t&&s.u_resolution.value.set(t.domElement.width,t.domElement.height),s.u_mouse&&n&&s.u_mouse.value.set(n.x,n.y))})}}const tv=(i,e)=>{const t=i.__vccOpts||i;for(const[n,r]of e)t[n]=r;return t},KR=400,jR={__name:"ThreeScene",props:{sunElevation:Number,sunAzimuth:Number,isManualSunControl:Boolean,hdriIntensity:Number},emits:["presetChanged"],setup(i,{expose:e,emit:t}){const n=i,r=t,s=Gn(null);let o,a,l,c,u,f,h,d=null,v=null,g=[],p=new li(n.sunElevation,1.2),m=new li(n.sunAzimuth,1.2),M=new li(n.hdriIntensity,1.2);Ws(()=>n.sunElevation,Z=>{n.isManualSunControl?p.currentValue=Z:p.start(Z)},{immediate:!0}),Ws(()=>n.sunAzimuth,Z=>{n.isManualSunControl?m.currentValue=Z:m.start(Z)},{immediate:!0}),Ws(()=>n.hdriIntensity,Z=>{M.start(Z)},{immediate:!0});const S="/DW_3dTest/";let x=null;const w=()=>{u&&u.nextPreset()},L=()=>{u&&u.prevPreset()},R=()=>u?u.getCurrentPresetName():"",z=()=>u?u.getCurrentPreset():null,T=Z=>{if(u)switch(Z.code){case"ArrowRight":case"KeyD":w();break;case"ArrowLeft":case"KeyA":L();break}};let P=0;const J=Z=>{const se=Date.now();se-P<KR||(P=se,u&&(Z.deltaY>0?w():Z.deltaY<0&&L()))},W=()=>{!a||!l||(a.aspect=window.innerWidth/window.innerHeight,a.updateProjectionMatrix(),l.setSize(window.innerWidth,window.innerHeight))},re=()=>{x=requestAnimationFrame(re);const Z=performance.now()*.001;v&&v.updateUniforms({now:Z,renderer:l});const se=p.tick(),D=m.tick(),G=M.tick();c&&c.setSunPosition(se,D),h&&typeof h.setIntensity=="function"&&h.setIntensity(G),u&&u.update(),l&&o&&a&&l.render(o,a)},k=async()=>{if(!s.value)return;const{scene:Z,camera:se,renderer:D}=XR();o=Z,a=se,l=D,s.value.appendChild(l.domElement),h=new WR(l,n.hdriIntensity);try{const q=await h.loadHDRI(S+"assets/environment.exr");h.setEnvironmentMap(o,q),console.log("HDRI environment loaded successfully"),console.log("Current HDRI intensity:",h.getIntensity()),console.log("Use hdriLoader.setIntensity(value) to adjust HDRI strength (0-2 range)")}catch(q){console.error("Failed to load HDRI:",q)}const G=new Y0(16777215,1.2);G.position.set(0,100,100),o.add(G),c=new X1(o);try{f=(await wR(S+"assets/Tower.glb")).scene,f.rotation.x=-Math.PI/2,o.add(f),h&&h.updateIntensity(),console.log("Model loaded successfully")}catch(q){console.error("Failed to load model:",q)}try{const[q,Te]=await Promise.all([RR(S+"assets/camera_presets.json"),fetch(S+"assets/sun_presets.json").then(ve=>ve.json())]);if(g=Te.presets,q.length>0){const ve=q[0];a=new Cn(ve.fov||60,window.innerWidth/window.innerHeight,ve.near||.1,ve.far||1e3),a.position.copy(ve.position),a.fov=ve.fov,a.near=ve.near,a.far=ve.far,a.updateProjectionMatrix(),a.lookAt(ve.lookAtTarget),u=new CR(a,q,Ee=>{r("presetChanged",Ee)}),c.setSunPosition(n.sunElevation,n.sunAzimuth),console.log("Camera presets loaded successfully")}}catch(q){console.error("Failed to load camera presets:",q),a.position.set(0,100,400),a.lookAt(0,0,0)}v=new qR(o),v.autoRegisterAll(),re()},K=()=>{x&&cancelAnimationFrame(x),l&&l.dispose()};return yu(async()=>{await k(),d=new YR({onWheel:J,onKeyDown:T,onResize:W}),d.init()}),Su(()=>{d&&d.dispose(),K()}),e({nextPreset:w,prevPreset:L,getCurrentPresetName:R,getCurrentPreset:z,getCurrentIndex:()=>u?u.getCurrentIndex():0,getSunPresetByIndex:Z=>g[Z]||null,hdriLoader:h}),(Z,se)=>(ud(),fd("div",{ref_key:"container",ref:s,class:"w-full h-full"},null,512))}},$R=tv(jR,[["__scopeId","data-v-6fb4e3d1"]]);function yr(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function nv(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var yi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},da={duration:.5,overwrite:!1,delay:0},Ld,Mn,Wt,Li=1e8,Ut=1/Li,Sh=Math.PI*2,ZR=Sh/4,JR=0,iv=Math.sqrt,QR=Math.cos,eC=Math.sin,vn=function(e){return typeof e=="string"},Zt=function(e){return typeof e=="function"},Or=function(e){return typeof e=="number"},Id=function(e){return typeof e>"u"},sr=function(e){return typeof e=="object"},ei=function(e){return e!==!1},Dd=function(){return typeof window<"u"},pc=function(e){return Zt(e)||vn(e)},rv=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Dn=Array.isArray,Mh=/(?:-?\.?\d|\.)+/gi,sv=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ko=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Pf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,ov=/[+-]=-?[.\d]+/,av=/[^,'"\[\]\s]+/gi,tC=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,qt,Xi,Th,Ud,Si={},tu={},lv,cv=function(e){return(tu=pa(e,Si))&&ri},Nd=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},El=function(e,t){return!t&&console.warn(e)},uv=function(e,t){return e&&(Si[e]=t)&&tu&&(tu[e]=t)||Si},bl=function(){return 0},nC={suppressEvents:!0,isStart:!0,kill:!1},Nc={suppressEvents:!0,kill:!1},iC={suppressEvents:!0},Od={},us=[],Eh={},fv,fi={},Lf={},Tg=30,Oc=[],Fd="",Bd=function(e){var t=e[0],n,r;if(sr(t)||Zt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=Oc.length;r--&&!Oc[r].targetTest(t););n=Oc[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new Nv(e[r],n)))||e.splice(r,1);return e},Ks=function(e){return e._gsap||Bd(Ii(e))[0]._gsap},hv=function(e,t,n){return(n=e[t])&&Zt(n)?e[t]():Id(n)&&e.getAttribute&&e.getAttribute(t)||n},ti=function(e,t){return(e=e.split(",")).forEach(t)||e},en=function(e){return Math.round(e*1e5)/1e5||0},on=function(e){return Math.round(e*1e7)/1e7||0},jo=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},rC=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},nu=function(){var e=us.length,t=us.slice(0),n,r;for(Eh={},us.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},kd=function(e){return!!(e._initted||e._startAt||e.add)},dv=function(e,t,n,r){us.length&&!Mn&&nu(),e.render(t,n,!!(Mn&&t<0&&kd(e))),us.length&&!Mn&&nu()},pv=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(av).length<2?t:vn(e)?e.trim():e},mv=function(e){return e},Mi=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},sC=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},pa=function(e,t){for(var n in t)e[n]=t[n];return e},Eg=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=sr(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},iu=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},sl=function(e){var t=e.parent||qt,n=e.keyframes?sC(Dn(e.keyframes)):Mi;if(ei(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},oC=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},gv=function(e,t,n,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},Pu=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},ms=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},js=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},aC=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},bh=function(e,t,n,r){return e._startAt&&(Mn?e._startAt.revert(Nc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},lC=function i(e){return!e||e._ts&&i(e.parent)},bg=function(e){return e._repeat?ma(e._tTime,e=e.duration()+e._rDelay)*e:0},ma=function(e,t){var n=Math.floor(e=on(e/t));return e&&n===e?n-1:n},ru=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Lu=function(e){return e._end=on(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ut)||0))},Iu=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=on(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Lu(e),n._dirty||js(n,e)),e},_v=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=ru(e.rawTime(),t),(!t._dur||Fl(0,t.totalDuration(),n)-t._tTime>Ut)&&t.render(n,!0)),js(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Ut}},Zi=function(e,t,n,r){return t.parent&&ms(t),t._start=on((Or(n)?n:n||e!==qt?bi(e,n,t):e._time)+t._delay),t._end=on(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),gv(e,t,"_first","_last",e._sort?"_start":0),Ah(t)||(e._recent=t),r||_v(e,t),e._ts<0&&Iu(e,e._tTime),e},vv=function(e,t){return(Si.ScrollTrigger||Nd("scrollTrigger",t))&&Si.ScrollTrigger.create(t,e)},xv=function(e,t,n,r,s){if(Hd(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Mn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&fv!==mi.frame)return us.push(e),e._lazy=[s,r],1},cC=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},Ah=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},uC=function(e,t,n,r){var s=e.ratio,o=t<0||!t&&(!e._start&&cC(e)&&!(!e._initted&&Ah(e))||(e._ts<0||e._dp._ts<0)&&!Ah(e))?0:1,a=e._rDelay,l=0,c,u,f;if(a&&e._repeat&&(l=Fl(0,e._tDur,t),u=ma(l,a),e._yoyo&&u&1&&(o=1-o),u!==ma(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Mn||r||e._zTime===Ut||!t&&e._zTime){if(!e._initted&&xv(e,t,r,n,l))return;for(f=e._zTime,e._zTime=t||(n?Ut:0),n||(n=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&bh(e,t,n,!0),e._onUpdate&&!n&&xi(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&xi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&ms(e,1),!n&&!Mn&&(xi(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},fC=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},ga=function(e,t,n,r){var s=e._repeat,o=on(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:on(o*(s+1)+e._rDelay*s):o,a>0&&!r&&Iu(e,e._tTime=e._tDur*a),e.parent&&Lu(e),n||js(e.parent,e),e},Ag=function(e){return e instanceof Yn?js(e):ga(e,e._dur)},hC={_start:0,endTime:bl,totalDuration:bl},bi=function i(e,t,n){var r=e.labels,s=e._recent||hC,o=e.duration()>=Li?s.endTime(!1):e._dur,a,l,c;return vn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Dn(n)?n[0]:n).totalDuration()),a>1?i(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},ol=function(e,t,n){var r=Or(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ei(l.vars.inherit)&&l.parent;o.immediateRender=ei(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new sn(t[0],o,t[s+1])},Ss=function(e,t){return e||e===0?t(e):t},Fl=function(e,t,n){return n<e?e:n>t?t:n},Pn=function(e,t){return!vn(e)||!(t=tC.exec(e))?"":t[1]},dC=function(e,t,n){return Ss(n,function(r){return Fl(e,t,r)})},wh=[].slice,yv=function(e,t){return e&&sr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&sr(e[0]))&&!e.nodeType&&e!==Xi},pC=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return vn(r)&&!t||yv(r,1)?(s=n).push.apply(s,Ii(r)):n.push(r)})||n},Ii=function(e,t,n){return Wt&&!t&&Wt.selector?Wt.selector(e):vn(e)&&!n&&(Th||!_a())?wh.call((t||Ud).querySelectorAll(e),0):Dn(e)?pC(e,n):yv(e)?wh.call(e,0):e?[e]:[]},Rh=function(e){return e=Ii(e)[0]||El("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Ii(t,n.querySelectorAll?n:n===e?El("Invalid scope")||Ud.createElement("div"):e)}},Sv=function(e){return e.sort(function(){return .5-Math.random()})},Mv=function(e){if(Zt(e))return e;var t=sr(e)?e:{each:e},n=$s(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,f=r;return vn(r)?u=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],f=r[1]),function(h,d,v){var g=(v||t).length,p=o[g],m,M,S,x,w,L,R,z,T;if(!p){if(T=t.grid==="auto"?0:(t.grid||[1,Li])[1],!T){for(R=-Li;R<(R=v[T++].getBoundingClientRect().left)&&T<g;);T<g&&T--}for(p=o[g]=[],m=l?Math.min(T,g)*u-.5:r%T,M=T===Li?0:l?g*f/T-.5:r/T|0,R=0,z=Li,L=0;L<g;L++)S=L%T-m,x=M-(L/T|0),p[L]=w=c?Math.abs(c==="y"?x:S):iv(S*S+x*x),w>R&&(R=w),w<z&&(z=w);r==="random"&&Sv(p),p.max=R-z,p.min=z,p.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(T>g?g-1:c?c==="y"?g/T:T:Math.max(T,g/T))||0)*(r==="edges"?-1:1),p.b=g<0?s-g:s,p.u=Pn(t.amount||t.each)||0,n=n&&g<0?Iv(n):n}return g=(p[h]-p.min)/p.max||0,on(p.b+(n?n(g):g)*p.v)+p.u}},Ch=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=on(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(Or(n)?0:Pn(n))}},Tv=function(e,t){var n=Dn(e),r,s;return!n&&sr(e)&&(r=n=e.radius||Li,e.values?(e=Ii(e.values),(s=!Or(e[0]))&&(r*=r)):e=Ch(e.increment)),Ss(t,n?Zt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Li,u=0,f=e.length,h,d;f--;)s?(h=e[f].x-a,d=e[f].y-l,h=h*h+d*d):h=Math.abs(e[f]-a),h<c&&(c=h,u=f);return u=!r||c<=r?e[u]:o,s||u===o||Or(o)?u:u+Pn(o)}:Ch(e))},Ev=function(e,t,n,r){return Ss(Dn(e)?!t:n===!0?!!(n=0):!r,function(){return Dn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},mC=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(s,o){return o(s)},r)}},gC=function(e,t){return function(n){return e(parseFloat(n))+(t||Pn(n))}},_C=function(e,t,n){return Av(e,t,0,1,n)},bv=function(e,t,n){return Ss(n,function(r){return e[~~t(r)]})},vC=function i(e,t,n){var r=t-e;return Dn(e)?bv(e,i(0,e.length),t):Ss(n,function(s){return(r+(s-e)%r)%r+e})},xC=function i(e,t,n){var r=t-e,s=r*2;return Dn(e)?bv(e,i(0,e.length-1),t):Ss(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Al=function(e){for(var t=0,n="",r,s,o,a;~(r=e.indexOf("random(",t));)o=e.indexOf(")",r),a=e.charAt(r+7)==="[",s=e.substr(r+7,o-r-7).match(a?av:Mh),n+=e.substr(t,r-t)+Ev(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},Av=function(e,t,n,r,s){var o=t-e,a=r-n;return Ss(s,function(l){return n+((l-e)/o*a||0)})},yC=function i(e,t,n,r){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=vn(e),a={},l,c,u,f,h;if(n===!0&&(r=1)&&(n=null),o)e={p:e},t={p:t};else if(Dn(e)&&!Dn(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(i(e[c-1],e[c]));f--,s=function(v){v*=f;var g=Math.min(h,~~v);return u[g](v-g)},n=t}else r||(e=pa(Dn(e)?[]:{},e));if(!u){for(l in t)zd.call(a,e,l,"get",t[l]);s=function(v){return Wd(v,a)||(o?e.p:e)}}}return Ss(n,s)},wg=function(e,t,n){var r=e.labels,s=Li,o,a,l;for(o in r)a=r[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},xi=function(e,t,n){var r=e.vars,s=r[t],o=Wt,a=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,n&&us.length&&nu(),a&&(Wt=a),u=l?s.apply(c,l):s.call(c),Wt=o,u},za=function(e){return ms(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Mn),e.progress()<1&&xi(e,"onInterrupt"),e},zo,wv=[],Rv=function(e){if(e)if(e=!e.name&&e.default||e,Dd()||e.headless){var t=e.name,n=Zt(e),r=t&&!n&&e.init?function(){this._props=[]}:e,s={init:bl,render:Wd,add:zd,kill:OC,modifier:NC,rawVars:0},o={targetTest:0,get:0,getSetter:Vd,aliases:{},register:0};if(_a(),e!==r){if(fi[t])return;Mi(r,Mi(iu(e,s),o)),pa(r.prototype,pa(s,iu(e,o))),fi[r.prop=t]=r,e.targetTest&&(Oc.push(r),Od[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}uv(t,r),e.register&&e.register(ri,r,ni)}else wv.push(e)},Dt=255,Ha={aqua:[0,Dt,Dt],lime:[0,Dt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Dt],navy:[0,0,128],white:[Dt,Dt,Dt],olive:[128,128,0],yellow:[Dt,Dt,0],orange:[Dt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Dt,0,0],pink:[Dt,192,203],cyan:[0,Dt,Dt],transparent:[Dt,Dt,Dt,0]},If=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Dt+.5|0},Cv=function(e,t,n){var r=e?Or(e)?[e>>16,e>>8&Dt,e&Dt]:0:Ha.black,s,o,a,l,c,u,f,h,d,v;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ha[e])r=Ha[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Dt,r&Dt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Dt,e&Dt]}else if(e.substr(0,3)==="hsl"){if(r=v=e.match(Mh),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=If(l+1/3,s,o),r[1]=If(l,s,o),r[2]=If(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(sv),n&&r.length<4&&(r[3]=1),r}else r=e.match(Mh)||Ha.transparent;r=r.map(Number)}return t&&!v&&(s=r[0]/Dt,o=r[1]/Dt,a=r[2]/Dt,f=Math.max(s,o,a),h=Math.min(s,o,a),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===s?(o-a)/d+(o<a?6:0):f===o?(a-s)/d+2:(s-o)/d+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},Pv=function(e){var t=[],n=[],r=-1;return e.split(fs).forEach(function(s){var o=s.match(ko)||[];t.push.apply(t,o),n.push(r+=o.length+1)}),t.c=n,t},Rg=function(e,t,n){var r="",s=(e+r).match(fs),o=t?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return e;if(s=s.map(function(h){return(h=Cv(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=Pv(e),l=n.c,l.join(r)!==u.c.join(r)))for(c=e.replace(fs,"1").split(ko),f=c.length-1;a<f;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(fs),f=c.length-1;a<f;a++)r+=c[a]+s[a];return r+c[f]},fs=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ha)i+="|"+e+"\\b";return new RegExp(i+")","gi")}(),SC=/hsl[a]?\(/,Lv=function(e){var t=e.join(" "),n;if(fs.lastIndex=0,fs.test(t))return n=SC.test(t),e[1]=Rg(e[1],n),e[0]=Rg(e[0],n,Pv(e[1])),!0},wl,mi=function(){var i=Date.now,e=500,t=33,n=i(),r=n,s=1e3/240,o=s,a=[],l,c,u,f,h,d,v=function g(p){var m=i()-r,M=p===!0,S,x,w,L;if((m>e||m<0)&&(n+=m-t),r+=m,w=r-n,S=w-o,(S>0||M)&&(L=++f.frame,h=w-f.time*1e3,f.time=w=w/1e3,o+=S+(S>=s?4:s-S),x=1),M||(l=c(g)),x)for(d=0;d<a.length;d++)a[d](w,h,L,p)};return f={time:0,frame:0,tick:function(){v(!0)},deltaRatio:function(p){return h/(1e3/(p||60))},wake:function(){lv&&(!Th&&Dd()&&(Xi=Th=window,Ud=Xi.document||{},Si.gsap=ri,(Xi.gsapVersions||(Xi.gsapVersions=[])).push(ri.version),cv(tu||Xi.GreenSockGlobals||!Xi.gsap&&Xi||{}),wv.forEach(Rv)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(p){return setTimeout(p,o-f.time*1e3+1|0)},wl=1,v(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),wl=0,c=bl},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),o=f.time*1e3+s},add:function(p,m,M){var S=m?function(x,w,L,R){p(x,w,L,R),f.remove(S)}:p;return f.remove(p),a[M?"unshift":"push"](S),_a(),S},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&d>=m&&d--},_listeners:a},f}(),_a=function(){return!wl&&mi.wake()},yt={},MC=/^[\d.\-M][\d.\-,\s]/,TC=/["']/g,EC=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(TC,"").trim():+c,r=l.substr(a+1).trim();return t},bC=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},AC=function(e){var t=(e+"").split("("),n=yt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[EC(t[1])]:bC(e).split(",").map(pv)):yt._CE&&MC.test(e)?yt._CE("",e):n},Iv=function(e){return function(t){return 1-e(1-t)}},Dv=function i(e,t){for(var n=e._first,r;n;)n instanceof Yn?i(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?i(n.timeline,t):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=t)),n=n._next},$s=function(e,t){return e&&(Zt(e)?e:yt[e]||AC(e))||t},uo=function(e,t,n,r){n===void 0&&(n=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:r},o;return ti(e,function(a){yt[a]=Si[a]=s,yt[o=a.toLowerCase()]=n;for(var l in s)yt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=yt[a+"."+l]=s[l]}),s},Uv=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Df=function i(e,t,n){var r=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Sh*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*eC((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Uv(a);return s=Sh/s,l.config=function(c,u){return i(e,c,u)},l},Uf=function i(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Uv(n);return r.config=function(s){return i(e,s)},r};ti("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;uo(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});yt.Linear.easeNone=yt.none=yt.Linear.easeIn;uo("Elastic",Df("in"),Df("out"),Df());(function(i,e){var t=1/e,n=2*t,r=2.5*t,s=function(a){return a<t?i*a*a:a<n?i*Math.pow(a-1.5/e,2)+.75:a<r?i*(a-=2.25/e)*a+.9375:i*Math.pow(a-2.625/e,2)+.984375};uo("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);uo("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});uo("Circ",function(i){return-(iv(1-i*i)-1)});uo("Sine",function(i){return i===1?1:-QR(i*ZR)+1});uo("Back",Uf("in"),Uf("out"),Uf());yt.SteppedEase=yt.steps=Si.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),s=t?1:0,o=1-Ut;return function(a){return((r*Fl(0,o,a)|0)+s)*n}}};da.ease=yt["quad.out"];ti("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return Fd+=i+","+i+"Params,"});var Nv=function(e,t){this.id=JR++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:hv,this.set=t?t.getSetter:Vd},Rl=function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ga(this,+t.duration,1,1),this.data=t.data,Wt&&(this._ctx=Wt,Wt.data.push(this)),wl||mi.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ga(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(_a(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Iu(this,n),!s._dp||s.parent||_v(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Zi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Ut||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),dv(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+bg(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+bg(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?ma(this._tTime,s)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-Ut?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?ru(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ut?0:this._rts,this.totalTime(Fl(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Lu(this),aC(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(_a(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ut&&(this._tTime-=Ut)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Zi(r,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(ei(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ru(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=iC);var r=Mn;return Mn=n,kd(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Mn=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Ag(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,Ag(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(bi(this,n),ei(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,ei(r)),this._dur||(this._zTime=-Ut),this},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ut:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ut,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-Ut)},e.eventCallback=function(n,r,s){var o=this.vars;return arguments.length>1?(r?(o[n]=r,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete o[n],this):o[n]},e.then=function(n){var r=this;return new Promise(function(s){var o=Zt(n)?n:mv,a=function(){var c=r.then;r.then=null,Zt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=c),s(o),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){za(this)},i}();Mi(Rl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ut,_prom:0,_ps:!1,_rts:1});var Yn=function(i){nv(e,i);function e(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=ei(n.sortChildren),qt&&Zi(n.parent||qt,yr(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&vv(yr(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return ol(0,arguments,this),this},t.from=function(r,s,o){return ol(1,arguments,this),this},t.fromTo=function(r,s,o,a){return ol(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,sl(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new sn(r,s,bi(this,o),1),this},t.call=function(r,s,o){return Zi(this,sn.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new sn(r,o,bi(this,l)),this},t.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,sl(o).immediateRender=ei(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},t.staggerFromTo=function(r,s,o,a,l,c,u,f){return a.startAt=o,sl(a).immediateRender=ei(a.immediateRender),this.staggerTo(r,s,a,l,c,u,f)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:on(r),f=this._zTime<0!=r<0&&(this._initted||!c),h,d,v,g,p,m,M,S,x,w,L,R;if(this!==qt&&u>l&&r>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),h=u,x=this._start,S=this._ts,m=!S,f&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(L=this._yoyo,p=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(p*100+r,s,o);if(h=on(u%p),u===l?(g=this._repeat,h=c):(w=on(u/p),g=~~w,g&&g===w&&(h=c,g--),h>c&&(h=c)),w=ma(this._tTime,p),!a&&this._tTime&&w!==g&&this._tTime-w*p-this._dur<=0&&(w=g),L&&g&1&&(h=c-h,R=1),g!==w&&!this._lock){var z=L&&w&1,T=z===(L&&g&1);if(g<w&&(z=!z),a=z?0:u%c?c:u,this._lock=1,this.render(a||(R?0:on(g*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&xi(this,"onRepeat"),this.vars.repeatRefresh&&!R&&(this.invalidate()._lock=1),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,T&&(this._lock=2,a=z?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!R&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;Dv(this,R)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=fC(this,on(a),on(h)),M&&(u-=h-(h=M._start))),this._tTime=u,this._time=h,this._act=!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&u&&!s&&!w&&(xi(this,"onStart"),this._tTime!==u))return this;if(h>=a&&r>=0)for(d=this._first;d;){if(v=d._next,(d._act||h>=d._start)&&d._ts&&M!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,o),h!==this._time||!this._ts&&!m){M=0,v&&(u+=this._zTime=-Ut);break}}d=v}else{d=this._last;for(var P=r<0?r:h;d;){if(v=d._prev,(d._act||P<=d._end)&&d._ts&&M!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(P-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(P-d._start)*d._ts,s,o||Mn&&kd(d)),h!==this._time||!this._ts&&!m){M=0,v&&(u+=this._zTime=P?-Ut:Ut);break}}d=v}}if(M&&!s&&(this.pause(),M.render(h>=a?0:-Ut)._zTime=h>=a?1:-1,this._ts))return this._start=x,Lu(this),this.render(r,s,o);this._onUpdate&&!s&&xi(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(x===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&ms(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(xi(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(Or(s)||(s=bi(this,s,r)),!(r instanceof Rl)){if(Dn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(vn(r))return this.addLabel(r,s);if(Zt(r))r=sn.delayedCall(0,r);else return this}return this!==r?Zi(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Li);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof sn?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return vn(r)?this.removeLabel(r):Zt(r)?this.killTweensOf(r):(r.parent===this&&Pu(this,r),r===this._recent&&(this._recent=this._last),js(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=on(mi.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=bi(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=sn.delayedCall(0,s||bl,o);return a.data="isPause",this._hasPause=1,Zi(this,a,bi(this,r))},t.removePause=function(r){var s=this._first;for(r=bi(this,r);s;)s._start===r&&s.data==="isPause"&&ms(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)ts!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Ii(r),l=this._first,c=Or(s),u;l;)l instanceof sn?rC(l._targets,a)&&(c?(!ts||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=bi(o,r),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,v=sn.to(o,Mi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Ut,onStart:function(){if(o.pause(),!d){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());v._dur!==p&&ga(v,p,0,1).render(v._time,!0,!0),d=1}u&&u.apply(v,f||[])}},s));return h?v.render(0):v},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Mi({startAt:{time:bi(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),wg(this,bi(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),wg(this,bi(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Ut)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return js(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),js(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Li,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Zi(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;ga(o,o===qt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(qt._ts&&(dv(qt,ru(r,qt)),fv=mi.frame),mi.frame>=Tg){Tg+=yi.autoSleep||120;var s=qt._first;if((!s||!s._ts)&&yi.autoSleep&&mi._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||mi.sleep()}}},e}(Rl);Mi(Yn.prototype,{_lock:0,_hasPause:0,_forcing:0});var wC=function(e,t,n,r,s,o,a){var l=new ni(this._pt,e,t,0,1,Hv,null,s),c=0,u=0,f,h,d,v,g,p,m,M;for(l.b=n,l.e=r,n+="",r+="",(m=~r.indexOf("random("))&&(r=Al(r)),o&&(M=[n,r],o(M,e,t),n=M[0],r=M[1]),h=n.match(Pf)||[];f=Pf.exec(r);)v=f[0],g=r.substring(c,f.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),v!==h[u++]&&(p=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:p,c:v.charAt(1)==="="?jo(p,v)-p:parseFloat(v)-p,m:d&&d<4?Math.round:0},c=Pf.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(ov.test(r)||m)&&(l.e=0),this._pt=l,l},zd=function(e,t,n,r,s,o,a,l,c,u){Zt(r)&&(r=r(s||0,e,o));var f=e[t],h=n!=="get"?n:Zt(f)?c?e[t.indexOf("set")||!Zt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,d=Zt(f)?c?IC:kv:Gd,v;if(vn(r)&&(~r.indexOf("random(")&&(r=Al(r)),r.charAt(1)==="="&&(v=jo(h,r)+(Pn(h)||0),(v||v===0)&&(r=v))),!u||h!==r||Ph)return!isNaN(h*r)&&r!==""?(v=new ni(this._pt,e,t,+h||0,r-(h||0),typeof f=="boolean"?UC:zv,0,d),c&&(v.fp=c),a&&v.modifier(a,this,e),this._pt=v):(!f&&!(t in e)&&Nd(t,r),wC.call(this,e,t,h,r,d,l||yi.stringFilter,c))},RC=function(e,t,n,r,s){if(Zt(e)&&(e=al(e,s,t,n,r)),!sr(e)||e.style&&e.nodeType||Dn(e)||rv(e))return vn(e)?al(e,s,t,n,r):e;var o={},a;for(a in e)o[a]=al(e[a],s,t,n,r);return o},Ov=function(e,t,n,r,s,o){var a,l,c,u;if(fi[e]&&(a=new fi[e]).init(s,a.rawVars?t[e]:RC(t[e],r,s,o,n),n,r,o)!==!1&&(n._pt=l=new ni(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==zo))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},ts,Ph,Hd=function i(e,t,n){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,f=r.yoyoEase,h=r.keyframes,d=r.autoRevert,v=e._dur,g=e._startAt,p=e._targets,m=e.parent,M=m&&m.data==="nested"?m.vars.targets:p,S=e._overwrite==="auto"&&!Ld,x=e.timeline,w,L,R,z,T,P,J,W,re,k,K,$,X;if(x&&(!h||!s)&&(s="none"),e._ease=$s(s,da.ease),e._yEase=f?Iv($s(f===!0?s:f,da.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!x&&!!r.runBackwards,!x||h&&!r.stagger){if(W=p[0]?Ks(p[0]).harness:0,$=W&&r[W.prop],w=iu(r,Od),g&&(g._zTime<0&&g.progress(1),t<0&&u&&a&&!d?g.render(-1,!0):g.revert(u&&v?Nc:nC),g._lazy=0),o){if(ms(e._startAt=sn.set(p,Mi({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&ei(l),startAt:null,delay:0,onUpdate:c&&function(){return xi(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Mn||!a&&!d)&&e._startAt.revert(Nc),a&&v&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&v&&!g){if(t&&(a=!1),R=Mi({overwrite:!1,data:"isFromStart",lazy:a&&!g&&ei(l),immediateRender:a,stagger:0,parent:m},w),$&&(R[W.prop]=$),ms(e._startAt=sn.set(p,R)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Mn?e._startAt.revert(Nc):e._startAt.render(-1,!0)),e._zTime=t,!a)i(e._startAt,Ut,Ut);else if(!t)return}for(e._pt=e._ptCache=0,l=v&&ei(l)||l&&!v,L=0;L<p.length;L++){if(T=p[L],J=T._gsap||Bd(p)[L]._gsap,e._ptLookup[L]=k={},Eh[J.id]&&us.length&&nu(),K=M===p?L:M.indexOf(T),W&&(re=new W).init(T,$||w,e,K,M)!==!1&&(e._pt=z=new ni(e._pt,T,re.name,0,1,re.render,re,0,re.priority),re._props.forEach(function(Z){k[Z]=z}),re.priority&&(P=1)),!W||$)for(R in w)fi[R]&&(re=Ov(R,w,e,K,T,M))?re.priority&&(P=1):k[R]=z=zd.call(e,T,R,"get",w[R],K,M,0,r.stringFilter);e._op&&e._op[L]&&e.kill(T,e._op[L]),S&&e._pt&&(ts=e,qt.killTweensOf(T,k,e.globalTime(t)),X=!e.parent,ts=0),e._pt&&l&&(Eh[J.id]=1)}P&&Gv(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!X,h&&t<=0&&x.render(Li,!0,!0)},CC=function(e,t,n,r,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,h,d;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,d=e._targets.length;d--;){if(u=h[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Ph=1,e.vars[t]="+=0",Hd(e,a),Ph=0,l?El(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)f=c[d],u=f._pt||f,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=n-u.s,f.e&&(f.e=en(n)+Pn(f.e)),f.b&&(f.b=u.s+Pn(f.b))},PC=function(e,t){var n=e[0]?Ks(e[0]).harness:0,r=n&&n.aliases,s,o,a,l;if(!r)return t;s=pa({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},LC=function(e,t,n,r){var s=t.ease||r||"power1.inOut",o,a;if(Dn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},al=function(e,t,n,r,s){return Zt(e)?e.call(t,n,r,s):vn(e)&&~e.indexOf("random(")?Al(e):e},Fv=Fd+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Bv={};ti(Fv+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return Bv[i]=1});var sn=function(i){nv(e,i);function e(n,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=i.call(this,o?r:sl(r))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,v=l.keyframes,g=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,M=r.parent||qt,S=(Dn(n)||rv(n)?Or(n[0]):"length"in r)?[n]:Ii(n),x,w,L,R,z,T,P,J;if(a._targets=S.length?Bd(S):El("GSAP target "+n+" not found. https://gsap.com",!yi.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,v||h||pc(c)||pc(u)){if(r=a.vars,x=a.timeline=new Yn({data:"nested",defaults:g||{},targets:M&&M.data==="nested"?M.vars.targets:S}),x.kill(),x.parent=x._dp=yr(a),x._start=0,h||pc(c)||pc(u)){if(R=S.length,P=h&&Mv(h),sr(h))for(z in h)~Fv.indexOf(z)&&(J||(J={}),J[z]=h[z]);for(w=0;w<R;w++)L=iu(r,Bv),L.stagger=0,m&&(L.yoyoEase=m),J&&pa(L,J),T=S[w],L.duration=+al(c,yr(a),w,T,S),L.delay=(+al(u,yr(a),w,T,S)||0)-a._delay,!h&&R===1&&L.delay&&(a._delay=u=L.delay,a._start+=u,L.delay=0),x.to(T,L,P?P(w,T,S):0),x._ease=yt.none;x.duration()?c=u=0:a.timeline=0}else if(v){sl(Mi(x.vars.defaults,{ease:"none"})),x._ease=$s(v.ease||r.ease||"none");var W=0,re,k,K;if(Dn(v))v.forEach(function($){return x.to(S,$,">")}),x.duration();else{L={};for(z in v)z==="ease"||z==="easeEach"||LC(z,v[z],L,v.easeEach);for(z in L)for(re=L[z].sort(function($,X){return $.t-X.t}),W=0,w=0;w<re.length;w++)k=re[w],K={ease:k.e,duration:(k.t-(w?re[w-1].t:0))/100*c},K[z]=k.v,x.to(S,K,W),W+=K.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||a.duration(c=x.duration())}else a.timeline=0;return d===!0&&!Ld&&(ts=yr(a),qt.killTweensOf(S),ts=0),Zi(M,yr(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!c&&!v&&a._start===on(M._time)&&ei(f)&&lC(yr(a))&&M.data!=="nested")&&(a._tTime=-Ut,a.render(Math.max(0,-u)||0)),p&&vv(yr(a),p),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,f=r>l-Ut&&!u?l:r<Ut?0:r,h,d,v,g,p,m,M,S,x;if(!c)uC(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=f,S=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+r,s,o);if(h=on(f%g),f===l?(v=this._repeat,h=c):(p=on(f/g),v=~~p,v&&v===p?(h=c,v--):h>c&&(h=c)),m=this._yoyo&&v&1,m&&(x=this._yEase,h=c-h),p=ma(this._tTime,g),h===a&&!o&&this._initted&&v===p)return this._tTime=f,this;v!==p&&(S&&this._yEase&&Dv(S,m),this.vars.repeatRefresh&&!m&&!this._lock&&h!==g&&this._initted&&(this._lock=o=1,this.render(on(g*v),!0).invalidate()._lock=0))}if(!this._initted){if(xv(this,u?r:h,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&v!==p))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(x||this._ease)(h/c),this._from&&(this.ratio=M=1-M),!a&&f&&!s&&!p&&(xi(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(M,d.d),d=d._next;S&&S.render(r<0?r:S._dur*S._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&bh(this,r,s,o),xi(this,"onUpdate")),this._repeat&&v!==p&&this.vars.onRepeat&&!s&&this.parent&&xi(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&bh(this,r,!0,!0),(r||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&ms(this,1),!s&&!(u&&!a)&&(f||a||m)&&(xi(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){wl||mi.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Hd(this,c),u=this._ease(c/this._dur),CC(this,r,s,o,a,u,c,l)?this.resetTo(r,s,o,a,1):(Iu(this,0),this.parent||gv(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?za(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Mn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,ts&&ts.vars.overwrite!==!0)._first||za(this),this.parent&&o!==this.timeline.totalDuration()&&ga(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Ii(r):a,c=this._ptLookup,u=this._pt,f,h,d,v,g,p,m;if((!s||s==="all")&&oC(a,l))return s==="all"&&(this._pt=0),za(this);for(f=this._op=this._op||[],s!=="all"&&(vn(s)&&(g={},ti(s,function(M){return g[M]=1}),s=g),s=PC(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){h=c[m],s==="all"?(f[m]=s,v=h,d={}):(d=f[m]=f[m]||{},v=s);for(g in v)p=h&&h[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&Pu(this,p,"_pt"),delete h[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&u&&za(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return ol(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return ol(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return qt.killTweensOf(r,s,o)},e}(Rl);Mi(sn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ti("staggerTo,staggerFrom,staggerFromTo",function(i){sn[i]=function(){var e=new Yn,t=wh.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var Gd=function(e,t,n){return e[t]=n},kv=function(e,t,n){return e[t](n)},IC=function(e,t,n,r){return e[t](r.fp,n)},DC=function(e,t,n){return e.setAttribute(t,n)},Vd=function(e,t){return Zt(e[t])?kv:Id(e[t])&&e.setAttribute?DC:Gd},zv=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},UC=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Hv=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},Wd=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},NC=function(e,t,n,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,n),s=o},OC=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Pu(this,t,"_pt"):t.dep||(n=1),t=r;return!n},FC=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},Gv=function(e){for(var t=e._pt,n,r,s,o;t;){for(n=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=n}e._pt=s},ni=function(){function i(t,n,r,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=r,this.r=a||zv,this.d=l||this,this.set=c||Gd,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=FC,this.m=n,this.mt=s,this.tween=r},i}();ti(Fd+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return Od[i]=1});Si.TweenMax=Si.TweenLite=sn;Si.TimelineLite=Si.TimelineMax=Yn;qt=new Yn({sortChildren:!1,defaults:da,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});yi.stringFilter=Lv;var Zs=[],Fc={},BC=[],Cg=0,kC=0,Nf=function(e){return(Fc[e]||BC).map(function(t){return t()})},Lh=function(){var e=Date.now(),t=[];e-Cg>2&&(Nf("matchMediaInit"),Zs.forEach(function(n){var r=n.queries,s=n.conditions,o,a,l,c;for(a in r)o=Xi.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Nf("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),Cg=e,Nf("matchMedia"))},Vv=function(){function i(t,n){this.selector=n&&Rh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=kC++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,s){Zt(n)&&(s=r,r=n,n=Zt);var o=this,a=function(){var c=Wt,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=Rh(s)),Wt=o,f=r.apply(o,arguments),Zt(f)&&o._r.push(f),Wt=c,o.selector=u,o.isReverted=!1,f};return o.last=a,n===Zt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var r=Wt;Wt=null,n(this),Wt=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof sn&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Yn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof sn)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=Zs.length;o--;)Zs[o].id===this.id&&Zs.splice(o,1)},e.revert=function(n){this.kill(n||{})},i}(),zC=function(){function i(t){this.contexts=[],this.scope=t,Wt&&Wt.data.push(this)}var e=i.prototype;return e.add=function(n,r,s){sr(n)||(n={matches:n});var o=new Vv(0,s||this.scope),a=o.conditions={},l,c,u;Wt&&!o.selector&&(o.selector=Wt.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=n;for(c in n)c==="all"?u=1:(l=Xi.matchMedia(n[c]),l&&(Zs.indexOf(o)<0&&Zs.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Lh):l.addEventListener("change",Lh)));return u&&r(o,function(f){return o.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i}(),su={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return Rv(r)})},timeline:function(e){return new Yn(e)},getTweensOf:function(e,t){return qt.getTweensOf(e,t)},getProperty:function(e,t,n,r){vn(e)&&(e=Ii(e)[0]);var s=Ks(e||{}).get,o=n?mv:pv;return n==="native"&&(n=""),e&&(t?o((fi[t]&&fi[t].get||s)(e,t,n,r)):function(a,l,c){return o((fi[a]&&fi[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=Ii(e),e.length>1){var r=e.map(function(u){return ri.quickSetter(u,t,n)}),s=r.length;return function(u){for(var f=s;f--;)r[f](u)}}e=e[0]||{};var o=fi[t],a=Ks(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var f=new o;zo._pt=0,f.init(e,n?u+n:u,zo,0,[e]),f.render(1,f),zo._pt&&Wd(1,zo)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var r,s=ri.to(e,Mi((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return qt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=$s(e.ease,da.ease)),Eg(da,e||{})},config:function(e){return Eg(yi,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!fi[a]&&!Si[a]&&El(t+" effect requires "+a+" plugin.")}),Lf[t]=function(a,l,c){return n(Ii(a),Mi(l||{},s),c)},o&&(Yn.prototype[t]=function(a,l,c){return this.add(Lf[t](a,sr(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){yt[e]=$s(t)},parseEase:function(e,t){return arguments.length?$s(e,t):yt},getById:function(e){return qt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Yn(e),r,s;for(n.smoothChildTiming=ei(e.smoothChildTiming),qt.remove(n),n._dp=0,n._time=n._tTime=qt._time,r=qt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof sn&&r.vars.onComplete===r._targets[0]))&&Zi(n,r,r._start-r._delay),r=s;return Zi(qt,n,0),n},context:function(e,t){return e?new Vv(e,t):Wt},matchMedia:function(e){return new zC(e)},matchMediaRefresh:function(){return Zs.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||Lh()},addEventListener:function(e,t){var n=Fc[e]||(Fc[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Fc[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:vC,wrapYoyo:xC,distribute:Mv,random:Ev,snap:Tv,normalize:_C,getUnit:Pn,clamp:dC,splitColor:Cv,toArray:Ii,selector:Rh,mapRange:Av,pipe:mC,unitize:gC,interpolate:yC,shuffle:Sv},install:cv,effects:Lf,ticker:mi,updateRoot:Yn.updateRoot,plugins:fi,globalTimeline:qt,core:{PropTween:ni,globals:uv,Tween:sn,Timeline:Yn,Animation:Rl,getCache:Ks,_removeLinkedListItem:Pu,reverting:function(){return Mn},context:function(e){return e&&Wt&&(Wt.data.push(e),e._ctx=Wt),Wt},suppressOverwrites:function(e){return Ld=e}}};ti("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return su[i]=sn[i]});mi.add(Yn.updateRoot);zo=su.to({},{duration:0});var HC=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},GC=function(e,t){var n=e._targets,r,s,o;for(r in t)for(s=n.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=HC(o,r)),o&&o.modifier&&o.modifier(t[r],e,n[s],r))},Of=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(vn(s)&&(l={},ti(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}GC(a,s)}}}},ri=su.registerPlugin({name:"attr",init:function(e,t,n,r,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Mn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Of("roundProps",Ch),Of("modifiers"),Of("snap",Tv))||su;sn.version=Yn.version=ri.version="3.13.0";lv=1;Dd()&&_a();yt.Power0;yt.Power1;yt.Power2;yt.Power3;yt.Power4;yt.Linear;yt.Quad;yt.Cubic;yt.Quart;yt.Quint;yt.Strong;yt.Elastic;yt.Back;yt.SteppedEase;yt.Bounce;yt.Sine;yt.Expo;yt.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Pg,ns,$o,Xd,Hs,Lg,Yd,VC=function(){return typeof window<"u"},Fr={},Ns=180/Math.PI,Zo=Math.PI/180,Lo=Math.atan2,Ig=1e8,qd=/([A-Z])/g,WC=/(left|right|width|margin|padding|x)/i,XC=/[\s,\(]\S/,Qi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ih=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},YC=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},qC=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},KC=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Wv=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Xv=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},jC=function(e,t,n){return e.style[t]=n},$C=function(e,t,n){return e.style.setProperty(t,n)},ZC=function(e,t,n){return e._gsap[t]=n},JC=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},QC=function(e,t,n,r,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},eP=function(e,t,n,r,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Kt="transform",ii=Kt+"Origin",tP=function i(e,t){var n=this,r=this.target,s=r.style,o=r._gsap;if(e in Fr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Qi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Mr(r,a)}):this.tfm[e]=o.x?o[e]:Mr(r,e),e===ii&&(this.tfm.zOrigin=o.zOrigin);else return Qi.transform.split(",").forEach(function(a){return i.call(n,a,t)});if(this.props.indexOf(Kt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(ii,t,"")),e=Kt}(s||t)&&this.props.push(e,t,s[e])},Yv=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},nP=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(qd,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Yd(),(!s||!s.isStart)&&!n[Kt]&&(Yv(n),r.zOrigin&&n[ii]&&(n[ii]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},qv=function(e,t){var n={target:e,props:[],revert:nP,save:tP};return e._gsap||ri.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return n.save(r)}),n},Kv,Dh=function(e,t){var n=ns.createElementNS?ns.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ns.createElement(e);return n&&n.style?n:ns.createElement(e)},Di=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(qd,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,va(t)||t,1)||""},Dg="O,Moz,ms,Ms,Webkit".split(","),va=function(e,t,n){var r=t||Hs,s=r.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Dg[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Dg[o]:"")+e},Uh=function(){VC()&&window.document&&(Pg=window,ns=Pg.document,$o=ns.documentElement,Hs=Dh("div")||{style:{}},Dh("div"),Kt=va(Kt),ii=Kt+"Origin",Hs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Kv=!!va("perspective"),Yd=ri.core.reverting,Xd=1)},Ug=function(e){var t=e.ownerSVGElement,n=Dh("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",n.appendChild(r),$o.appendChild(n);try{s=r.getBBox()}catch{}return n.removeChild(r),$o.removeChild(n),s},Ng=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},jv=function(e){var t,n;try{t=e.getBBox()}catch{t=Ug(e),n=1}return t&&(t.width||t.height)||n||(t=Ug(e)),t&&!t.width&&!t.x&&!t.y?{x:+Ng(e,["x","cx","x1"])||0,y:+Ng(e,["y","cy","y1"])||0,width:0,height:0}:t},$v=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&jv(e))},ro=function(e,t){if(t){var n=e.style,r;t in Fr&&t!==ii&&(t=Kt),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(qd,"-$1").toLowerCase())):n.removeAttribute(t)}},is=function(e,t,n,r,s,o){var a=new ni(e._pt,t,n,0,1,o?Xv:Wv);return e._pt=a,a.b=r,a.e=s,e._props.push(n),a},Og={deg:1,rad:1,turn:1},iP={grid:1,flex:1},gs=function i(e,t,n,r){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Hs.style,l=WC.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=r==="px",d=r==="%",v,g,p,m;if(r===o||!s||Og[r]||Og[o])return s;if(o!=="px"&&!h&&(s=i(e,t,n,"px")),m=e.getCTM&&$v(e),(d||o==="%")&&(Fr[t]||~t.indexOf("adius")))return v=m?e.getBBox()[l?"width":"height"]:e[u],en(d?s/v*f:s/100*v);if(a[l?"width":"height"]=f+(h?o:r),g=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===ns||!g.appendChild)&&(g=ns.body),p=g._gsap,p&&d&&p.width&&l&&p.time===mi.time&&!p.uncache)return en(s/p.width*f);if(d&&(t==="height"||t==="width")){var M=e.style[t];e.style[t]=f+r,v=e[u],M?e.style[t]=M:ro(e,t)}else(d||o==="%")&&!iP[Di(g,"display")]&&(a.position=Di(e,"position")),g===e&&(a.position="static"),g.appendChild(Hs),v=Hs[u],g.removeChild(Hs),a.position="absolute";return l&&d&&(p=Ks(g),p.time=mi.time,p.width=g[u]),en(h?v*s/f:v&&s?f/v*s:0)},Mr=function(e,t,n,r){var s;return Xd||Uh(),t in Qi&&t!=="transform"&&(t=Qi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Fr[t]&&t!=="transform"?(s=Pl(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:au(Di(e,ii))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=ou[t]&&ou[t](e,t,n)||Di(e,t)||hv(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?gs(e,t,s,n)+n:s},rP=function(e,t,n,r){if(!n||n==="none"){var s=va(t,e,1),o=s&&Di(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Di(e,"borderTopColor"))}var a=new ni(this._pt,e.style,t,0,1,Hv),l=0,c=0,u,f,h,d,v,g,p,m,M,S,x,w;if(a.b=n,a.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=Di(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(g=e.style[t],e.style[t]=r,r=Di(e,t)||r,g?e.style[t]=g:ro(e,t)),u=[n,r],Lv(u),n=u[0],r=u[1],h=n.match(ko)||[],w=r.match(ko)||[],w.length){for(;f=ko.exec(r);)p=f[0],M=r.substring(l,f.index),v?v=(v+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(v=1),p!==(g=h[c++]||"")&&(d=parseFloat(g)||0,x=g.substr((d+"").length),p.charAt(1)==="="&&(p=jo(d,p)+x),m=parseFloat(p),S=p.substr((m+"").length),l=ko.lastIndex-S.length,S||(S=S||yi.units[t]||x,l===r.length&&(r+=S,a.e+=S)),x!==S&&(d=gs(e,t,g,S)||0),a._pt={_next:a._pt,p:M||c===1?M:",",s:d,c:m-d,m:v&&v<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?Xv:Wv;return ov.test(r)&&(a.e=0),this._pt=a,a},Fg={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},sP=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=Fg[n]||n,t[1]=Fg[r]||r,t.join(" ")},oP=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Fr[a]&&(l=1,a=a==="transformOrigin"?ii:Kt),ro(n,a);l&&(ro(n,Kt),o&&(o.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Pl(n,1),o.uncache=1,Yv(r)))}},ou={clearProps:function(e,t,n,r,s){if(s.data!=="isFromStart"){var o=e._pt=new ni(e._pt,t,n,0,0,oP);return o.u=r,o.pr=-10,o.tween=s,e._props.push(n),1}}},Cl=[1,0,0,1,0,0],Zv={},Jv=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Bg=function(e){var t=Di(e,Kt);return Jv(t)?Cl:t.substr(7).match(sv).map(en)},Kd=function(e,t){var n=e._gsap||Ks(e),r=e.style,s=Bg(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Cl:s):(s===Cl&&!e.offsetParent&&e!==$o&&!n.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,$o.appendChild(e)),s=Bg(e),l?r.display=l:ro(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):$o.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Nh=function(e,t,n,r,s,o){var a=e._gsap,l=s||Kd(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,d=l[0],v=l[1],g=l[2],p=l[3],m=l[4],M=l[5],S=t.split(" "),x=parseFloat(S[0])||0,w=parseFloat(S[1])||0,L,R,z,T;n?l!==Cl&&(R=d*p-v*g)&&(z=x*(p/R)+w*(-g/R)+(g*M-p*m)/R,T=x*(-v/R)+w*(d/R)-(d*M-v*m)/R,x=z,w=T):(L=jv(e),x=L.x+(~S[0].indexOf("%")?x/100*L.width:x),w=L.y+(~(S[1]||S[0]).indexOf("%")?w/100*L.height:w)),r||r!==!1&&a.smooth?(m=x-c,M=w-u,a.xOffset=f+(m*d+M*g)-m,a.yOffset=h+(m*v+M*p)-M):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=w,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!n,e.style[ii]="0px 0px",o&&(is(o,a,"xOrigin",c,x),is(o,a,"yOrigin",u,w),is(o,a,"xOffset",f,a.xOffset),is(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",x+" "+w)},Pl=function(e,t){var n=e._gsap||new Nv(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Di(e,ii)||"0",u,f,h,d,v,g,p,m,M,S,x,w,L,R,z,T,P,J,W,re,k,K,$,X,Z,se,D,G,q,Te,ve,Ee;return u=f=h=g=p=m=M=S=x=0,d=v=1,n.svg=!!(e.getCTM&&$v(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Kt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Kt]!=="none"?l[Kt]:"")),r.scale=r.rotate=r.translate="none"),R=Kd(e,n.svg),n.svg&&(n.uncache?(Z=e.getBBox(),c=n.xOrigin-Z.x+"px "+(n.yOrigin-Z.y)+"px",X=""):X=!t&&e.getAttribute("data-svg-origin"),Nh(e,X||c,!!X||n.originIsAbsolute,n.smooth!==!1,R)),w=n.xOrigin||0,L=n.yOrigin||0,R!==Cl&&(J=R[0],W=R[1],re=R[2],k=R[3],u=K=R[4],f=$=R[5],R.length===6?(d=Math.sqrt(J*J+W*W),v=Math.sqrt(k*k+re*re),g=J||W?Lo(W,J)*Ns:0,M=re||k?Lo(re,k)*Ns+g:0,M&&(v*=Math.abs(Math.cos(M*Zo))),n.svg&&(u-=w-(w*J+L*re),f-=L-(w*W+L*k))):(Ee=R[6],Te=R[7],D=R[8],G=R[9],q=R[10],ve=R[11],u=R[12],f=R[13],h=R[14],z=Lo(Ee,q),p=z*Ns,z&&(T=Math.cos(-z),P=Math.sin(-z),X=K*T+D*P,Z=$*T+G*P,se=Ee*T+q*P,D=K*-P+D*T,G=$*-P+G*T,q=Ee*-P+q*T,ve=Te*-P+ve*T,K=X,$=Z,Ee=se),z=Lo(-re,q),m=z*Ns,z&&(T=Math.cos(-z),P=Math.sin(-z),X=J*T-D*P,Z=W*T-G*P,se=re*T-q*P,ve=k*P+ve*T,J=X,W=Z,re=se),z=Lo(W,J),g=z*Ns,z&&(T=Math.cos(z),P=Math.sin(z),X=J*T+W*P,Z=K*T+$*P,W=W*T-J*P,$=$*T-K*P,J=X,K=Z),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,m=180-m),d=en(Math.sqrt(J*J+W*W+re*re)),v=en(Math.sqrt($*$+Ee*Ee)),z=Lo(K,$),M=Math.abs(z)>2e-4?z*Ns:0,x=ve?1/(ve<0?-ve:ve):0),n.svg&&(X=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Jv(Di(e,Kt)),X&&e.setAttribute("transform",X))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(d*=-1,M+=g<=0?180:-180,g+=g<=0?180:-180):(v*=-1,M+=M<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=h+o,n.scaleX=en(d),n.scaleY=en(v),n.rotation=en(g)+a,n.rotationX=en(p)+a,n.rotationY=en(m)+a,n.skewX=M+a,n.skewY=S+a,n.transformPerspective=x+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(r[ii]=au(c)),n.xOffset=n.yOffset=0,n.force3D=yi.force3D,n.renderTransform=n.svg?lP:Kv?Qv:aP,n.uncache=0,n},au=function(e){return(e=e.split(" "))[0]+" "+e[1]},Ff=function(e,t,n){var r=Pn(t);return en(parseFloat(t)+parseFloat(gs(e,"x",n+"px",r)))+r},aP=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Qv(e,t)},Ps="0deg",Na="0px",Ls=") ",Qv=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,d=n.skewY,v=n.scaleX,g=n.scaleY,p=n.transformPerspective,m=n.force3D,M=n.target,S=n.zOrigin,x="",w=m==="auto"&&e&&e!==1||m===!0;if(S&&(f!==Ps||u!==Ps)){var L=parseFloat(u)*Zo,R=Math.sin(L),z=Math.cos(L),T;L=parseFloat(f)*Zo,T=Math.cos(L),o=Ff(M,o,R*T*-S),a=Ff(M,a,-Math.sin(L)*-S),l=Ff(M,l,z*T*-S+S)}p!==Na&&(x+="perspective("+p+Ls),(r||s)&&(x+="translate("+r+"%, "+s+"%) "),(w||o!==Na||a!==Na||l!==Na)&&(x+=l!==Na||w?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Ls),c!==Ps&&(x+="rotate("+c+Ls),u!==Ps&&(x+="rotateY("+u+Ls),f!==Ps&&(x+="rotateX("+f+Ls),(h!==Ps||d!==Ps)&&(x+="skew("+h+", "+d+Ls),(v!==1||g!==1)&&(x+="scale("+v+", "+g+Ls),M.style[Kt]=x||"translate(0, 0)"},lP=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,d=n.target,v=n.xOrigin,g=n.yOrigin,p=n.xOffset,m=n.yOffset,M=n.forceCSS,S=parseFloat(o),x=parseFloat(a),w,L,R,z,T;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Zo,c*=Zo,w=Math.cos(l)*f,L=Math.sin(l)*f,R=Math.sin(l-c)*-h,z=Math.cos(l-c)*h,c&&(u*=Zo,T=Math.tan(c-u),T=Math.sqrt(1+T*T),R*=T,z*=T,u&&(T=Math.tan(u),T=Math.sqrt(1+T*T),w*=T,L*=T)),w=en(w),L=en(L),R=en(R),z=en(z)):(w=f,z=h,L=R=0),(S&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(S=gs(d,"x",o,"px"),x=gs(d,"y",a,"px")),(v||g||p||m)&&(S=en(S+v-(v*w+g*R)+p),x=en(x+g-(v*L+g*z)+m)),(r||s)&&(T=d.getBBox(),S=en(S+r/100*T.width),x=en(x+s/100*T.height)),T="matrix("+w+","+L+","+R+","+z+","+S+","+x+")",d.setAttribute("transform",T),M&&(d.style[Kt]=T)},cP=function(e,t,n,r,s){var o=360,a=vn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Ns:1),c=l-r,u=r+c+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*Ig)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*Ig)%o-~~(c/o)*o)),e._pt=h=new ni(e._pt,t,n,r,c,YC),h.e=u,h.u="deg",e._props.push(n),h},kg=function(e,t){for(var n in t)e[n]=t[n];return e},uP=function(e,t,n){var r=kg({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,f,h,d,v;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Kt]=t,a=Pl(n,1),ro(n,Kt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Kt],o[Kt]=t,a=Pl(n,1),o[Kt]=c);for(l in Fr)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=Pn(c),v=Pn(u),f=d!==v?gs(n,l,c,v):parseFloat(c),h=parseFloat(u),e._pt=new ni(e._pt,a,l,f,h-f,Ih),e._pt.u=v||0,e._props.push(l));kg(a,r)};ti("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",s="Left",o=(e<3?[t,n,r,s]:[t+s,t+n,r+n,r+s]).map(function(a){return e<2?i+a:"border"+a+i});ou[e>1?"border"+i:i]=function(a,l,c,u,f){var h,d;if(arguments.length<4)return h=o.map(function(v){return Mr(a,v,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},o.forEach(function(v,g){return d[v]=h[g]=h[g]||h[(g-1)/2|0]}),a.init(l,d,f)}});var ex={name:"css",register:Uh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,f,h,d,v,g,p,m,M,S,x,w,L,R,z;Xd||Uh(),this.styles=this.styles||qv(e),z=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(fi[g]&&Ov(g,t,n,r,e,s)))){if(d=typeof u,v=ou[g],d==="function"&&(u=u.call(n,r,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Al(u)),v)v(this,e,g,u,n)&&(R=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",fs.lastIndex=0,fs.test(c)||(p=Pn(c),m=Pn(u)),m?p!==m&&(c=gs(e,g,c,m)+m):p&&(u+=p),this.add(a,"setProperty",c,u,r,s,0,0,g),o.push(g),z.push(g,0,a[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,r,e,s):l[g],vn(c)&&~c.indexOf("random(")&&(c=Al(c)),Pn(c+"")||c==="auto"||(c+=yi.units[g]||Pn(Mr(e,g))||""),(c+"").charAt(1)==="="&&(c=Mr(e,g))):c=Mr(e,g),h=parseFloat(c),M=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),f=parseFloat(u),g in Qi&&(g==="autoAlpha"&&(h===1&&Mr(e,"visibility")==="hidden"&&f&&(h=0),z.push("visibility",0,a.visibility),is(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),g!=="scale"&&g!=="transform"&&(g=Qi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),S=g in Fr,S){if(this.styles.save(g),d==="string"&&u.substring(0,6)==="var(--"&&(u=Di(e,u.substring(4,u.indexOf(")"))),f=parseFloat(u)),x||(w=e._gsap,w.renderTransform&&!t.parseTransform||Pl(e,t.parseTransform),L=t.smoothOrigin!==!1&&w.smooth,x=this._pt=new ni(this._pt,a,Kt,0,1,w.renderTransform,w,0,-1),x.dep=1),g==="scale")this._pt=new ni(this._pt,w,"scaleY",w.scaleY,(M?jo(w.scaleY,M+f):f)-w.scaleY||0,Ih),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){z.push(ii,0,a[ii]),u=sP(u),w.svg?Nh(e,u,0,L,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==w.zOrigin&&is(this,w,"zOrigin",w.zOrigin,m),is(this,a,g,au(c),au(u)));continue}else if(g==="svgOrigin"){Nh(e,u,1,L,0,this);continue}else if(g in Zv){cP(this,w,g,h,M?jo(h,M+u):u);continue}else if(g==="smoothOrigin"){is(this,w,"smooth",w.smooth,u);continue}else if(g==="force3D"){w[g]=u;continue}else if(g==="transform"){uP(this,u,e);continue}}else g in a||(g=va(g)||g);if(S||(f||f===0)&&(h||h===0)&&!XC.test(u)&&g in a)p=(c+"").substr((h+"").length),f||(f=0),m=Pn(u)||(g in yi.units?yi.units[g]:p),p!==m&&(h=gs(e,g,c,m)),this._pt=new ni(this._pt,S?w:a,g,h,(M?jo(h,M+f):f)-h,!S&&(m==="px"||g==="zIndex")&&t.autoRound!==!1?KC:Ih),this._pt.u=m||0,p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=qC);else if(g in a)rP.call(this,e,g,c,M?M+u:u);else if(g in e)this.add(e,g,c||e[g],M?M+u:u,r,s);else if(g!=="parseTransform"){Nd(g,u);continue}S||(g in a?z.push(g,0,a[g]):typeof e[g]=="function"?z.push(g,2,e[g]()):z.push(g,1,c||e[g])),o.push(g)}}R&&Gv(this)},render:function(e,t){if(t.tween._time||!Yd())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Mr,aliases:Qi,getSetter:function(e,t,n){var r=Qi[t];return r&&r.indexOf(",")<0&&(t=r),t in Fr&&t!==ii&&(e._gsap.x||Mr(e,"x"))?n&&Lg===n?t==="scale"?JC:ZC:(Lg=n||{})&&(t==="scale"?QC:eP):e.style&&!Id(e.style[t])?jC:~t.indexOf("-")?$C:Vd(e,t)},core:{_removeProperty:ro,_getMatrix:Kd}};ri.utils.checkPrefix=va;ri.core.getStyleSaver=qv;(function(i,e,t,n){var r=ti(i+","+e+","+t,function(s){Fr[s]=1});ti(e,function(s){yi.units[s]="deg",Zv[s]=1}),Qi[r[13]]=i+","+e,ti(n,function(s){var o=s.split(":");Qi[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ti("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){yi.units[i]="px"});ri.registerPlugin(ex);var qr=ri.registerPlugin(ex)||ri;qr.core.Tween;function fP(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}function hP(i,e,t){return e&&fP(i.prototype,e),i}/*!
 * Observer 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var yn,Bc,gi,rs,ss,Jo,tx,Os,ll,nx,Rr,Bi,ix,rx=function(){return yn||typeof window<"u"&&(yn=window.gsap)&&yn.registerPlugin&&yn},sx=1,Ho=[],dt=[],ir=[],cl=Date.now,Oh=function(e,t){return t},dP=function(){var e=ll.core,t=e.bridge||{},n=e._scrollers,r=e._proxies;n.push.apply(n,dt),r.push.apply(r,ir),dt=n,ir=r,Oh=function(o,a){return t[o](a)}},hs=function(e,t){return~ir.indexOf(e)&&ir[ir.indexOf(e)+1][t]},ul=function(e){return!!~nx.indexOf(e)},Fn=function(e,t,n,r,s){return e.addEventListener(t,n,{passive:r!==!1,capture:!!s})},Nn=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},mc="scrollLeft",gc="scrollTop",Fh=function(){return Rr&&Rr.isPressed||dt.cache++},lu=function(e,t){var n=function r(s){if(s||s===0){sx&&(gi.history.scrollRestoration="manual");var o=Rr&&Rr.isPressed;s=r.v=Math.round(s)||(Rr&&Rr.iOS?1:0),e(s),r.cacheID=dt.cache,o&&Oh("ss",s)}else(t||dt.cache!==r.cacheID||Oh("ref"))&&(r.cacheID=dt.cache,r.v=e());return r.v+r.offset};return n.offset=0,e&&n},qn={s:mc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:lu(function(i){return arguments.length?gi.scrollTo(i,ln.sc()):gi.pageXOffset||rs[mc]||ss[mc]||Jo[mc]||0})},ln={s:gc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:qn,sc:lu(function(i){return arguments.length?gi.scrollTo(qn.sc(),i):gi.pageYOffset||rs[gc]||ss[gc]||Jo[gc]||0})},Jn=function(e,t){return(t&&t._ctx&&t._ctx.selector||yn.utils.toArray)(e)[0]||(typeof e=="string"&&yn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},pP=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},_s=function(e,t){var n=t.s,r=t.sc;ul(e)&&(e=rs.scrollingElement||ss);var s=dt.indexOf(e),o=r===ln.sc?1:2;!~s&&(s=dt.push(e)-1),dt[s+o]||Fn(e,"scroll",Fh);var a=dt[s+o],l=a||(dt[s+o]=lu(hs(e,n),!0)||(ul(e)?r:lu(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=yn.getProperty(e,"scrollBehavior")==="smooth"),l},Bh=function(e,t,n){var r=e,s=e,o=cl(),a=o,l=t||50,c=Math.max(500,l*3),u=function(v,g){var p=cl();g||p-o>l?(s=r,r=v,a=o,o=p):n?r+=v:r=s+(v-s)/(p-a)*(o-a)},f=function(){s=r=n?0:r,a=o=0},h=function(v){var g=a,p=s,m=cl();return(v||v===0)&&v!==r&&u(v),o===a||m-a>c?0:(r+(n?p:-p))/((n?m:o)-g)*1e3};return{update:u,reset:f,getVelocity:h}},Oa=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},zg=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},ox=function(){ll=yn.core.globals().ScrollTrigger,ll&&ll.core&&dP()},ax=function(e){return yn=e||rx(),!Bc&&yn&&typeof document<"u"&&document.body&&(gi=window,rs=document,ss=rs.documentElement,Jo=rs.body,nx=[gi,rs,ss,Jo],yn.utils.clamp,ix=yn.core.context||function(){},Os="onpointerenter"in Jo?"pointer":"mouse",tx=tn.isTouch=gi.matchMedia&&gi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in gi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Bi=tn.eventTypes=("ontouchstart"in ss?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ss?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return sx=0},500),ox(),Bc=1),Bc};qn.op=ln;dt.cache=0;var tn=function(){function i(t){this.init(t)}var e=i.prototype;return e.init=function(n){Bc||ax(yn)||console.warn("Please gsap.registerPlugin(Observer)"),ll||ox();var r=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,f=n.onStop,h=n.onStopDelay,d=n.ignore,v=n.wheelSpeed,g=n.event,p=n.onDragStart,m=n.onDragEnd,M=n.onDrag,S=n.onPress,x=n.onRelease,w=n.onRight,L=n.onLeft,R=n.onUp,z=n.onDown,T=n.onChangeX,P=n.onChangeY,J=n.onChange,W=n.onToggleX,re=n.onToggleY,k=n.onHover,K=n.onHoverEnd,$=n.onMove,X=n.ignoreCheck,Z=n.isNormalizer,se=n.onGestureStart,D=n.onGestureEnd,G=n.onWheel,q=n.onEnable,Te=n.onDisable,ve=n.onClick,Ee=n.scrollSpeed,Me=n.capture,Ie=n.allowClicks,Ue=n.lockAxis,Je=n.onLockAxis;this.target=a=Jn(a)||ss,this.vars=n,d&&(d=yn.utils.toArray(d)),r=r||1e-9,s=s||0,v=v||1,Ee=Ee||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(gi.getComputedStyle(Jo).lineHeight)||22);var Tt,$e,E,B,V,ne,Q,F=this,de=0,ue=0,ge=n.passive||!u&&n.passive!==!1,le=_s(a,qn),Re=_s(a,ln),C=le(),A=Re(),H=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Bi[0]==="pointerdown",ce=ul(a),oe=a.ownerDocument||rs,fe=[0,0,0],be=[0,0,0],xe=0,Ae=function(){return xe=cl()},Pe=function(qe,tt){return(F.event=qe)&&d&&pP(qe.target,d)||tt&&H&&qe.pointerType!=="touch"||X&&X(qe,tt)},nt=function(){F._vx.reset(),F._vy.reset(),$e.pause(),f&&f(F)},_e=function(){var qe=F.deltaX=zg(fe),tt=F.deltaY=zg(be),De=Math.abs(qe)>=r,it=Math.abs(tt)>=r;J&&(De||it)&&J(F,qe,tt,fe,be),De&&(w&&F.deltaX>0&&w(F),L&&F.deltaX<0&&L(F),T&&T(F),W&&F.deltaX<0!=de<0&&W(F),de=F.deltaX,fe[0]=fe[1]=fe[2]=0),it&&(z&&F.deltaY>0&&z(F),R&&F.deltaY<0&&R(F),P&&P(F),re&&F.deltaY<0!=ue<0&&re(F),ue=F.deltaY,be[0]=be[1]=be[2]=0),(B||E)&&($&&$(F),E&&(p&&E===1&&p(F),M&&M(F),E=0),B=!1),ne&&!(ne=!1)&&Je&&Je(F),V&&(G(F),V=!1),Tt=0},Qe=function(qe,tt,De){fe[De]+=qe,be[De]+=tt,F._vx.update(qe),F._vy.update(tt),c?Tt||(Tt=requestAnimationFrame(_e)):_e()},Ge=function(qe,tt){Ue&&!Q&&(F.axis=Q=Math.abs(qe)>Math.abs(tt)?"x":"y",ne=!0),Q!=="y"&&(fe[2]+=qe,F._vx.update(qe,!0)),Q!=="x"&&(be[2]+=tt,F._vy.update(tt,!0)),c?Tt||(Tt=requestAnimationFrame(_e)):_e()},Be=function(qe){if(!Pe(qe,1)){qe=Oa(qe,u);var tt=qe.clientX,De=qe.clientY,it=tt-F.x,je=De-F.y,et=F.isDragging;F.x=tt,F.y=De,(et||(it||je)&&(Math.abs(F.startX-tt)>=s||Math.abs(F.startY-De)>=s))&&(E=et?2:1,et||(F.isDragging=!0),Ge(it,je))}},Oe=F.onPress=function(ke){Pe(ke,1)||ke&&ke.button||(F.axis=Q=null,$e.pause(),F.isPressed=!0,ke=Oa(ke),de=ue=0,F.startX=F.x=ke.clientX,F.startY=F.y=ke.clientY,F._vx.reset(),F._vy.reset(),Fn(Z?a:oe,Bi[1],Be,ge,!0),F.deltaX=F.deltaY=0,S&&S(F))},O=F.onRelease=function(ke){if(!Pe(ke,1)){Nn(Z?a:oe,Bi[1],Be,!0);var qe=!isNaN(F.y-F.startY),tt=F.isDragging,De=tt&&(Math.abs(F.x-F.startX)>3||Math.abs(F.y-F.startY)>3),it=Oa(ke);!De&&qe&&(F._vx.reset(),F._vy.reset(),u&&Ie&&yn.delayedCall(.08,function(){if(cl()-xe>300&&!ke.defaultPrevented){if(ke.target.click)ke.target.click();else if(oe.createEvent){var je=oe.createEvent("MouseEvents");je.initMouseEvent("click",!0,!0,gi,1,it.screenX,it.screenY,it.clientX,it.clientY,!1,!1,!1,!1,0,null),ke.target.dispatchEvent(je)}}})),F.isDragging=F.isGesturing=F.isPressed=!1,f&&tt&&!Z&&$e.restart(!0),E&&_e(),m&&tt&&m(F),x&&x(F,De)}},ee=function(qe){return qe.touches&&qe.touches.length>1&&(F.isGesturing=!0)&&se(qe,F.isDragging)},Se=function(){return(F.isGesturing=!1)||D(F)},Le=function(qe){if(!Pe(qe)){var tt=le(),De=Re();Qe((tt-C)*Ee,(De-A)*Ee,1),C=tt,A=De,f&&$e.restart(!0)}},we=function(qe){if(!Pe(qe)){qe=Oa(qe,u),G&&(V=!0);var tt=(qe.deltaMode===1?l:qe.deltaMode===2?gi.innerHeight:1)*v;Qe(qe.deltaX*tt,qe.deltaY*tt,0),f&&!Z&&$e.restart(!0)}},ye=function(qe){if(!Pe(qe)){var tt=qe.clientX,De=qe.clientY,it=tt-F.x,je=De-F.y;F.x=tt,F.y=De,B=!0,f&&$e.restart(!0),(it||je)&&Ge(it,je)}},Ye=function(qe){F.event=qe,k(F)},Ze=function(qe){F.event=qe,K(F)},Xt=function(qe){return Pe(qe)||Oa(qe,u)&&ve(F)};$e=F._dc=yn.delayedCall(h||.25,nt).pause(),F.deltaX=F.deltaY=0,F._vx=Bh(0,50,!0),F._vy=Bh(0,50,!0),F.scrollX=le,F.scrollY=Re,F.isDragging=F.isGesturing=F.isPressed=!1,ix(this),F.enable=function(ke){return F.isEnabled||(Fn(ce?oe:a,"scroll",Fh),o.indexOf("scroll")>=0&&Fn(ce?oe:a,"scroll",Le,ge,Me),o.indexOf("wheel")>=0&&Fn(a,"wheel",we,ge,Me),(o.indexOf("touch")>=0&&tx||o.indexOf("pointer")>=0)&&(Fn(a,Bi[0],Oe,ge,Me),Fn(oe,Bi[2],O),Fn(oe,Bi[3],O),Ie&&Fn(a,"click",Ae,!0,!0),ve&&Fn(a,"click",Xt),se&&Fn(oe,"gesturestart",ee),D&&Fn(oe,"gestureend",Se),k&&Fn(a,Os+"enter",Ye),K&&Fn(a,Os+"leave",Ze),$&&Fn(a,Os+"move",ye)),F.isEnabled=!0,F.isDragging=F.isGesturing=F.isPressed=B=E=!1,F._vx.reset(),F._vy.reset(),C=le(),A=Re(),ke&&ke.type&&Oe(ke),q&&q(F)),F},F.disable=function(){F.isEnabled&&(Ho.filter(function(ke){return ke!==F&&ul(ke.target)}).length||Nn(ce?oe:a,"scroll",Fh),F.isPressed&&(F._vx.reset(),F._vy.reset(),Nn(Z?a:oe,Bi[1],Be,!0)),Nn(ce?oe:a,"scroll",Le,Me),Nn(a,"wheel",we,Me),Nn(a,Bi[0],Oe,Me),Nn(oe,Bi[2],O),Nn(oe,Bi[3],O),Nn(a,"click",Ae,!0),Nn(a,"click",Xt),Nn(oe,"gesturestart",ee),Nn(oe,"gestureend",Se),Nn(a,Os+"enter",Ye),Nn(a,Os+"leave",Ze),Nn(a,Os+"move",ye),F.isEnabled=F.isPressed=F.isDragging=!1,Te&&Te(F))},F.kill=F.revert=function(){F.disable();var ke=Ho.indexOf(F);ke>=0&&Ho.splice(ke,1),Rr===F&&(Rr=0)},Ho.push(F),Z&&ul(a)&&(Rr=F),F.enable(g)},hP(i,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),i}();tn.version="3.13.0";tn.create=function(i){return new tn(i)};tn.register=ax;tn.getAll=function(){return Ho.slice()};tn.getById=function(i){return Ho.filter(function(e){return e.vars.id===i})[0]};rx()&&yn.registerPlugin(tn);/*!
 * ScrollTrigger 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Xe,Oo,ft,Ft,hi,At,jd,cu,Ll,fl,Ga,_c,An,Du,kh,zn,Hg,Gg,Fo,lx,Bf,cx,kn,zh,ux,fx,Kr,Hh,$d,Qo,Zd,uu,Gh,kf,vc=1,wn=Date.now,zf=wn(),Ui=0,Va=0,Vg=function(e,t,n){var r=ui(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},Wg=function(e,t){return t&&(!ui(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},mP=function i(){return Va&&requestAnimationFrame(i)},Xg=function(){return Du=1},Yg=function(){return Du=0},Yi=function(e){return e},Wa=function(e){return Math.round(e*1e5)/1e5||0},hx=function(){return typeof window<"u"},dx=function(){return Xe||hx()&&(Xe=window.gsap)&&Xe.registerPlugin&&Xe},so=function(e){return!!~jd.indexOf(e)},px=function(e){return(e==="Height"?Zd:ft["inner"+e])||hi["client"+e]||At["client"+e]},mx=function(e){return hs(e,"getBoundingClientRect")||(so(e)?function(){return Vc.width=ft.innerWidth,Vc.height=Zd,Vc}:function(){return br(e)})},gP=function(e,t,n){var r=n.d,s=n.d2,o=n.a;return(o=hs(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?px(s):e["client"+s])||0}},_P=function(e,t){return!t||~ir.indexOf(e)?mx(e):function(){return Vc}},er=function(e,t){var n=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+r)&&(o=hs(e,n))?o()-mx(e)()[s]:so(e)?(hi[n]||At[n])-px(r):e[n]-e["offset"+r])},xc=function(e,t){for(var n=0;n<Fo.length;n+=3)(!t||~t.indexOf(Fo[n+1]))&&e(Fo[n],Fo[n+1],Fo[n+2])},ui=function(e){return typeof e=="string"},Ln=function(e){return typeof e=="function"},Xa=function(e){return typeof e=="number"},Fs=function(e){return typeof e=="object"},Fa=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Hf=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Io=Math.abs,gx="left",_x="top",Jd="right",Qd="bottom",Js="width",Qs="height",hl="Right",dl="Left",pl="Top",ml="Bottom",rn="padding",wi="margin",xa="Width",ep="Height",an="px",Ri=function(e){return ft.getComputedStyle(e)},vP=function(e){var t=Ri(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},qg=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},br=function(e,t){var n=t&&Ri(e)[kh]!=="matrix(1, 0, 0, 1, 0, 0)"&&Xe.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return n&&n.progress(0).kill(),r},fu=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},vx=function(e){var t=[],n=e.labels,r=e.duration(),s;for(s in n)t.push(n[s]/r);return t},xP=function(e){return function(t){return Xe.utils.snap(vx(e),t)}},tp=function(e){var t=Xe.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return n?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<n.length;a++)if(n[a]>=r)return n[a];return n[a-1]}else for(a=n.length,r+=o;a--;)if(n[a]<=r)return n[a];return n[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},yP=function(e){return function(t,n){return tp(vx(e))(t,n.direction)}},yc=function(e,t,n,r){return n.split(",").forEach(function(s){return e(t,s,r)})},gn=function(e,t,n,r,s){return e.addEventListener(t,n,{passive:!r,capture:!!s})},mn=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},Sc=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Kg={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Mc={toggleActions:"play",anticipatePin:0},hu={top:0,left:0,center:.5,bottom:1,right:1},kc=function(e,t){if(ui(e)){var n=e.indexOf("="),r=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(r*=t/100),e=e.substr(0,n-1)),e=r+(e in hu?hu[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Tc=function(e,t,n,r,s,o,a,l){var c=s.startColor,u=s.endColor,f=s.fontSize,h=s.indent,d=s.fontWeight,v=Ft.createElement("div"),g=so(n)||hs(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,m=g?At:n,M=e.indexOf("start")!==-1,S=M?c:u,x="border-color:"+S+";font-size:"+f+";color:"+S+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((p||l)&&g?"fixed;":"absolute;"),(p||l||!g)&&(x+=(r===ln?Jd:Qd)+":"+(o+parseFloat(h))+"px;"),a&&(x+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),v._isStart=M,v.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),v.style.cssText=x,v.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(v,m.children[0]):m.appendChild(v),v._offset=v["offset"+r.op.d2],zc(v,0,r,M),v},zc=function(e,t,n,r){var s={display:"block"},o=n[r?"os2":"p2"],a=n[r?"p2":"os2"];e._isFlipped=r,s[n.a+"Percent"]=r?-100:0,s[n.a]=r?"1px":0,s["border"+o+xa]=1,s["border"+a+xa]=0,s[n.p]=t+"px",Xe.set(e,s)},ut=[],Vh={},Il,jg=function(){return wn()-Ui>34&&(Il||(Il=requestAnimationFrame(Lr)))},Do=function(){(!kn||!kn.isPressed||kn.startX>At.clientWidth)&&(dt.cache++,kn?Il||(Il=requestAnimationFrame(Lr)):Lr(),Ui||ao("scrollStart"),Ui=wn())},Gf=function(){fx=ft.innerWidth,ux=ft.innerHeight},Ya=function(e){dt.cache++,(e===!0||!An&&!cx&&!Ft.fullscreenElement&&!Ft.webkitFullscreenElement&&(!zh||fx!==ft.innerWidth||Math.abs(ft.innerHeight-ux)>ft.innerHeight*.25))&&cu.restart(!0)},oo={},SP=[],xx=function i(){return mn(gt,"scrollEnd",i)||Gs(!0)},ao=function(e){return oo[e]&&oo[e].map(function(t){return t()})||SP},ci=[],yx=function(e){for(var t=0;t<ci.length;t+=5)(!e||ci[t+4]&&ci[t+4].query===e)&&(ci[t].style.cssText=ci[t+1],ci[t].getBBox&&ci[t].setAttribute("transform",ci[t+2]||""),ci[t+3].uncache=1)},np=function(e,t){var n;for(zn=0;zn<ut.length;zn++)n=ut[zn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));uu=!0,t&&yx(t),t||ao("revert")},Sx=function(e,t){dt.cache++,(t||!Hn)&&dt.forEach(function(n){return Ln(n)&&n.cacheID++&&(n.rec=0)}),ui(e)&&(ft.history.scrollRestoration=$d=e)},Hn,eo=0,$g,MP=function(){if($g!==eo){var e=$g=eo;requestAnimationFrame(function(){return e===eo&&Gs(!0)})}},Mx=function(){At.appendChild(Qo),Zd=!kn&&Qo.offsetHeight||ft.innerHeight,At.removeChild(Qo)},Zg=function(e){return Ll(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Gs=function(e,t){if(hi=Ft.documentElement,At=Ft.body,jd=[ft,Ft,hi,At],Ui&&!e&&!uu){gn(gt,"scrollEnd",xx);return}Mx(),Hn=gt.isRefreshing=!0,dt.forEach(function(r){return Ln(r)&&++r.cacheID&&(r.rec=r())});var n=ao("refreshInit");lx&&gt.sort(),t||np(),dt.forEach(function(r){Ln(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),ut.slice(0).forEach(function(r){return r.refresh()}),uu=!1,ut.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),Gh=1,Zg(!0),ut.forEach(function(r){var s=er(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),Zg(!1),Gh=0,n.forEach(function(r){return r&&r.render&&r.render(-1)}),dt.forEach(function(r){Ln(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),Sx($d,1),cu.pause(),eo++,Hn=2,Lr(2),ut.forEach(function(r){return Ln(r.vars.onRefresh)&&r.vars.onRefresh(r)}),Hn=gt.isRefreshing=!1,ao("refresh")},Wh=0,Hc=1,gl,Lr=function(e){if(e===2||!Hn&&!uu){gt.isUpdating=!0,gl&&gl.update(0);var t=ut.length,n=wn(),r=n-zf>=50,s=t&&ut[0].scroll();if(Hc=Wh>s?-1:1,Hn||(Wh=s),r&&(Ui&&!Du&&n-Ui>200&&(Ui=0,ao("scrollEnd")),Ga=zf,zf=n),Hc<0){for(zn=t;zn-- >0;)ut[zn]&&ut[zn].update(0,r);Hc=1}else for(zn=0;zn<t;zn++)ut[zn]&&ut[zn].update(0,r);gt.isUpdating=!1}Il=0},Xh=[gx,_x,Qd,Jd,wi+ml,wi+hl,wi+pl,wi+dl,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Gc=Xh.concat([Js,Qs,"boxSizing","max"+xa,"max"+ep,"position",wi,rn,rn+pl,rn+hl,rn+ml,rn+dl]),TP=function(e,t,n){ea(n);var r=e._gsap;if(r.spacerIsNative)ea(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Vf=function(e,t,n,r){if(!e._gsap.swappedIn){for(var s=Xh.length,o=t.style,a=e.style,l;s--;)l=Xh[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Qd]=a[Jd]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Js]=fu(e,qn)+an,o[Qs]=fu(e,ln)+an,o[rn]=a[wi]=a[_x]=a[gx]="0",ea(r),a[Js]=a["max"+xa]=n[Js],a[Qs]=a["max"+ep]=n[Qs],a[rn]=n[rn],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},EP=/([A-Z])/g,ea=function(e){if(e){var t=e.t.style,n=e.length,r=0,s,o;for((e.t._gsap||Xe.core.getCache(e.t)).uncache=1;r<n;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(EP,"-$1").toLowerCase())}},Ec=function(e){for(var t=Gc.length,n=e.style,r=[],s=0;s<t;s++)r.push(Gc[s],n[Gc[s]]);return r.t=e,r},bP=function(e,t,n){for(var r=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},Vc={left:0,top:0},Jg=function(e,t,n,r,s,o,a,l,c,u,f,h,d,v){Ln(e)&&(e=e(l)),ui(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?kc("0"+e.substr(3),n):0));var g=d?d.time():0,p,m,M;if(d&&d.seek(0),isNaN(e)||(e=+e),Xa(e))d&&(e=Xe.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,h,e)),a&&zc(a,n,r,!0);else{Ln(t)&&(t=t(l));var S=(e||"0").split(" "),x,w,L,R;M=Jn(t,l)||At,x=br(M)||{},(!x||!x.left&&!x.top)&&Ri(M).display==="none"&&(R=M.style.display,M.style.display="block",x=br(M),R?M.style.display=R:M.style.removeProperty("display")),w=kc(S[0],x[r.d]),L=kc(S[1]||"0",n),e=x[r.p]-c[r.p]-u+w+s-L,a&&zc(a,L,r,n-L<20||a._isStart&&L>20),n-=n-L}if(v&&(l[v]=e||-.001,e<0&&(e=0)),o){var z=e+n,T=o._isStart;p="scroll"+r.d2,zc(o,z,r,T&&z>20||!T&&(f?Math.max(At[p],hi[p]):o.parentNode[p])<=z+1),f&&(c=br(a),f&&(o.style[r.op.p]=c[r.op.p]-r.op.m-o._offset+an))}return d&&M&&(p=br(M),d.seek(h),m=br(M),d._caScrollDist=p[r.p]-m[r.p],e=e/d._caScrollDist*h),d&&d.seek(g),d?e:Math.round(e)},AP=/(webkit|moz|length|cssText|inset)/i,Qg=function(e,t,n,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===At){e._stOrig=s.cssText,a=Ri(e);for(o in a)!+o&&!AP.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=r}else s.cssText=e._stOrig;Xe.core.getCache(e).uncache=1,t.appendChild(e)}},Tx=function(e,t,n){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=r,r=Math.round(o),r}},bc=function(e,t,n){var r={};r[t.p]="+="+n,Xe.set(e,r)},e_=function(e,t){var n=_s(e,t),r="_scroll"+t.p2,s=function o(a,l,c,u,f){var h=o.tween,d=l.onComplete,v={};c=c||n();var g=Tx(n,c,function(){h.kill(),o.tween=0});return f=u&&f||0,u=u||a-c,h&&h.kill(),l[r]=a,l.inherit=!1,l.modifiers=v,v[r]=function(){return g(c+u*h.ratio+f*h.ratio*h.ratio)},l.onUpdate=function(){dt.cache++,o.tween&&Lr()},l.onComplete=function(){o.tween=0,d&&d.call(h)},h=o.tween=Xe.to(e,l),h};return e[r]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},gn(e,"wheel",n.wheelHandler),gt.isTouch&&gn(e,"touchmove",n.wheelHandler),s},gt=function(){function i(t,n){Oo||i.register(Xe)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Hh(this),this.init(t,n)}var e=i.prototype;return e.init=function(n,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Va){this.update=this.refresh=this.kill=Yi;return}n=qg(ui(n)||Xa(n)||n.nodeType?{trigger:n}:n,Mc);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,h=s.trigger,d=s.pin,v=s.pinSpacing,g=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,M=s.onSnapComplete,S=s.once,x=s.snap,w=s.pinReparent,L=s.pinSpacer,R=s.containerAnimation,z=s.fastScrollEnd,T=s.preventOverlaps,P=n.horizontal||n.containerAnimation&&n.horizontal!==!1?qn:ln,J=!f&&f!==0,W=Jn(n.scroller||ft),re=Xe.core.getCache(W),k=so(W),K=("pinType"in n?n.pinType:hs(W,"pinType")||k&&"fixed")==="fixed",$=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],X=J&&n.toggleActions.split(" "),Z="markers"in n?n.markers:Mc.markers,se=k?0:parseFloat(Ri(W)["border"+P.p2+xa])||0,D=this,G=n.onRefreshInit&&function(){return n.onRefreshInit(D)},q=gP(W,k,P),Te=_P(W,k),ve=0,Ee=0,Me=0,Ie=_s(W,P),Ue,Je,Tt,$e,E,B,V,ne,Q,F,de,ue,ge,le,Re,C,A,H,ce,oe,fe,be,xe,Ae,Pe,nt,_e,Qe,Ge,Be,Oe,O,ee,Se,Le,we,ye,Ye,Ze;if(D._startClamp=D._endClamp=!1,D._dir=P,p*=45,D.scroller=W,D.scroll=R?R.time.bind(R):Ie,$e=Ie(),D.vars=n,r=r||n.animation,"refreshPriority"in n&&(lx=1,n.refreshPriority===-9999&&(gl=D)),re.tweenScroll=re.tweenScroll||{top:e_(W,ln),left:e_(W,qn)},D.tweenTo=Ue=re.tweenScroll[P.p],D.scrubDuration=function(De){ee=Xa(De)&&De,ee?O?O.duration(De):O=Xe.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ee,paused:!0,onComplete:function(){return m&&m(D)}}):(O&&O.progress(1).kill(),O=0)},r&&(r.vars.lazy=!1,r._initted&&!D.isReverted||r.vars.immediateRender!==!1&&n.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),D.animation=r.pause(),r.scrollTrigger=D,D.scrubDuration(f),Be=0,l||(l=r.vars.id)),x&&((!Fs(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in At.style&&Xe.set(k?[At,hi]:W,{scrollBehavior:"auto"}),dt.forEach(function(De){return Ln(De)&&De.target===(k?Ft.scrollingElement||hi:W)&&(De.smooth=!1)}),Tt=Ln(x.snapTo)?x.snapTo:x.snapTo==="labels"?xP(r):x.snapTo==="labelsDirectional"?yP(r):x.directional!==!1?function(De,it){return tp(x.snapTo)(De,wn()-Ee<500?0:it.direction)}:Xe.utils.snap(x.snapTo),Se=x.duration||{min:.1,max:2},Se=Fs(Se)?fl(Se.min,Se.max):fl(Se,Se),Le=Xe.delayedCall(x.delay||ee/2||.1,function(){var De=Ie(),it=wn()-Ee<500,je=Ue.tween;if((it||Math.abs(D.getVelocity())<10)&&!je&&!Du&&ve!==De){var et=(De-B)/le,It=r&&!J?r.totalProgress():et,rt=it?0:(It-Oe)/(wn()-Ga)*1e3||0,Ke=Xe.utils.clamp(-et,1-et,Io(rt/2)*rt/.185),Qt=et+(x.inertia===!1?0:Ke),Ot,y,_=x,b=_.onStart,I=_.onInterrupt,U=_.onComplete;if(Ot=Tt(Qt,D),Xa(Ot)||(Ot=Qt),y=Math.max(0,Math.round(B+Ot*le)),De<=V&&De>=B&&y!==De){if(je&&!je._initted&&je.data<=Io(y-De))return;x.inertia===!1&&(Ke=Ot-et),Ue(y,{duration:Se(Io(Math.max(Io(Qt-It),Io(Ot-It))*.185/rt/.05||0)),ease:x.ease||"power3",data:Io(y-De),onInterrupt:function(){return Le.restart(!0)&&I&&I(D)},onComplete:function(){D.update(),ve=Ie(),r&&!J&&(O?O.resetTo("totalProgress",Ot,r._tTime/r._tDur):r.progress(Ot)),Be=Oe=r&&!J?r.totalProgress():D.progress,M&&M(D),U&&U(D)}},De,Ke*le,y-De-Ke*le),b&&b(D,Ue.tween)}}else D.isActive&&ve!==De&&Le.restart(!0)}).pause()),l&&(Vh[l]=D),h=D.trigger=Jn(h||d!==!0&&d),Ze=h&&h._gsap&&h._gsap.stRevert,Ze&&(Ze=Ze(D)),d=d===!0?h:Jn(d),ui(a)&&(a={targets:h,className:a}),d&&(v===!1||v===wi||(v=!v&&d.parentNode&&d.parentNode.style&&Ri(d.parentNode).display==="flex"?!1:rn),D.pin=d,Je=Xe.core.getCache(d),Je.spacer?Re=Je.pinState:(L&&(L=Jn(L),L&&!L.nodeType&&(L=L.current||L.nativeElement),Je.spacerIsNative=!!L,L&&(Je.spacerState=Ec(L))),Je.spacer=H=L||Ft.createElement("div"),H.classList.add("pin-spacer"),l&&H.classList.add("pin-spacer-"+l),Je.pinState=Re=Ec(d)),n.force3D!==!1&&Xe.set(d,{force3D:!0}),D.spacer=H=Je.spacer,Ge=Ri(d),Ae=Ge[v+P.os2],oe=Xe.getProperty(d),fe=Xe.quickSetter(d,P.a,an),Vf(d,H,Ge),A=Ec(d)),Z){ue=Fs(Z)?qg(Z,Kg):Kg,F=Tc("scroller-start",l,W,P,ue,0),de=Tc("scroller-end",l,W,P,ue,0,F),ce=F["offset"+P.op.d2];var Xt=Jn(hs(W,"content")||W);ne=this.markerStart=Tc("start",l,Xt,P,ue,ce,0,R),Q=this.markerEnd=Tc("end",l,Xt,P,ue,ce,0,R),R&&(Ye=Xe.quickSetter([ne,Q],P.a,an)),!K&&!(ir.length&&hs(W,"fixedMarkers")===!0)&&(vP(k?At:W),Xe.set([F,de],{force3D:!0}),nt=Xe.quickSetter(F,P.a,an),Qe=Xe.quickSetter(de,P.a,an))}if(R){var ke=R.vars.onUpdate,qe=R.vars.onUpdateParams;R.eventCallback("onUpdate",function(){D.update(0,0,1),ke&&ke.apply(R,qe||[])})}if(D.previous=function(){return ut[ut.indexOf(D)-1]},D.next=function(){return ut[ut.indexOf(D)+1]},D.revert=function(De,it){if(!it)return D.kill(!0);var je=De!==!1||!D.enabled,et=An;je!==D.isReverted&&(je&&(we=Math.max(Ie(),D.scroll.rec||0),Me=D.progress,ye=r&&r.progress()),ne&&[ne,Q,F,de].forEach(function(It){return It.style.display=je?"none":"block"}),je&&(An=D,D.update(je)),d&&(!w||!D.isActive)&&(je?TP(d,H,Re):Vf(d,H,Ri(d),Pe)),je||D.update(je),An=et,D.isReverted=je)},D.refresh=function(De,it,je,et){if(!((An||!D.enabled)&&!it)){if(d&&De&&Ui){gn(i,"scrollEnd",xx);return}!Hn&&G&&G(D),An=D,Ue.tween&&!je&&(Ue.tween.kill(),Ue.tween=0),O&&O.pause(),g&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren&&r.getChildren(!0,!0,!1).forEach(function(st){return st.vars.immediateRender&&st.render(0,!0,!0)})),D.isReverted||D.revert(!0,!0),D._subPinOffset=!1;var It=q(),rt=Te(),Ke=R?R.duration():er(W,P),Qt=le<=.01||!le,Ot=0,y=et||0,_=Fs(je)?je.end:n.end,b=n.endTrigger||h,I=Fs(je)?je.start:n.start||(n.start===0||!h?0:d?"0 0":"0 100%"),U=D.pinnedContainer=n.pinnedContainer&&Jn(n.pinnedContainer,D),N=h&&Math.max(0,ut.indexOf(D))||0,j=N,te,ae,ie,he,pe,me,Ce,Ve,Fe,ze,He,We,Et;for(Z&&Fs(je)&&(We=Xe.getProperty(F,P.p),Et=Xe.getProperty(de,P.p));j-- >0;)me=ut[j],me.end||me.refresh(0,1)||(An=D),Ce=me.pin,Ce&&(Ce===h||Ce===d||Ce===U)&&!me.isReverted&&(ze||(ze=[]),ze.unshift(me),me.revert(!0,!0)),me!==ut[j]&&(N--,j--);for(Ln(I)&&(I=I(D)),I=Vg(I,"start",D),B=Jg(I,h,It,P,Ie(),ne,F,D,rt,se,K,Ke,R,D._startClamp&&"_startClamp")||(d?-.001:0),Ln(_)&&(_=_(D)),ui(_)&&!_.indexOf("+=")&&(~_.indexOf(" ")?_=(ui(I)?I.split(" ")[0]:"")+_:(Ot=kc(_.substr(2),It),_=ui(I)?I:(R?Xe.utils.mapRange(0,R.duration(),R.scrollTrigger.start,R.scrollTrigger.end,B):B)+Ot,b=h)),_=Vg(_,"end",D),V=Math.max(B,Jg(_||(b?"100% 0":Ke),b,It,P,Ie()+Ot,Q,de,D,rt,se,K,Ke,R,D._endClamp&&"_endClamp"))||-.001,Ot=0,j=N;j--;)me=ut[j],Ce=me.pin,Ce&&me.start-me._pinPush<=B&&!R&&me.end>0&&(te=me.end-(D._startClamp?Math.max(0,me.start):me.start),(Ce===h&&me.start-me._pinPush<B||Ce===U)&&isNaN(I)&&(Ot+=te*(1-me.progress)),Ce===d&&(y+=te));if(B+=Ot,V+=Ot,D._startClamp&&(D._startClamp+=Ot),D._endClamp&&!Hn&&(D._endClamp=V||-.001,V=Math.min(V,er(W,P))),le=V-B||(B-=.01)&&.001,Qt&&(Me=Xe.utils.clamp(0,1,Xe.utils.normalize(B,V,we))),D._pinPush=y,ne&&Ot&&(te={},te[P.a]="+="+Ot,U&&(te[P.p]="-="+Ie()),Xe.set([ne,Q],te)),d&&!(Gh&&D.end>=er(W,P)))te=Ri(d),he=P===ln,ie=Ie(),be=parseFloat(oe(P.a))+y,!Ke&&V>1&&(He=(k?Ft.scrollingElement||hi:W).style,He={style:He,value:He["overflow"+P.a.toUpperCase()]},k&&Ri(At)["overflow"+P.a.toUpperCase()]!=="scroll"&&(He.style["overflow"+P.a.toUpperCase()]="scroll")),Vf(d,H,te),A=Ec(d),ae=br(d,!0),Ve=K&&_s(W,he?qn:ln)(),v?(Pe=[v+P.os2,le+y+an],Pe.t=H,j=v===rn?fu(d,P)+le+y:0,j&&(Pe.push(P.d,j+an),H.style.flexBasis!=="auto"&&(H.style.flexBasis=j+an)),ea(Pe),U&&ut.forEach(function(st){st.pin===U&&st.vars.pinSpacing!==!1&&(st._subPinOffset=!0)}),K&&Ie(we)):(j=fu(d,P),j&&H.style.flexBasis!=="auto"&&(H.style.flexBasis=j+an)),K&&(pe={top:ae.top+(he?ie-B:Ve)+an,left:ae.left+(he?Ve:ie-B)+an,boxSizing:"border-box",position:"fixed"},pe[Js]=pe["max"+xa]=Math.ceil(ae.width)+an,pe[Qs]=pe["max"+ep]=Math.ceil(ae.height)+an,pe[wi]=pe[wi+pl]=pe[wi+hl]=pe[wi+ml]=pe[wi+dl]="0",pe[rn]=te[rn],pe[rn+pl]=te[rn+pl],pe[rn+hl]=te[rn+hl],pe[rn+ml]=te[rn+ml],pe[rn+dl]=te[rn+dl],C=bP(Re,pe,w),Hn&&Ie(0)),r?(Fe=r._initted,Bf(1),r.render(r.duration(),!0,!0),xe=oe(P.a)-be+le+y,_e=Math.abs(le-xe)>1,K&&_e&&C.splice(C.length-2,2),r.render(0,!0,!0),Fe||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),Bf(0)):xe=le,He&&(He.value?He.style["overflow"+P.a.toUpperCase()]=He.value:He.style.removeProperty("overflow-"+P.a));else if(h&&Ie()&&!R)for(ae=h.parentNode;ae&&ae!==At;)ae._pinOffset&&(B-=ae._pinOffset,V-=ae._pinOffset),ae=ae.parentNode;ze&&ze.forEach(function(st){return st.revert(!1,!0)}),D.start=B,D.end=V,$e=E=Hn?we:Ie(),!R&&!Hn&&($e<we&&Ie(we),D.scroll.rec=0),D.revert(!1,!0),Ee=wn(),Le&&(ve=-1,Le.restart(!0)),An=0,r&&J&&(r._initted||ye)&&r.progress()!==ye&&r.progress(ye||0,!0).render(r.time(),!0,!0),(Qt||Me!==D.progress||R||g||r&&!r._initted)&&(r&&!J&&(r._initted||Me||r.vars.immediateRender!==!1)&&r.totalProgress(R&&B<-.001&&!Me?Xe.utils.normalize(B,V,0):Me,!0),D.progress=Qt||($e-B)/le===Me?0:Me),d&&v&&(H._pinOffset=Math.round(D.progress*xe)),O&&O.invalidate(),isNaN(We)||(We-=Xe.getProperty(F,P.p),Et-=Xe.getProperty(de,P.p),bc(F,P,We),bc(ne,P,We-(et||0)),bc(de,P,Et),bc(Q,P,Et-(et||0))),Qt&&!Hn&&D.update(),u&&!Hn&&!ge&&(ge=!0,u(D),ge=!1)}},D.getVelocity=function(){return(Ie()-E)/(wn()-Ga)*1e3||0},D.endAnimation=function(){Fa(D.callbackAnimation),r&&(O?O.progress(1):r.paused()?J||Fa(r,D.direction<0,1):Fa(r,r.reversed()))},D.labelToScroll=function(De){return r&&r.labels&&(B||D.refresh()||B)+r.labels[De]/r.duration()*le||0},D.getTrailing=function(De){var it=ut.indexOf(D),je=D.direction>0?ut.slice(0,it).reverse():ut.slice(it+1);return(ui(De)?je.filter(function(et){return et.vars.preventOverlaps===De}):je).filter(function(et){return D.direction>0?et.end<=B:et.start>=V})},D.update=function(De,it,je){if(!(R&&!je&&!De)){var et=Hn===!0?we:D.scroll(),It=De?0:(et-B)/le,rt=It<0?0:It>1?1:It||0,Ke=D.progress,Qt,Ot,y,_,b,I,U,N;if(it&&(E=$e,$e=R?Ie():et,x&&(Oe=Be,Be=r&&!J?r.totalProgress():rt)),p&&d&&!An&&!vc&&Ui&&(!rt&&B<et+(et-E)/(wn()-Ga)*p?rt=1e-4:rt===1&&V>et+(et-E)/(wn()-Ga)*p&&(rt=.9999)),rt!==Ke&&D.enabled){if(Qt=D.isActive=!!rt&&rt<1,Ot=!!Ke&&Ke<1,I=Qt!==Ot,b=I||!!rt!=!!Ke,D.direction=rt>Ke?1:-1,D.progress=rt,b&&!An&&(y=rt&&!Ke?0:rt===1?1:Ke===1?2:3,J&&(_=!I&&X[y+1]!=="none"&&X[y+1]||X[y],N=r&&(_==="complete"||_==="reset"||_ in r))),T&&(I||N)&&(N||f||!r)&&(Ln(T)?T(D):D.getTrailing(T).forEach(function(ie){return ie.endAnimation()})),J||(O&&!An&&!vc?(O._dp._time-O._start!==O._time&&O.render(O._dp._time-O._start),O.resetTo?O.resetTo("totalProgress",rt,r._tTime/r._tDur):(O.vars.totalProgress=rt,O.invalidate().restart())):r&&r.totalProgress(rt,!!(An&&(Ee||De)))),d){if(De&&v&&(H.style[v+P.os2]=Ae),!K)fe(Wa(be+xe*rt));else if(b){if(U=!De&&rt>Ke&&V+1>et&&et+1>=er(W,P),w)if(!De&&(Qt||U)){var j=br(d,!0),te=et-B;Qg(d,At,j.top+(P===ln?te:0)+an,j.left+(P===ln?0:te)+an)}else Qg(d,H);ea(Qt||U?C:A),_e&&rt<1&&Qt||fe(be+(rt===1&&!U?xe:0))}}x&&!Ue.tween&&!An&&!vc&&Le.restart(!0),a&&(I||S&&rt&&(rt<1||!kf))&&Ll(a.targets).forEach(function(ie){return ie.classList[Qt||S?"add":"remove"](a.className)}),o&&!J&&!De&&o(D),b&&!An?(J&&(N&&(_==="complete"?r.pause().totalProgress(1):_==="reset"?r.restart(!0).pause():_==="restart"?r.restart(!0):r[_]()),o&&o(D)),(I||!kf)&&(c&&I&&Hf(D,c),$[y]&&Hf(D,$[y]),S&&(rt===1?D.kill(!1,1):$[y]=0),I||(y=rt===1?1:3,$[y]&&Hf(D,$[y]))),z&&!Qt&&Math.abs(D.getVelocity())>(Xa(z)?z:2500)&&(Fa(D.callbackAnimation),O?O.progress(1):Fa(r,_==="reverse"?1:!rt,1))):J&&o&&!An&&o(D)}if(Qe){var ae=R?et/R.duration()*(R._caScrollDist||0):et;nt(ae+(F._isFlipped?1:0)),Qe(ae)}Ye&&Ye(-et/R.duration()*(R._caScrollDist||0))}},D.enable=function(De,it){D.enabled||(D.enabled=!0,gn(W,"resize",Ya),k||gn(W,"scroll",Do),G&&gn(i,"refreshInit",G),De!==!1&&(D.progress=Me=0,$e=E=ve=Ie()),it!==!1&&D.refresh())},D.getTween=function(De){return De&&Ue?Ue.tween:O},D.setPositions=function(De,it,je,et){if(R){var It=R.scrollTrigger,rt=R.duration(),Ke=It.end-It.start;De=It.start+Ke*De/rt,it=It.start+Ke*it/rt}D.refresh(!1,!1,{start:Wg(De,je&&!!D._startClamp),end:Wg(it,je&&!!D._endClamp)},et),D.update()},D.adjustPinSpacing=function(De){if(Pe&&De){var it=Pe.indexOf(P.d)+1;Pe[it]=parseFloat(Pe[it])+De+an,Pe[1]=parseFloat(Pe[1])+De+an,ea(Pe)}},D.disable=function(De,it){if(D.enabled&&(De!==!1&&D.revert(!0,!0),D.enabled=D.isActive=!1,it||O&&O.pause(),we=0,Je&&(Je.uncache=1),G&&mn(i,"refreshInit",G),Le&&(Le.pause(),Ue.tween&&Ue.tween.kill()&&(Ue.tween=0)),!k)){for(var je=ut.length;je--;)if(ut[je].scroller===W&&ut[je]!==D)return;mn(W,"resize",Ya),k||mn(W,"scroll",Do)}},D.kill=function(De,it){D.disable(De,it),O&&!it&&O.kill(),l&&delete Vh[l];var je=ut.indexOf(D);je>=0&&ut.splice(je,1),je===zn&&Hc>0&&zn--,je=0,ut.forEach(function(et){return et.scroller===D.scroller&&(je=1)}),je||Hn||(D.scroll.rec=0),r&&(r.scrollTrigger=null,De&&r.revert({kill:!1}),it||r.kill()),ne&&[ne,Q,F,de].forEach(function(et){return et.parentNode&&et.parentNode.removeChild(et)}),gl===D&&(gl=0),d&&(Je&&(Je.uncache=1),je=0,ut.forEach(function(et){return et.pin===d&&je++}),je||(Je.spacer=0)),n.onKill&&n.onKill(D)},ut.push(D),D.enable(!1,!1),Ze&&Ze(D),r&&r.add&&!le){var tt=D.update;D.update=function(){D.update=tt,dt.cache++,B||V||D.refresh()},Xe.delayedCall(.01,D.update),le=.01,B=V=0}else D.refresh();d&&MP()},i.register=function(n){return Oo||(Xe=n||dx(),hx()&&window.document&&i.enable(),Oo=Va),Oo},i.defaults=function(n){if(n)for(var r in n)Mc[r]=n[r];return Mc},i.disable=function(n,r){Va=0,ut.forEach(function(o){return o[r?"kill":"disable"](n)}),mn(ft,"wheel",Do),mn(Ft,"scroll",Do),clearInterval(_c),mn(Ft,"touchcancel",Yi),mn(At,"touchstart",Yi),yc(mn,Ft,"pointerdown,touchstart,mousedown",Xg),yc(mn,Ft,"pointerup,touchend,mouseup",Yg),cu.kill(),xc(mn);for(var s=0;s<dt.length;s+=3)Sc(mn,dt[s],dt[s+1]),Sc(mn,dt[s],dt[s+2])},i.enable=function(){if(ft=window,Ft=document,hi=Ft.documentElement,At=Ft.body,Xe&&(Ll=Xe.utils.toArray,fl=Xe.utils.clamp,Hh=Xe.core.context||Yi,Bf=Xe.core.suppressOverwrites||Yi,$d=ft.history.scrollRestoration||"auto",Wh=ft.pageYOffset||0,Xe.core.globals("ScrollTrigger",i),At)){Va=1,Qo=document.createElement("div"),Qo.style.height="100vh",Qo.style.position="absolute",Mx(),mP(),tn.register(Xe),i.isTouch=tn.isTouch,Kr=tn.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),zh=tn.isTouch===1,gn(ft,"wheel",Do),jd=[ft,Ft,hi,At],Xe.matchMedia?(i.matchMedia=function(c){var u=Xe.matchMedia(),f;for(f in c)u.add(f,c[f]);return u},Xe.addEventListener("matchMediaInit",function(){return np()}),Xe.addEventListener("matchMediaRevert",function(){return yx()}),Xe.addEventListener("matchMedia",function(){Gs(0,1),ao("matchMedia")}),Xe.matchMedia().add("(orientation: portrait)",function(){return Gf(),Gf})):console.warn("Requires GSAP 3.11.0 or later"),Gf(),gn(Ft,"scroll",Do);var n=At.hasAttribute("style"),r=At.style,s=r.borderTopStyle,o=Xe.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=br(At),ln.m=Math.round(a.top+ln.sc())||0,qn.m=Math.round(a.left+qn.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),n||(At.setAttribute("style",""),At.removeAttribute("style")),_c=setInterval(jg,250),Xe.delayedCall(.5,function(){return vc=0}),gn(Ft,"touchcancel",Yi),gn(At,"touchstart",Yi),yc(gn,Ft,"pointerdown,touchstart,mousedown",Xg),yc(gn,Ft,"pointerup,touchend,mouseup",Yg),kh=Xe.utils.checkPrefix("transform"),Gc.push(kh),Oo=wn(),cu=Xe.delayedCall(.2,Gs).pause(),Fo=[Ft,"visibilitychange",function(){var c=ft.innerWidth,u=ft.innerHeight;Ft.hidden?(Hg=c,Gg=u):(Hg!==c||Gg!==u)&&Ya()},Ft,"DOMContentLoaded",Gs,ft,"load",Gs,ft,"resize",Ya],xc(gn),ut.forEach(function(c){return c.enable(0,1)}),l=0;l<dt.length;l+=3)Sc(mn,dt[l],dt[l+1]),Sc(mn,dt[l],dt[l+2])}},i.config=function(n){"limitCallbacks"in n&&(kf=!!n.limitCallbacks);var r=n.syncInterval;r&&clearInterval(_c)||(_c=r)&&setInterval(jg,r),"ignoreMobileResize"in n&&(zh=i.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(xc(mn)||xc(gn,n.autoRefreshEvents||"none"),cx=(n.autoRefreshEvents+"").indexOf("resize")===-1)},i.scrollerProxy=function(n,r){var s=Jn(n),o=dt.indexOf(s),a=so(s);~o&&dt.splice(o,a?6:2),r&&(a?ir.unshift(ft,r,At,r,hi,r):ir.unshift(s,r))},i.clearMatchMedia=function(n){ut.forEach(function(r){return r._ctx&&r._ctx.query===n&&r._ctx.kill(!0,!0)})},i.isInViewport=function(n,r,s){var o=(ui(n)?Jn(n):n).getBoundingClientRect(),a=o[s?Js:Qs]*r||0;return s?o.right-a>0&&o.left+a<ft.innerWidth:o.bottom-a>0&&o.top+a<ft.innerHeight},i.positionInViewport=function(n,r,s){ui(n)&&(n=Jn(n));var o=n.getBoundingClientRect(),a=o[s?Js:Qs],l=r==null?a/2:r in hu?hu[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/ft.innerWidth:(o.top+l)/ft.innerHeight},i.killAll=function(n){if(ut.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var r=oo.killAll||[];oo={},r.forEach(function(s){return s()})}},i}();gt.version="3.13.0";gt.saveStyles=function(i){return i?Ll(i).forEach(function(e){if(e&&e.style){var t=ci.indexOf(e);t>=0&&ci.splice(t,5),ci.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Xe.core.getCache(e),Hh())}}):ci};gt.revert=function(i,e){return np(!i,e)};gt.create=function(i,e){return new gt(i,e)};gt.refresh=function(i){return i?Ya(!0):(Oo||gt.register())&&Gs(!0)};gt.update=function(i){return++dt.cache&&Lr(i===!0?2:0)};gt.clearScrollMemory=Sx;gt.maxScroll=function(i,e){return er(i,e?qn:ln)};gt.getScrollFunc=function(i,e){return _s(Jn(i),e?qn:ln)};gt.getById=function(i){return Vh[i]};gt.getAll=function(){return ut.filter(function(i){return i.vars.id!=="ScrollSmoother"})};gt.isScrolling=function(){return!!Ui};gt.snapDirectional=tp;gt.addEventListener=function(i,e){var t=oo[i]||(oo[i]=[]);~t.indexOf(e)||t.push(e)};gt.removeEventListener=function(i,e){var t=oo[i],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};gt.batch=function(i,e){var t=[],n={},r=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var f=[],h=[],d=Xe.delayedCall(r,function(){u(f,h),f=[],h=[]}).pause();return function(v){f.length||d.restart(!0),f.push(v.trigger),h.push(v),s<=f.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&Ln(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Ln(s)&&(s=s(),gn(gt,"refresh",function(){return s=e.batchMax()})),Ll(i).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(gt.create(c))}),t};var t_=function(e,t,n,r){return t>r?e(r):t<0&&e(0),n>r?(r-t)/(n-t):n<0?t/(t-n):1},Wf=function i(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(tn.isTouch?" pinch-zoom":""):"none",e===hi&&i(At,t)},Ac={auto:1,scroll:1},wP=function(e){var t=e.event,n=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Xe.core.getCache(s),a=wn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==At&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Ac[(l=Ri(s)).overflowY]||Ac[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!so(s)&&(Ac[(l=Ri(s)).overflowY]||Ac[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Ex=function(e,t,n,r){return tn.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&wP,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&gn(Ft,tn.eventTypes[0],i_,!1,!0)},onDisable:function(){return mn(Ft,tn.eventTypes[0],i_,!0)}})},RP=/(input|label|select|textarea)/i,n_,i_=function(e){var t=RP.test(e.target.tagName);(t||n_)&&(e._gsapAllow=!0,n_=t)},CP=function(e){Fs(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=Jn(e.target)||hi,u=Xe.core.globals().ScrollSmoother,f=u&&u.get(),h=Kr&&(e.content&&Jn(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),d=_s(c,ln),v=_s(c,qn),g=1,p=(tn.isTouch&&ft.visualViewport?ft.visualViewport.scale*ft.visualViewport.width:ft.outerWidth)/ft.innerWidth,m=0,M=Ln(r)?function(){return r(a)}:function(){return r||2.8},S,x,w=Ex(c,e.type,!0,s),L=function(){return x=!1},R=Yi,z=Yi,T=function(){l=er(c,ln),z=fl(Kr?1:0,l),n&&(R=fl(0,er(c,qn))),S=eo},P=function(){h._gsap.y=Wa(parseFloat(h._gsap.y)+d.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},J=function(){if(x){requestAnimationFrame(L);var Z=Wa(a.deltaY/2),se=z(d.v-Z);if(h&&se!==d.v+d.offset){d.offset=se-d.v;var D=Wa((parseFloat(h&&h._gsap.y)||0)-d.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+D+", 0, 1)",h._gsap.y=D+"px",d.cacheID=dt.cache,Lr()}return!0}d.offset&&P(),x=!0},W,re,k,K,$=function(){T(),W.isActive()&&W.vars.scrollY>l&&(d()>l?W.progress(1)&&d(l):W.resetTo("scrollY",l))};return h&&Xe.set(h,{y:"+=0"}),e.ignoreCheck=function(X){return Kr&&X.type==="touchmove"&&J()||g>1.05&&X.type!=="touchstart"||a.isGesturing||X.touches&&X.touches.length>1},e.onPress=function(){x=!1;var X=g;g=Wa((ft.visualViewport&&ft.visualViewport.scale||1)/p),W.pause(),X!==g&&Wf(c,g>1.01?!0:n?!1:"x"),re=v(),k=d(),T(),S=eo},e.onRelease=e.onGestureStart=function(X,Z){if(d.offset&&P(),!Z)K.restart(!0);else{dt.cache++;var se=M(),D,G;n&&(D=v(),G=D+se*.05*-X.velocityX/.227,se*=t_(v,D,G,er(c,qn)),W.vars.scrollX=R(G)),D=d(),G=D+se*.05*-X.velocityY/.227,se*=t_(d,D,G,er(c,ln)),W.vars.scrollY=z(G),W.invalidate().duration(se).play(.01),(Kr&&W.vars.scrollY>=l||D>=l-1)&&Xe.to({},{onUpdate:$,duration:se})}o&&o(X)},e.onWheel=function(){W._ts&&W.pause(),wn()-m>1e3&&(S=0,m=wn())},e.onChange=function(X,Z,se,D,G){if(eo!==S&&T(),Z&&n&&v(R(D[2]===Z?re+(X.startX-X.x):v()+Z-D[1])),se){d.offset&&P();var q=G[2]===se,Te=q?k+X.startY-X.y:d()+se-G[1],ve=z(Te);q&&Te!==ve&&(k+=ve-Te),d(ve)}(se||Z)&&Lr()},e.onEnable=function(){Wf(c,n?!1:"x"),gt.addEventListener("refresh",$),gn(ft,"resize",$),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=v.smooth=!1),w.enable()},e.onDisable=function(){Wf(c,!0),mn(ft,"resize",$),gt.removeEventListener("refresh",$),w.kill()},e.lockAxis=e.lockAxis!==!1,a=new tn(e),a.iOS=Kr,Kr&&!d()&&d(1),Kr&&Xe.ticker.add(Yi),K=a._dc,W=Xe.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Tx(d,d(),function(){return W.pause()})},onUpdate:Lr,onComplete:K.vars.onComplete}),a};gt.sort=function(i){if(Ln(i))return ut.sort(i);var e=ft.pageYOffset||0;return gt.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+ft.innerHeight}),ut.sort(i||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};gt.observe=function(i){return new tn(i)};gt.normalizeScroll=function(i){if(typeof i>"u")return kn;if(i===!0&&kn)return kn.enable();if(i===!1){kn&&kn.kill(),kn=i;return}var e=i instanceof tn?i:CP(i);return kn&&kn.target===e.target&&kn.kill(),so(e.target)&&(kn=e),e};gt.core={_getVelocityProp:Bh,_inputObserver:Ex,_scrollers:dt,_proxies:ir,bridge:{ss:function(){Ui||ao("scrollStart"),Ui=wn()},ref:function(){return An}}};dx()&&Xe.registerPlugin(gt);const PP={class:"ui-overlay flex flex-col items-center pt-8 w-screen h-screen absolute inset-0 z-10 pointer-events-none"},LP=["src"],IP=["src","alt"],DP={ref:"sunControlPanel",class:"sun-control-panel absolute bottom-8 right-8 text-white text-sm bg-black bg-opacity-70 p-4 rounded-lg backdrop-blur-sm pointer-events-auto"},UP={class:"mb-3 flex items-center"},NP={class:"flex items-center cursor-pointer"},OP=["checked"],FP={class:"mb-3"},BP={class:"block mb-1 text-xs"},kP={class:"font-mono"},zP=["value","disabled"],HP={class:"mb-3"},GP={class:"block mb-1 text-xs"},VP={class:"font-mono"},WP=["value","disabled"],XP={class:"mb-3"},YP={class:"block mb-1 text-xs"},qP={class:"font-mono"},KP=["value"],jP={__name:"UILayer",props:{currentPresetName:{type:String,default:""},textCount:{type:Number,default:5},textPrefix:{type:String,default:"Text"},textExt:{type:String,default:".png"},titleSrc:{type:String,default:"Title.png"},fadeDuration:{type:Number,default:600},sunElevation:{type:Number,default:-20},sunAzimuth:{type:Number,default:120},isManualSunControl:{type:Boolean,default:!1},hdriIntensity:{type:Number,default:1}},emits:["next-preset","prev-preset","sun-elevation-change","sun-azimuth-change","sun-control-mode-change","reset-sun-to-preset","hdri-intensity-change"],setup(i,{emit:e}){qr.registerPlugin(gt);const t=i,n=e,r=Gn(null),s=Gn(null),o=Gn(null),a=Gn(null),l=Gn(0),c=Gn(!1),u=Gn(!1),f=Gn(!1),h="/DW_3dTest/assets/",d=nh(()=>h+t.titleSrc),v=nh(()=>h+`${t.textPrefix}${String(l.value+1).padStart(2,"0")}${t.textExt}`);let g=null,p=null;const m=()=>{r.value&&(g=qr.timeline(),qr.set(r.value,{y:-100,opacity:0,scale:.8,rotationX:-15}),g.to(r.value,{y:0,opacity:1,scale:1,rotationX:0,duration:1.5,ease:"back.out(1.7)",delay:.3}).to(r.value,{y:-5,duration:2,ease:"sine.inOut",yoyo:!0,repeat:-1})),setTimeout(()=>{f.value=!0,a.value&&qr.fromTo(a.value,{x:50,opacity:0,scale:.9},{x:0,opacity:1,scale:1,duration:1,ease:"elastic.out(1, 0.8)"})},2500)},M=k=>{s.value&&(p&&p.kill(),p=qr.timeline(),c.value?p.to(s.value,{opacity:0,y:20,duration:.3,ease:"power2.in",onComplete:()=>{l.value=k,Rc(()=>{S()})}}):(l.value=k,Rc(()=>{S()})))},S=()=>{s.value&&qr.fromTo(s.value,{opacity:0,y:50,scale:.9,rotationY:15,filter:"blur(10px)"},{opacity:1,y:0,scale:1,rotationY:0,filter:"blur(0px)",duration:.8,ease:"power3.out",onStart:()=>{c.value=!0}})},x=()=>{o.value&&qr.fromTo(o.value,{x:-30,opacity:0},{x:0,opacity:1,duration:.5,ease:"power2.out"})};Ws(()=>t.currentPresetName,(k,K)=>{if(k&&k!==K){u.value=!0,Rc(()=>{x()});const $=w(k);$!==-1&&$!==l.value&&M($)}});const w=k=>{const K=k.match(/(\d+)/);if(K){const $=parseInt(K[1])-1;return Math.max(0,Math.min($,t.textCount-1))}return 0},L=()=>{console.log("Title image loaded")},R=()=>{console.log("Text image loaded")},z=k=>{n("sun-control-mode-change",k.target.checked)},T=k=>{n("sun-elevation-change",parseFloat(k.target.value))},P=k=>{n("sun-azimuth-change",parseFloat(k.target.value))},J=()=>{n("reset-sun-to-preset")},W=k=>{n("hdri-intensity-change",parseFloat(k.target.value))},re=k=>{switch(k.code){case"ArrowRight":case"KeyD":n("next-preset");break;case"ArrowLeft":case"KeyA":n("prev-preset");break}};return yu(()=>{m(),setTimeout(()=>{M(0)},1500),window.addEventListener("keydown",re)}),Su(()=>{g&&g.kill(),p&&p.kill(),window.removeEventListener("keydown",re)}),(k,K)=>(ud(),fd("div",PP,[Vt("img",{src:d.value,alt:"Title",onLoad:L,class:"max-w-[60vw] h-auto"},null,40,LP),Vt("div",{ref_key:"textContainer",ref:s,class:_u(["text-image",{visible:c.value}])},[Vt("img",{src:v.value,alt:`Text ${l.value+1}`,onLoad:R,class:"w-full h-auto"},null,40,IP)],2),Vt("div",DP,[K[4]||(K[4]=Vt("div",{class:"mb-3 font-medium"},"Lighting Control",-1)),Vt("div",UP,[Vt("label",NP,[Vt("input",{type:"checkbox",checked:i.isManualSunControl,onChange:z,class:"mr-2"},null,40,OP),K[0]||(K[0]=Vt("span",null,"Manual Sun Control",-1))])]),Vt("div",FP,[Vt("label",BP,[K[1]||(K[1]=Lc("Sun Elevation: ")),Vt("span",kP,wc(i.sunElevation!=null?i.sunElevation.toFixed(1):"--")+"°",1)]),Vt("input",{type:"range",min:"-90",max:"90",step:"0.1",value:i.sunElevation,disabled:!i.isManualSunControl,onInput:T,class:"w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"},null,40,zP)]),Vt("div",HP,[Vt("label",GP,[K[2]||(K[2]=Lc("Sun Azimuth: ")),Vt("span",VP,wc(i.sunAzimuth!=null?i.sunAzimuth.toFixed(1):"--")+"°",1)]),Vt("input",{type:"range",min:"0",max:"360",step:"0.1",value:i.sunAzimuth,disabled:!i.isManualSunControl,onInput:P,class:"w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"},null,40,WP)]),Vt("div",XP,[Vt("label",YP,[K[3]||(K[3]=Lc("Environment Intensity: ")),Vt("span",qP,wc(i.hdriIntensity!=null?i.hdriIntensity.toFixed(2):"--"),1)]),Vt("input",{type:"range",min:"0",max:"3",step:"0.01",value:i.hdriIntensity,onInput:W,class:"w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"},null,40,KP)]),Vt("button",{onClick:J,class:"w-full px-3 py-1 text-xs bg-gray-700 hover:bg-gray-600 rounded transition-colors"}," Reset to Preset ")],512)]))}},$P=tv(jP,[["__scopeId","data-v-0ecc389d"]]),ZP={id:"app",class:"w-screen h-screen relative"},JP={__name:"App",setup(i){const e=Gn(null),t=Gn("");let n=[];const r=Gn(null),s=Gn(null),o=Gn(!1),a=Gn(null),l=M=>{a.value=M},c=M=>{d(),o.value||u(M)},u=M=>{const S=n[M];S&&(r.value=S.sunElevation,s.value=S.sunAzimuth,a.value=S.hdriIntensity)},f=()=>{e.value&&e.value.nextPreset()},h=()=>{e.value&&e.value.prevPreset()},d=()=>{e.value&&(t.value=e.value.getCurrentPresetName())},v=M=>{r.value=M,o.value||(o.value=!0)},g=M=>{s.value=M,o.value||(o.value=!0)},p=M=>{if(o.value=M,!M&&e.value){const S=e.value.getCurrentIndex();u(S)}},m=()=>{if(e.value){const M=e.value.getCurrentIndex();u(M)}};return yu(async()=>{try{if(n=(await(await fetch("assets/sun_presets.json")).json()).presets,n.length>0){const x=n[0];r.value=x.sunElevation,s.value=x.sunAzimuth,a.value=x.hdriIntensity}}catch(M){console.error("Failed to load sun presets:",M)}setTimeout(()=>{d()},1e3)}),(M,S)=>(ud(),fd("div",ZP,[Cr($R,{ref_key:"threeScene",ref:e,"sun-elevation":r.value,"sun-azimuth":s.value,"is-manual-sun-control":o.value,"hdri-intensity":a.value,onPresetChanged:c},null,8,["sun-elevation","sun-azimuth","is-manual-sun-control","hdri-intensity"]),Cr($P,{"current-preset-name":t.value,"text-count":5,"sun-elevation":r.value,"sun-azimuth":s.value,"is-manual-sun-control":o.value,"hdri-intensity":a.value,onNextPreset:f,onPrevPreset:h,onSunElevationChange:v,onSunAzimuthChange:g,onSunControlModeChange:p,onResetSunToPreset:m,onHdriIntensityChange:l},null,8,["current-preset-name","sun-elevation","sun-azimuth","is-manual-sun-control","hdri-intensity"])]))}};GS(JP).mount("#app");
