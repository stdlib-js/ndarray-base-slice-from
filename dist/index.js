"use strict";var n=function(u,r){return function(){return r||u((r={exports:{}}).exports,r),r.exports}};var a=n(function(h,l){
var c=require('@stdlib/assert-is-number/dist').isPrimitive,m=require('@stdlib/slice-base-args2multislice/dist'),o=require('@stdlib/slice-ctor/dist'),q=require('@stdlib/ndarray-base-slice/dist');function p(u,r,t,v){var e,i,s;for(e=[],s=0;s<r.length;s++)i=r[s],c(i)&&i!==0?e.push(new o(i,null)):e.push(null);return q(u,m(e),t,v)}l.exports=p
});var f=a();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
