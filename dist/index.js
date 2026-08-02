"use strict";var d=function(a,t){return function(){try{return t||a((t={exports:{}}).exports,t),t.exports}catch(o){throw (t=0, o)}};};var q=d(function(z,c){
var s=require('@stdlib/math-base-special-fast-max/dist'),p=require('@stdlib/math-base-special-fast-min/dist'),m=require('@stdlib/array-base-zeros2d/dist');function g(a,t,o,x){var i,v,n,u,r,e,f;if(u=t.length,x){if(i=m([u,o+1]),a==="upper"){for(r=0;r<u;r++)for(v=i[r],n=t[r],e=r;e<p(u,r+o+1);e++)v[e-r]=n[e];return i}for(r=0;r<u;r++)for(v=i[r],n=t[r],f=s(0,o-r),e=s(0,r-o);e<=r;e++)v[f]=n[e],f+=1;return i}if(i=m([o+1,u]),a==="upper"){for(e=0;e<u;e++)for(f=o-e,r=s(0,e-o);r<=e;r++)i[f+r][e]=t[r][e];return i}for(e=0;e<u;e++)for(f=-e,r=e;r<p(u,e+o+1);r++)i[f+r][e]=t[r][e];return i}c.exports=g
});var h=q();module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
