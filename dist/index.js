"use strict";var d=function(a,t){return function(){return t||a((t={exports:{}}).exports,t),t.exports}};var q=d(function(z,c){
var s=require('@stdlib/math-base-special-fast-max/dist'),p=require('@stdlib/math-base-special-fast-min/dist'),m=require('@stdlib/array-base-zeros2d/dist');function g(a,t,u,x){var o,v,n,i,r,e,f;if(i=t.length,x){if(o=m([i,u+1]),a==="upper"){for(r=0;r<i;r++)for(v=o[r],n=t[r],e=r;e<p(i,r+u+1);e++)v[e-r]=n[e];return o}for(r=0;r<i;r++)for(v=o[r],n=t[r],f=s(0,u-r),e=s(0,r-u);e<=r;e++)v[f]=n[e],f+=1;return o}if(o=m([u+1,i]),a==="upper"){for(e=0;e<i;e++)for(f=u-e,r=s(0,e-u);r<=e;r++)o[f+r][e]=t[r][e];return o}for(e=0;e<i;e++)for(f=-e,r=e;r<p(i,e+u+1);r++)o[f+r][e]=t[r][e];return o}c.exports=g
});var h=q();module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
